---
author: "The Noise Filter"
pubDatetime: 2026-07-17T09:30:00+09:00
modDatetime: 2026-07-17T09:30:00+09:00
timezone: "Asia/Seoul"
title: "ChatGPT Work Is Here: Who Gets It, What It Can Access, and What to Check"
category: "tech-ai"
contentType: "Explainer"
featured: false
draft: false
tags:
  - tech-ai
  - chatgpt
  - ai-assistants
  - privacy-controls
description: "ChatGPT Work has different access rules on desktop, web, and mobile. Here is what it can use, when permissions matter, and what to check first."
ogImage: "images/chatgpt-work-availability-permissions-cover.png"
coverAlt: "A laptop and abstract work surfaces connected through a small lime control slider on a modern editorial desk."
quickFilter:
  changed: "OpenAI added Work, a mode for longer tasks that can use files, connected apps, and supported desktop tools."
  matters: "Desktop and cloud access differ, and app approvals do not mean ChatGPT automatically gains access to everything."
  ignore: "You do not need to connect every app, move every task into Work, or assume a missing button means your account is broken."
updateNote: "Reviewed against OpenAI's announcement, release notes, and current Help Center guidance on July 17, 2026. Availability and permission controls may change during rollout."
---

You open ChatGPT and find a new **Work** option beside the familiar chat experience. Or you hear that Work can handle files and apps, then look on your phone and cannot find it at all. Both situations are plausible during this rollout.

OpenAI launched ChatGPT Work on July 9 for longer, multi-step assignments. Set aside the bigger-chatbot pitch and start with three practical checks: where you can use it, what information you choose to give it, and which actions still need your attention.

## Start with the screen you are using

The launch rules are different on desktop and in the cloud.

OpenAI says the updated ChatGPT desktop app for Mac and Windows includes Chat, Work, and Codex on every plan, including Free. On the web and mobile apps, Work began rolling out to paid plans other than Free and Go. Pro, Pro Lite, Enterprise, and Edu received access first, with Plus and Business following over the next few days.

That wording matters. “Rolling out” is not the same as “already visible in every eligible account.” A missing Work option may reflect the app version, rollout timing, plan, region, or a managed workspace setting. It is not enough evidence to conclude that the account has a technical problem.

Regular ChatGPT has not disappeared. The desktop app keeps a Quick chat option, while mobile lets users switch between Chat and Work. A short question still belongs in regular chat; Work is meant for assignments that need several steps, source material, revisions, or a finished deliverable.

## What Work actually changes

Work can research and analyze information, use connected apps and files, and create materials such as documents, spreadsheets, presentations, reports, and Sites. You can follow the task, answer questions, change direction, and approve important actions while it runs.

Those are product capabilities, not a promise that every assignment will be completed correctly. OpenAI's own guidance tells users to review progress and steer the task. A sensible first assignment is one whose subject you already understand well enough to notice a missing source, a wrong total, or an odd recommendation.

The split between cloud and desktop is especially important. Work on web and mobile runs in the cloud. It can use files you add and apps you connect, but it cannot directly open files sitting elsewhere on your computer. Desktop Work can use local files and desktop apps after you grant permission to the relevant folder or tool.

The conversation history is also divided at launch. Cloud Work conversations can continue on supported cloud surfaces, but they do not appear in desktop Work. Desktop Work threads and local files remain on that computer. If a task must move between devices, check where the conversation started before assuming it will follow you.

## Access and approval are two different controls

Connecting an app does not hand ChatGPT a universal key. The app connection, your existing account permissions, and any workspace rules determine what information and actions are available. ChatGPT's app-permission setting then controls when it asks before using that access.

The default **Important actions** setting allows reading from apps automatically but asks before actions that may have a meaningful outside effect, expose sensitive information, or be hard to undo. OpenAI lists examples such as sending a message, deleting content, completing a purchase, moving a cloud file, changing sharing access, or disclosing sensitive information.

That is not the same as “every change gets an approval card.” OpenAI says lower-risk changes may proceed without asking under the default setting, while some especially risky actions may be blocked. People who want a prompt before any change can open **Settings > Apps**, find **Ask permission**, and select **Any changes**. Managed workspaces may apply administrator rules instead.

The practical habit is simple: before assigning a real task, open the Plugins Directory, select the connected app, and check what it can read or change. Then review the approval card itself, not just the name of the app.

## The privacy question has more than one setting

App access, action approvals, Memory, and model-improvement choices are separate controls. Tightening one does not silently change the others.

For apps that sync information into ChatGPT, OpenAI says Business, Enterprise, and Edu workspace data is not used to train generalized models by default. On consumer plans, synced app data is not used for that purpose unless it becomes part of a ChatGPT conversation and **Improve the model for everyone** is on, or the user submits it as feedback.

Memory is separate again. If Memory is enabled, ChatGPT may save relevant details it accessed from connected apps. Disconnecting an app stops future syncing and access, but it does not erase conversations or saved memories that already contain connected information. OpenAI says those must be deleted separately.

These rules come from the documentation for connected apps and apps with sync; they are not a special privacy policy created only for Work. Before using sensitive material, check the particular app, account plan, workspace policy, Memory setting, and Data Controls rather than relying on one general label.

## A six-point check before the first serious task

1. **Confirm the surface.** Desktop Work can reach permitted local files and apps; web and mobile Work cannot directly browse your computer.
2. **Check eligibility and rollout.** Update the desktop or mobile app, confirm the plan, and ask a workspace administrator if the option is managed by an organization.
3. **Limit the starting material.** Grant the folder, files, and app connection the assignment actually needs, not a broad collection “just in case.”
4. **Review app permissions.** Decide whether Important actions is enough or whether you want approval before any change.
5. **Check Memory and Data Controls.** These settings answer different questions from app access and should be reviewed separately.
6. **Begin with a familiar task.** Give Work clear constraints and review criteria, then inspect the result before using or sending it.

What can be ignored for now? You do not need to connect every service, schedule recurring work, or replace ordinary chat. The launch examples show what OpenAI wants Work to become; they do not establish that every app, workflow, or account has the same reach today.

## Two rollout details worth tracking

Watch the Help Center for two practical changes: whether the web/mobile rollout language becomes a stable plan table, and whether cloud and desktop Work conversations begin moving between surfaces. Those details will matter more to most users than another list of ambitious tasks the agent might perform.

## Sources and update notes

- [OpenAI: ChatGPT is now a partner for your most ambitious work](https://openai.com/index/chatgpt-for-your-most-ambitious-work/)
- [OpenAI Help Center: ChatGPT Work and Codex](https://help.openai.com/en/articles/20001275/)
- [OpenAI Help Center: ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)
- [OpenAI Help Center: Apps in ChatGPT](https://help.openai.com/en/articles/11487775)
- [OpenAI Help Center: ChatGPT apps with sync](https://help.openai.com/en/articles/10847137)

_Reviewed July 17, 2026. Availability, app controls, plugin terminology, and cross-device behavior may change as the rollout develops._
