---
title: "Set Up Codex Cloud and Start a Coding Task in ChatGPT"
description: "Create a Codex Cloud environment, publish it, and start a coding task from ChatGPT on web, desktop, or mobile."
pubDate: 2026-10-05T09:00:00
heroImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "how-to", "developer"]
noindex: false
---

Codex Cloud lets ChatGPT run a coding task on an OpenAI-managed computer while your laptop is closed. The reusable piece is a cloud environment: the GitHub repositories, tools, dependencies, and access settings a task starts from. Once that environment is published, each new task gets its own isolated workspace.

OpenAI documents this path on the web, in the desktop app, and on mobile. Environments are created and published on desktop or web. After that, you can select the same environment for a mobile task and continue the cloud task across supported devices. In a managed workspace, an administrator also controls Codex Cloud access.

## What a cloud environment includes

A published environment is a snapshot of a prepared project, not a shared scratch folder. Codex inspects the repositories you select, installs dependencies and tools, and tests the workflow with you. Saving stores configuration. Publishing captures the prepared filesystem that new tasks start from.

Two recorded fields matter when you review the setup:

- **Install script:** commands that install dependencies and prepare development assets.
- **Start skill:** instructions that start services and check that they are ready.

You do not write those scripts yourself. Codex drafts them from the repository and your answers. You read them, then correct anything that is wrong in the setup conversation.

OpenAI also keeps a legacy Codex Cloud experience for Code Review and the Linear and GitHub integrations, and says it plans to deprecate that path. New coding tasks should use the current cloud environments flow described below.

![Developer laptop with code open on a desk](https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80)

## Create and publish the environment

Sign in to ChatGPT on the web or in the desktop app. Mobile can run a task later, but it is not where you create the environment.

1. In a new task, choose **Work in** > **Cloud**, open **Select environment**, and select **Create environment**. The same entry point is **Settings** > **Codex Cloud** > **Environments** > **Create environment**.
2. Select the GitHub repositories to check out. Connect GitHub if ChatGPT asks.
3. Select **Get started**. Codex inspects the repositories, installs dependencies and tools, and tests the workflow. Supply missing access, versions, commands, or services when it asks.
4. Review the setup report, configuration, and files. Finish anything Codex left unresolved.
5. Save changes, then select **Publish**. Wait until **Environment published** appears.

Saving and publishing are separate steps. A saved draft is not what a new task clones. After **Environment published**, select **Start a new task**.

If the project needs a specific runtime, say so in the setup chat. Ask Codex to run the checks you trust, such as the project's test and build commands, and to skip deploy steps you do not want. The install script and start skill should match that conversation before you publish.

## Secrets, network access, and sharing

Codex asks for values it cannot infer. In the environment configuration, select **Manage** beside **Environment variables** or **Network secrets**.

| Setting | Use it when | How it is delivered |
| --- | --- | --- |
| Environment variable | A program must read the value directly | Passed to programs in the environment |
| Network secret | A credential is sent to a specific HTTPS service | Programs see a placeholder; a proxy substitutes the real value for allowed destinations |

For a network secret, set **Key**, **Value**, and **Allowed domains**. Use a different key from any direct variable. Substitution works for HTTPS on port 443 during setup and tasks. It does not place the raw credential in a local process or file. Saving environment-owned network secrets also adds those destinations to restricted internet access. Direct variables and personal values do not add destinations, so review the saved network policy before you test.

Personal vault holds your own environment variables and network secrets for cloud environments in the workspace. A shared environment can request values that each person supplies from their own account. Sharing the environment shares the requirements, not your personal credentials. When prompted, enter required values in **Add personal secrets** and select **Save and start**. Optional values can stay unset.

To store values ahead of time, open **Settings** > **Codex Cloud**, select the **Personal vault** tab, then **Add**. Choose **Environment variable** or **Network secret**, enter the matching key and value, and set **Applies to** as **All environments** or **Selected environments**. Only requested values reach a task. A value scoped to one environment takes precedence over a general default.

To share the setup, open the environment configuration, then under **Privacy** > **Who can use** choose your workspace, save, and publish if you have not already. Choose **Only me** to keep it private. Each task still has separate working files. Access to the setup does not grant access to someone else's task or permission to edit the environment. Review prepared files and environment-owned credentials before you share. **Use Codex in the cloud** controls task access. **Manage workspace environments** controls creating and editing environments shared with the workspace.

![Close view of source code on a monitor](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Start a task and review the result

On the web or in the desktop app, choose **Work in** > **Cloud** and select a published environment. On mobile, open **Codex** and select a published environment. Describe the job in plain language: investigate a bug, change a file, or run the project's tests. Send the request.

Each task starts from the published filesystem in its own workspace. An existing task keeps its own saved files, including uncommitted changes and installed tools. A new task does not inherit another task's edits. Repository refresh runs in the background and preserves dependency caches without rerunning installation or startup commands.

To change the reusable setup, open **Settings** > **Codex Cloud** > **Environments**, open the environment's **…** menu, and select **Edit**. Describe the change, let Codex prepare and test it, save, and select **Republish**. Start a new task to pick up the update. Existing tasks keep their own state.

When the task finishes, inspect changed files and test results. Ask for follow-ups in the same task if the diff is wrong. Commit or open a pull request only after you have reviewed the changes. OpenAI's docs are explicit that saved cloud state does not replace source control: commit important work, or save the output you need, before you leave the task.

You can also start a cloud task from the Codex CLI, or list recent cloud chats and check their status. That is a separate command path from the ChatGPT composer, documented under Codex developer commands.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/7Bv68f5szSU"
    title="Meet the all new Codex Cloud"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical checks before you publish

Keep the first environment narrow. One repository, the install commands that already work on a teammate's machine, and the tests you will trust in review. Add private registries and extra services only after that baseline publishes.

Treat network secrets as service credentials, not as general environment variables. Limit allowed domains to the hosts the build actually calls. In Enterprise workspaces, admins can add Agent Security requirements for agent behavior, managed execution networking, and supported tool use. Those requirements sit alongside the domain list saved with the environment.

If you also use ChatGPT plugins for product work outside the repo, the plugin admin path is separate. The [ChatGPT plugins guide after DevDay 2026](/blog/chatgpt-plugins-after-devday-2026/) covers installing plugins in chat. Codex Cloud does not replace that setup, and a plugin does not publish a cloud environment for you.

Model choice is also separate from the environment. If you are picking Sol or Luna for a Work session before you hand a multi-file change to Codex, the [GPT-6 Sol and Luna work setup](/blog/chatgpt-gpt-6-sol-luna-work-setup/) covers that split. The cloud environment still has to be published before a cloud task can use it.

## Close the loop

Publish the environment only after the setup report matches the commands you expect. Start one small task, read the diff, and open a pull request when the checks pass. Update the environment with **Republish** when dependencies change, then start a new task so the next run uses the new snapshot.

## Sources

- OpenAI: [Codex Cloud](https://learn.chatgpt.com/docs/cloud)
- OpenAI: [Cloud environments](https://learn.chatgpt.com/docs/environments/cloud-environments)
- OpenAI Help Center: [Using Codex Cloud](https://help.openai.com/en/articles/20001545-using-codex-cloud)
- OpenAI YouTube: [Meet the all new Codex Cloud](https://www.youtube.com/watch?v=7Bv68f5szSU)
