---
title: "How to Add Google Docs API Comments and Suggestions"
description: "Add, reply to, and resolve Google Docs comments and write suggestions with the Docs API, now generally available for developers."
pubDate: 2026-10-01T12:00:00
heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "google", "tutorials", "how-to"]
noindex: false
---

Review pipelines used to stop at the Google Docs UI. On September 30, 2026, Google made comment and suggestion support generally available in the Google Docs API, and the same day opened comment management in the Sheets and Slides APIs. You can now attach review notes, reply, resolve threads, and propose text changes without a person clicking through the editor.

This guide covers the Docs API path: reading threads, inserting a comment, replying, writing in suggest mode, and accepting or rejecting a suggestion. Personal Google accounts and all Workspace customers can use the feature. There is no admin toggle, though admins still control which apps can access Workspace data.

![Team reviewing a shared document on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## What became generally available

Google first offered comment and suggestion writes as a developer preview on July 7, 2026. The September 30 release notes mark the same methods as generally available. Docs API calls now cover:

- Reading comment threads and anchors by setting `commentsViewMode` on `documents.get`
- Creating threads and replies with `InsertCommentRequest` and `AddCommentReplyRequest`
- Editing a post you authored with `UpdateCommentPostRequest`
- Deleting threads or replies with `DeleteCommentRequest` and `DeleteCommentReplyRequest`
- Writing edits as suggestions by setting `writeControl.writeMode` to `SUGGEST` on `documents.batchUpdate`
- Accepting, rejecting, or deleting suggestion threads

Sheets can create, read, reply to, and delete comments on cells. Slides can do the same for slides and presentation elements. Suggestion writes are a Docs-only addition. Comment tools on the Docs, Sheets, and Slides MCP servers stay in developer preview.

If you draft inside the editor first, Gemini in Docs is a separate surface. See [how Help me create works in Google Docs](/blog/gemini-google-docs-help-me-create/) before you automate the review step around that draft.

## Set up access before the first call

Enable the Google Docs API in a Google Cloud project and authorize the app with a Docs scope that can edit the file. Comment and suggestion writes use `documents.batchUpdate`, so a read-only scope is not enough.

The caller must already be able to open the document. You can delete a comment thread only if you authored the head post. You can delete a reply only if you wrote that reply, and you cannot delete replies that contain an action or an assignee. Accepting a suggestion needs edit access. Rejecting one needs edit access or authorship of the suggestion. Deleting a suggestion requires authorship.

Store the document ID from the Docs URL. Index positions in request bodies follow the same rules as other Docs API writes: they point at the document model, not at rendered page numbers.

## Read existing threads

Call `documents.get` and set `commentsViewMode` so the response includes comment threads and their anchors. Unresolved suggestions can also appear inline in the document content. A suggested style change is marked in `textStyleSuggestionState`. Only fields set to true in that state belong to the suggestion. Other formatting on the same run is already part of the document.

Use the returned `commentId` or `suggestionId` in later batch updates. Do not invent IDs.

## Insert a comment on a range

Comments are batch update requests. Provide the plain-text body and a range anchor.

```json
{
  "requests": [
    {
      "insertComment": {
        "content": "This is a comment added via the API.",
        "range": {
          "startIndex": 10,
          "endIndex": 25
        }
      }
    }
  ]
}
```

To assign the thread, add `assigneeEmailAddress` with the reviewer’s email. The sample below is the shape Google documents for an assigned comment.

```json
{
  "requests": [
    {
      "insertComment": {
        "content": "Please review this paragraph.",
        "assigneeEmailAddress": "user@example.com",
        "range": {
          "startIndex": 10,
          "endIndex": 25
        }
      }
    }
  ]
}
```

Send that body to `documents.batchUpdate`. Check `commentUpdateState` on the response. `ALL_SAVED` means the comment writes landed. `ALL_FAILED_UNKNOWN_REASON` means the comment or suggestion side failed even if other document model changes in the same batch were committed. `NO_UPDATES_REQUESTED` means the batch did not ask for comment or suggestion updates.

## Reply, resolve, or reassign

Replies use `AddCommentReplyRequest`. A reply is a `Post`. Set `content` for a normal reply. Set `commentAction` to `RESOLVE` or `REOPEN` when you want to change thread state. A resolve action does not need content. To hand the thread to someone else, set `assigneeEmail` on the post.

```json
{
  "requests": [
    {
      "addCommentReply": {
        "commentId": "comment_thread_id",
        "post": {
          "commentAction": "RESOLVE"
        }
      }
    }
  ]
}
```

Edit your own post with `UpdateCommentPostRequest`. Pass the thread ID, the `postId`, and the new plain text. You cannot edit the head post of a suggestion thread, because those posts are generated by suggest-mode edits.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/I3ROvNUWB5s"
    title="Batch Updates with the Google Docs API"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

Batch update is the same method this video walks through for text and image writes. Comment and suggestion requests sit in that same `requests` array.

## Write an edit as a suggestion

Suggest mode does not use a separate insert method. Put the normal edit request in the batch and set write control to `SUGGEST`. Every update in that request is processed as a suggestion.

```json
{
  "requests": [
    {
      "insertText": {
        "text": "suggested insertion text",
        "location": {
          "index": 1
        }
      }
    }
  ],
  "writeControl": {
    "writeMode": "SUGGEST"
  }
}
```

Some request types are rejected in suggest mode. Google lists `AddDocumentTab`, `CreateNamedRange`, `DeleteFooter`, `DeleteHeader`, `DeleteNamedRange`, `DeleteTab`, `UpdateDocumentTabProperties`, and `UpdateTableColumnProperties`. You also cannot suggest changes to document format or to header and footer settings. In `UpdateDocumentStyle`, suggestions are not supported for `documentFormat`, `useEvenPageHeaderFooter`, or `useFirstPageHeaderFooter`.

Accept a thread with `AcceptSuggestionRequest`, reject it with `RejectSuggestionRequest`, or remove it with `DeleteSuggestionRequest`. Each call takes the `suggestionId`.

![Developer editing code that calls a document API](https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80)

## Sheets and Slides in the same rollout

The Sheets API release notes for September 30, 2026 mark comment management as generally available. Read threads with `commentsViewMode` on `spreadsheets.get` or `spreadsheets.getByDataFilter`. Create and reply with `InsertCommentRequest` and `AddCommentReplyRequest`. Update or delete posts with the matching comment requests. There is no suggest-mode equivalent for cells.

Slides follows the same comment pattern, anchored to a slide or to a specific element. If your review bot already talks to three editors, keep suggestion logic on Docs and use comments everywhere else.

Workspace domains on Rapid Release and Scheduled Release started a gradual rollout on September 30, 2026, with up to 15 days for feature visibility. If a call fails on a domain that just received the note, retry after the rollout window rather than assuming the method is missing.

## Practical tips

Keep comment batches separate from large structural edits when you can. Partial failure is documented: the document model can commit while the comment or suggestion save fails. Log `commentUpdateState` and retry only the comment requests.

Anchor comments to a tight range. A thread on indexes 10 through 25 is easier for a reviewer to accept than a comment on the whole body.

Do not treat suggest mode as a silent edit. Reviewers still see the suggestion in the Docs UI and must accept it, unless your app accepts it with an account that has edit access.

Reference files and prompt skills in the Gemini app are a different product. They do not replace these API requests. Use the API when the review step has to run unattended.

## Conclusion

The Docs API can now open a review thread, assign it, reply, resolve it, and propose text instead of overwriting it. Sheets and Slides pick up comments in the same September 30, 2026 release. Start with `documents.get` and `commentsViewMode`, then send `insertComment` or a `SUGGEST` batch update, and always read `commentUpdateState` before you mark the job done.

## Sources

- Google Workspace Updates, “Programmatic comment and suggestion support now available in the Google Docs, Sheets, and Slides APIs,” September 30, 2026: https://workspaceupdates.googleblog.com/2026/09/programmatic-comment-and-suggestion.html
- Google Docs API release notes, September 30, 2026: https://developers.google.com/workspace/docs/release-notes
- Work with comments and suggestions, Google Docs API: https://developers.google.com/workspace/docs/api/how-tos/suggestions
- Google Sheets API release notes, September 30, 2026: https://developers.google.com/workspace/sheets/release-notes
- Batch Updates with the Google Docs API, Google for Developers: https://www.youtube.com/watch?v=I3ROvNUWB5s
