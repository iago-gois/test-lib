# @iago/test-lib

[![CI](https://github.com/iago/test-lib/actions/workflows/ci.yml/badge.svg)](https://github.com/iago/test-lib/actions/workflows/ci.yml)
[![Release](https://github.com/iago/test-lib/actions/workflows/release.yml/badge.svg)](https://github.com/iago/test-lib/actions/workflows/release.yml)
[![npm version](https://img.shields.io/npm/v/@iago/test-lib)](https://www.npmjs.com/package/@iago/test-lib)

A React UI component library focused on accessibility, composability, and strict TypeScript APIs.

## Install

```bash
pnpm add @iago/test-lib
```

Peer dependencies:

- `react` `>=18 <20`
- `react-dom` `>=18 <20`

## Usage

```tsx
import { CgButton, CgInput } from "@iago/test-lib";

export function Example() {
  return (
    <div>
      <CgInput placeholder="Email" />
      <CgButton>Submit</CgButton>
    </div>
  );
}
```

## Theming model

Import the library theme contract and override CSS variables in your app shell.

```tsx
import "@iago/test-lib/src/styles/theme.css";
```

Then define custom tokens under `:root` (or `.dark`) to match your brand.

## Import strategy

Use root imports for stable public API:

```tsx
import { CgButton, CgInput, CgToast, CgTooltip } from "@iago/test-lib";
```

## SSR notes

- Components are compatible with SSR frameworks like Next.js.
- Keep theme CSS loaded before first render to avoid hydration mismatches in color tokens.

## Release flow

- Add a changeset with `pnpm changeset`.
- Merge to `main`.
- GitHub Actions creates/updates a release PR and publishes on merge.

## Migration expectations

- Patch and minor releases are non-breaking.
- Breaking changes are introduced in majors with migration notes under `docs/migrations/`.
