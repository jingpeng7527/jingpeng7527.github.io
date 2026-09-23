# jingpeng7527.github.io

Personal site built with [Astro](https://astro.build), deployed to GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Content lives in `src/data/site.ts`. Pushing to `main` builds and publishes to the `gh-pages` branch.

## Writing a blog post

Add a Markdown file to `src/content/blog/` — the filename becomes the URL (`my-post.md` → `/blog/my-post/`):

```md
---
title: My post
description: One-line summary shown in the post list
date: 2026-09-23
tags: [backend, kafka]
draft: true # visible in `npm run dev` only; remove to publish
---
```
