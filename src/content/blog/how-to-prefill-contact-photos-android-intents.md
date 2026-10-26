---
title: "How to Pre-Fill Contact Photos with Android Intents"
description: "Step-by-step guide to use ACTION_INSERT and EXTRA_PHOTO_URI for safe contact creation on Android without WRITE_CONTACTS."
pubDate: 2026-10-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer"]
noindex: false
---

Apps that save contacts on user request no longer need broad WRITE_CONTACTS permission on upcoming Android releases. The system contact intents handle the editor, and new extras let you pre-fill a photo.

This guide shows how to open the standardized contact editor, pass a photo URI, and keep the flow permission-free for most cases.

## Why the Change Matters

Direct writes with WRITE_CONTACTS allowed background changes. Google is restricting that for apps targeting the next Android release. Intents ACTION_INSERT, ACTION_EDIT, and ACTION_INSERT_OR_EDIT open a consistent editor instead.

Most apps only need to insert or update a contact after a user taps a button. The intents cover that without a Play Console declaration.

For full contact management, MANAGE_CONTACTS arrives later in Android 17 QPR2.

![Android phone showing contacts list](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

## Prepare the Photo URI

The new EXTRA_PHOTO_URI extra accepts a content URI. Your app does not need to grant read permission to the system. The contact editor handles the image.

Store the photo in your app's cache or use a FileProvider if needed. A simple content URI from MediaStore or your provider works.

Example in Kotlin:

```kotlin
val photoUri = Uri.parse("content://media/external/images/media/1234")
```

## Launch the Insert Intent

Build an ACTION_INSERT intent pointed at ContactsContract.Contacts.CONTENT_URI. Add the extras for name, phone, and the photo.

```kotlin
fun saveContactWithPhoto(
    context: Context,
    name: String,
    phone: String,
    photoUri: Uri
) {
    val intent = Intent(Intent.ACTION_INSERT, ContactsContract.Contacts.CONTENT_URI).apply {
        putExtra(ContactsContract.Intents.Insert.NAME, name)
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
        putExtra(ContactsContract.Intents.Insert.EXTRA_PHOTO_URI, photoUri)
    }
    context.startActivity(intent)
}
```

The system opens a half-sheet or full editor. The user reviews and saves. No permission dialog appears for this flow.

## Handle Edit and Insert-or-Edit

For an existing contact, use ACTION_EDIT with the contact URI. For cases where you do not know if the contact exists, ACTION_INSERT_OR_EDIT searches first.

Pass EXTRA_PHOTO_URI the same way. The editor pre-fills the picture.

Test on a device running the upcoming release or the latest emulator image. Behavior is now consistent across manufacturers.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/gQswwgjX6n8"
    title="Test on real hardware through Android CLI"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for Reliable Flows

Check that the URI is accessible before launching the intent. Catch ActivityNotFoundException if the contacts app is missing.

Prefer the intents for user-initiated saves. Only request MANAGE_CONTACTS if your app's core purpose is contact management and the intents are insufficient.

See the official developer guide on modifying contacts with intents for the full reference implementation.

Related reading: [How to Set Up Android Skills with CLI for AI Agents](/blog/how-to-set-up-android-skills-with-cli-for-ai-agents/).

## Sources

- Android Developers Blog: A more reliable way to add and edit contacts on Android
- Developer guide: Modify contacts using intents
- ContactsContract.Intents.Insert documentation
