---
title: "How to Implement Real-Time Face Detection with CameraX and ML Kit"
description: "Step-by-step guide to add real-time face detection to Android apps using CameraX ImageAnalysis and ML Kit FaceDetector."
pubDate: 2026-11-15T14:00:00
heroImage: "https://images.unsplash.com/photo-1553271081-c1f2febf26bd?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "how-to", "developer"]
noindex: false
---

Real-time face detection powers selfie filters, attendance systems, and identity checks. Google ML Kit provides an on-device FaceDetector that works with CameraX frames. This guide shows the complete setup from dependencies to overlay drawing.

You need Android Studio, a project targeting API 21 or higher, and basic Kotlin knowledge. The official ML Kit face detection documentation confirms the minimum SDK and image size requirements.

## Add the required dependencies

Open your module-level `build.gradle` (or `build.gradle.kts`). Add CameraX and the ML Kit face detection library.

For the bundled model:

```kotlin
implementation("androidx.camera:camera-core:1.4.0")
implementation("androidx.camera:camera-camera2:1.4.0")
implementation("androidx.camera:camera-lifecycle:1.4.0")
implementation("androidx.camera:camera-view:1.4.0")
implementation("com.google.mlkit:face-detection:16.1.7")
```

Use version 1.4.0 or the latest stable CameraX release. The ML Kit version matches the current Google documentation. Sync the project after adding these lines.

If you prefer the unbundled model that downloads via Google Play Services, replace the last line with:

```kotlin
implementation("com.google.android.gms:play-services-mlkit-face-detection:17.1.0")
```

The unbundled option keeps the APK smaller but requires a network connection on first run. Google recommends declaring the model in the manifest for install-time download when using the Play Services version.

## Configure the FaceDetector options

Create a `FaceDetectorOptions` object before you start the camera. Performance mode, landmarks, and classification settings control speed versus detail.

```kotlin
val options = FaceDetectorOptions.Builder()
    .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_FAST)
    .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_NONE)
    .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_NONE)
    .setMinFaceSize(0.15f)
    .enableTracking()
    .build()

val faceDetector = FaceDetection.getClient(options)
```

Fast mode reduces latency for live camera frames. Disable landmarks and classification when you only need bounding boxes. Enable tracking so each face receives a stable ID across frames. The official docs note that contour mode and tracking should not run together because contour detection returns only the largest face.

For high-resolution still captures instead of live analysis, see our guide on [high-res selfies for ID verification with CameraX](/blog/camerax-high-res-selfie-identity-verification/).

![Person holding a smartphone camera](https://images.unsplash.com/photo-fowcOHlJYCs?auto=format&fit=crop&w=800&q=80)

## Bind CameraX Preview and ImageAnalysis

Request the `CAMERA` permission at runtime. Then obtain a `ProcessCameraProvider` and bind the use cases to the lifecycle.

```kotlin
val cameraProviderFuture = ProcessCameraProvider.getInstance(context)

cameraProviderFuture.addListener({
    val cameraProvider = cameraProviderFuture.get()

    val preview = Preview.Builder().build()
    preview.setSurfaceProvider(previewView.surfaceProvider)

    val imageAnalysis = ImageAnalysis.Builder()
        .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST)
        .setTargetResolution(Size(640, 480))
        .build()

    imageAnalysis.setAnalyzer(cameraExecutor, FaceAnalyzer(faceDetector))

    val cameraSelector = CameraSelector.DEFAULT_FRONT_CAMERA

    cameraProvider.unbindAll()
    cameraProvider.bindToLifecycle(
        lifecycleOwner,
        cameraSelector,
        preview,
        imageAnalysis
    )
}, ContextCompat.getMainExecutor(context))
```

`STRATEGY_KEEP_ONLY_LATEST` drops older frames so the analyzer never falls behind. A 640×480 target resolution balances speed and the 480×360 minimum size recommended by ML Kit. Front-camera selection works well for selfie-style detection.

## Process each frame in the Analyzer

Implement `ImageAnalysis.Analyzer`. Convert the `ImageProxy` to an ML Kit `InputImage` and call `process`.

```kotlin
class FaceAnalyzer(
    private val faceDetector: FaceDetector,
    private val overlay: FaceOverlay
) : ImageAnalysis.Analyzer {

    override fun analyze(imageProxy: ImageProxy) {
        val mediaImage = imageProxy.image
        if (mediaImage == null) {
            imageProxy.close()
            return
        }

        val rotation = imageProxy.imageInfo.rotationDegrees
        val inputImage = InputImage.fromMediaImage(mediaImage, rotation)

        faceDetector.process(inputImage)
            .addOnSuccessListener { faces ->
                overlay.setFaces(faces, imageProxy.width, imageProxy.height)
            }
            .addOnFailureListener { e ->
                Log.e("FaceAnalyzer", "Detection failed", e)
            }
            .addOnCompleteListener {
                imageProxy.close()
            }
    }
}
```

Always close the `ImageProxy` inside the complete listener. Failure to close it freezes the camera pipeline. The overlay view receives the list of `Face` objects and draws rectangles or landmarks on the preview surface.

![Man holding a vintage camera](https://images.unsplash.com/photo-1725886294719-d2a0948b4b52?auto=format&fit=crop&w=800&q=80)

## Draw bounding boxes on a custom overlay

Create a custom `View` that sits above the `PreviewView`. Override `onDraw` to paint rectangles that match the detected faces after accounting for rotation and scaling.

```kotlin
class FaceOverlay(context: Context) : View(context) {
    private var faces: List<Face> = emptyList()
    private var imageWidth = 0
    private var imageHeight = 0
    private val paint = Paint().apply {
        color = Color.GREEN
        style = Paint.Style.STROKE
        strokeWidth = 4f
    }

    fun setFaces(detected: List<Face>, width: Int, height: Int) {
        faces = detected
        imageWidth = width
        imageHeight = height
        invalidate()
    }

    override fun onDraw(canvas: Canvas) {
        super.onDraw(canvas)
        if (faces.isEmpty() || imageWidth == 0) return

        val scaleX = width.toFloat() / imageWidth
        val scaleY = height.toFloat() / imageHeight

        for (face in faces) {
            val box = face.boundingBox
            val left = box.left * scaleX
            val top = box.top * scaleY
            val right = box.right * scaleX
            val bottom = box.bottom * scaleY
            canvas.drawRect(left, top, right, bottom, paint)
        }
    }
}
```

Adjust the scale factors if the preview aspect ratio differs from the analysis resolution. For front-camera mirrors, flip the x-coordinates before drawing.

## Performance tips for live detection

ML Kit processes frames on a background thread. Keep the analyzer light so it returns before the next frame arrives.

- Prefer `PERFORMANCE_MODE_FAST` for continuous preview.
- Lower the analysis resolution when the device struggles.
- Avoid enabling contour mode and tracking at the same time.
- Close every `ImageProxy` promptly.
- Test on mid-range devices; high-end phones hide latency problems.

The Google documentation states that faces should occupy at least 100×100 pixels for reliable detection. Guide the user to fill more of the frame when accuracy drops.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/aMJuRYHYp3Q"
    title="ML-Kit Vision API Face Detection with CameraX"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Next steps and production considerations

Once bounding boxes appear, you can read smile probability, eye-open probability, or head Euler angles from each `Face` object. Store tracking IDs to follow the same person across frames.

For identity verification flows that need sharp still images, combine this live detector with the high-resolution capture path described in the CameraX selfie guide. Always request the camera permission with a clear rationale and handle denial gracefully.

Test the pipeline under different lighting conditions and with multiple faces. The detector returns an empty list when no faces meet the size and confidence thresholds. Log the number of faces and average processing time during development.

## Sources

- [Detect faces with ML Kit on Android](https://developers.google.com/ml-kit/vision/face-detection/android)
- [CameraX ImageAnalysis documentation](https://developer.android.com/media/camera/camerax/analyze)
- [ML Kit Vision quickstart sample](https://github.com/googlesamples/mlkit/tree/master/android/vision-quickstart)
