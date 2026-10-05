---
title: "How to Import ChatGPT Plugin Marketplaces from GitHub"
description: "Workspace admins can import a ChatGPT plugin marketplace from GitHub, set install policies, and sync daily updates from Admin Console."
pubDate: 2026-10-05T12:30:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "how-to", "developer"]
noindex: false
---

ChatGPT Business workspace owners can now pull a plugin catalog straight from GitHub instead of uploading zip files one by one. OpenAI added the control in Admin Console on October 1, 2026. A marketplace is a JSON catalog. After the first import, a daily sync keeps those plugins aligned with the repository.

That is useful if your team already keeps internal tools in git. It is also easy to over-share. Import processes every valid plugin in the catalog, and later syncs can add new ones without a second approval click. Read the repository before you connect it.

If you only need a public directory plugin, start with [How to Install ChatGPT Plugins After DevDay 2026](/blog/chatgpt-plugins-after-devday-2026/). This guide is for workspace admins who want a private or team-owned catalog.

## What a marketplace import does

A marketplace sync imports plugin content. It does not connect member accounts, and it does not grant access to the apps inside a plugin. Members still authenticate to each connected service, and admins still set who can install or use the plugin.

OpenAI supports public and private repositories on github.com. Other Git hosts and package registries, including npm, are not supported by workspace import. The GitHub account that runs the import must be able to read the marketplace repository and every other repository the catalog references. Complete any GitHub organization approval for that account first.

New plugins start as Available, with authentication on install. New marketplaces have automatic daily sync turned on. Repository policy fields such as `AVAILABLE` or `ON_USE` are not applied. You set installation and app access in the workspace after import.

![Laptop on a desk with code on the screen](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Put a supported manifest in the repo

The directory you point at must contain one of these files:

- `.agents/plugins/marketplace.json` for a Codex marketplace
- `.claude-plugin/marketplace.json` for a Claude-compatible marketplace
- `.claude-plugin/plugin.json` for a standalone Claude plugin when no marketplace manifest is present

Entries can point at plugin folders in the same repository or at supported GitHub repository sources. Do not put the manifest filename in the Admin Console path field. If the catalog lives under `team-tools/.agents/plugins/marketplace.json`, the path is `team-tools`.

Review the catalog before import. A bad plugin is reported and skipped. Other valid plugins can still land in the workspace.

## Import the marketplace

1. Open Admin Console and select the ChatGPT workspace.
2. Open **Plugins**, select **Add**, then **Import marketplace**.
3. In **Source**, paste the repository URL only, such as `https://github.com/example/team-plugins`. Do not paste a branch URL or a folder URL.
4. If the catalog is in a subdirectory, enter that directory in **Path**. Leave **Path** empty for the repository root.
5. Optionally set **Branch, tag, or commit**. Leave it empty to use the default branch. A branch receives future commits. A fixed commit stays at that revision.
6. Select **Import marketplace** and authorize GitHub when prompted.
7. Read **Import results**, then open each plugin and set its installation policy and required apps.

The first import can take up to one hour for a very large catalog. Later daily syncs usually finish in a few minutes.

## Set who can install and use each plugin

GitHub supplies the files. The workspace decides who can run them. Open each imported plugin and set **Installation policy** to **Available** or **Installed** for each eligible role.

Required apps must be enabled. Members also need access to the connected service and must finish any authentication prompt. Importing a plugin does not turn those apps on by itself.

Enterprise and Edu workspaces can split plugin installation from app access with role-based controls. A member can have a plugin installed and still be blocked from an included app. Business admins manage workspace-wide app availability from **Admin > Plugins**. The older **Apps** page can still appear; OpenAI says you can open it from **Manage Legacy Apps** on the Plugins page.

![Developer reviewing source code on a monitor](https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80)

## Sync, fix errors, and avoid a bad delete

New marketplaces check for updates daily. To pull sooner:

1. In Admin Console, open **Plugins** for the workspace.
2. Open **Marketplaces** and select the marketplace.
3. Select **Sync now**.

Sync can add new catalog entries and update existing plugins. Review pull requests before they merge, because the next sync can import a new plugin without another import step.

After a sync, read the saved report. **Completed — N errors** means the job finished, but some plugins failed. If an update to an existing plugin is invalid, ChatGPT keeps the last working version. Fix the file in GitHub, then run **Sync now** again.

**Refresh plugin list** only reloads the page. It does not pull from GitHub. If an individually imported plugin shows **Refresh**, that control updates that plugin only.

Removing an entry from the repository does not delete the workspace copy. The plugin is marked **No longer in source**. Deleting the marketplace in ChatGPT deletes every plugin imported from it. Do not delete a marketplace just to reconnect GitHub or change which admin owns the connection.

## Move ownership and attach an existing plugin

Marketplace sync uses the GitHub connection of the admin who imported it. That account needs ongoing read access to the catalog and every referenced repository.

To reconnect the same account, confirm access, then ask that admin to open the GitHub plugin in ChatGPT and reconnect. To move ownership, a new admin imports the same source, path, and branch, tag, or commit. Future syncs use the new admin's GitHub connection.

You can also move an existing workspace plugin onto GitHub management if the name matches and it is not already managed by a different GitHub source. Open the plugin in Admin Console, copy the ID after `/admin/plugins/` in the URL, and add that ID as `pluginId` next to `name` and `source` in the marketplace plugins array. Do not put `pluginId` in the plugin's `plugin.json`. The plugin keeps its ID, sharing, and workspace policies. Later archive uploads cannot replace it.

A plugin can reference an existing app with `.app.json` at the plugin root. Use the app ID, not a plugin ID. For a native plugin, set the `apps` field in `.codex-plugin/plugin.json` to `./.app.json`. The reference does not create the app or grant extra permissions.

## Watch the Desktop only label

A plugin marked **Desktop only** cannot run in ChatGPT on the web. Imported plugins can get that label when they declare MCP servers, including in `mcp.json` or `.mcp.json`, even if the server URL is remote HTTPS. Adding `.app.json` does not remove the label by itself. Any referenced app still has to be available to the member's role.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/WW_0xPcFbzw"
    title="We Tested OpenAI DevDay Products! 6 Things to Know: Dots, Spaces, Astra Ultrafast"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Practical checks before you share the catalog

Keep the marketplace repository private if the plugins include internal tool names, prompts, or MCP endpoints. The import account should be a shared admin identity, not a personal laptop login that will leave the company.

Pin a commit when you want a frozen catalog for a release. Use a branch when you want daily updates. Either way, treat a merge to that branch as a production change, because sync will pick it up.

After the first import, open one plugin, confirm the installation policy, enable only the apps that role needs, and ask a test member to authenticate. Then run **Sync now** once so you know the report path before a real failure.

## Sources

- OpenAI Help Center, "Importing and syncing plugin marketplaces from GitHub," updated October 2026: https://help.openai.com/en/articles/20001504-importing-and-syncing-plugin-marketplaces-from-github
- OpenAI Help Center, "ChatGPT Business release notes," October 1, 2026: https://help.openai.com/en/articles/11391654-chatgpt-business-release-notes
- OpenAI Help Center, "Admin controls, security, and compliance for plugins and apps": https://help.openai.com/en/articles/11509118
- OpenAI, "DevDay 2026 Recap," September 29, 2026: https://openai.com/index/devday-2026-recap/
