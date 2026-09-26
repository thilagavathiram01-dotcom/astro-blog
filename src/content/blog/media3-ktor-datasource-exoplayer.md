---
title: "Use Media3 KtorDataSource With ExoPlayer"
description: "Wire Media3 1.11 KtorDataSource into ExoPlayer for Kotlin-first HTTP playback instead of Cronet or OkHttp."
pubDate: 2026-09-20T14:00:00
heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["android", "tutorials", "developer", "how-to"]
noindex: false
---

Media3 1.11 shipped a Kotlin-first HTTP stack for ExoPlayer. The new `media3-datasource-ktor` module exposes `KtorDataSource`, an `HttpDataSource` that delegates to Ktor's `HttpClient`.

If your app already uses Ktor for APIs, you can share one client for REST calls and media bytes. This guide shows how to add the module, build a factory, and attach it to `ExoPlayer` without inventing extra stats.

## What Media3 1.11 added

On 11 August 2026, Google published Media3 1.11. The official post lists Compose player slots, `PlayerPool`, Cast SystemUI Output Switcher support, Ogg and WAV muxers, and the Ktor network extension.

`KtorDataSource` sits next to the older Cronet and OkHttp data source modules. Android Developers documents it as an `HttpDataSource` that sets request headers from the `DataSpec`, then `setRequestProperty`, then factory defaults.

Use it when you want coroutine-friendly HTTP and a single Kotlin client. Stay on DefaultHttpDataSource, Cronet, or OkHttp if those stacks already work for you.



![Laptop and code editor used for Android media development](https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80)



## Add the Media3 1.11 modules

Pin one version. Official getting-started docs currently list `1.11.1` for ExoPlayer and Compose UI.

```kotlin
val media3 = "1.11.1"

dependencies {
    implementation("androidx.media3:media3-exoplayer:$media3")
    implementation("androidx.media3:media3-datasource-ktor:$media3")
    implementation("androidx.media3:media3-ui-compose-material3:$media3")
    implementation("io.ktor:ktor-client-okhttp:3.0.3")
    implementation("io.ktor:ktor-client-core:3.0.3")
}
```

`KtorDataSource.Factory` requires a Ktor `HttpClient`. On Android the usual engine is OkHttp. You can swap CIO or other engines if your project already standardized on them.

Declare internet permission in the manifest. Media playback still needs `INTERNET` even when Ktor wraps the socket.

## Build a shared HttpClient

Create the client once. Reuse it for JSON APIs and for the player factory so connection pools stay warm.

```kotlin
fun createMediaHttpClient(): HttpClient =
    HttpClient(OkHttp) {
        expectSuccess = false
        engine {
            config {
                followRedirects(true)
                retryOnConnectionFailure(true)
            }
        }
    }
```

`expectSuccess = false` matters. ExoPlayer reads status codes itself. If Ktor throws on 4xx or 5xx, the player never sees the HTTP error as a media load error.

Keep timeouts on the engine, not only on ExoPlayer. Range requests for seeking still go through this client.

## Create KtorDataSource.Factory

The public constructor takes an `HttpClient`, an optional user agent, an optional content-type predicate, and an optional `TransferListener`.

```kotlin
fun ktorDataSourceFactory(
    httpClient: HttpClient,
    transferListener: TransferListener? = null,
): KtorDataSource.Factory =
    KtorDataSource.Factory(
        httpClient,
        /* userAgent = */ "MyApp/1.0",
        /* contentTypePredicate = */ null,
        transferListener,
    ).setDefaultRequestProperties(
        mapOf("Accept" to "*/*"),
    )
```

Header order is documented: `DataSpec` headers win, then `setRequestProperty`, then these defaults. Auth tokens belong in factory defaults or a wrapper that refreshes them before `createDataSource()`.

Pass a `TransferListener` if you need bandwidth estimates for analytics. ExoPlayer already tracks transfer events for adaptive track selection when you attach the factory to `DefaultDataSource`.

## Attach the factory to ExoPlayer

Wrap Ktor with `DefaultDataSource.Factory` so local files, assets, and content URIs still work. HTTP and HTTPS go to Ktor.

```kotlin
fun buildPlayer(context: Context, httpClient: HttpClient): ExoPlayer {
    val httpFactory = ktorDataSourceFactory(httpClient)
    val dataSourceFactory = DefaultDataSource.Factory(context, httpFactory)
    val mediaSourceFactory = DefaultMediaSourceFactory(context)
        .setDataSourceFactory(dataSourceFactory)

    return ExoPlayer.Builder(context)
        .setMediaSourceFactory(mediaSourceFactory)
        .build()
        .also { player ->
            player.setMediaItem(
                MediaItem.fromUri("https://storage.googleapis.com/exoplayer-test-media-1/mp4/android-screens-2030.mp4"),
            )
            player.prepare()
        }
}
```

Release the player in `onDispose` or when the ViewModel clears. Do not close the shared `HttpClient` until the process no longer needs network media.

## Bind a Compose player

Media3 1.11 documents the Material 3 `Player` composable with slots. You can keep Default controls while the bytes come from Ktor.

```kotlin
@Composable
fun KtorBackedPlayer(player: Player) {
    Player(
        player = player,
        topControls = { PlayerDefaults.TopControls(player) },
        centerControls = { PlayerDefaults.CenterControls(player) },
        bottomControls = { PlayerDefaults.BottomControls(player) },
    )
}
```

If you also ship a short-form feed, pair this data source with the pool APIs covered in [How to use Media3 PlayerPool in Compose](/blog/media3-1-11-playerpool-compose/). Recycled players still share the same `DataSource.Factory`.



![Close-up of headphones and a phone playing video](https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=800&q=80)



## Compare Ktor, OkHttp, and Cronet

Pick one HTTP module per app unless you have a measured reason to mix them.

| Module | When it fits |
| --- | --- |
| `media3-datasource-ktor` | Shared Ktor client, Kotlin-first code |
| `media3-datasource-okhttp` | Existing OkHttp interceptors and cache |
| `media3-datasource-cronet` | Play services Cronet / HTTP/3 on device |
| `DefaultHttpDataSource` | No extra HTTP library |

Ktor does not replace adaptive streaming logic. HLS and DASH still run inside ExoPlayer. The data source only fetches segments and manifests.

Do not enable Ktor content negotiation plugins that consume the body as JSON. Media responses must stay raw bytes.

## Handle auth, ranges, and errors

Signed URLs expire. Refresh the `MediaItem` URI or the default `Authorization` header before the next `prepare()`.

Seeking sends HTTP range requests. Leave range support on in the engine. If a CDN rejects ranges, ExoPlayer cannot scrub.

Use `rememberErrorState` from `media3-ui-compose` if you show an overlay. Media3 1.11 added that holder plus `ErrorText` and a default Material 3 error overlay.

Test redirects. Ktor and ExoPlayer both have redirect settings. Pick one owner so a 302 does not bounce twice.

## Watch a Media3 playback walkthrough

Google's I/O session covers ExoPlayer, preloading, Cast, and HDR playback updates that sit next to the 1.11 network module.

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/Ch1EwR18Dqc"
    title="Supercharge Android media experiences with Jetpack Media3 and CameraX"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Tips that keep playback stable

Share one `HttpClient` per process. Creating a client per player wastes sockets.

Call `httpClient.close()` only in application shutdown tests, not in every composable dispose.

Keep Media3 and Ktor versions in a catalog. The datasource artifact is `androidx.media3:media3-datasource-ktor`.

Log `DataSpec.uri` in a `TransferListener` during debug. Confirm the player hits your CDN, not a fallback URL.

For compact controls while audio continues, see [How to Add a Media3 MiniController in Jetpack Compose](/blog/media3-minicontroller-compose/).

## Conclusion

`KtorDataSource` is a small, official Media3 1.11 addition. You inject a Ktor `HttpClient`, wrap it with `DefaultDataSource.Factory`, and hand that factory to `ExoPlayer.Builder`.

The player UI, pooling, and session APIs stay the same. Only the HTTP path changes. Start with a single progressive MP4, then point the same factory at your HLS or DASH manifests.

## Sources

- [Media3 1.11 - What's new? (Android Developers Blog)](https://android-developers.googleblog.com/2026/08/media3-1-11-whats-new.html)
- [KtorDataSource API reference](https://developer.android.com/reference/kotlin/androidx/media3/datasource/ktor/KtorDataSource)
- [KtorDataSource.Factory API reference](https://developer.android.com/reference/androidx/media3/datasource/ktor/KtorDataSource.Factory)
- [Getting started with ExoPlayer](https://developer.android.com/media/media3/exoplayer/hello-world)
- [Media3 1.11.0 release notes](https://github.com/androidx/media/releases/tag/1.11.0)
