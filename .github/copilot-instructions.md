# Project Guidelines

## Code Style
- Use TypeScript with strict mode and existing compiler constraints in `tsconfig.json`.
- Follow current component patterns: `React.forwardRef`, `class-variance-authority` (`cva`), Radix composition (for example `Slot`), and class merging via `cn()`.
- Use `@/*` imports for source modules when it keeps imports clear and consistent with current code.
- Keep styling aligned with design tokens and CSS variables in `src/styles/tokens.css`; avoid hardcoding one-off visual values when a token exists.

## Architecture
- Public library entrypoint is `src/index.ts`. User-facing API changes should be intentional and reviewed.
- Component implementations live in `src/components/*` with colocated `index.ts`, tests, and stories when applicable.
- Shared utilities belong in `src/lib/*` (for example `src/lib/cn.ts`).
- Treat `storybook-static/` as generated output; do not hand-edit files there.

## Build and Test
- Install deps: `pnpm install`
- Build library: `pnpm build`
- Type-check: `pnpm typecheck`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Test: `pnpm test`
- Storybook dev/build: `pnpm storybook`, `pnpm storybook:build`

## React Performance Best Practices
- Prioritize eliminating waterfalls first: start async work early and run independent requests in parallel (`Promise.all`).
- Defer `await` until data is actually needed in the render path.
- Optimize bundle size aggressively: avoid barrel imports for hot paths and prefer direct imports when possible.
- Load heavy or optional features conditionally (dynamic import and feature-triggered loading).
- Keep server/client boundaries lean: do not pass large serialized objects to client components.
- Use caching and deduplication where appropriate (request-level dedup, stable cache keys, no duplicate fetches).
- Avoid unnecessary re-renders: memoize expensive computations/components, keep effect dependencies primitive and minimal, and avoid inline component definitions.
- Derive state during render when possible; do not create effect-driven derived state unless side effects are required.
- Use transitions/deferred updates for non-urgent UI updates to keep interactions responsive.
- Prefer efficient event/list rendering patterns: avoid repeated global listeners and use `content-visibility` or similar strategies for large UI sections when applicable.
- Keep JavaScript tight in hot paths: use early exits, avoid repeated expensive lookups, and prefer `Set`/`Map` for repeated membership checks.

## Conventions
- Public component exports for consumer usage must use `Cg<ComponentName>` naming.
- Example mapping:
  - `button` is exported as `CgButton`
  - company abstraction of navbar is exported as `CgNavBar`
- Keep shadcn primitives with their original primitive names (do not force `Cg` prefix for raw primitives).
- When wrapping or abstracting a primitive into a company-level component, export the abstraction with the `Cg` prefix.
- If adding or changing exported components, keep naming consistent at every public export boundary (especially `src/index.ts` and component barrel files).

## Current Project Notes
- For configuration and documentation gaps still in progress, see `docs/project-config-missing.md`.
