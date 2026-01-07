<!-- Copilot / AI agent guidance for quick onboarding -->
# Repo overview

- **Purpose:** Minimal React + Vite frontend scaffold. Key entrypoints: [src/main.jsx](src/main.jsx#L1) and [src/App.jsx](src/App.jsx#L1).
- **Build system:** Vite (see [package.json](package.json#L1) scripts: `dev`, `build`, `preview`).

# What to read first (fast path)

- [package.json](package.json#L1) — available npm scripts and core deps.
- [vite.config.js](vite.config.js#L1) — plugins used (React plugin + `tailwindcss` plugin import).
- [eslint.config.js](eslint.config.js#L1) — project lint rules and conventions (`no-unused-vars` tweak, browser globals).
- [src/main.jsx](src/main.jsx#L1) and [src/App.jsx](src/App.jsx#L1) — app wiring and example usage (JSX + Tailwind classes).

# Quick commands

- Start dev server with HMR: `npm run dev` (uses `vite`).
- Build for production: `npm run build`.
- Preview production build locally: `npm run preview`.
- Run lint check: `npm run lint` (configured via `eslint.config.js`).

# Project-specific patterns and conventions

- Files use ESM (`type: "module"` in [package.json](package.json#L1)); prefer `import`/`export` and `.jsx` for React components.
- Styling uses utility classes in JSX (see `className='text-9xl'` in [src/App.jsx](src/App.jsx#L1)). `vite.config.js` imports a `tailwindcss` plugin — verify Tailwind is configured in `src/index.css` if editing styles.
- Linting: the repo uses a flat `eslint.config.js` with `@eslint/js`, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh`; follow its rule set and the `no-unused-vars` pattern which ignores names that match `^[A-Z_]`.

# Integration & external touchpoints

- Static assets: `public/` is served by Vite; place icons and static files there.
- Vite plugins: [vite.config.js](vite.config.js#L1) lists runtime behavior. When changing plugins or build options, update `vite.config.js` and re-run `npm run dev`.
- No backend/server code in this repo — external integrations (APIs) should be mocked during development or proxied via Vite if needed.

# When editing or adding files

- Use `.jsx` extension for React components and update imports in `src/main.jsx` accordingly.
- Follow the ESLint rules to avoid CI lint failures; run `npm run lint` locally before pushing.
- Keep changes minimal to `vite.config.js` — it's the single source controlling dev/build plugins.

# Examples (copyable)

- Start dev server:

```
npm run dev
```

- Lint project:

```
npm run lint
```

# Notes & gotchas (discoverable facts)

- `vite.config.js` imports `tailwindcss` plugin — verify the corresponding package or Tailwind config exists before changing this file.
- The project is a small scaffold (no tests). If you add tests, document test commands in `package.json` scripts.

---

If any section is unclear or you want more examples (component patterns, CSS config, or recommended dev-editor settings), tell me which area to expand.
