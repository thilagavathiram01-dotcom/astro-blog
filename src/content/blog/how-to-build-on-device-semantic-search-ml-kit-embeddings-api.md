---
title: "Build On-Device Semantic Search with ML Kit Embeddings"
description: "Practical guide to on-device semantic search using ML Kit Embeddings API and EmbeddingGemma 2 with AndroidX AppSearch."
pubDate: 2026-11-08T14:00:00
heroImage: "https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "ai", "tutorials", "how-to", "developer"]
noindex: false
---

Users expect apps to find content by meaning, not just matching keywords. The new ML Kit Embeddings API, released as an alpha with Android Dev Summit 2026 intelligent apps updates, lets you generate vector embeddings on-device using EmbeddingGemma 2 and search them with AndroidX AppSearch. Everything stays private and works offline.

This guide shows the exact setup, schema, indexing, and query steps from the official documentation. Pair it with existing on-device agent patterns in our [ADK for Kotlin guide](/blog/adk-kotlin-1-on-device-android-agents/).

## Prerequisites

Your device must support Android AICore. Most supported devices use NPU acceleration; others fall back to CPU with XNNPACK. The Google account on the device needs to be enrolled in the AICore Developer Preview program. Update the AICore Developer Preview APK and Private Compute Services to the latest versions from the Play Store.

The Embeddings API uses EmbeddingGemma 2 (`embedding_gemma_v2`). It supports text and image inputs. Token limit is 256. Each image counts as 140 soft-tokens, leaving 116 for text. Images are downscaled if the shorter side exceeds 768 px. Output dimension is 768.

![Laptop and phone workspace for Android development](https://images.unsplash.com/photo-1753715613434-9c7cb58876b9?auto=format&fit=crop&w=800&q=80)

## Add Dependencies

Add these to your module-level `build.gradle.kts`:

```kotlin
dependencies {
    implementation("com.google.mlkit:genai-embedding:1.0.0-alpha1")
    implementation("androidx.appsearch:appsearch:1.2.0-alpha01")
    implementation("androidx.appsearch:appsearch-local-storage:1.2.0-alpha01")
    implementation("androidx.concurrent:concurrent-futures-ktx:1.3.0")
}
```

Retrieve models with `EmbeddingGeneration.getEmbeddingModels(EmbeddingOptions())`. Check image support at runtime: `model.getMetadata()?.supportedModalities.contains(Modality.IMAGE)`.

## Define the AppSearch Schema

Configure an embedding property with similarity indexing and 8-bit quantization:

```kotlin
val documentSchema = AppSearchSchema.Builder("my_schema_type")
    .addProperty(
        AppSearchSchema.StringPropertyConfig.Builder("text")
            .setCardinality(AppSearchSchema.PropertyConfig.CARDINALITY_OPTIONAL)
            .setIndexingType(AppSearchSchema.StringPropertyConfig.INDEXING_TYPE_PREFIXES)
            .setTokenizerType(AppSearchSchema.StringPropertyConfig.TOKENIZER_TYPE_PLAIN)
            .build()
    )
    .addProperty(
        AppSearchSchema.StringPropertyConfig.Builder("imageUri")
            .setCardinality(AppSearchSchema.PropertyConfig.CARDINALITY_OPTIONAL)
            .setIndexingType(AppSearchSchema.StringPropertyConfig.INDEXING_TYPE_NONE)
            .setTokenizerType(AppSearchSchema.StringPropertyConfig.TOKENIZER_TYPE_NONE)
            .build()
    )
    .addProperty(
        AppSearchSchema.EmbeddingPropertyConfig.Builder("embedding")
            .setCardinality(AppSearchSchema.PropertyConfig.CARDINALITY_OPTIONAL)
            .setIndexingType(AppSearchSchema.EmbeddingPropertyConfig.INDEXING_TYPE_SIMILARITY)
            .setQuantizationType(AppSearchSchema.EmbeddingPropertyConfig.QUANTIZATION_TYPE_8_BIT)
            .build()
    )
    .build()
```

## Index Content

Generate embeddings for text and optional images, then store them with the model signature. The signature prevents incompatible queries later.

```kotlin
suspend fun syncDatabase(documents: List<Pair<String, Uri?>>) {
    val modelSignature = model?.getModelSignature() ?: return
    val docsWithEmbedding = mutableListOf<GenericDocument>()

    for ((index, item) in documents.withIndex()) {
        val (content, imageUri) = item
        val parts = mutableListOf<Part>()
        if (content.isNotBlank()) parts.add(TextPart(content))
        var imagePart: ImagePart? = null
        val vector = try {
            if (imageUri != null && isImageSupported) {
                imagePart = ImagePart(imageUri)
                parts.add(imagePart)
            }
            if (parts.isEmpty()) continue
            val request = EmbeddingRequest(Content(parts))
            model?.generateEmbedding(request)?.embedding?.vector ?: continue
        } finally {
            imagePart?.close()
        }

        val docBuilder = GenericDocument.Builder<GenericDocument.Builder<*>>(
            "my_namespace", "doc_$index", "my_schema_type"
        )
            .setPropertyString("text", content)
            .setPropertyEmbedding("embedding", EmbeddingVector(vector, modelSignature))
        if (imageUri != null) docBuilder.setPropertyString("imageUri", imageUri.toString())
        docsWithEmbedding.add(docBuilder.build())
    }

    // Force override schema and put documents
    val clearRequest = SetSchemaRequest.Builder().setForceOverride(true).build()
    session?.setSchemaAsync(clearRequest)?.await()
    val schemaRequest = SetSchemaRequest.Builder().addSchemas(documentSchema).build()
    session?.setSchemaAsync(schemaRequest)?.await()
    val putRequest = PutDocumentsRequest.Builder().addGenericDocuments(docsWithEmbedding).build()
    session?.putAsync(putRequest)?.await()
}
```

Schedule heavy indexing with WorkManager so it runs only when the device is idle and charging.

## Run Semantic Search

Convert the query (text and/or image) into an embedding, then search with cosine similarity.

Recommendations from the docs:
- Metric: `SearchSpec.EMBEDDING_SEARCH_METRIC_TYPE_COSINE`
- Ranking: `"sum(this.matchedSemanticScores(getEmbeddingParameter(0)))"`
- Filter: `"semanticSearch(getEmbeddingParameter(0), $threshold)"` (start at 0.5)

```kotlin
suspend fun search(
    queryText: String,
    imageUri: Uri? = null,
    threshold: Double = 0.5
): List<Triple<String, Uri?, Double>> {
    val modelSignature = model?.getModelSignature() ?: return emptyList()
    val parts = mutableListOf<Part>()
    if (queryText.isNotBlank()) parts.add(TextPart(queryText))
    var imagePart: ImagePart? = null
    val queryVector = try {
        if (imageUri != null && isImageSupported) {
            imagePart = ImagePart(imageUri)
            parts.add(imagePart)
        }
        if (parts.isEmpty()) return emptyList()
        val request = EmbeddingRequest(Content(parts))
        model?.generateEmbedding(request)?.embedding?.vector ?: return emptyList()
    } finally {
        imagePart?.close()
    }

    val searchSpec = SearchSpec.Builder()
        .addFilterSchemas("my_schema_type")
        .setDefaultEmbeddingSearchMetricType(SearchSpec.EMBEDDING_SEARCH_METRIC_TYPE_COSINE)
        .setRankingStrategy("sum(this.matchedSemanticScores(getEmbeddingParameter(0)))")
        .setListFilterQueryLanguageEnabled(true)
        .setResultCountPerPage(5)
        .addEmbeddingParameters(EmbeddingVector(queryVector, modelSignature))
        .build()

    val queryExpression = "semanticSearch(getEmbeddingParameter(0), $threshold)"
    val results = session?.search(queryExpression, searchSpec) ?: return emptyList()

    return try {
        val page = results.nextPageAsync.await()
        page.map {
            val text = it.genericDocument.getPropertyString("text") ?: ""
            val matchedImageUri = it.genericDocument.getPropertyString("imageUri")?.let(Uri::parse)
            Triple(text, matchedImageUri, it.rankingSignal)
        }
    } finally {
        results.close()
    }
}
```

![Code on a laptop screen for Android development](https://images.unsplash.com/photo-1763568258187-a0d90864ed66?auto=format&fit=crop&w=800&q=80)

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/p-SZ1rWvErU"
    title="On-device intelligence: Optimized performance and quality using Android ML Kit APIs"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Hybrid Search and Reindexing

For the best experience, combine keyword search (instant type-ahead while the user types) with semantic search (when the query is complete or at word boundaries). AppSearch supports both.

Embeddings from different model versions live in incompatible spaces. Reindex whenever the model updates. Call `model.getMetadata()` and check `deprecationDate` and `shutdownDate` (UTC LocalDate). Start reindexing during the deprecation window and finish before shutdown. Google publishes timelines in ML Kit release notes.

## Best Practices

- Always close ImagePart resources in a finally block.
- Store the modelSignature with every embedding.
- Use WorkManager for background indexing.
- Tune the similarity threshold (0.5 is a common starting point).
- Confirm image modality support at runtime before using images.
- Keep token usage under the 256 limit; images consume 140.

## Conclusion

The ML Kit Embeddings API with EmbeddingGemma 2 and AppSearch gives you production-ready on-device semantic search without managing models or shipping large weights. Start with the schema and indexing snippets above, add hybrid keyword fallback, and plan reindexing around model lifecycle dates. The alpha API is available now for AICore Developer Preview devices.

## Sources

- [Semantic search using the Embeddings API](https://developers.google.com/ml-kit/genai/embedding/android) — Google for Developers (updated 5 November 2026)
- [What’s new in intelligent apps at the Android Developer Summit](https://developer.android.com/blog/posts/android-intelligence-system-in-app-agents-ads) — Android Developers Blog (5 November 2026)
- [On-device intelligence: Optimized performance and quality using Android ML Kit APIs](https://www.youtube.com/watch?v=p-SZ1rWvErU) — Android Developers (Android Dev Summit 2026)
- [EmbeddingGemma 2 announcement](https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/) — Google Blog
