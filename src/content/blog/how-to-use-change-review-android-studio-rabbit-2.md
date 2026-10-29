---
title: "How to Use Change Review in Android Studio Rabbit 2"
description: "Step-by-step guide to AI Change Review in Android Studio Rabbit 2. Verify agent code changes with recommended fixes and guided walkthroughs."
pubDate: 2026-10-29T22:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "ai-tools", "developer"]
noindex: false
---

Android Studio Rabbit 2 introduced AI Change Review to help developers inspect code written or refactored by agents. The feature identifies recommended fixes across agent changes, pending commits, or committed changes under review. After you address the fixes, a guided walkthrough groups related diff chunks into logical themes instead of listing files alphabetically.

This reduces the friction of reviewing large AI-generated pull requests. You no longer need to open every file in sequence to understand the intent of the changes. The tool works with both the built-in Gemini agent and external agents connected through Bring Your Own Agent.

![Developer reviewing code on dual monitors](https://images.unsplash.com/photo-1730130054404-c2bd8e7038c2?auto=format&fit=crop&w=800&q=80)

## Prerequisites

Update to Android Studio Rabbit 2 on the stable channel. Open Help > Check for Updates on Windows or Linux, or Android Studio > Check for Updates on macOS. You can also download the installer from the Android Developers site.

Sign in to your preferred agent if you use Bring Your Own Agent. Change Review functions with Claude Agent, Codex, Antigravity, and other ACP-compatible agents. The built-in agent requires no additional setup.

Make sure your project uses Git for version control. Change Review scans agent-generated diffs, pending commits, and git history. A clean working tree helps the tool isolate the changes you want to review.

## Start a Change Review

After an agent completes a task, open the changes drawer in the Agent tool window. Look for the Review this code or Review all changes with AI action. Selecting it starts a fresh conversation with the agent focused on review.

The new conversation avoids bias from the original generation session. The agent examines the full set of changes and produces a report. The report summarizes what the commit or patch does. It lists problems if any exist.

You can also start a review from the Git view. Right-click a commit or select the Review button on a change list. This works for commits from coworkers or external agents as well as your own agent sessions.

![Coding session on a laptop](https://images.unsplash.com/photo-1780253256194-34e5867ccb8c?auto=format&fit=crop&w=800&q=80)

## Review the Report and Apply Fixes

The initial report highlights recommended fixes. These might include missing error handling, incomplete migrations, or style issues that the agent missed during generation. Address the high-priority items first.

Apply the suggested changes directly in the editor. You can accept individual hunks or edit them manually. After each round of fixes, re-run the review if needed. The process supports multiple cycles until the report shows no remaining critical issues.

Once the recommended fixes are resolved, request a guided walkthrough. The agent groups related diff chunks by theme. For example, it might cluster all database migration changes together, then group UI updates, then separate test additions. This thematic view makes the overall intent clearer than a file-by-file list.

## Use Change Review on Existing Commits

Change Review is not limited to agent sessions. Open the Git tool window and select a recent commit. Click the Review action. The agent analyzes the commit independently and produces a summary of its actual effects, not just the commit message.

This approach helps when you receive a large pull request from a teammate. Cherry-pick the branch or check out the commit, then run the review. The walkthrough surfaces logical groupings that might otherwise require reading hundreds of lines across multiple files.

Enterprise teams can combine Change Review with Gemini Enterprise controls for audit logging. Personal subscriptions work the same way for individual developers.

## Tips for Effective Reviews

Start with smaller agent tasks. A focused change set produces a clearer walkthrough than a multi-thousand-line refactor. Use the skills manager in Rabbit 2 to give the agent Android-specific guidance before generation. Better input reduces the number of issues Change Review must flag later.

Compare the walkthrough against your own mental model of the feature. If the agent groups changes in a way that does not match the design, the mismatch often reveals an incomplete implementation. Re-prompt the agent with the specific gap rather than accepting the current state.

Keep the changes drawer open while reviewing. You can jump from a theme in the walkthrough directly to the corresponding files in the editor. This keeps context without switching tool windows repeatedly.

![Hands typing on a laptop with code visible](https://images.unsplash.com/photo-1529465230221-a0d10e46fcbb?auto=format&fit=crop&w=800&q=80)

## Integrate with Existing Workflows

Change Review complements the existing Pull Requests tool window in Android Studio. Run a local review first, then push the cleaned-up changes for human teammates. The walkthrough summary can be copied into the pull request description to give reviewers a head start.

Pair Change Review with LeakCanary integration when the agent touches memory-sensitive code. The profiler task can surface leaks, and Change Review can then verify the fix patches. Both features live inside the same IDE session.

If you use multiple agents, run Change Review after switching agents. A different model may catch issues the original agent missed. The fresh conversation ensures the second review is independent.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/8Lmv7LGgL4E"
    title="Android Dev Summit 2026 keynote"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

AI Change Review in Android Studio Rabbit 2 turns agent output into a structured, reviewable set of changes. Update to the stable release, generate or receive a set of changes, then start the review from the changes drawer or Git view. Address the recommended fixes, request the thematic walkthrough, and iterate until the report is clean.

The feature works alongside Bring Your Own Agent, so you can keep using Claude, Codex, or Antigravity while gaining Android Studio’s review tools. Start with a small task today and compare the walkthrough view against a traditional file-by-file diff. Most developers find the grouped themes reduce the time needed to understand and approve the changes.

For more on connecting external agents, see the guide on [Bring Your Own Agent in Android Studio Rabbit 2](/blog/bring-your-own-agent-android-studio-rabbit-2/).

**Sources:** Android Developers release notes for Rabbit 2, Android Dev Summit 2026 keynote, daily.dev summary of the Rabbit 2 announcement.
