## Plan: Centralized React UI Library v1

Build a single-package, shadcn-inspired React component library optimized for accessibility, composability, and type safety, then publish it to npm with semver-safe releases using Changesets and CI quality gates. Start with a strong internal architecture (tokens, primitives, component patterns, strict API boundaries) so the package can later split into a monorepo without consumer churn.

**Steps**
1. Phase 1 - Bootstrap the package foundation.
2. Create `c:\Users\iago\cg\lib\package.json` with ESM/CJS export map, `types`, `sideEffects: false`, strict `engines`, peer deps (`react`, `react-dom`), and scripts for build/test/lint/format/storybook/release (using Biome for lint + format).
3. Add `c:\Users\iago\cg\lib\tsconfig.json` and `c:\Users\iago\cg\lib\tsconfig.build.json` with strict TypeScript settings (`strict`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, declaration output).
4. Configure build tooling in `c:\Users\iago\cg\lib\tsup.config.ts` for dual output (ESM + CJS), preserved module boundaries where useful, sourcemaps, and `.d.ts` generation.
5. Configure linting/formatting with Biome in `c:\Users\iago\cg\lib\biome.json`; add commit hooks in `c:\Users\iago\cg\lib\.husky\` (or equivalent) to run Biome checks on staged files.
6. Phase 2 - Define the design-system and styling contract.
7. Create token and theming layers in `c:\Users\iago\cg\lib\src\styles\tokens.css`, `c:\Users\iago\cg\lib\src\styles\theme.css`, and `c:\Users\iago\cg\lib\tailwind.config.ts` using CSS variables first and Tailwind utilities as implementation helpers.
8. Add shared variant utilities in `c:\Users\iago\cg\lib\src\lib\cn.ts` and `c:\Users\iago\cg\lib\src\lib\variants.ts` using `clsx`/`tailwind-merge` and CVA to enforce consistent component APIs.
9. Define accessibility and composition conventions in `c:\Users\iago\cg\lib\src\primitives\` (Radix wrappers where needed), plus component authoring rules (forwarded refs, polymorphic `asChild` where appropriate, keyboard/focus behavior requirements).
10. Phase 3 - Implement component architecture for scalability.
11. Organize component folders under `c:\Users\iago\cg\lib\src\components\<ComponentName>\` with colocated files: component, variants, tests, stories, and docs notes.
12. Establish public API boundaries in `c:\Users\iago\cg\lib\src\index.ts` and optional per-component entry points (`c:\Users\iago\cg\lib\src\components\button\index.ts`) to support tree-shaking and stable imports.
13. Implement an initial "golden set" (Button, Input, Select, Dialog, DropdownMenu, Tabs, Toast, Form primitives) to validate patterns before broad expansion.
14. Add deprecation strategy scaffolding: internal deprecated markers, runtime warnings in dev-only paths, and changelog guidance for removals.
15. Phase 4 - Developer experience and documentation.
16. Set up Storybook in `c:\Users\iago\cg\lib\.storybook\` with docs/autodocs, accessibility addon, and interaction tests.
17. Add usage documentation in `c:\Users\iago\cg\lib\README.md` covering install, peer dependencies, theming model, import strategy, SSR notes, and migration expectations.
18. Add contribution and governance docs in `c:\Users\iago\cg\lib\CONTRIBUTING.md` and `c:\Users\iago\cg\lib\docs\architecture.md` describing API review rules and breaking-change policy.
19. Phase 5 - Testing and quality gates.
20. Add unit and interaction tests with Vitest + React Testing Library under `c:\Users\iago\cg\lib\src\**\*.test.tsx`.
21. Add accessibility tests (axe) and keyboard-navigation checks for all interactive components.
22. Add type-level contract tests in `c:\Users\iago\cg\lib\tests\types\` (tsd or similar) to prevent accidental API/type regressions.
23. Add bundle-size checks and export-surface checks in CI to catch accidental bloat or entrypoint regressions.
24. Phase 6 - Versioning, release workflow, and safe distribution.
25. Configure Changesets in `c:\Users\iago\cg\lib\.changeset\` for semver-driven changelogs and controlled version bumps.
26. Add GitHub Actions workflows in `c:\Users\iago\cg\lib\.github\workflows\ci.yml` and `c:\Users\iago\cg\lib\.github\workflows\release.yml`:
27. CI gates: typecheck, Biome lint/format check, test, accessibility checks, build, Storybook build, size checks.
28. Release gates: Changeset validation, protected main branch, manual approval for major versions.
29. Publish process: merge PR with changeset -> release PR/version bump -> publish to npm using trusted publishing/token with provenance enabled.
30. Add prerelease channel support (`next`) for risky features even in balanced mode.
31. Phase 7 - Consumer safety and long-term maintainability.
32. Create a small consumer smoke-test app in `c:\Users\iago\cg\lib\examples\consumer-app\` to validate install/import/theming against realistic usage.
33. Define API lifecycle policy (experimental/stable/deprecated/removed) and minimum deprecation window before breaking removal.
34. Establish quarterly maintenance cadence: dependency updates, a11y audits, and React compatibility checks.
35. Document migration playbooks and optional codemods under `c:\Users\iago\cg\lib\docs\migrations\` for future major versions.

**Parallelization and dependencies**
1. Steps 2-5 are parallelizable after step 1.
2. Step 7 blocks most component implementation because token contracts must stabilize first.
3. Steps 16-18 can run parallel with steps 20-23 once first components exist.
4. Steps 25-30 depend on completion of baseline CI/testing (steps 20-23).
5. Steps 32-35 should start once first release candidate is buildable.

**Relevant files**
- `c:\Users\iago\cg\lib\package.json` - package metadata, exports, scripts, peer deps, publish safety flags.
- `c:\Users\iago\cg\lib\biome.json` - single source of truth for linting and formatting rules.
- `c:\Users\iago\cg\lib\tsup.config.ts` - build outputs and declaration generation.
- `c:\Users\iago\cg\lib\tailwind.config.ts` - design token integration with utility classes.
- `c:\Users\iago\cg\lib\src\styles\tokens.css` - canonical token source for colors/spacing/radius/typography.
- `c:\Users\iago\cg\lib\src\lib\variants.ts` - CVA-based variant patterns shared across components.
- `c:\Users\iago\cg\lib\src\index.ts` - controlled public API and export stability.
- `c:\Users\iago\cg\lib\.changeset\` - release metadata and semver intent per change.
- `c:\Users\iago\cg\lib\.github\workflows\ci.yml` - mandatory quality gates before merge.
- `c:\Users\iago\cg\lib\.github\workflows\release.yml` - npm publish workflow with safeguards.

**Verification**
1. Run `pnpm typecheck`, `pnpm lint`, `pnpm format:check`, `pnpm test`, and ensure all pass on clean CI.
2. Run accessibility suite and verify zero critical violations for all interactive components.
3. Build package and verify exports/types by installing tarball in `examples/consumer-app`.
4. Validate tree-shaking by importing one component and checking output bundle impact.
5. Execute a dry-run release with Changesets to confirm changelog/version bump correctness.
6. Confirm non-breaking patch/minor upgrade in consumer smoke app before first stable release.

**Decisions**
- Included: single-package v1 architecture, Tailwind + CSS variables + CVA styling model, balanced release workflow with Changesets and CI gates.
- Included: explicit path to future monorepo split without breaking consumer imports.
- Excluded for v1: immediate multi-package workspace, mandatory canary validation on every release.
- Assumption: npm is the distribution target and GitHub Actions is acceptable CI/CD.

**Further Considerations**
1. Naming decision: package scope (`@company/ui` vs public unscoped) should be finalized before first publish to avoid migration churn.
2. Browser support matrix should be decided early because it impacts transpilation targets and polyfill policy.
3. If your consumer apps include Next.js/SSR-heavy stacks, add explicit SSR hydration checks to the CI matrix.
