# Project Context

Simple Vite + React 19 project. Entry point: `src/main.jsx` → `App.jsx`.

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Production build (outputs to `dist/`)
- `npm run lint:check` - Run ESLint (no fix)
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run preview` - Preview production build

## Tech Stack

- Vite 8 + React 19.2 + React DOM 19.2
- React Compiler via `@rolldown/plugin-babel` (unusual dual-plugin config with `@vitejs/plugin-react`)
- No TypeScript, no test framework

## Notes

- ESLint uses `@antfu/eslint-config` with react + formatters
- `info/` is ignored in both `.gitignore` and ESLint config
- `AGENTS.md` is gitignored (not tracked)
- Uses SCSS for styling (see `src/scss/app.scss`)
- Components are in `src/components/`
