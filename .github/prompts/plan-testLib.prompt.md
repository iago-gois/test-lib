## Plan: Deploy and Publish React UI Library

Prepare the library for first public release as `@iago/test-lib`, create and connect a new GitHub repository, and automate publish to npmjs on every merge to `main` using Changesets + GitHub Actions. The approach is: finalize package metadata/docs, wire git+GitHub+secrets, validate with pack/consumer smoke test, then enable automated release.

**Steps**
1. Phase 1: Package identity and publish metadata (blocking)
2. Update `name` in `c:\Users\iago\cg\lib\package.json` from `@iago/react-ui-library` to `@iago/test-lib` and keep `version` at `0.0.0` until first changeset release (*blocks all next phases*).
3. Add required npm metadata in `c:\Users\iago\cg\lib\package.json`: `repository`, `license`, `homepage` (if available), and `keywords`; keep `files`, `exports`, `main`, `module`, `types` as-is.
4. Create `c:\Users\iago\cg\lib\README.md` with install/import/theming/peer dependency guidance and release badges; create `c:\Users\iago\cg\lib\LICENSE` (MIT or chosen license).
5. Confirm public API naming exported through `c:\Users\iago\cg\lib\src\index.ts` matches project convention (company-level components exported as `Cg*`) and update docs/examples accordingly.
6. Phase 2: GitHub repository bootstrap (depends on Phase 1)
7. Initialize or verify git state locally, create new GitHub repository, add remote `origin`, and push `main` (`git remote add origin ...`, `git push -u origin main`).
8. Ensure `.gitignore` and tracked files exclude generated output (`storybook-static/`, `dist/`) while keeping source/build config committed.
9. Configure GitHub branch protection for `main` so merges require passing CI (`typecheck`, `lint`, `test`, `build`).
10. Phase 3: npm automation on merge (depends on Phase 2)
11. Verify release workflow in `c:\Users\iago\cg\lib\.github\workflows\release.yml` is triggered on `push` to `main` and uses Changesets action to version/publish.
12. Add repository secrets: `NPM_TOKEN` (from npmjs) and ensure workflow uses `registry-url: https://registry.npmjs.org`.
13. Confirm `.changeset/config.json` uses `access: public` and base branch `main`; keep commit strategy aligned with your preference.
14. Add explicit `pnpm build` before publish step in release workflow if missing, so packed artifacts always exist at publish time.
15. Phase 4: pre-release validation and consumer smoke test (parallel with docs polishing after step 11)
16. Run local quality gate: `pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`.
17. Run package integrity check with `pnpm pack` and inspect tarball contents to confirm only intended files (`dist`, license/readme/package metadata) are included.
18. Validate consumption in another project (e.g., `examples/consumer-app` or a temporary app): install tarball, import `@iago/test-lib`, render one component, run consumer typecheck/build.
19. Phase 5: release and post-release checks (depends on Phases 3-4)
20. Create initial changeset and merge to `main`; verify workflow publishes to npmjs and records new version.
21. Confirm package page on npm shows README/metadata and install command for `@iago/test-lib`.
22. Tag and verify GitHub Release/changelog output from Changesets.

**Relevant files**
- `c:\Users\iago\cg\lib\package.json` — rename package, publish metadata, scripts consistency.
- `c:\Users\iago\cg\lib\src\index.ts` — public export surface used by consumers.
- `c:\Users\iago\cg\lib\.github\workflows\ci.yml` — required checks before merge.
- `c:\Users\iago\cg\lib\.github\workflows\release.yml` — automated publish on merge to `main`.
- `c:\Users\iago\cg\lib\.changeset\config.json` — access/base branch/release behavior.
- `c:\Users\iago\cg\lib\README.md` — consumer-facing install/usage docs.
- `c:\Users\iago\cg\lib\LICENSE` — legal license for distribution.
- `c:\Users\iago\cg\lib\examples\consumer-app\` — smoke-test consumption project.

**Verification**
1. Local checks pass: `pnpm typecheck`, `pnpm lint`, `pnpm test`, `pnpm build`.
2. Tarball check passes: `pnpm pack` then verify entrypoints/types resolve from tarball install.
3. CI passes on PR and merge to `main`.
4. Release workflow run succeeds and publishes to `npmjs.com` under `@iago/test-lib`.
5. Fresh external project installs with `npm i @iago/test-lib` (or `pnpm add @iago/test-lib`) and imports compile/run.

**Decisions**
- Publish target: `npmjs.com` only (not GitHub Packages).
- Release mode: automated on merge to `main` via GitHub Actions + Changesets.
- New package name/scope: `@iago/test-lib`.
- Package visibility: public.

**Further Considerations**
1. Versioning policy recommendation: start at `0.1.0` for first public release rather than `1.0.0` unless API is declared stable.
2. Add npm provenance (`--provenance`) in workflow for stronger supply-chain trust once publish is stable.
3. If you later want private/internal distribution, add a second workflow for GitHub Packages with scoped `.npmrc` instructions, separate from public npmjs publish.
