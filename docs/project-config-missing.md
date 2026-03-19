# Project Config Gap Checklist

This file tracks configuration work still missing from the plan in `.github/prompts/plan-centralizedReactUiLibrary.prompt.md`.

## Done in this pass

- Installed Tailwind toolchain (`tailwindcss`, `postcss`, `autoprefixer`, `tailwindcss-animate`).
- Added `tailwind.config.ts` integrated with CSS tokens.
- Added `postcss.config.cjs` so Tailwind utilities compile in Storybook/Vite.
- Added `components.json` for shadcn CLI.
- Added Tailwind directives to `src/styles/theme.css`.
- Updated `package.json` to use `"shadcn": "^3.5.1"`.

## Still missing from plan (config/doc scope)

- `README.md` with install, peer deps, theming model, SSR notes, and migration guidance.
- `CONTRIBUTING.md` governance and API review rules.
- `docs/architecture.md` with API boundaries and breaking-change policy.
- CI gates for a11y, bundle-size checks, and export-surface checks in `.github/workflows/ci.yml`.
- `examples/consumer-app` runnable config (`package.json`, `tsconfig`, app bootstrap) for smoke tests.
- Type-level tests setup under `tests/types` (e.g., tsd).
- Explicit API lifecycle policy docs (experimental/stable/deprecated/removed).

## Optional next setup steps

1. Run `pnpm dlx shadcn@^3.5.1 add button` to verify shadcn generation works with current config.
2. Run `pnpm storybook` and check utility classes (like `cursor-pointer`) now apply.
3. Run `pnpm lint`, `pnpm test`, and `pnpm typecheck` to confirm no regressions.
