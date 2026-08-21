# Yep it's a personal site

[Surprise.](https://eric.kraw.cz/) A single-page portfolio built with Vite, React,
TypeScript, Tailwind, and framer-motion, with Aceternity-style components vendored in
`src/components/ui/`.

- `npm run dev` — develop with hot reload
- `npm run build` — typecheck + production build to `dist/`
- `npm run preview` — serve the production build locally
- `./deploy.sh` — build and sync to S3

All site content lives in [`src/data/content.tsx`](src/data/content.tsx); the section
structure is documented in [`OUTLINE.md`](OUTLINE.md).
