---
title: "How to Add and Edit Contacts on Android Without WRITE_CONTACTS"
description: "Migrate contact inserts and edits to standard intents after the WRITE_CONTACTS change for apps targeting the next Android release."
pubDate: 2026-10-22T10:11:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "developer", "tutorials", "how-to", "security"]
noindex: false
---

Google is tightening contact access. Apps that target the upcoming Android release will no longer be able to write contacts directly with the `WRITE_CONTACTS` permission. Direct writes are rejected with a `SecurityException` or permission denial.

The replacement is the standard contact intents: `ACTION_INSERT`, `ACTION_EDIT`, and `ACTION_INSERT_OR_EDIT`. These open the system Contacts app, need no special permission, and give users a consistent experience. A new `MANAGE_CONTACTS` special-access permission arrives later (Android 17 QPR2, Q4 2026) for the small set of apps that truly require broad write access. Google Play published updated guidelines the same day.

This guide shows the practical migration path for most apps. It assumes you already use Kotlin and target a recent SDK. For read-side changes, see the [Android 17 Contact Picker guide](/blog/android-17-contact-picker/).

## Why the change

Direct `ContentResolver` inserts and updates against `ContactsContract` have always been powerful but also risky. Users grant one broad permission and the app can create, edit, or delete anything. Intents keep the system app in control, surface a familiar UI, and eliminate the need for the dangerous permission in ordinary cases.

On devices running the upcoming release, the three intents behave consistently and require zero permissions. Apps that still declare `WRITE_CONTACTS` and target the new release simply fail at runtime. Older targets keep the old behavior, but the new standardized editor is available to every app on the new OS.

## Insert a new contact

Start with `ContactsContract.Intents.Insert.ACTION` (which is `Intent.ACTION_INSERT`) and set the MIME type to `ContactsContract.RawContacts.CONTENT_TYPE`. Add the fields you already know as extras.

```kotlin
val intent = Intent(ContactsContract.Intents.Insert.ACTION).apply {
    type = ContactsContract.RawContacts.CONTENT_TYPE
    putExtra(ContactsContract.Intents.Insert.NAME, "Alex Rivera")
    putExtra(ContactsContract.Intents.Insert.PHONE, "+1 555 0100")
    putExtra(ContactsContract.Intents.Insert.EMAIL, "alex@example.com")
    putExtra(ContactsContract.Intents.Insert.COMPANY, "Example Inc")
}
if (intent.resolveActivity(packageManager) != null) {
    startActivity(intent)
}
```

The system Contacts app opens pre-filled. The user reviews, edits, and saves. Your app never touches the database directly.

![Android phone showing a contact form on screen](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## Edit an existing contact

Use `Intent.ACTION_EDIT` with the contact’s content URI. You can obtain the URI from a previous picker result or from a `ContentUris.withAppendedId` call if you already hold a legitimate ID.

```kotlin
val contactUri = ContentUris.withAppendedId(
    ContactsContract.Contacts.CONTENT_URI,
    contactId
)
val editIntent = Intent(Intent.ACTION_EDIT).apply {
    data = contactUri
    putExtra(ContactsContract.Intents.Insert.PHONE, "+1 555 0199") // optional update
}
startActivity(editIntent)
```

The editor opens on that contact. Changes are committed only when the user taps Save.

## Let the user choose insert or edit

For flows such as “add this email to contacts,” use `Intent.ACTION_INSERT_OR_EDIT` with MIME type `ContactsContract.Contacts.CONTENT_ITEM_TYPE`. Do not set a data URI. The Contacts app shows a picker; the user can select an existing contact or create a new one. Any extras you supply are pre-filled.

```kotlin
val intent = Intent(Intent.ACTION_INSERT_OR_EDIT).apply {
    type = ContactsContract.Contacts.CONTENT_ITEM_TYPE
    putExtra(ContactsContract.Intents.Insert.EMAIL, "new@example.com")
    putExtra(ContactsContract.Intents.Insert.EMAIL_TYPE,
        ContactsContract.CommonDataKinds.Email.TYPE_WORK)
}
startActivity(intent)
```

This pattern is ideal for messaging, email, and calendar apps.

## Step-by-step migration checklist

1. Audit every place that calls `ContentResolver.insert`, `update`, or `delete` on contact URIs.
2. Replace those paths with the matching intent shown above.
3. Remove the `WRITE_CONTACTS` declaration from the manifest once no code path needs it.
4. Test on an emulator or device running the upcoming Android release (or the latest QPR preview) while targeting that API level.
5. Verify that `resolveActivity` succeeds and that the system Contacts app appears.
6. For the rare apps that need unrestricted writes, prepare a Play Console declaration for the upcoming `MANAGE_CONTACTS` permission and follow the new guidelines.

![Developer reviewing Android code on a laptop](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Video walkthrough

This short tutorial demonstrates the insert intent pattern in action:

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jjL4R-aiwPE"
    title="How to Add Contacts Programmatically in Android"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips for a smooth transition

- Always check `resolveActivity` before calling `startActivity`. Not every device has a contacts app that handles every intent.
- Prefer the insert-or-edit intent when the user might already have the person in their address book.
- Keep the extras limited to data you already possess; do not invent fields.
- Test both phone and tablet form factors; the Contacts app layout adapts.
- Document the change in your release notes so support teams know why the permission is gone.

## Timeline recap

- October 21, 2026: Google Play announces the `MANAGE_CONTACTS` policy.
- Android 17 QPR2 (Q4 2026): `MANAGE_CONTACTS` becomes available.
- Upcoming Android release (2027 target window): `WRITE_CONTACTS` no longer grants write access for apps targeting that release.

Apps that continue to target older SDKs keep the previous behavior, but the intent-based path works everywhere and future-proofs your code.

## Conclusion

Switching from direct `WRITE_CONTACTS` writes to the three standard intents is straightforward and removes a dangerous permission from most apps. Users stay in control, the system UI stays consistent, and your code becomes simpler. Start the audit this week, ship the intent-based flows, and drop the permission. For the small number of apps that need broader access, watch for the `MANAGE_CONTACTS` special-access flow and the corresponding Play policy.

## Sources

- Android Developers Blog: A more reliable way to add and edit contacts on Android (October 21, 2026)
- Android Developers: Modify contacts using intents
- Android Developers: Contacts Provider
