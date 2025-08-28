# Cybersecurity Testing Platform — Frontend

This repository contains the frontend application for the Cybersecurity Testing Platform. It's built with Vite, React, and TypeScript and uses Tailwind CSS and shadcn-ui components.

## Quick overview

- Tech: Vite, React, TypeScript, Tailwind CSS, shadcn-ui
- Purpose: Frontend for a platform to manage and run cybersecurity tests and dashboards

## Requirements

- Node.js (16+ recommended)
- npm, pnpm or bun (this repo contains a `package.json`; a `bun.lockb` is present if you prefer bun)

## Local setup

1. Clone the repository:

    git clone https://github.com/safwanahmadsaffi/Cybersecurity-Testing-Platform-Frontend-Development.git
    cd Cybersecurity-Testing-Platform-Frontend-Development

2. Install dependencies (choose one):

    npm install
    # or
    pnpm install
    # or
    bun install

3. Start the dev server:

    npm run dev

Open http://localhost:5173 (or the URL printed by Vite) to view the app.

## Scripts (common)

- npm run dev — start development server
- npm run build — produce a production build
- npm run preview — locally preview production build
- npm run lint — run linters (if configured)

See `package.json` for concrete script names and available tasks.

## Project structure (important files)

- `src/` — application source
  - `main.tsx`, `App.tsx` — app entry
  - `components/` — UI components, layout, pages
- `index.html` — Vite entry HTML
- `package.json`, `vite.config.ts`, `tsconfig.json` — build config

## Contributing

- Work on a topic branch: `git checkout -b feat/your-feature`
- Make small, focused commits and include meaningful messages
- Open a PR against `main`; describe changes and testing steps

If you'd like CI, tests, or a contribution guide added, open an issue or PR.

## Deployment

This project builds into static assets. You can deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages) or serve with a simple static server.

Example (Vercel): connect the repository and configure the build command `npm run build` and publish directory `dist`.

## Notes

- This README was updated to remove template-specific references and focus on the project.
- If you use `bun` as your package manager, prefer `bun install` and `bun run <script>`.

## License

See the repository license file (if present). If there's no license, treat this code as "all rights reserved" until a license is added.

---

If you'd like, I can add a short contributing guide, CI workflow, or a concise list of development tasks next.
# Cybersecurity Testing Platform — Frontend

This repository contains the frontend for the Cybersecurity Testing Platform. It's a Vite + React + TypeScript application styled with Tailwind CSS and using shadcn-ui components.

## Quick overview

- Tech: Vite, React, TypeScript, Tailwind CSS, shadcn-ui
- Purpose: Frontend for a platform that helps manage and run cybersecurity tests and dashboards

## Requirements

- Node.js (16+ recommended)
- npm, pnpm or bun (this repo contains a `package.json`; a `bun.lockb` is present if you prefer bun)

## Local setup

1. Clone the repository:

    git clone https://github.com/safwanahmadsaffi/Cybersecurity-Testing-Platform-Frontend-Development.git
    cd Cybersecurity-Testing-Platform-Frontend-Development

2. Install dependencies (choose one):

    npm install
    # or
    pnpm install
    # or
    bun install

3. Start the dev server:

    npm run dev

Open http://localhost:5173 (or the URL printed by Vite) to view the app.

## Scripts (common)

- npm run dev — start development server
- npm run build — produce a production build
- npm run preview — locally preview production build
- npm run lint — run linters (if configured)

See `package.json` for concrete script names and available tasks.

## Project structure (important files)

- `src/` — application source
  - `main.tsx`, `App.tsx` — app entry
  - `components/` — UI components, layout, pages
- `index.html` — Vite entry HTML
- `package.json`, `vite.config.ts`, `tsconfig.json` — build config

## Contributing

- Work on a topic branch: `git checkout -b feat/your-feature`
- Make small, focused commits and include meaningful messages
- Open a PR against `main`; describe changes and testing steps

If you'd like CI, tests, or a contribution guide added, open an issue or PR.

## Deployment

This project builds into static assets. You can deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages) or serve with a simple static server.

Example (Vercel): connect the repository and configure the build command `npm run build` and publish directory `dist`.

## Notes

- This repo was created/connected from a Lovable project template — edits pushed here will be reflected in the Lovable workspace if configured.
- If you use `bun` as your package manager, prefer `bun install` and `bun run <script>`.

## License

See the repository license file (if present). If there's no license, treat this code as "all rights reserved" until a license is added.

---

If you'd like, I can add a short contributing guide, CI workflow, or a concise list of development tasks next.

