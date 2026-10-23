---
title: "Migrate Android Contact Writes Before WRITE_CONTACTS Deprecation"
description: "Apps targeting the next Android release lose direct WRITE_CONTACTS access. Switch to ACTION_INSERT, ACTION_EDIT, and ACTION_INSERT_OR_EDIT intents now."
pubDate: 2026-10-23T08:00:00
heroImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer", "security"]
noindex: false
---

Google announced on October 21, 2026 that apps targeting the upcoming Android release can no longer write contacts directly with the WRITE_CONTACTS permission. Direct writes will throw a SecurityException or permission denial. The recommended path is the standard contact intents that need no permission at all.

This change closes a long-standing privacy gap. WRITE_CONTACTS gave broad background write access even when an app only needed to save one contact the user requested. The new model keeps the user in control through the system contacts editor.

If your app saves contacts from a chat, business card scan, or profile screen, you can migrate with a few Intent lines. This guide walks through the code, the new extras, and when you actually need the special MANAGE_CONTACTS permission that arrives later.

![Developer reviewing Android security settings on a laptop](https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80)

## What changes and when

Apps that target the upcoming Android release lose write access through WRITE_CONTACTS. The three contact intents — ACTION_INSERT, ACTION_EDIT, and ACTION_INSERT_OR_EDIT — become the consistent, permission-free path on every device running that release.

A new special app access permission called MANAGE_CONTACTS arrives in Android 17 QPR2 (Q4 2026). Only apps whose core purpose is continuous contact management or bulk sync should request it. Google Play will require a declaration for that permission.

Timeline from the official post:

- October 21, 2026: Play announces the MANAGE_CONTACTS policy.
- Q4 2026: MANAGE_CONTACTS becomes available.
- 2027 (upcoming release): WRITE_CONTACTS no longer grants write access for apps targeting that SDK. Contact intents are standardized across devices.

Apps targeting older SDKs keep current behavior for now, but the standardized editor is available to every app on the new OS.

## Replace direct writes with ACTION_INSERT

Instead of building ContentProviderOperations that insert into RawContacts and Data tables, open the system editor with an intent. The user sees a half-sheet form that can expand into a full editor. Your app never holds write permission.

```kotlin
fun saveContactWithEditor(
    context: Context,
    name: String,
    phone: String,
    account: Account? = null,
    photoUri: Uri? = null
) {
    val intent = Intent(Intent.ACTION_INSERT, ContactsContract.Contacts.CONTENT_URI).apply {
        putExtra(ContactsContract.Intents.Insert.NAME, name)
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
        // Suggest the account (standardized support in the upcoming release)
        account?.let {
            putExtra(ContactsContract.Intents.Insert.EXTRA_ACCOUNT, it)
        }
        // New: pre-fill the contact photo
        photoUri?.let {
            putExtra(ContactsContract.Intents.Insert.EXTRA_PHOTO_URI, it)
            clipData = ClipData.newRawUri("", it)
            addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
        }
    }
    context.startActivity(intent)
}
```

The EXTRA_PHOTO_URI extra is new with the upcoming release. The system editor handles the URI permission grant for you. Only pass standard CommonDataKinds MIME types; custom data types are ignored.

## Edit an existing contact or let the user choose

When you already know the contact URI, use ACTION_EDIT. When the user might want to create a new entry or update an existing one, use ACTION_INSERT_OR_EDIT.

```kotlin
fun addPhoneWithEditor(context: Context, phone: String) {
    val intent = Intent(Intent.ACTION_INSERT_OR_EDIT).apply {
        type = ContactsContract.Contacts.CONTENT_ITEM_TYPE
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
    }
    context.startActivity(intent)
}

fun editKnownContact(context: Context, contactUri: Uri, phone: String) {
    val intent = Intent(Intent.ACTION_EDIT, contactUri).apply {
        putExtra(ContactsContract.Intents.Insert.PHONE, phone)
    }
    context.startActivity(intent)
}
```

These calls require zero permissions. The system contacts app already has the necessary access and presents a consistent UI.

![Smartphone showing contact list and editor interface](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Use the Contact Picker for read-only selection

If your app only needs the user to choose contacts (invite friends, share a ride, split a bill), use the Contact Picker introduced in Android 17. It needs no READ_CONTACTS permission and returns only the fields you request.

```kotlin
val pickContacts = registerForActivityResult(
    ActivityResultContracts.StartActivityForResult()
) { result ->
    if (result.resultCode == Activity.RESULT_OK) {
        // Process selected contact data
    }
}

fun launchContactPicker() {
    val intent = Intent(ContactsPickerSessionContract.ACTION_PICK_CONTACTS).apply {
        putStringArrayListExtra(
            ContactsPickerSessionContract.EXTRA_REQUESTED_DATA_FIELDS,
            arrayListOf(
                ContactsContract.CommonDataKinds.Phone.CONTENT_ITEM_TYPE,
                ContactsContract.CommonDataKinds.Email.CONTENT_ITEM_TYPE
            )
        )
    }
    pickContacts.launch(intent)
}
```

Request only the MIME types you need. The picker filters the list automatically and supports multi-select.

## When you still need MANAGE_CONTACTS

Most apps do not. Use the intents or the Contact Picker if the user initiates a single save or selection. MANAGE_CONTACTS is intended for:

- Dedicated contact managers or dialer replacements
- Caller-ID and spam apps that mass-update entries
- Enterprise or cloud sync that runs continuous two-way background updates
- Bulk backup, restore, or device-to-device transfer tools

If you need it, open the special access screen:

```kotlin
val intent = Intent(
    Settings.ACTION_MANAGE_CONTACTS,
    Uri.fromParts("package", packageName, null)
)
context.startActivity(intent)
```

Users enable it under Settings > Special app access > Manage contacts. On Google Play you must submit a declaration explaining why the intents are insufficient for your core functionality.

## Migration checklist

1. Search your codebase for WRITE_CONTACTS, ContactsContract.RawContacts.CONTENT_URI, ContactsContract.Data.CONTENT_URI, and applyBatch on the Contacts authority.
2. Replace every user-driven write with ACTION_INSERT, ACTION_EDIT, or ACTION_INSERT_OR_EDIT.
3. Pass only standard CommonDataKinds data. Move “Call with…” or “Message with…” actions to the People Directory that arrives in QPR2.
4. Decide whether MANAGE_CONTACTS is truly required. If not, remove WRITE_CONTACTS from the manifest.
5. Test on a device or emulator running the upcoming release. Direct writes must fail with a SecurityException once you raise targetSdk.

For a deeper look at the Contact Picker itself, see the existing guide on [Android 17 Contact Picker](/blog/android-17-contact-picker/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jjL4R-aiwPE"
    title="How to Add Contacts Programmatically in Android using Intents"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for a smooth transition

- Pre-fill as much data as possible with Insert extras so the user only confirms.
- Keep photo URIs short-lived and grant the read flag only for the duration of the intent.
- Log any SecurityException from residual direct-write code paths during testing.
- Update your privacy policy and Play Console data-safety section to reflect that you no longer request WRITE_CONTACTS.

The change improves user trust and reduces the attack surface for contact data. Start the migration now so your next targetSdk bump does not break contact features.

## Sources

- [A more reliable way to add and edit contacts on Android](https://developer.android.com/blog/posts/reliable-way-to-add-and-edit-contacts-android) — Android Developers Blog, 21 Oct 2026
- [Modify contacts using intents](https://developer.android.com/identity/providers/contacts-provider/modify-data) — Android Developers documentation
- [Contact picker](https://developer.android.com/about/versions/17/features/contact-picker) — Android 17 features
