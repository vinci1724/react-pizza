Vite + React 19 SPA (pizza ordering UI). Entry: `src/main.jsx` → `App.jsx`.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build → `dist/`
- `npm run preview` — Preview production build locally
- `npm run lint:check` — ESLint (check only)
- `npm run lint:fix` — ESLint with auto-fix

Always run `lint:check` after changes. No test framework.

## Key Conventions

- **React Compiler** enabled via dual plugins in `vite.config.js`: `@vitejs/plugin-react` + `@rolldown/plugin-babel` with `reactCompilerPreset`. Don't remove either.
- **ESLint** uses `@antfu/eslint-config` with `react: true` and `formatters: true`. Formats CSS, SCSS, HTML, JSON, Markdown — don't add Prettier.
- Semicolons required (`stylistic.semi: true`).
- `antfu/top-level-function` rule is off — arrow-function components at top level are fine.
- `info/` directory ignored by ESLint only (not `.gitignore`).

## Styling

- Global SCSS: `src/scss/app.scss` (imports variables, normalize, component partials via `_all.scss`)
- Variables: `src/scss/_variables.scss`
- Component styles: `_component-name.scss` (kebab-case) in `src/scss/components/`
- CSS Modules only for `NotFoundBlock` — all other components use global SCSS partials

## Architecture

- Routing: `/` (Home), `/cart` (Cart), `*` (NotFound)
- `main.jsx` wraps `<App />` in `<BrowserRouter>`
- Components with sub-files use directory pattern: `PizzaBlock/index.jsx`, `PizzaBlock/Skeleton.jsx`
- Skeleton loaders colocated: `PizzaBlock/Skeleton.jsx` next to `PizzaBlock/index.jsx`
