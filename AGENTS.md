# Project Context

Vite + React 19 SPA (pizza ordering UI). Entry: `src/main.jsx` → `App.jsx`.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build → `dist/`
- `npm run lint:check` — ESLint (check only)
- `npm run lint:fix` — ESLint with auto-fix

No test framework. Always run `lint:check` after changes.

## Key Conventions

- **React Compiler** is enabled via an unusual dual-plugin setup in `vite.config.js` (`@vitejs/plugin-react` + `@rolldown/plugin-babel` with `reactCompilerPreset`). Don't remove either plugin.
- **ESLint** uses `@antfu/eslint-config` with `react: true` and `formatters: true`. This means ESLint also formats CSS, SCSS, HTML, JSON, and Markdown — don't add Prettier or another formatter.
- Semicolons are required (`stylistic.semi: true`).
- `antfu/top-level-function` rule is explicitly off — arrow-function component declarations at the top level are fine.
- `info/` directory is ignored by both `.gitignore` and ESLint.

## SCSS Architecture

- Global styles: `src/scss/app.scss` (imports variables, normalize, then all component partials)
- Variables: `src/scss/_variables.scss`
- Each component has a matching SCSS partial in `src/scss/components/`, barrel-imported via `_all.scss`.
- Naming convention: `PizzaBlock.jsx` → `_pizza-block.scss` (kebab-case for files).
- Style new components by adding a partial to `src/scss/components/`, importing it in `_all.scss`.

## Gitignored Files

`AGENTS.md`, `CLAUDE.md`, `QWEN.md`, `.agents/`, `.claude/`, `.qwen/`, `skills-lock.json` — all gitignored. These are agent-only files, never tracked.
