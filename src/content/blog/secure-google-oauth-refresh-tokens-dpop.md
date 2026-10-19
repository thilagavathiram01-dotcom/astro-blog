---
title: "How to Secure Google OAuth Refresh Tokens with DPoP"
description: "Step-by-step guide to implement DPoP on Google OAuth to bind refresh tokens and block token theft from Infostealers."
pubDate: 2026-10-19T14:00:00
heroImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&h=630&q=80"
tags: ["developer", "security", "google", "how-to"]
noindex: false
---

Traditional OAuth bearer tokens follow a finders-keepers model. Anyone who steals a refresh token can use it indefinitely. Google OAuth now supports DPoP to change that.<grok type="render_inline_citation" citation_id="114" />

Demonstrating Proof-of-Possession (DPoP), defined in RFC 9449, binds tokens to a client-generated asymmetric key pair. Even if an attacker steals the token, they cannot replay it without the private key. Google applies this specifically to long-lived refresh tokens while keeping short-lived access tokens as standard Bearer tokens for performance.<grok type="render_inline_citation" citation_id="114" />

This guide walks through the official Google implementation for authorization code and token refresh flows.

## Why DPoP Matters for Google OAuth

Infostealer malware such as RedLine and NodeStealer targets stored credentials. Adversary-in-the-middle attacks also intercept tokens. DPoP neutralizes the main risk for persistent offline impersonation by sender-constraining the refresh token.<grok type="render_inline_citation" citation_id="114" />

Access tokens stay Bearer tokens (typically valid for one hour or less). This avoids cryptographic verification overhead on high-QPS APIs like Gmail, Calendar, or Drive. The tradeoff protects the most sensitive credential without slowing everyday API calls.<grok type="render_inline_citation" citation_id="114" />

![Cybersecurity concept with digital lock](https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80)

DPoP operates at the HTTP header level. Unlike mTLS (RFC 8705), it survives modern cloud proxies and load balancers. This resilience helps multi-hop setups, including Model Context Protocol (MCP) and agent architectures.<grok type="render_inline_citation" citation_id="114" />

## Prerequisites and Architecture Notes

You need an existing OAuth 2.0 authorization code flow with offline access (`access_type=offline`). Generate and store an EC P-256 key pair (ES256) on the client. RSA keys work but cost more computationally; Google recommends EC.<grok type="render_inline_citation" citation_id="155" />

Pure client-side SPAs cannot use DPoP directly because of client secret and CORS limits on the `DPoP-Nonce` header. Route through a Backend-for-Frontend (BFF) that acts as a confidential client.<grok type="render_inline_citation" citation_id="155" />

Google also publishes a DPoP adoption SKILL.md and an official adoption guide. Review those for code samples in different runtimes.<grok type="render_inline_citation" citation_id="114" />

## Step 1: Generate the Key Pair and Build the Initial DPoP Proof

Create an EC P-256 key pair. Include the public key coordinates in the JOSE header of the proof JWT.

Example header:

```json
{
  "typ": "dpop+jwt",
  "alg": "ES256",
  "jwk": {
    "kty": "EC",
    "crv": "P-256",
    "x": "VC91y9ZYdfSWaDv8JaI6gx5ifOw2rn3YdqkAB51Uu6E",
    "y": "ikPjOtea4k7fWPVrRYwaA4Ww6iVY3pOOICotHwwGV3o"
  }
}
```

For the payload when exchanging an authorization code, set fixed claims `htm: POST` and `htu: https://oauth2.googleapis.com/token`. Generate a fresh `iat` timestamp. Set `jti` to the Base64URL-encoded SHA-256 hash of the authorization code.<grok type="render_inline_citation" citation_id="155" />

Sign the JWT with the private key and send it in the `DPoP` header when posting to the token endpoint.

## Step 2: Exchange the Authorization Code

Include the DPoP proof in the token request along with the usual parameters (`grant_type=authorization_code`, `code`, `redirect_uri`, `client_id`, `client_secret`, and PKCE `code_verifier`).

A successful response returns the access token, refresh token, and a `DPoP-Nonce` response header. Cache that nonce. The refresh token is now bound to your key pair. Access tokens remain Bearer.<grok type="render_inline_citation" citation_id="155" />

The nonce is single-use. Missing, invalid, expired, or reused nonces trigger an HTTP 400 with a fresh nonce for retry.<grok type="render_inline_citation" citation_id="155" />

![Developer working on secure code](https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80)

## Step 3: Handle Token Refresh with DPoP

Every refresh request needs a new DPoP proof. The header is the same. The payload adds the previously returned `nonce` claim and uses a unique random `jti` (for example, Base64URL of 24 random bytes).

Post to `https://oauth2.googleapis.com/token` with `grant_type=refresh_token`, the refresh token, client credentials, and the `DPoP` header.

On success you receive a new access token and a new `DPoP-Nonce`. Save the new nonce for the next request.

If you receive `400` with error `use_dpop_nonce`, extract the new nonce from the response header, rebuild the proof, and retry once. Google isolates nonces across workflow transitions (code exchange versus refresh).<grok type="render_inline_citation" citation_id="155" />

## Multi-Agent and MCP Considerations

In multi-agent flows, one agent cannot sign on behalf of another without sharing private keys, which violates DPoP principles. Google’s consumer OAuth endpoint does not support RFC 8693 token exchange.<grok type="render_inline_citation" citation_id="114" />

For these cases, route delegation through Google Cloud Secure Token Service (STS). Exchange the upstream token for a short-lived federated token bound to the intermediate agent’s own key pair. This preserves sender-constraining across the chain.<grok type="render_inline_citation" citation_id="114" />

DPoP does not protect ordinary session cookies. Google and the WICG are developing Device Bound Session Credentials (DBSC) for that layer. Use both for defense in depth.<grok type="render_inline_citation" citation_id="114" />

## Tips for Implementation

- Store the private key securely (non-extractable where possible, such as with WebCrypto or platform key stores).
- Always generate a fresh proof per request. Never reuse `jti` or nonces.
- Handle the `use_dpop_nonce` challenge loop exactly once before failing the request.
- Test with the official adoption guide examples and the SKILL.md resources.
- Prefer BFF architecture for browser apps that need offline access.

For related Google security practices, see our guide on [Android advanced protection setup](/blog/android-advanced-protection-setup/).

<div class="video-embed">
  <iframe src="https://www.youtube.com/embed/ENSg1QkumQk"
    title="Demonstrating Proof-of-Possession (DPoP) Explained"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen loading="lazy"></iframe>
</div>

## Conclusion

Google’s DPoP support for refresh tokens closes a long-standing gap against Infostealer and replay attacks without penalizing high-volume API performance. Implement the key pair, proof construction, and nonce handling in your authorization code and refresh flows today.

Start with the official DPoP Adoption Guide and SKILL.md, then verify end-to-end with a test client. Combined with proper key storage and complementary controls such as DBSC, this gives stronger credential protection for Google API integrations.

## Sources

- Google Developers Blog: Announcing DPoP Support for Google OAuth: Securing Refresh Tokens (15 October 2026)
- Google for Developers: DPoP Adoption Guide
- RFC 9449: OAuth 2.0 Demonstrating Proof of Possession (DPoP)
