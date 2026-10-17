# The Noise Filter

> **"What changed, what matters, and what to ignore."**
> Cutting through technology hype, platform policy shifts, consumer traps, and global market signals with clear, evidence-based explainers.

- **Live URL**: [https://natekeem.com/the-noise-filter/](https://natekeem.com/the-noise-filter/)
- **Repository**: [natekeem/the-noise-filter](https://github.com/natekeem/the-noise-filter)
- **Deployment**: GitHub Pages project site
- **Engine / Theme**: Astro 4.x + AstroPaper
- **Publication Corpus**: 11 published investigative explainers (as of 2026-10-17)
- **Search & Feeds**: Sitemaps (`/the-noise-filter/sitemap-index.xml`), RSS (`/the-noise-filter/rss.xml`), Pagefind Search

---

## 🔍 Editorial Position & Coverage

The Noise Filter translates complex technological disruptions, corporate policy changes, and international tech-cultural phenomena into high-signal briefings for pragmatic readers.

### Core Topic Categories

1. **Tech & AI** (`/the-noise-filter/categories/tech-ai/`): Semiconductor physics (CXMT vs Samsung/SK Hynix), Big Tech nuclear energy PPAs for AI datacenters (Three Mile Island Crane Center), AI agent features.
2. **Money & Consumer Changes** (`/the-noise-filter/categories/money-consumer-changes/`): Hidden cancellation traps, subscription pricing tactics.
3. **Online Safety** (`/the-noise-filter/categories/online-safety/`): Passkeys, biometric backup limits, mobile OS privacy defenses.
4. **Streaming & Entertainment** (`/the-noise-filter/categories/streaming-entertainment/`): Household sharing restrictions, streaming mobile UI pivots.
5. **Korea & Global Culture** (`/the-noise-filter/categories/korea-global-culture/`): Foreign payment kiosk traps in cashless South Korea, Google Maps regulatory mechanics.

---

## 🎨 Visual & Editorial Guardrails

- **Expressive Editorial Covers**: Avoids sterile laptop stock photography. Uses candid human emotion (financial analysts reacting to market shocks, intense focus, contemplation), authentic tech hardware, and bold dark-mode magazine aesthetics.
- **Mandatory Inline Explanatory Diagrams**: Every long-form article features at least 2 inline diagrams (e.g. DRAM cell architecture cross-sections, EUV vs DUV SAQP yield curves, nuclear PPA transmission flowcharts) generated at 2x Retina HiDPI (2400×1350) via local headless Chrome.
- **YMYL Categorization Guardrail**: Semiconductor manufacturing and market analyses are strictly classified under `tech-ai` rather than financial advice (`money-consumer-changes`), rooting analysis in physics, lithography, and packaging.
- **Strict Evidence Standard**: Separates confirmed facts, rollout realities, and market uncertainties. Every article requires a linked primary source list and human review approval.

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
pnpm install

# Start local development server
pnpm run dev

# Check code formatting and Astro types
pnpm run format:check
pnpm run astro check

# Production build
pnpm run build
```

---

## 📄 License & Attribution

Built with [Astro](https://astro.build) and the [AstroPaper](https://github.com/satnaing/astro-paper) starter theme. Editorial content, diagrams, and site configurations are property of Project AI Autoblog / `natekeem`.
