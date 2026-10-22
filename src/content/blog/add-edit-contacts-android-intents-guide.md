---
title: "Add and Edit Contacts on Android with Intents"
description: "Learn how to add and edit contacts on Android using standard intents. Prepare for WRITE_CONTACTS changes with this step-by-step developer guide."
pubDate: 2026-10-22T12:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

Android is tightening how apps write to the contacts database. Apps that target the upcoming Android release will no longer get write access through the WRITE_CONTACTS permission. Direct ContentResolver writes will throw a SecurityException.<grok type="render_inline_citation" citation_id="41" />

The system now expects you to launch the standard contact editor with ACTION_INSERT, ACTION_EDIT, or ACTION_INSERT_OR_EDIT. These intents require no permission and behave consistently across devices on the new release. This change reduces the risk of apps modifying the entire address book in the background without the user noticing.

Most apps that save a contact because the user asked them to can switch today. Only a small set of contact managers, dialers, or background sync tools will need the new MANAGE_CONTACTS special access permission that arrives in Android 17 QPR2 later in 2026.

## What is changing and why

WRITE_CONTACTS currently grants broad write access. An app can insert, update, or delete contacts without showing any UI. Google heard from developers that existing alternatives were inconsistent: some devices dropped photo extras, the back button saved unexpectedly, or the create option was hard to find. Asking for the permission was often the practical path.

The upcoming Android release standardizes the contact editor experience. A half-sheet form appears for new contacts. Users can search and add data to an existing contact or expand to the full editor. Device makers can style the UI, but the behavior stays the same. EXTRA_ACCOUNT and the new EXTRA_PHOTO_URI are supported everywhere. The editor handles the photo URI permission for you.<grok type="render_inline_citation" citation_id="51" />

![Person holding a smartphone while reviewing contacts](https://images.unsplash.com/photo-1740721610016-ce8577141b78?auto=format&fit=crop&w=800&q=80)

## Use ACTION_INSERT for a new contact

Build an Intent with ACTION_INSERT and ContactsContract.Contacts.CONTENT_URI (or the equivalent MIME type). Put the known fields as extras, then start the activity.

```kotlin
fun saveContactWithEditor(
    context: Context,
    name: String,
    phone: String,
    account: Account,
    photoUri: Uri
) {
    val intent = Intent(Intent.ACTION_INSERT, ContactsContract.Contacts.CONTENT_URI).apply {
        putExtra(ContactsContract.Intents.Insert.NAME, name)
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
        putExtra(ContactsContract.Intents.Insert.EXTRA_ACCOUNT, account)
        putExtra(ContactsContract.Intents.Insert.EXTRA_PHOTO_URI, photoUri)
        clipData = ClipData.newRawUri("", photoUri)
        addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
    }
    context.startActivity(intent)
}
```

No WRITE_CONTACTS declaration is needed. The system shows the standardized editor pre-filled with the name, phone, suggested account, and photo. The user reviews and saves. Custom MIME types outside the standard CommonDataKinds are ignored by the editor.

## Update an existing contact or let the user choose

If you already have the contact URI, use ACTION_EDIT:

```kotlin
fun editKnownContact(context: Context, contactUri: Uri, phone: String) {
    val intent = Intent(Intent.ACTION_EDIT, contactUri).apply {
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
    }
    context.startActivity(intent)
}
```

When the user should pick whether to create a new contact or add to an existing one, use ACTION_INSERT_OR_EDIT with the content item type:

```kotlin
fun addPhoneWithEditor(context: Context, phone: String) {
    val intent = Intent(Intent.ACTION_INSERT_OR_EDIT).apply {
        type = ContactsContract.Contacts.CONTENT_ITEM_TYPE
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
    }
    context.startActivity(intent)
}
```

This covers common flows in messaging, social, payment, or business-card scanner apps. For reading contacts the user selects, prefer the Contact Picker introduced in Android 17. It needs no permission. See our earlier guide on the [Android 17 Contact Picker](/blog/android-17-contact-picker/).

## Do you need MANAGE_CONTACTS?

Probably not. The intents handle user-initiated saves and edits. MANAGE_CONTACTS is a special app access permission (Settings > Special app access > Manage contacts). It is intended for apps whose core purpose is managing contacts: dedicated contact managers, dialer replacements, caller-ID tools that mass-update entries, enterprise background sync, bulk backup/restore, or custom ringtone assignment. You must declare why the intents are insufficient in the Play Console. The permission covers read, write, and People Directory data; you do not also need READ_CONTACTS.<grok type="render_inline_citation" citation_id="51" />

Apps that only inject “Call with…” or “Message with…” rows should move to the People Directory API arriving in the same QPR2 timeframe instead of writing into contacts.

## Migration checklist

Search your codebase for WRITE_CONTACTS, RawContacts.CONTENT_URI, Data.CONTENT_URI, and applyBatch on the contacts authority. Replace every user-driven write with the matching intent. Keep only standard data types. Remove the permission from the manifest once no path needs it. Test on a device or emulator running the upcoming Android release: direct writes should fail with a SecurityException if you target the new SDK.

Timeline highlights:
- October 21, 2026: Play policy for MANAGE_CONTACTS announced.
- Android 17 QPR2 (Q4 2026): MANAGE_CONTACTS becomes available.
- 2027 (upcoming Android release): WRITE_CONTACTS no longer grants writes for apps targeting that release. Contact intents are standardized.

## Tips for a smooth transition

Pass EXTRA_PHOTO_URI when you have a picture; the editor takes care of permissions. Suggest the correct account with EXTRA_ACCOUNT so contacts land in the right store. Avoid SHOW_OR_CREATE_CONTACT for consistent behavior; use ACTION_INSERT_OR_EDIT. Watch for silent ignoring of non-standard MIME types. If your app is a full contact manager, prepare the Play Console declaration early.

![Close-up of hands using a smartphone](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jjL4R-aiwPE"
    title="How to Add Contacts Programmatically in Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Switching to contact intents removes an unnecessary permission for the majority of apps and gives users a consistent, reviewable experience. Start by locating your write sites and replacing them with ACTION_INSERT or ACTION_INSERT_OR_EDIT. The change lands for apps that target the 2027 Android release, so you have time to test. Official details are in the Android Developers Blog post from October 21, 2026.

Sources:
- Android Developers Blog: A more reliable way to add and edit contacts on Android
- Android developer guide: Modify contacts using intents
- Android 17 Contact Picker documentation
