---
title: "How to Use the Android 17 Contact Picker Instead of READ_CONTACTS"
description: "Replace the broad READ_CONTACTS permission with Android 17's session-based Contact Picker. Launch ACTION_PICK_CONTACTS, request only phone or email fields, and persist the results before the session URI expires."
pubDate: 2026-09-17
tags: ["android", "tutorials", "how-to"]
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80"
---

Most apps that need a phone number or email do not need the user's entire address book. On **Android 17** (API level **37**), Google ships a system **Contact Picker** that grants **temporary, session-only** read access to the fields the user actually selects.

That is a practical change for two audiences. Users see a consistent search UI with work/personal profile switching. Developers can drop `READ_CONTACTS` for one-shot flows such as "invite a friend" or "pick a delivery contact."

This walkthrough follows the official [Contact Picker documentation](https://developer.android.com/about/versions/17/features/contact-picker) and the Android 17 features list. It does not invent extra extras or undocumented limits.

![Person holding a smartphone in both hands, close-up of the device screen](https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=1400&q=80)

## What the Contact Picker is

The picker is a **standardized system UI**. Your app launches an intent, the user searches and selects contacts, and Android returns a **session URI**. You query that URI with `ContentResolver`. You do **not** keep a standing address-book permission.

Official capabilities:

- Available on devices running **Android 17 or higher**
- You declare the **MIME types** you need (phone, email, postal address)
- Built-in **search**, **multi-select**, and **personal/work profile** switching
- Results follow the `ContactsContract.Data` schema
- Account metadata is stripped so the result cannot be used for easy fingerprinting

It is a privacy-preserving alternative to `READ_CONTACTS`, not a full Contacts app replacement. If you must sync the whole book, you still need a different permission story and a clear user reason.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/8rbub6oDBtg" title="Android 17 AOSP is here — Android Developers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

Google's Android 17 AOSP recap calls out **granular privacy pickers** for contacts as part of the move from broad permissions to session-based access.

## When to use it

Use the picker when the job is "the user chooses people right now":

- Share a file or invite link with selected people
- Prefill a shipping or emergency contact
- Start a call or SMS to one number
- Import a short guest list into an event

Do **not** use it as a background sync source. The session URI is **temporary**. Official guidance is to **persist the fields you need immediately** if you will use them after the process dies.

## Step 1: Request only the fields you need

Build an `ArrayList` of MIME types from `ContactsContract.CommonDataKinds`:

- `Phone.CONTENT_ITEM_TYPE` for numbers
- `Email.CONTENT_ITEM_TYPE` for addresses
- `StructuredPostal.CONTENT_ITEM_TYPE` for mailing addresses

If the app only sends SMS, request the phone type alone. The picker then filters to contacts that have numbers, which is cleaner than a raw dump of every saved name.

## Step 2: Register an activity result launcher

Use `registerForActivityResult` with `StartActivityForResult`. On `RESULT_OK`, read `data.data` — that is the session URI.

```kotlin
val pickContact = rememberLauncherForActivityResult(
    ActivityResultContracts.StartActivityForResult()
) { result ->
    if (result.resultCode == Activity.RESULT_OK) {
        val sessionUri = result.data?.data ?: return@rememberLauncherForActivityResult
        scope.launch {
            val contacts = processContactPickerResultUri(sessionUri, context)
            // Update UI and persist what you must keep
        }
    }
}
```

Run the query off the main thread. Official sample code uses a coroutine on `Dispatchers.IO`.

## Step 3: Launch ACTION_PICK_CONTACTS

The new action is `ContactsPickerSessionContract.ACTION_PICK_CONTACTS`. Pass requested fields with `EXTRA_PICK_CONTACTS_REQUESTED_DATA_FIELDS` (also referenced in docs as the session contract extras).

```kotlin
val requestedFields = arrayListOf(
    Email.CONTENT_ITEM_TYPE,
    Phone.CONTENT_ITEM_TYPE,
)

val pickContactIntent = Intent(ACTION_PICK_CONTACTS).apply {
    putExtra(EXTRA_USE_SYSTEM_CONTACTS_PICKER, true)
    putStringArrayListExtra(
        EXTRA_PICK_CONTACTS_REQUESTED_DATA_FIELDS,
        requestedFields
    )
}

pickContact.launch(pickContactIntent)
```

The UI changes with the request:

- Phone-only requests can let the user pick a **specific number**
- Multiple fields tend to select a **whole contact record**
- Multi-select uses `Intent.EXTRA_ALLOW_MULTIPLE`
- Cap the count with `EXTRA_PICK_CONTACTS_SELECTION_LIMIT` (example in docs: `5`)
- `EXTRA_PICK_CONTACTS_MATCH_ALL_DATA_FIELDS` filters to contacts that have **every** requested type when you set it to `true`

![Android smartphone standing on a wooden surface](https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=1400&q=80)

## Step 4: Query the session URI

The session URI does **not** support custom `selection` / `selectionArgs`. Query it directly.

Recommended projection from the official sample:

- `Contacts.LOOKUP_KEY`
- `Contacts.DISPLAY_NAME_PRIMARY`
- `Data.MIMETYPE`
- `Data.DATA1`

Group rows by `LOOKUP_KEY`. One person can return several emails and phones. Official best practice is to keep those rows together and, if you need labels such as work or mobile, read the corresponding type columns rather than assuming `DATA1` is enough for your UI.

```kotlin
context.contentResolver.query(sessionUri, projection, null, null, null)
    ?.use { cursor ->
        // Aggregate by LOOKUP_KEY into name + emails + phones
    }
```

Account-specific metadata is stripped. Do not design a feature that depends on "which Google account this contact lives in."

## Step 5: Persist before the session ends

Copy name, numbers, and emails into your own store if the invite flow continues after a process death. Do not keep the session URI as a long-lived pointer.

If you only needed the picker to start an `ACTION_SENDTO` or `ACTION_DIAL` intent, you can skip storage and fire the next intent immediately.

## Backward compatibility

For apps that **target API 37+**, Android **automatically upgrades** existing `Intent.ACTION_PICK` flows to the new picker UI. You get the new chrome without a rewrite.

To use session URIs, multi-field extras, and profile switching the documented way, switch to `ACTION_PICK_CONTACTS` and the new extras.

To **preview** the new UI on Android 17 while still targeting an older SDK, add `EXTRA_USE_SYSTEM_CONTACTS_PICKER` set to `true` on your current `ACTION_PICK` intent.

## User-facing checklist

If you are testing as a user, not shipping code:

1. Use a device or emulator on **Android 17**.
2. Open an updated app that asks you to pick people instead of requesting Contacts permission.
3. Search, switch work/personal if your device has a work profile, and select only what you want to share.
4. Confirm the app cannot list contacts you never selected.

If an app still demands `READ_CONTACTS` for a one-time share sheet, that is a product choice, not an Android 17 requirement.

<div class="video-embed">
<iframe src="https://www.youtube.com/embed/Utmu5Sk3G54" title="Android 17 Deep Dive: Bubbles, Gaming Upgrades, and Privacy Features" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>

## Common mistakes

- Requesting phone **and** email when the screen only sends SMS. Ask for one MIME type.
- Treating the session URI like `ContactsContract.Contacts.CONTENT_URI`. Custom filters are not supported on the session.
- Forgetting to persist. After the process is killed, the grant is gone.
- Building a custom contact list UI "for branding" when the system picker already includes search and multi-select.

## Conclusion

The Android 17 Contact Picker is the right default for "pick people now" flows. Launch `ACTION_PICK_CONTACTS`, declare the MIME types you need, query the session URI on a background thread, and store only what the next screen requires.

Keep `READ_CONTACTS` for products that truly need a live address book. For everyone else, the system picker is less permission friction and a UI you do not have to maintain.

## Sources

- [Contact picker — Android Developers](https://developer.android.com/about/versions/17/features/contact-picker)
- [Android 17 features and APIs](https://developer.android.com/about/versions/17/features)
- [Android 17 features and changes list](https://developer.android.com/about/versions/17/summary)
- [Android 17 is here — Android Developers Blog](https://android-developers.googleblog.com/2026/06/Android-17.html)
- [Android 17 AOSP is here (YouTube)](https://www.youtube.com/watch?v=8rbub6oDBtg)
