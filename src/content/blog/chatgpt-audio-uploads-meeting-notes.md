---
title: "ChatGPT Audio Uploads: Transcripts and Notes Guide"
description: "Paid ChatGPT plans can upload MP3, WAV, and M4A files up to 512 MB. Turn a recording into a transcript, recap, and follow-up email."
pubDate: 2026-10-07T12:00:00
heroImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["chatgpt", "tutorials", "productivity"]
noindex: false
---

OpenAI added audio uploads to ChatGPT on 6 October 2026. You can attach a recording, ask for a transcript, and then turn that transcript into notes or a follow-up email without leaving the chat.

Audio uploads are limited to paid ChatGPT subscriptions and workspaces, including Enterprise. They are not available on the Free plan. Document and image uploads still work on Free, subject to plan limits.

This guide covers the formats OpenAI lists, the 512 MB cap, and a practical workflow for meetings, interviews, and lectures.

## What audio uploads can do

OpenAI's help article on uploading files and audio says ChatGPT can transcribe a recording and discuss its contents. Suggested uses include a meeting summary that highlights decisions, open questions, and next steps, plus a follow-up email draft.

You can also ask a direct question such as "What did they say about the launch deadline?" or pull requirements and examples from an interview or lecture.

Transcripts may contain errors. Speaker identification may be unreliable. Check names, numbers, and decisions against the original recording before you send anything based on the notes.

Audio understanding and transcription performance may vary across languages. Availability can also vary by workspace settings, region, client version, and the model you select. The API has separate file rules and is not covered by the ChatGPT upload limits below.

![Person speaking into a studio microphone during a recording](https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80)

## Supported formats and size limits

OpenAI lists these audio formats: WAV, MP3/MPEG, OGG/OGA, audio-only WebM, PCM, FLAC, AAC, M4A, and audio-only MP4.

WebM and MP4 files identified as video are not supported. The file must contain a valid, decodable audio stream. If a phone recording is a video clip with a soundtrack, export an audio-only file before you upload it.

Audio files can be up to 512 MB. Longer recordings may be processed in smaller sections when Data Analysis is available. Processing is best-effort, and very long recordings may time out. Split a multi-hour recording into shorter files if the first attempt stalls.

Shared upload storage is capped at 25 GB per user and 100 GB per organization. ChatGPT shows an error when a cap is reached. You can check Library storage under Settings > Storage.

The rolling upload rate is up to 80 files every 3 hours on plans that allow that quota. Free users are limited to 3 file uploads per day, but that Free quota does not unlock audio. OpenAI may lower limits during peak hours. Failed upload attempts can count toward the rate limit.

## Upload a recording and ask for a transcript

1. Sign in to a paid ChatGPT plan on the web or a supported app.
2. Start a new chat. Attach the file from the composer. OpenAI's Academy guide describes the attachment control as Add photos or files.
3. Wait until the file finishes attaching. If the upload fails, confirm the format is audio-only and that the stream can be decoded.
4. Ask for a transcript first, before a summary. A clear prompt is: "Transcribe this recording. Mark unclear words in brackets. Do not invent speaker names."
5. Read the transcript against a short sample of the audio. Fix names and product terms in a follow-up message so later notes stay consistent.

Keep the original file. Deleting a chat does not delete a copy that remains in Library. To remove a saved copy, open Library, select the file, and choose Delete. If Recently deleted is available, you can restore the file until it is permanently removed.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/x7OibzvFFbQ"
    title="ChatGPT Data Analysis Tutorial: Upload and Analyze PDF and Excel Files"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Turn the transcript into notes and an email

After the transcript looks usable, ask for a structured recap in the same chat. The file is already in context, so you do not need to upload it again.

A practical prompt:

"Using the transcript, write meeting notes with these sections: decisions, open questions, action items with owners if stated, and a short follow-up email. Quote a line when a decision is unclear. Skip small talk."

OpenAI specifically lists this path: ask for a transcript, then ask follow-up questions, or turn a recording into structured notes, a meeting recap, or a follow-up email draft.

For an interview or lecture, swap the sections. Ask for topics, examples, and terms you should look up. For a voice memo to yourself, ask for a checklist and a cleaned version of the wording.

If you already connect accounts inside ChatGPT, the [Finances setup for Free and Go](/blog/chatgpt-finances-free-go-setup/) shows how plan availability can differ by feature. Audio uploads stay on paid plans even where other tools reach Free users.

![Laptop on a desk used to review notes after a call](https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80)

## Fix a failed upload

Start with the file itself. OpenAI says a failed audio upload often means the format is unsupported or the stream cannot be decoded. Convert video-labelled WebM or MP4 to M4A, MP3, or WAV and try again.

If ChatGPT reports an upload limit even when you have not attached much today:

1. Confirm you are signed in to the paid account you expect.
2. Check the rolling upload-rate limit and Library storage. Failed attempts can count.
3. Check [OpenAI Status](https://status.openai.com) for an incident that affects uploads.

When you contact support, include the account email, a screenshot, the timestamp and time zone, the platform or browser, and the request ID if one is shown.

Project file caps are separate from a single chat attachment. OpenAI lists up to 5 files per project on Free, 25 on Go and Plus, and 40 on Edu, Pro, Business, and Enterprise. A custom GPT can hold up to 10 knowledge files for its lifetime. Those caps still follow file-size and storage limits.

## Privacy and retention checks

Retention depends on where the file is stored and on any workspace policy. Files saved in Library can remain after the conversation is gone. In Enterprise, Edu, and Healthcare workspaces, Library files follow the workspace retention policy. Content brought into a conversation can remain in that conversation even after you delete the Library copy.

How consumer uploads may be used to improve models depends on your data settings. OpenAI states that it does not use content submitted by customers to business offerings, such as the API and ChatGPT Enterprise, to improve model performance.

Before you upload a client call or a lecture, confirm you have permission to process the audio and that your workspace rules allow the file type. Review the [ChatGPT privacy controls guide](/blog/chatgpt-privacy-center-setup/) if you need to check training and history settings on a personal plan.

## Tips that keep the notes usable

- Export audio-only files. A camera recording labelled as video will fail even when you can hear the speech.
- Name speakers in the prompt if you know them. Do not expect reliable automatic labels.
- Ask for brackets around unclear words so guesses do not look like quotes.
- Split recordings that approach the 512 MB cap or that time out during processing.
- Keep action items tied to a quoted line when the owner is ambiguous.
- Delete Library copies you do not need. Chat deletion and file deletion are separate steps.

## Conclusion

Audio upload is a paid ChatGPT feature as of the 6 October 2026 release notes. Attach a supported file up to 512 MB, request a transcript, then ask for notes or an email in the same thread.

Treat the transcript as a draft. OpenAI warns that errors and weak speaker labels are expected, and that long files may be chunked or time out. A short review against the recording is the step that makes the recap safe to send.

## Sources

- OpenAI Help Center, [Uploading files and audio to ChatGPT](https://help.openai.com/en/articles/8555545-uploading-files-and-audio-to-chatgpt), updated 7 October 2026
- OpenAI Help Center, ChatGPT release notes, 6 October 2026, Audio uploads in ChatGPT
- OpenAI Academy, [Working with files in ChatGPT](https://openai.com/academy/working-with-files/)
- OpenAI Help Center, [Chat and file retention in ChatGPT](https://help.openai.com/articles/8983778)
