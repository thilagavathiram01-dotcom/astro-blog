---
title: "Set Up and Publish Codex Cloud Environments in ChatGPT"
description: "Create and publish a Codex Cloud environment in ChatGPT so coding tasks keep running on a reusable setup while your computer sleeps."
pubDate: 2026-10-06T16:05:00
heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "developer", "how-to"]
noindex: false
---

A coding agent that stops when you close the laptop is only half useful. Codex Cloud runs tasks on OpenAI-managed computers from a reusable environment, so work can continue while your machine is asleep. You start from ChatGPT on the web, in the desktop app, or on mobile, then review the diff and open a pull request when you are ready.

This guide follows OpenAI’s current Codex Cloud and cloud-environment docs. It covers who can use it, how to publish an environment, and how to handle secrets and network access without mixing them up.

## What a Codex Cloud environment is

A cloud environment is the reusable setup a task starts from: GitHub repositories, dependencies, tools, and access settings. Codex inspects the repos you choose, prepares that setup, and tests it with you. Publishing captures the prepared filesystem. Each new task then gets its own isolated workspace from that published snapshot.

An existing task keeps its own saved files, including uncommitted changes. Refreshing the repository in the background preserves dependency caches and does not rerun install or startup commands. Saved state is not a substitute for source control. Commit anything you need to keep.

OpenAI still lists Codex Cloud (Legacy) for code review and the Linear and GitHub integrations, and says it plans to deprecate that older experience. New task environments are the flow described here.

![Developer writing code on a laptop in a dim workspace](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Who can start a cloud task

OpenAI’s help center says Codex is included across ChatGPT plans, including Free and Go. Codex Cloud is available to eligible Plus accounts, all Pro tiers, and Business, Enterprise, Healthcare, and Education accounts, subject to rollout and workspace settings.

Create and publish an environment on the desktop app or the web. After that, you can start and continue cloud tasks from desktop, web, or mobile. At launch, standard Codex Cloud environments have no separate VM charge. Model usage counts toward your normal Codex usage limits and applicable credits or billing. When you are signed in with a ChatGPT account, auto-review safety checks are free and do not count toward plan usage limits.

Enterprise workspaces that have not enabled cloud access have it off by default. Existing Enterprise cloud-access settings carry over. Eligible members with cloud access can create and edit their own personal environments. Creating or editing workspace-shared environments also requires the **Manage workspace environments** permission, which is off by default.

If you also call models from your own code, the [first Agents API coding session](/blog/openai-agents-api-first-coding-session/) is a separate path. Cloud tasks in ChatGPT do not replace that API workflow.

## Create and publish the environment

Do this on the web or in the desktop app, signed in with your ChatGPT account.

1. In a new task, choose **Work in** > **Cloud**, open **Select environment**, and select **Create environment**. You can also start from **Settings** > **Codex Cloud** > **Environments** > **Create environment**.
2. Select the GitHub repositories to check out. Connect GitHub if prompted.
3. Select **Get started**. Codex inspects the repositories, installs dependencies and tools, and tests the workflow.
4. Supply missing access or information when asked. You can request specific versions, commands, or services in the same conversation.
5. Review the setup report, configuration, and files. Resolve unfinished work, save changes, and select **Publish**.
6. After **Environment published** appears, select **Start a new task** and describe the work.

Saving stores configuration. Some settings apply to the active setup immediately. Publishing is what new tasks use as their starting filesystem. Sharing controls who can use that environment.

Codex can record the tested setup in an install script (commands that install dependencies and prepare assets) and a start skill (instructions that start services and check they are ready). You do not have to write that script yourself. Refine the setup in the conversation.

On a later task, choose **Work in** > **Cloud** and select the published environment. On mobile, open **Codex** and pick the same environment. Describe the change, then review files, test results, and follow-ups before you commit or open a pull request.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7Bv68f5szSU"
    title="Meet the all new Codex Cloud"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Variables, secrets, and the personal vault

Codex asks for values it cannot infer. In the environment configuration, select **Manage** beside **Environment variables** or **Network secrets**.

Use an environment variable when a program must read the value directly. It is passed to programs in the environment. Use a network secret for a credential sent to a specific HTTPS service. Programs receive a placeholder. A proxy substitutes the real value for allowed destinations. Set **Key**, **Value**, and **Allowed domains**. Use a different key from any direct variable. Substitution works for HTTPS on port 443 during setup and tasks. It does not put the raw credential in a local process or file.

Saving environment-owned network secrets adds their destinations to restricted internet access. Direct variables and personal values do not add destinations.

Personal vault stores your own variables and network secrets for cloud environments in the workspace. A shared environment can request values that each person supplies. Sharing the environment shares the requirement, not your personal credentials. When prompted, enter required values in **Add personal secrets** and select **Save and start**. Optional values can stay unset.

To add them ahead of time, open **Settings** > **Codex Cloud**, then the **Personal vault** tab. Select **Add**, choose the type, enter the matching key and your value, then set **Applies to** as all environments or selected ones and save. Only requested values reach a task. A value scoped to one environment takes precedence over a general default.

![Code on a monitor during a programming session](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Network access, sharing, and updates

Allowing a destination does not supply credentials or grant permission in that service. To connect package registries and APIs:

1. In the environment configuration, turn on **Allow Codex to access internet**.
2. Under **Allow domains**, choose **Package managers** or **Custom domains only**, then add hosts under **Additional allowed domains**. Use **All (unrestricted)** only when the workflow needs broader access.
3. Save and test during setup. Publish or republish, then verify access in a new task.

The package-managers preset includes common hosts such as `registry.npmjs.org`, `pypi.org`, `files.pythonhosted.org`, `crates.io`, `proxy.golang.org`, Maven and Gradle repositories, and GitHub source and release hosts. For registered root domains, Codex also allows the matching `www` hostname. Other subdomains need their own entries.

Private networking currently supports Tailscale. Under **Advanced** > **VPN**, add the connection, allow the destinations in both the VPN rules and the environment’s internet settings, then save and publish. When you create a Tailscale auth key, enable **Reusable** and **Ephemeral**. Private IPv4 subnet routes are supported. Tasks in a shared environment use that environment’s VPN identity.

To share inside an Enterprise workspace, open the environment configuration, set **Privacy** > **Who can use** to your workspace, save, and publish if you have not already. Choose **Only me** to keep it private. Each task has separate working files. Access to the setup does not grant access to someone else’s task or permission to edit the environment. Review prepared files and environment-owned credentials before you share. Repository access still depends on the account running the task.

To update the reusable setup, open **Settings** > **Codex Cloud** > **Environments**, use the environment’s menu, and select **Edit**. Describe the change, let Codex prepare and test it, save, and select **Republish**. Start a new task to pick up the update. Existing tasks keep their own state.

## Practical limits before you hand off a task

Write the task as a result you can check: the failing test, the file to change, and how you will verify it. A published environment already has dependencies, so the prompt should not restate the install.

Keep production credentials out of direct environment variables when a network secret and an allowed domain will do. Network secrets stay out of the process environment and only substitute on allowed HTTPS destinations.

If cloud access is missing on an Enterprise account, ask an admin to enable Codex cloud access before you debug the environment picker. Cloud access is separate from Codex Local.

Plugin and marketplace controls for ChatGPT Business sit in a different admin surface. If your team is wiring those up, the [ChatGPT plugins after DevDay 2026](/blog/chatgpt-plugins-after-devday-2026/) guide covers that path. It does not configure a Codex Cloud environment.

## Close the laptop only after publish

Publish once, then start tasks from that environment on web, desktop, or mobile. Each task is isolated. Usage still counts against your Codex limits, and there is no separate VM charge for standard environments at launch. Review the diff yourself before you merge.

## Sources

- OpenAI, Codex Cloud overview: https://learn.chatgpt.com/docs/cloud
- OpenAI, Cloud environments: https://learn.chatgpt.com/docs/environments/cloud-environments
- OpenAI Help Center, Using Codex with your ChatGPT plan: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
- OpenAI, Meet the all new Codex Cloud: https://www.youtube.com/watch?v=7Bv68f5szSU
