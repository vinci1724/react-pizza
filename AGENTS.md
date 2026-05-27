Vite + React 19 pizza-ordering SPA. Use npm; `package-lock.json` is the lockfile.

## Commands

- `npm run dev` - Vite dev server
- `npm run build` - production build to `dist/`
- `npm run preview` - preview the production build
- `npm run lint:check` - ESLint check for JS, JSX, SCSS, JSON, Markdown, etc.
- `npm run lint:fix` - ESLint auto-fix; no Prettier config is used

Run `npm run lint:check` after changes. There is no test framework or typecheck script.

## App Wiring

- Browser entry is `index.html` -> `src/main.jsx`; React entry is `src/App.jsx`.
- `src/main.jsx` wraps `<App />` in `BrowserRouter` and Redux `<Provider store={store}>`.
- Routes live in `App.jsx`: `/` -> `Home`, `/cart` -> `Cart`, `*` -> `NotFound`.
- Redux store is `src/redux/store.js`; currently only `filter` from `src/redux/slices/filterSlice.js` is registered.
- Shared category/sort data is in `src/constants/index.js`.

## React 19 Notes

- React Compiler is enabled by both plugins in `vite.config.js`: `@vitejs/plugin-react` and `@rolldown/plugin-babel` with `reactCompilerPreset()`. Do not remove either without replacing compiler support.
- Context uses React 19 provider shorthand: `<SearchContext value={...}>`, not `<SearchContext.Provider>`.
- `Search` and `Home` consume `SearchContext` with React 19 `use()`, not `useContext()`.
- `Cart.jsx` intentionally uses React 19's `class=` alias in JSX; do not churn it to `className` unless changing that file for a real reason.

## Linting And Style

- ESLint uses `@antfu/eslint-config` with `react: true`, `formatters: true`, and semicolons required.
- `antfu/top-level-function` is disabled, so top-level arrow-function components are acceptable here.
- The repo-local `.zed/settings.json` runs ESLint fixes as the formatter and extends ESLint to markup/style data files.

## Styling

- Global SCSS starts at `src/scss/app.scss`, imports variables, normalize, then `src/scss/components/_all.scss`.
- Component partials under `src/scss/components/` are global SCSS partials and should be imported through `_all.scss`.
- CSS Modules are currently used only by `Search`, `Pagination`, and `NotFoundBlock`.

## Reference Files

- `info/` contains the original static HTML/Gulp reference implementation and source links; ESLint ignores it, but it is not gitignored.
- `src/assets/img/*:Zone.Identifier` files are present Windows metadata artifacts; do not treat them as app assets.
