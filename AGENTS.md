# Project Context

Simple Vite + React 19 project. Entry point: `src/main.jsx`, renders `App.jsx`.

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Production build (outputs to `dist/`)
- `npm run lint` - Run ESLint (ignores `dist/`, `info/`)
- `npm run preview` - Preview production build

## Tech Stack

- Vite 8 + React 19.2 + React DOM 19.2
- Uses React Compiler (babel-plugin-react-compiler) via `@rolldown/plugin-babel`
- No TypeScript, no test framework configured

## Notes

- No pre-commit hooks configured
- No typecheck command (no TypeScript)
- Build ignores `info/` directory