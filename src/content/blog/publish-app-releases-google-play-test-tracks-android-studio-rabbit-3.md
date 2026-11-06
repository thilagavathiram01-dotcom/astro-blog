---
title: "How to Publish to Play Test Tracks in Android Studio Rabbit 3"
description: "Upload Android app releases directly to Google Play internal and other test tracks from Android Studio Rabbit 3 Canary with the Publish for Testing option."
pubDate: 2026-11-06T18:00:00
heroImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer", "google"]
noindex: false
---

Android Studio Rabbit 3 Canary adds a direct path from the signed bundle wizard to Google Play Console test tracks. You finish the Generate Signed App Bundle flow and select Publish for Testing instead of stopping at a local file. The integration handles the upload for an initial release of a new app to an internal test track, and it also supports releases of existing apps to other test tracks. You must already be registered on Google Play Console.

This cuts the manual export-and-upload step that previously sat between Android Studio and the Play Console. For teams that iterate quickly on internal builds, the change keeps the entire release process inside the IDE.

## What the feature covers

The official Android Studio preview notes describe the capability in clear terms. After you generate a signed Android App Bundle, a new option appears that continues the flow into Publish for Testing. The first supported case is uploading the initial release of a brand-new app to a Play Console internal test track. Existing apps can use the same path to send releases to other types of test tracks.

Registration on Google Play Console is required before the option works. The feature does not replace the full Play Console setup process. Store listings, content declarations, and tester lists still live in the Console. The new step simply removes the need to download the AAB and re-upload it manually for the supported test-track cases.

![Android phone showing app screens](https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80)

## Prerequisites before you start

Confirm these items first.

- Android Studio Rabbit 3 Canary installed and updated. Download it from the official preview page if you do not already have a Canary channel build.
- A Google Play Console account with the appropriate permissions. You need the ability to release apps to testing tracks.
- An app project that builds a signed Android App Bundle. New apps must use the AAB format.
- Play App Signing configured for the app if this is the first release. Google generates the app signing key by default when you upload the first bundle.
- Version code and version name incremented correctly in the module-level build file so Play Console accepts the upload.

If you are creating a brand-new app, complete the basic app creation steps in Play Console first so the package name is registered. The Studio integration expects that registration.

## Step-by-step: generate and publish for testing

Open your project in Android Studio Rabbit 3 Canary.

1. Select **Build > Generate Signed Bundle / APK**.
2. Choose **Android App Bundle** and click Next.
3. Select or create your upload keystore, enter the passwords, and choose the release build variant.
4. Finish the signing and build steps. Android Studio produces the signed AAB.
5. At the end of the flow, select the new **Publish for Testing** option.
6. Follow the prompts to choose the target test track. For a brand-new app the supported destination is the internal test track. For an existing app you can target other test tracks.
7. Complete the upload. The bundle is sent directly to the selected track in Play Console.

Once the upload succeeds, open Play Console to add release notes, assign testers, and review the release. Internal testing tracks typically make the build available to invited testers within minutes.

![Developer workspace with laptop and phone](https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80)

## After the upload

The Publish for Testing step ends when the bundle reaches Play Console. You still manage the rest of the release in the Console:

- Add or confirm testers for the track.
- Write release notes that appear to testers.
- Review any policy or signing warnings that appear.
- Promote the release to a later track or to production when ready.

For new personal developer accounts created after November 2023, Google still requires a closed test with at least 12 testers opted in continuously for 14 days before production access is granted. Internal testing alone does not satisfy that requirement. Use the Studio upload to speed the internal track, then move to a closed test track for the official requirement.

## Tips for smoother releases

Keep version codes strictly increasing. Play Console rejects a bundle whose version code is equal to or lower than a previous upload on the same track.

Use a dedicated upload keystore and back it up securely. The first upload key becomes the permanent upload key for the app under Play App Signing.

Test the release on a physical device by installing from the Play Store after the track is live. This confirms that the AAB was processed correctly and that device-specific splits work as expected.

If you also use Bring Your Own Agent or Model Assignment in the same Canary build, note that those features are independent. Model Assignment lets you assign different models to different IDE tasks, and BYOA is already stable in Rabbit 2. The Publish for Testing flow does not depend on either.

You can read more about assigning models in our guide to [Assign Different AI Models in Android Studio Rabbit 3](/blog/assign-ai-models-android-studio-rabbit-3/). For UI regression checks before you upload, see the [Compose Preview Screenshot Testing setup](/blog/compose-preview-screenshot-testing-android-studio-rabbit/).

## Watch the related session

The Android Dev Summit 2026 tools session covers the broader set of Android Studio and Android CLI updates that arrived around the same time.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/w-auFZP5gJo"
    title="The latest in Android dev tools from Android Dev Summit 2026"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

The Publish for Testing option in Android Studio Rabbit 3 Canary removes a small but frequent friction point between a signed bundle and a Play Console test track. Generate the signed AAB, choose Publish for Testing at the end of the wizard, and the bundle lands on the internal track for a new app or on other test tracks for an existing one. Finish tester setup and release notes in Play Console, then install from the Play Store to confirm the result. The feature requires a registered Play Console account and works only with the supported track cases described in the preview notes.

## Sources

- Android Developers: Release notes for Android Studio preview (Rabbit 3 features)
- Android Developers: Android Studio Preview downloads
- Google Play Console Help: Prepare and roll out a release
- Android Developers YouTube: The latest in Android dev tools from Android Dev Summit 2026
