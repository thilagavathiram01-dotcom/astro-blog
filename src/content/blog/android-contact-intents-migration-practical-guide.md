---
title: "Migrate Android Apps to Contact Intents Before 2027"
description: "Step-by-step guide to replace WRITE_CONTACTS with ACTION_INSERT and related intents. Prepare your Android app for the upcoming release changes."
pubDate: 2026-10-26T14:00:00
heroImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

Android apps that target the upcoming release can no longer write contacts directly with the WRITE_CONTACTS permission. Direct calls to ContentResolver will throw a SecurityException. Google standardized the contact editor so most apps can open the system UI instead. 

This change arrives to limit background modifications of the full address book. Apps that only save a contact when the user requests it can switch to intents today. Dedicated contact managers get a separate MANAGE_CONTACTS permission later in 2026.

![Person reviewing contacts on a smartphone](https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80)

## Why the change happens now

WRITE_CONTACTS currently allows an app to insert, update, or delete any contact without showing UI. Many apps requested it only to save one number from a chat or scan. Google noted that existing intent behavior varied across devices. Some dropped photo extras. Others made the create flow hard to find.

On the upcoming release the three intents behave the same everywhere. A half-sheet editor appears for new contacts. Users can expand it or search to add data to an existing contact. Manufacturers can style the sheet but cannot change the core flow. EXTRA_PHOTO_URI is now supported consistently so your app does not need its own URI read permission.

## Timeline you need to track

- October 21, 2026: Google Play published updated contact-access guidelines.
- Android 17 QPR2 (Q4 2026): MANAGE_CONTACTS special access permission becomes available.
- 2027 upcoming Android release: Apps targeting that SDK lose WRITE_CONTACTS write access. Contact intents are fully standardized.

Apps targeting older SDKs keep current behavior for now. The standardized editor is available on the new OS regardless of target SDK.

## Use ACTION_INSERT for a new contact

Build an Intent with ACTION_INSERT and ContactsContract.Contacts.CONTENT_URI. Add the fields you already know as extras. Start the activity. The system editor pre-fills the form and the user confirms the save.

```kotlin
fun saveNewContact(context: Context, name: String, phone: String, photoUri: Uri?) {
    val intent = Intent(Intent.ACTION_INSERT, ContactsContract.Contacts.CONTENT_URI).apply {
        putExtra(ContactsContract.Intents.Insert.NAME, name)
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
        photoUri?.let {
            putExtra(ContactsContract.Intents.Insert.EXTRA_PHOTO_URI, it)
        }
    }
    context.startActivity(intent)
}
```

No WRITE_CONTACTS declaration is required. The editor handles photo permissions for you.

## Edit an existing contact with ACTION_EDIT

Pass the contact’s content URI so the system opens the right record. You can still supply extras that the editor merges.

```kotlin
fun editContact(context: Context, contactUri: Uri, newPhone: String) {
    val intent = Intent(Intent.ACTION_EDIT, contactUri).apply {
        putExtra(ContactsContract.Intents.Insert.PHONE, newPhone)
    }
    context.startActivity(intent)
}
```

## Let the user choose insert or edit

ACTION_INSERT_OR_EDIT shows a picker so the user can create a new contact or attach the data to an existing one. Set the MIME type to Contacts.CONTENT_ITEM_TYPE.

```kotlin
fun insertOrEditContact(context: Context, email: String) {
    val intent = Intent(Intent.ACTION_INSERT_OR_EDIT).apply {
        type = ContactsContract.Contacts.CONTENT_ITEM_TYPE
        putExtra(ContactsContract.Intents.Insert.EMAIL, email)
    }
    context.startActivity(intent)
}
```

![Developer working on Android contact code](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## When you still need MANAGE_CONTACTS

Only apps whose core job is continuous contact management should request the new special permission. Examples include dedicated address-book apps, full dialer replacements, or background sync tools that update many contacts without user interaction each time.

Google Play requires a declaration in the Play Console for MANAGE_CONTACTS. Most apps that simply save a contact the user just scanned or typed do not need it. Remove WRITE_CONTACTS from your manifest once every code path uses intents.

## Migration checklist

1. Search your codebase for ContentResolver.applyBatch or insert/update calls against ContactsContract.
2. Replace each user-driven save with the matching intent shown above.
3. Test the half-sheet editor on a device running the latest Android preview if available.
4. Confirm EXTRA_PHOTO_URI pre-fills the photo without extra permissions.
5. Drop the WRITE_CONTACTS permission if no remaining code path needs it.
6. If your app truly needs bulk access, plan the MANAGE_CONTACTS declaration for Q4 2026.

For related Android 17 changes see our guide on the [Contact Picker](/blog/android-17-contact-picker/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jjL4R-aiwPE"
    title="How to Add Contacts Programmatically in Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Sources

- Android Developers Blog: A more reliable way to add and edit contacts on Android (21 Oct 2026)
- Android Developers documentation: Modify contacts using intents
- Google Play contact-access policy update (21 Oct 2026)

Start the migration now. The intents already work on current devices and will be consistent once the 2027 release arrives. Your users keep control of every save and your app drops a broad permission.
