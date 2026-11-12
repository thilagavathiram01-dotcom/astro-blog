---
title: "How to Capture High-Res Selfies for ID Verification with CameraX"
description: "Step-by-step guide to use CameraX ResolutionSelector and ImageAnalysis for sharp, high-resolution face captures on Android without OOM crashes."
pubDate: 2026-11-12T14:00:00
heroImage: "https://images.unsplash.com/photo-1706806594795-61ddc51116ca?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Identity verification apps need sharp face captures for liveness checks and deepfake detection. Low-memory devices often crash when apps request high-resolution frames. CameraX solves this with ResolutionSelector and controlled ImageAnalysis pipelines.

SmileID, an identity verification SDK, used these patterns to support 18,000+ Android device types, raise verification pass rates by 20 percent, and process 160 million verifications. Their migration from legacy Camera1 and Camera2 APIs removed stretched previews, rotated captures, and out-of-memory crashes.

This guide shows how to request a target resolution such as 1200x900, set a fallback rule, and process frames on-device with STRATEGY_KEEP_ONLY_LATEST. The approach keeps previews responsive and avoids network overhead for the cropped face region.

## Why ResolutionSelector Matters for Face Capture

Legacy camera APIs force developers to handle OEM quirks manually. Different devices report sensor orientations differently and stretch previews when a fixed size is requested. High-resolution YUV frames can exhaust the limited RAM on entry-level phones.

CameraX abstracts these differences. ResolutionSelector collects supported sizes, filters them by aspect ratio and strategy, then picks the best match across bound use cases. You request a bound size and a fallback rule. CameraX selects the closest available resolution without throwing IllegalArgumentException on unsupported devices.

For identity work, a 4:3 aspect ratio matches typical selfie frames. Pair it with FALLBACK_RULE_CLOSEST_HIGHER_THEN_LOWER to prefer sharper images when the exact size is missing. On constrained devices, switch to FALLBACK_RULE_CLOSEST_LOWER_THEN_HIGHER to stay under memory limits.

![Person holding a smartphone for a close-up selfie](https://images.unsplash.com/photo-1734009027745-a3ae6804c6e3?auto=format&fit=crop&w=800&q=80)

## Set Up the CameraX Pipeline

Add the CameraX dependencies. Use the latest stable camera-core, camera-camera2, and camera-lifecycle artifacts. Request the CAMERA permission at runtime before binding use cases.

Build a ResolutionSelector that targets 1200 by 900 pixels. Attach an AspectRatioStrategy for 4:3 with automatic fallback. Then configure ImageAnalysis with that selector and STRATEGY_KEEP_ONLY_LATEST. The backpressure strategy drops older frames when the analyzer is still busy, which keeps the preview smooth on slow processors.

Bind both Preview and ImageAnalysis to the same lifecycle owner and the front camera. Unbind previous use cases first to avoid conflicts.

```kotlin
val resolutionSelector = ResolutionSelector.Builder()
    .setResolutionStrategy(
        ResolutionStrategy(
            Size(1200, 900),
            ResolutionStrategy.FALLBACK_RULE_CLOSEST_HIGHER_THEN_LOWER
        )
    )
    .setAspectRatioStrategy(AspectRatioStrategy.RATIO_4_3_FALLBACK_AUTO_STRATEGY)
    .build()

val imageAnalysis = ImageAnalysis.Builder()
    .setResolutionSelector(resolutionSelector)
    .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
    .build()

imageAnalysis.setAnalyzer(executor) { imageProxy ->
    // Run face detection or liveness check here
    imageProxy.close()
}

val preview = Preview.Builder().build()
preview.setSurfaceProvider(surfaceProvider)

cameraProvider.unbindAll()
cameraProvider.bindToLifecycle(
    lifecycleOwner,
    CameraSelector.DEFAULT_FRONT_CAMERA,
    preview,
    imageAnalysis
)
```

Always call imageProxy.close() after processing. Skipping the close call leaks buffers and eventually crashes the camera session.

## Process Frames On-Device for Liveness

Inside the analyzer, extract the face region and run on-device checks. ML Kit Face Detection works well here. For higher-resolution input, downscale only the cropped face before feeding the model. This preserves detail for deepfake detection while limiting memory use.

SmileID reported a 4x increase in selfie pixels after the change, yet the uploaded payload size stayed the same because they compressed the cropped face on the device. Process only every few frames if your model is heavy. Keep the analyzer under the frame interval so the preview does not stall.

If you also need still capture, bind ImageCapture with its own ResolutionSelector. Do not enable VideoCapture at the same time unless you carefully manage the use-case combination, because concurrent high-resolution streams can drop quality or fail to bind.

![Close-up of a person's eyes for biometric capture](https://images.unsplash.com/photo-1656100424677-fbb8c6a70966?auto=format&fit=crop&w=800&q=80)

## Tips for Production Stability

Test on low-RAM devices. Requesting the highest available resolution without a memory cap can still trigger OOM on 1 GB phones. Monitor ImageProxy sizes in logs and fall back to a lower bound size when free memory is low.

Handle rotation. ImageProxy reports rotationDegrees. Apply the correct transform before face detection so the model sees an upright face.

Use CameraX’s built-in device quirk workarounds. The library tests daily across more than 190 physical devices in Google’s Camera and Media Test Lab and injects fixes for known OEM issues. You rarely need device-specific if-statements.

For AI-assisted development, the CameraX Skill on GitHub guides agents to generate current lifecycle binding, ResolutionSelector, and MlKitAnalyzer code. Pair it with the official CameraX codelab for the baseline Preview and ImageCapture setup.

Internal links to related Android work: see our guide on [Enable Play Games Sidekick in Google Play Console](/blog/enable-play-games-sidekick-android/) for another lifecycle-aware overlay pattern.

## Conclusion

CameraX ResolutionSelector and STRATEGY_KEEP_ONLY_LATEST let identity apps capture sharp selfies across thousands of Android devices without the crashes that plague raw Camera2 code. Start with a 1200x900 target and 4:3 aspect ratio, process frames on-device, and release ImageProxy objects promptly. The same pattern that scaled SmileID to 160 million verifications works for any app that needs reliable high-resolution face input.

## Sources

- Android Developers Blog: How SmileID Scaled Identity Verification to 18,000+ Android Device Types with CameraX (11 November 2026)
- Android Developers: ResolutionSelector API reference
- Android Developers: Image analysis guide
- YouTube: CameraX concepts (Android Developers)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/I4rDx90Nlus"
    title="CameraX concepts"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>
