---
title: "How to Add Claude Code Mods with TypeScript Plugins"
description: "Learn how to install, review, and write Claude Code mods in TypeScript so you can rewrite prompts, guard tools, and add UI in the CLI."
pubDate: 2026-10-04T12:30:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["tutorials", "how-to", "developer", "ai-tools"]
noindex: false
---

Anthropic shipped Claude Code mods on October 1, 2026. A mod is a small TypeScript or JavaScript function that runs inside Claude Code when an event fires, such as a tool call, a submitted prompt, or a piece of the interface being drawn.

Hooks in a settings file can already run a shell command or an HTTP request. Mods go further. They can rewrite the event, draw new UI, or replace a built-in feature. They ship inside plugins, so you install and share them the same way you install any other plugin. They work in the Claude Code CLI and the desktop app.

If you already use Claude Code for parallel project threads, mods are the next layer of control. They sit on top of the session, not inside a single prompt. Read the [Claude Opus 5.5 API and Claude Code setup](/blog/claude-opus-5-5-claude-code-api/) if you still need the model and client basics before you change the interface.

## What a mod can change

Anthropic describes four jobs a mod can do with one function:

- Rewrite a prompt before it reaches the model.
- Block, rewrite, or retry a tool call.
- Approve or deny a permission request.
- Redact secrets from tool output before Claude reads it.

A mod can also edit or replace interface pieces Claude Code draws, such as a tool result or a question, and add buttons and inputs. Other mods can respond when you press those controls. A mod can target the terminal, the desktop app, or both.

When several mods hook the same event, they run in load order. The first mod to load sees the event first and the result last. That is how you stack mods from different authors.

Some built-in features now ship as mods. The built-in `/diff` feature is one example. You can turn it off in `/plugin`, or replace it with your own version. Anthropic says it plans to move more built-in features to mods so you can keep a small core and add only what you use.

![Developer editing code on a laptop](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Check the version, then install

Mods need Claude Code v2.1.287 or later, and they are on by default. In your shell, run:

```bash
claude --version
```

Update Claude Code if the version is older. If you set `CLAUDE_CODE_ENABLE_FUNCTION_HOOKS` during early access, remove it. v2.1.287 and later ignores that variable, so setting it to `0` does not turn mods off.

A mod installs as a plugin from a marketplace. The name format is the plugin, an `@`, then the marketplace. Official docs use this pattern:

```text
/plugin install token-chart@your-org
```

From the shell, the same install is:

```bash
claude plugin install token-chart@your-org
```

In a session, `/plugin` is also where you browse the directory and manage installed plugins. If you install or update a mod from the shell while a session is open, run `/reload-plugins` in that session. Otherwise the mod loads the next time you start Claude Code.

Anthropic shares sample plugins in the `claude-code/mods` directory of the `claude-code-playground` repository. They are published as-is, without support. Three named samples are:

- `token-weather` draws a forecast of your context window above the prompt.
- `blast-radius` holds a risky shell command, such as `rm -rf` or a force push, and shows what it would change, with buttons to proceed or cancel.
- `replay-theater` adds a `/replay` command that steps through the file edits Claude made in the last turn.

To try a sample without installing it permanently, clone the repository and load that mod's directory for one session with `--plugin-dir`. To keep it, add the clone's `claude-code/mods` directory as a marketplace, then install the mod from `claude-code-playground-mods`. The marketplace points at your clone, so the mod stops loading if you move or delete that folder.

After a session starts, run `/plugin`. A dim line under the tabs reports the count and names, such as `1 mod active · first-mod`. If an installed mod is missing from that line, it did not load.

## Review a mod before you trust it

Mods are not sandboxed. They run with the same access as Claude Code itself. Anthropic's launch note says you should only install mods from sources you trust, the same way you would install any other code on your computer.

Once a mod loads, official docs say it can:

- Read and write files your user account can reach, start programs, and make network requests.
- Read environment variables and settings files, including an API key stored there.
- See every prompt you send and every tool call Claude makes.
- Rewrite a prompt or a tool call, submit a prompt as if you typed it, or message another of your sessions.
- Approve a tool call before you are asked.
- Call a model on your plan or API key.

If you turn on sandboxing, the sandbox isolates Bash commands Claude runs. A process a mod starts runs outside that sandbox. A mod can restyle much of the interface, but it cannot change what the permission prompt shows you.

Before you install, clone the plugin and inspect it without running it:

```bash
claude plugin validate ./some-mod
```

The `hooks:` and `calls:` lines list the events the mod handles and what it asks Claude Code to do, such as reading a file or making a network request.

On Team and Enterprise plans, and on any machine with managed settings, a built-in mod named `sec-default` loads first. It stops user-installed mods from doing risky things, such as overriding your permission deny rules. Anthropic publishes the source under the `mods` tree in the `anthropics/claude-code` repository. Admins can load their own mods first. If you do, add `sec-default` to the list so those restrictions stay in place.

Admins can also allow or block plugin marketplaces. On Team and Enterprise plans, an owner sets this in the admin console. On Claude API and third-party API plans, admins push managed settings to users' machines.

## Turn mods off when you need a clean session

You do not have to uninstall Claude Code to stop mods:

- Disable or uninstall one plugin from the Installed tab in `/plugin`.
- Start one session with `--safe-mode`. That also disables your other customizations.
- Set `"disableAllHooks": true` in `~/.claude/settings.json` to stop every mod you installed, in every session. Your settings hooks and custom status line stop too. Organization-managed mods keep running.

`disableAllHooks` and an organization's `allowManagedModsOnly` stop a mod and leave the rest of its plugin in place. Skills, commands, agents, and MCP servers from that plugin still load.

![Code on a monitor in a workspace](https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=800&q=80)

## Write a small mod yourself

A small mod is a plugin with three files:

```text
first-mod/
├── .claude-plugin/
│   └── plugin.json
└── hooks/
    ├── hooks.json
    └── register.js
```

`plugin.json` is the plugin manifest. `hooks.json` points at your code. `register.js` is the hooks module. Claude Code calls `register` once when the mod loads.

The official overview uses this complete example. It counts tool calls and shows the count beside the spinner:

```javascript
let calls = 0

export function register(on) {
  on('tool.call', async ($, e, next) => {
    calls += 1
    $.ui.invalidate('ui.render')
    return next(e)
  })

  on('ui.render', { component: 'Spinner' }, async ($, e, next) => {
    return next({
      ...e,
      props: { ...e.props, suffix: '   tool calls: ' + calls + '…' }
    })
  })
}
```

The `tool.call` hook runs each time Claude is about to use a tool. It increments `calls`, asks Claude Code to redraw, and calls `next(e)` so the tool still runs. The `ui.render` hook runs when Claude Code draws the spinner. It keeps the default spinner and appends the count.

A hook can observe an event and let it continue, rewrite the event, or answer it so the usual behavior does not run. Shared variables in the file are how one hook records data and another draws it.

You can also ask Claude Code to write the mod. Anthropic says Claude can write the TypeScript, install it, and hot reload it in your session. Still read the generated hooks before you leave them enabled. Generated code has the same machine access as a mod you typed yourself.

To share a mod, package it in a plugin and submit it to the Claude directory. Install directory plugins from the directory page or with `/plugin` in the CLI.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/IkaPHiMDazM"
    title="Hooks in Claude Code"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Settings hooks, covered in the official Claude channel video above, still matter. They run a command you configure in a settings file. Mod handlers are functions that run inside Claude Code. Use a settings hook when a formatter or a block rule is enough. Use a mod when you need to redraw UI, wrap an event, or replace a feature.

## Practical tips

Start with one sample and `claude plugin validate` before you enable anything that can approve tool calls. A mod that approves calls can approve one an `ask` rule would prompt for.

Keep production safeguards in a mod your team owns, not only in a prompt. Anthropic's own examples include showing CI status beside the conversation, requiring confirmation before a command touches production config, and recording every call other mods make by loading an audit mod first.

If a mod does nothing, confirm the version, confirm `/plugin` lists it as active, and reload plugins after a shell install. Marketplace clones only work while the local path still exists.

## Conclusion

Claude Code mods are plugins that hook events inside the CLI and the desktop app. Check that you are on v2.1.287 or later, install from a marketplace you trust, and read `hooks:` and `calls:` with `claude plugin validate` before the first session. A three-file plugin is enough to count tool calls and draw that count on the spinner. Treat every mod as local code with your permissions, then turn single plugins off in `/plugin` when you want the default interface back.

## Sources

- Anthropic, "Customize Claude Code with mods," October 1, 2026: https://claude.com/blog/claude-code-mods
- Claude Code Docs, "Mods overview": https://code.claude.com/docs/en/plugins/mods/overview
- Sample mods: https://github.com/anthropics/claude-code-playground/tree/main/claude-code/mods
- Claude, "Hooks in Claude Code": https://www.youtube.com/watch?v=IkaPHiMDazM
