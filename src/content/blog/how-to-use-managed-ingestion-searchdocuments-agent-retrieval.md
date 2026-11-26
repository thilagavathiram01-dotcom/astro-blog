---
title: "How to Use Managed Ingestion and SearchDocuments in Agent Retrieval"
description: "Step-by-step guide to managed ingestion and SearchDocuments in Agent Retrieval. Get cited answers from PDFs, Office files, and videos with one API call."
pubDate: 2026-11-26T21:00:00
heroImage: "https://images.unsplash.com/photo-1577648188599-291bb8b831c3?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["ai-tools", "tutorials", "how-to", "developer", "google", "ai"]
noindex: false
---

Agents need accurate answers from your own files. Building the pipeline to parse PDFs, chunk text, embed vectors, and track page numbers takes time that has nothing to do with your app logic.

Agent Retrieval (formerly Vector Search 2.0) now offers managed ingestion and SearchDocuments in Public Preview. Point a data store at Cloud Storage. The service handles parsing, segmentation, and embedding with Gemini Embedding 2. One SearchDocuments call returns matching passages with page numbers or video timestamps.

This guide shows the exact steps to create a data store, import files, and search with citations. All details come from the Google Developers Blog announcement on 24 November 2026 and linked documentation.

## What Managed Ingestion and SearchDocuments Do

Managed ingestion replaces the custom pipeline. You import PDF, DOCX, PPTX, XLSX, TXT, or video files (MP4, MOV, WebM, MKV, and others) from Cloud Storage. The service creates a backing Collection, segments the content, and embeds it.

SearchDocuments then queries the data store with a plain text string. Results include the matching text, source file URI, and location (page range for documents or start/end time for videos). Hybrid search (semantic + full-text) runs automatically for documents. No Collection name, vector field, or task type is required.

In Google’s tests, 18 Alphabet investor PDFs became searchable with page citations in about 9 minutes. Nineteen minutes of video returned results in 0.3–0.5 seconds per query by both visuals and spoken audio.

![Files and documents on a computer screen ready for ingestion](https://images.unsplash.com/photo-1577648188599-291bb8b831c3?auto=format&fit=crop&w=800&q=80)

## Step 1: Create a Data Store

A data store holds your files and the parsing configuration. During Public Preview the APIs run at v1beta over REST. Use an authorized session from google-auth.

Choose a document type: UNSTRUCTURED for documents or VIDEO for video files. Two segmentation modes exist. Chunk segmentation (default) splits text into 100–500 token chunks and supports layout parsing that detects tables and headings. Page segmentation produces one segment per page.

Both modes record page numbers so you can cite or filter by range. Regions are limited to us-east4 or europe-west4. Grant the roles/vectorsearch.serviceAgent role to the Agent Retrieval service agent so it can read your bucket.

## Step 2: Import Your Files

Point the import at URI patterns such as gs://my-bucket/reports/*.pdf or supply a JSONL manifest to set custom document IDs and metadata.

The import runs as a long-running operation. Re-importing the same files updates existing documents rather than creating duplicates. Files whose content has not changed are skipped. Document imports skip files larger than 200 MB and handle up to 100,000 documents at a time. Video imports skip files larger than 600 GB.

In the tests, video imports for five sample files took 20–45 minutes because of transcoding and embedding. Run one import at a time per data store; different data stores can import in parallel.

![Data and code on a screen representing the search results](https://images.unsplash.com/photo-1640552435845-d65c23b75934?auto=format&fit=crop&w=800&q=80)

## Step 3: Search With One Call

SearchDocuments needs only the data store identifier and a text query. Each result is a segment with the matching text, page range (or timestamp), and source file URI.

Hybrid retrieval fuses semantic and full-text results so both paraphrased questions and exact terms match. Results are segment-level, so multiple passages can come from the same document, each with its own citation.

Optional reranking retrieves extra candidates and reorders them with the Ranking API (semantic-ranker-fast@latest). For the query “How many employees does Alphabet have?”, plain hybrid search mixed balance-sheet pages into the top results. With reranking, every top result reported the actual headcount.

## Narrow Results With Filters

Pass a filter expression that uses the same field paths returned in results. You can also restrict the search to specific document_ids. Output fields let you include custom metadata with each hit.

In one test, searching “What did the CEO say about AI?” with a page-1 filter returned CEO quotes from the first page of five different earnings releases.

## Searching Inside Videos

Create a VIDEO data store, import the files, and call SearchDocuments the same way. The service transcodes each video, splits it into fixed windows (default 30 seconds), and embeds the frames. Results carry the matching start and end time.

A query for “Cucumbers being sorted by a machine” returned the 03:20–03:40 segment of a sample machine-learning video without any tags or captions. Short windows (10–20 seconds) give precise timestamps; longer windows (up to 80 seconds) add context for thematic queries.

Audio mode embeds the first audio track together with the frames. A query about spoken statements in a keynote found the correct moments only in the audio-enabled data store.

## Production Tips

Managed ingestion itself incurs no separate charge during Public Preview (billing starts at general availability). The backing Collection follows standard Agent Retrieval pricing.

Delete a data store with force=true and backing_collection_deleted=true, or the Collection remains. Deletion runs in the background and took about 20 minutes in tests. Reranking is not supported on VIDEO data stores.

If you need finer control, drop down to the backing Collection and query it directly with the full Agent Retrieval APIs. For most file-based agents the data-store path is faster to ship.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/-L5khDHrQSE"
    title="Give your app search superpowers: Agent Retrieval (Vector Search 2.0)"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Managed ingestion and SearchDocuments remove the custom parsing, chunking, and embedding work that usually sits between Cloud Storage and a usable retrieval tool. Agents receive cited passages—one page range or one video timestamp—from a single API call.

Start with a small set of PDFs or a short video in us-east4 or europe-west4. Confirm the service agent permissions, import once, then iterate on filters and reranking. When the retrieval tool is stable, pair it with the rest of your agent stack.

For related agent security practices, see our guide on [How to Secure AI Agents with Google Agent Anomaly Detection](/blog/secure-ai-agents-google-agent-anomaly-detection-guide/).

## Sources

- [From Files to Cited Answers in One API Call: Managed Ingestion and SearchDocuments in Agent Retrieval](https://developers.googleblog.com/from-files-to-cited-answers-in-one-api-call-managed-ingestion-and-searchdocuments-in-agent-retrieval/) — Google Developers Blog, 24 November 2026
- [Search documents in a data store](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/query-search/search-data-stores) — Google Cloud documentation
- [Agent Retrieval overview](https://docs.cloud.google.com/gemini-enterprise-agent-platform/build/vector-search-2/overview) — Google Cloud documentation
- [Document search notebook](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/embeddings/agent-retrieval-search-documents.ipynb) — Google Cloud generative-ai samples
- [Video search notebook](https://github.com/GoogleCloudPlatform/generative-ai/blob/main/embeddings/agent-retrieval-video-search.ipynb) — Google Cloud generative-ai samples
