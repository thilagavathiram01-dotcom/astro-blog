---
title: "How to Add Guardrail Hooks to Gemini Managed Agents"
description: "Add Gemini API managed-agent hooks that block risky tool calls, log sandbox activity, and keep secrets out of hooks.json."
pubDate: 2026-10-03T09:30:00
heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "gemini", "developer", "google"]
noindex: false
---

A Gemini managed agent can write files, run shell commands, and browse the web inside a remote Linux sandbox. That is useful. It is also a reason to put a gate in front of every tool call before the agent ships to a team.

Google documents that gate as hooks. A hook is a script or HTTPS request that runs immediately before or after a tool executes inside the sandbox. You mount the config with the environment, not as a prompt instruction the model can ignore.

This guide walks through a working pre-tool security gate, a post-tool logger, and the failure rules you need before you rely on either one. It follows the [Gemini API hooks reference](https://ai.google.dev/gemini-api/docs/agent-hooks) and the current managed-agent quickstart agent id, `antigravity-preview-09-2026`.

## What a hook can and cannot do

Hooks support two lifecycle events.

`pre_tool_execution` fires before the tool runs. Your handler reads the tool call from standard input and prints a JSON decision. `{"decision": "allow"}` lets the call through. `{"decision": "deny", "reason": "..."}` cancels it. The model sees that reason in the same turn and can pick another approach.

`post_tool_execution` fires after the tool finishes. Use it for formatting, tests, or audit logs. The runtime ignores any allow or deny value you print here. A post hook cannot undo a write that already happened.

The runtime looks for `.agents/hooks.json` or `/.agents/hooks.json` in the sandbox. You can mount that file from a Git repository, Cloud Storage, or inline sources on `client.interactions.create`.

![Developer writing Python at a laptop in a dim workspace](https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80)

## Step 1: Install the SDK and set a key

Install a current Google Gen AI SDK and set `GEMINI_API_KEY` in the environment. Do not paste the key into `hooks.json` or into a mounted script.

```bash
pip install -U google-genai
export GEMINI_API_KEY="your-key"
```

The Python client reads that variable when you construct `genai.Client()`. If you already store credentials for network allowlists, reuse that pattern for HTTP hooks instead of embedding bearer tokens. The credentials guide on this site covers the storage side: [store Gemini managed-agent credentials](/blog/gemini-managed-agent-credentials/).

## Step 2: Write a command hook that can deny

A command hook is a shell command that runs inside the sandbox. The official example blocks a destructive string in the tool arguments. Keep the script small and make the deny reason specific so the model can recover.

```python
import json
from google import genai

client = genai.Client()

hooks_config = {
    "security-gate": {
        "enabled": True,
        "pre_tool_execution": [
            {
                "matcher": "code_execution",
                "hooks": [
                    {
                        "type": "command",
                        "command": "python3 /.agents/hooks-scripts/gate.py",
                        "timeout": 10,
                    }
                ],
            }
        ],
    }
}

gate_script = """#!/usr/bin/env python3
import json, sys
data = json.load(sys.stdin)
cmd = str(data.get("tool_call", {}).get("args", {}))
if "rm -rf" in cmd:
    print(json.dumps({
        "decision": "deny",
        "reason": "Destructive command blocked. Use a narrower delete."
    }))
else:
    print(json.dumps({"decision": "allow"}))
"""

interaction = client.interactions.create(
    agent="antigravity-preview-09-2026",
    input="Run `rm -rf /tmp/forbidden` using code_execution.",
    tools=[{"type": "code_execution"}],
    environment={
        "type": "remote",
        "sources": [
            {
                "type": "inline",
                "target": ".agents/hooks.json",
                "content": json.dumps(hooks_config),
            },
            {
                "type": "inline",
                "target": ".agents/hooks-scripts/gate.py",
                "content": gate_script,
            },
        ],
    },
)
print(interaction.output_text)
```

The command path uses `/.agents/...` because the runtime executes the hook from the sandbox root. The mount target is `.agents/hooks-scripts/gate.py`. Match those paths or the hook never starts.

The stdin payload includes `tool_call.name`, `tool_call.args`, and `environment_id`. For code execution, `args` carries the code string and language. Inspect that object. A substring check on the whole args dict is a starting gate, not a parser.

## Step 3: Match the right tools

`matcher` is a RE2 regular expression against the container tool name. Handlers in a matching group run in declaration order. If several groups match, all of them run.

Built-in names you can target:

- `code_execution` for shell and script runs
- `view_file`, `write_to_file`, `replace_file_content`, `list_dir`, and `delete_file` for filesystem tools

Useful patterns from the docs:

- `code_execution` matches that tool only
- `view_file|write_to_file` matches either name
- `.*_file` matches tools that end in `_file`. It does not match `replace_file_content` or `list_dir`
- `.*`, `*`, or an empty string matches every tool

Shell globs such as `*_file` are invalid here. Use `.*`.

Set `"enabled": false` on a named group when you want the file checked in but inactive. Groups are enabled by default.

## Step 4: Add a post-tool logger

Post hooks cannot block. They can still record what ran. The stdin object includes an `error` field only when the tool failed. A success payload omits that field.

```python
log_script = """#!/usr/bin/env python3
import json, sys
data = json.load(sys.stdin)
name = data.get("tool_call", {}).get("name")
err = data.get("error")
with open("/workspace/hook-audit.log", "a", encoding="utf-8") as f:
    f.write(json.dumps({"tool": name, "error": err}) + "\n")
print("{}")
"""
```

Point a `post_tool_execution` rule at that script with matcher `.*` and a timeout of 15 seconds if you also lint. The default timeout is 30 seconds. The agent waits for hooks, so a slow logger delays the turn.

![Server room corridor with locked racks, used as a visual for access control](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

## Step 5: Continue after a deny

A denied call is skipped. The reason is returned to the model as an error result. You can also continue the same sandbox on the next request by passing the previous interaction id and the environment id.

Google's privacy example denies `view_file` when the path contains `/private/`, then continues in the same environment so the agent reads an approved public summary instead. That pattern fits payroll files, tokens, and local customer exports.

Keep the deny reason actionable. "Blocked" is weaker than "Access to `/private/` is blocked. Read `/workspace/public/summary.json` instead."

## HTTP hooks and secrets

An HTTP hook POSTs the same event JSON to an external HTTPS URL. The response body uses the same allow or deny JSON. Optional headers are for non-sensitive values such as an event source label.

Requests leave through the sandbox egress proxy. Two rules follow from that:

- The host must be on the environment `network.allowlist`. Loopback addresses are blocked.
- Store the bearer token as a credential and reference it from the allowlist. The proxy injects the header on the way out. Do not mount the secret into `hooks.json`.

That credential flow is the same one covered in [store Gemini managed-agent credentials](/blog/gemini-managed-agent-credentials/).

## Failure behavior you should test

The runtime fails open in several cases. If the script exits non-zero, the HTTP hook returns a non-2xx status, the call times out, or stdout is not a deny decision, the tool is allowed. Unrecognized JSON counts as allow.

That keeps a broken logger from deadlocking an agent. It also means a typo in your gate script will not stop `rm -rf`. Test the deny path with a known bad command before you trust the hook in production.

Post-hook decisions are ignored even when the JSON is valid. Do not use a post hook as a second security check.

## Tips before you ship

Mount hooks with the rest of the agent files. A Git source that already has `AGENTS.md` can carry `.agents/hooks.json` and the scripts beside it.

Name groups by policy, such as `security-gate` and `auto-format`, so you can disable one without editing matchers.

Time out command hooks tightly. Ten seconds is enough for a string check. A 30-second default is a long pause in a voice or chat product.

Treat the hook as policy code. Review it like any other production script. The model does not get to rewrite `hooks.json` unless you also give it write access to that path.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/0YXe7u-i1qU"
    title="Getting Started with Managed Agents"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Patrick Löber's Google for Developers walkthrough shows how a managed agent is created in AI Studio and the API. Hooks sit on top of that same remote environment.

## Conclusion

Managed agents already isolate work in a Google-hosted Linux sandbox. Hooks add a policy layer the model cannot skip: deny a tool before it runs, or log it after. Start with a pre-tool command hook on `code_execution`, confirm a deny actually cancels the call, then add filesystem matchers and an HTTP audit hook that pulls secrets from credentials rather than from the config file.

## Sources

- Gemini API hooks: https://ai.google.dev/gemini-api/docs/agent-hooks
- Environments in managed agents: https://ai.google.dev/gemini-api/docs/agent-environment
- Managed agents quickstart: https://ai.google.dev/gemini-api/docs/managed-agents-quickstart
- Google for Developers, Getting Started with Managed Agents: https://www.youtube.com/watch?v=0YXe7u-i1qU
