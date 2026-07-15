# The Noise Filter

The Noise Filter is an English trend-briefing MVP for Project AI Autoblog.

**Tagline:** What changed, what matters, and what to ignore.

## Status

Draft-only scaffold. Nothing in this repository is published as a website.

- Two pilot articles are stored with `draft: true`.
- No custom domain or legally cleared brand claim.
- No analytics, GTM, AdSense, `ads.txt`, affiliate links, comments, or newsletter.
- No Search Console registration or public deployment workflow.
- Human review is required before any article can be published.

## Engine

Astro + AstroPaper. The scaffold reuses the established Project AI Autoblog AstroPaper pattern while keeping this repository independent.

The configured site URL uses the reserved `.invalid` domain until a later manual brand and domain review is complete.

## Editorial position

Hot stories, filtered for regular adults. Articles explain confirmed changes in plain English, separate unknowns from facts, and give readers a short list of practical checks.

Initial categories:

- Tech & AI
- Money & Consumer Changes
- Online Safety
- Streaming & Entertainment
- Korea & Global Culture

## Local checks

```sh
pnpm install --frozen-lockfile
pnpm run format:check
pnpm run astro -- check
pnpm run build
```

Production builds must not generate routes for files marked `draft: true`.

## Theme attribution

Built with Astro and the AstroPaper theme/starter. See `LICENSE` for the inherited open-source license.
