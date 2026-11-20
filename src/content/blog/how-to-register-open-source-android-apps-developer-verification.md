---
title: "How to Register Open-Source Android Apps for Verification"
description: "Register open-source Android apps in Android Developer Console. Keep seamless installs for users as verification expands in 2027."
pubDate: 2026-11-20T18:00:00
heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer", "security"]
noindex: false
---

Open-source Android apps face a clear deadline. Google’s developer verification expands globally in January 2027. Registered apps install the same way users expect today. Unregistered ones trigger the advanced flow on certified devices.

You do not have to register to keep distributing on open-source repositories. Registration simply preserves the normal install path. The process lives in the Android Developer Console or the Android developer verification tab in Play Console. It links your verified identity to the package name and signing keys.

![Person holding black Android smartphone](https://images.unsplash.com/photo-1592890288564-76628a30a657?auto=format&fit=crop&w=800&q=80)

## Why open-source maintainers should act now

Many open-source projects distribute APKs from GitHub, F-Droid mirrors, or their own sites. Some repositories re-sign builds with their own keys. Others use the developer’s original signing key. Google published a dedicated guide for both cases in late 2025 and updated it through 2026.

Registration takes less than ten minutes for a new app. Existing apps need an extra ownership proof step when the repository re-signs. Completing it early avoids support questions once the requirement reaches more countries. Users who prefer the advanced flow can still install unregistered apps after a one-time setup. Most people will not enable that option.

If you already cover limited-distribution accounts for testing, full registration is the next step for public open-source releases. See also our guide on [enabling the advanced flow for sideloading unverified apps](/blog/enable-advanced-flow-sideloading-unverified-apps-android/).

## Before you begin

Create or sign in to an Android Developer Console account if you distribute only outside Google Play. Use your existing Play Console account if you also publish on Play. Students and hobbyists can start with a limited distribution account (free, up to 50 authorized devices, no government ID). Full distribution accounts require identity verification and a one-time $25 fee.

Extract the SHA-256 certificate fingerprint of your signing key. The Help Center guide shows how to pull it from a keystore or from an APK with `keytool` or `apksigner`. You will need this value for every package you register.

## Register a new app

Follow these steps when the package name has never been installed on Android devices, or when the open-source repository uses your own signing key.

1. Open the Android Developer Console or the Android developer verification tab in Play Console.
2. Click **Register package name**.
3. Enter the package name of your new app and click **Next**.
4. Click **Add key** and paste the SHA-256 fingerprint of your signing key.
5. If the repository distributes the app with your key, stop here. The package is registered to your identity.
6. If the repository re-signs the app with its own key, publish the app, download the store-signed APK, extract its SHA-256 fingerprint, and add that key in the console as well.

In the rare case that the new app reaches 50 or more installs from the repository before you add the repository key, the console asks you to verify ownership. Follow the existing-app steps below (upload an APK that contains the provided `adi-registration.properties` snippet).

## Register an existing app

Use this path when the open-source repository re-signs builds with its own key and the app already has installs.

1. Download the platform-signed APK from the open-source platform.
2. Extract the SHA-256 certificate fingerprint from that APK.
3. In the console, click **Register package name**, enter the existing package name, and click **Next**.
4. Click **Select key**. If the app has fewer than 50 known installs, choose **Add key** and enter the fingerprint instead.
5. Select the extracted fingerprint from the eligible list. If it does not appear, click **Show another way to register**, then **Show fingerprints for other keys**, and pick it.
6. Click **Add key**.
7. Click **Upload APK**.
8. Copy the snippet the console provides.
9. In your app’s source tree, create `assets/adi-registration.properties` and paste the snippet into that file.
10. Publish a new version containing the properties file to the repository.
11. Download the newly signed APK from the repository.
12. Upload that APK in the console.

Once the server verifies the signature and the snippet, the package status changes to **Registered**. You receive an email confirmation.

![Smartphone showing Android home screen](https://images.unsplash.com/photo-1760900051041-90417b9c110e?auto=format&fit=crop&w=800&q=80)

## Tips for open-source projects

- Document the registration status in your README so contributors and users know the app is verified.
- If your CI re-signs every release, automate fingerprint extraction and key addition via the Android Developer Console API.
- Register every package name you ship, including debug, staging, and flavor suffixes.
- Keep the private key that matches the registered fingerprint secure. Loss of that key blocks future ownership proofs for the same package.
- Monitor the console for status changes. Large install counts can change which keys are eligible.

The advanced flow remains available for users who want to install unregistered builds. Registration is still the path that keeps the ordinary install button working for everyone else.

## Watch the official walkthrough

Google’s video covers account setup, identity verification, and package registration for apps distributed outside Play.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/jEATR5sF5Lo"
    title="Android developer verification walkthrough"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Registering open-source Android apps links your verified identity to the package name and the keys users actually install. New apps need only the package name and SHA-256 fingerprint. Existing apps that the repository re-signs need the ownership challenge with the `adi-registration.properties` file. Completing the steps now keeps the install experience unchanged for your users when the 2027 global rollout reaches their devices.

Sources: Android Developers open-source app registration guide; Android Developers Blog announcement on expanding verification in 2027.
