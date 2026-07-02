# luca-lombardo.com — personal portfolio

Personal portfolio of **Luca Santiago Lombardo** — Computer Engineering student and
IAM / cybersecurity practitioner. Built as a fast, static site with a terminal-flavored
aesthetic, a light/dark theme, and interactive case studies.

**Live:** https://luca-lombardo.com

## Tech stack

- [Astro](https://astro.build/) — static-site framework (islands, zero-JS by default)
- Vanilla CSS with CSS custom properties (design tokens, light/dark theming)
- IBM Plex Sans / IBM Plex Mono
- Deployed to **GitHub Pages** via GitHub Actions

## Highlights

- **Featured projects** rendered as visual, milestone-based timelines.
- **Case-study "deep dive" drawers** (roadmap.sh-style) with diagrams and resources —
  e.g. how Cloudflare Tunnel works, what CGNAT is, and how DNS-over-HTTPS keeps queries private.
- **Image lightbox** — any diagram can be opened full-screen.
- Experience, certifications and a live tech stack, all data-driven.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to ./dist
npm run preview    # preview the production build
```

## Project structure

```
public/            # static assets served as-is (incl. CNAME for the custom domain, /docs)
src/
  components/      # Astro components (Nav, Hero, Projects, Experience, Stack, Footer, ...)
  content/projects # per-project case studies (Markdown + frontmatter)
  data/            # timelines, stack, certifications, experience (typed TS)
  images/          # logos and photos
  pages/           # routes (index + dynamic project case studies)
  styles/          # global.css (design tokens)
astro.config.mjs   # site: https://luca-lombardo.com
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the Astro site and
publishes it to GitHub Pages. The custom domain is set via `public/CNAME`.
