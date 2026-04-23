# Project Context

Vite + React 19 SPA (pizza ordering UI). Entry: `src/main.jsx` → `App.jsx`.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build → `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint:check` — ESLint (check only)
- `npm run lint:fix` — ESLint with auto-fix

No test framework. Always run `lint:check` after changes.

## Key Conventions

- **React Compiler** is enabled via dual plugins in `vite.config.js` (`@vitejs/plugin-react` + `@rolldown/plugin-babel` with `reactCompilerPreset`). Don't remove either plugin.
- **ESLint** uses `@antfu/eslint-config` with `react: true` and `formatters: true`. ESLint formats CSS, SCSS, HTML, JSON, and Markdown — don't add Prettier or another formatter.
- Semicolons are required (`stylistic.semi: true`).
- `antfu/top-level-function` rule is off — arrow-function components at top level are fine.
- `info/` directory is ignored by ESLint only (not `.gitignore`).

## SCSS Architecture

- Global styles: `src/scss/app.scss` (imports variables, normalize, then all component partials)
- Variables: `src/scss/_variables.scss`
- Each component has a matching SCSS partial in `src/scss/components/`, barrel-imported via `_all.scss`.
- Naming: `PizzaBlock.jsx` → `_pizza-block.scss` (kebab-case for filenames).
- New components: add partial to `src/scss/components/`, import it in `_all.scss`.

## Gitignored Files

`CLAUDE.md`, `QWEN.md`, `.agents/`, `.claude/`, `.qwen/`, `skills-lock.json` — gitignored, never tracked.

## Architecture Notes

- `react-router-dom` is a dependency but routing is currently commented out in `main.jsx`.
- Components with sub-files use directory pattern: `PizzaBlock/index.jsx`, `PizzaBlock/Skeleton.jsx`.
