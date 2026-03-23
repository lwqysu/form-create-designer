# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workspace and commands

- This repo is a pnpm + lerna monorepo, but this checkout currently only contains `packages/element-ui`. Root manifests still mention `packages/ant-design-vue` and `packages/vant`, so prefer package-scoped commands when possible.
- Install dependencies: `pnpm install`
- Start the local example app (Vue CLI dev server from `packages/element-ui/examples`): `pnpm dev:ele`
  - Equivalent package-scoped form: `pnpm --filter @form-create/designer run dev`
- Build the published designer package: `pnpm --filter @form-create/designer run build`
- Build only the runtime component bundle from `src/form/index.js`: `pnpm --filter @form-create/designer run build:form`
- Build locale bundles into `packages/element-ui/locale`: `pnpm --filter @form-create/designer run build:locale`
- Build the preview site: `pnpm --filter @form-create/designer run build:preview`
- Root build wrapper: `pnpm build` (uses `lerna run build`)
- There is no dedicated `lint` script. Use ESLint directly when needed:
  - `pnpm exec eslint "packages/element-ui/src/**/*.{js,vue}" "packages/element-ui/examples/**/*.{js,vue}"`
  - add `--fix` to apply the same kind of fixes used by pre-commit
- There is no configured automated test suite or single-test runner in this checkout (`package.json` has no `test` script and no `tests/` directories were found). Validate changes by:
  - running the local example app: `pnpm dev:ele`
  - running package builds: `pnpm --filter @form-create/designer run build`

## Codebase structure

- `packages/element-ui/src/index.js` is the main plugin/library entry. It registers the designer component plus shared helpers, menus, drag rules, locales, and component registration hooks.
- `packages/element-ui/src/components/FcDesigner.vue` is the center of the application. It owns:
  - the 3-pane designer UI
  - active rule/menu state
  - preview and input-data modes
  - undo/redo history
  - schema import/export via `setRule`, `getRule`, `getJson`, `setOption`, `getOption`, `openPreview`, `openInputData`
- `packages/element-ui/src/utils/form.js` splits the renderer in two:
  - `viewForm` is the normal `@form-create/element-ui` renderer used for preview/runtime
  - `designerForm` is `formCreate.factory()` and is used for design-time rendering
- `packages/element-ui/src/form/index.js` builds the secondary runtime bundle that registers designer-specific components (`FcEditor`, `FcTitle`, `SignaturePad`, `TableForm`, `FcTable`) into `@form-create/element-ui`. If you add a component that must work in exported/runtime forms, keep this file in sync with `src/index.js`.

## Drag-rule architecture

- `packages/element-ui/src/config/index.js` is the canonical registry of draggable components. Every draggable type must be imported and added here.
- Each file in `packages/element-ui/src/config/rule/*.js` defines a drag-rule descriptor. The common shape is:
  - metadata: `menu`, `icon`, `label`, `name`
  - `rule({ t })` to create the default schema node
  - `props(rule, { t, api })` to generate the right-side config form
  - optional `loadRule`, `parseRule`, `watch`, `children`, `childrenLen`, `drag`, `inside`, `event`, `validate`
- `packages/element-ui/src/config/menu.js` defines the left sidebar groups (`main`, `subform`, `aide`, `layout`). Rule descriptors are placed into these menus via their `menu` field.
- The right-side editor is itself form-create schema assembled from:
  - `src/config/base/field.js` for base field metadata
  - `src/config/base/form.js` for form-level options
  - `src/config/base/style.js` for style editing
  - `src/config/base/validate.js` for validation editing
- Important detail: validation UI is currently very minimal. `src/config/base/validate.js` only exposes the required toggle, so validation editor changes usually start there.

## Import/export and internal rule conventions

- There is no separate parser module. Import/export logic lives in `FcDesigner.vue` plus optional per-rule hooks in `src/config/rule/*.js`.
- `FcDesigner.vue`'s `loadRule()` and `parseRule()` are the key round-trip methods. They:
  - map exported properties `control`, `computed`, `on`, `hidden`, `display`, `hook` to internal `_control`, `_computed`, `_on`, `_hidden`, `_display`, `_hook` on load
  - restore those names on export
  - strip editor-only fields like `_menu`, `component`, `key`, empty objects, and empty arrays before export
- Unknown/imported rule types are not dropped. `defaultDrag()` in `src/config/index.js` wraps unrecognized nodes so they can still round-trip through the designer.
- Nested option fields in the config forms use `>`-delimited pseudo-paths like `formCreateWrap>labelWidth` or `_submitBtn>show`. `FcDesigner.vue` decodes these back into nested option objects.

## Build system

- Local development uses Vue CLI, not Vite: `packages/element-ui/vue.config.js` points at `packages/element-ui/examples/main.js`.
- Library builds use Vite:
  - `vite.config.build.js`: main library build from `src/index.js`
  - `vite.config.form.js`: runtime component bundle from `src/form/index.js`
  - `vite.config.preview.js`: preview site build
  - `vite.config.locale.js`: per-locale bundle build
- Locale builds are driven by `packages/element-ui/gulpfile.js`, which iterates `src/locale/*.js` and emits bundles into `packages/element-ui/locale`.

## Extension points and typings

- `packages/element-ui/types/index.d.ts` is the best reference for the public extension surface. Read it before changing plugin APIs or config behavior.
- Important extension hooks exposed by the package include:
  - `addMenu`
  - `addDragRule`
  - `component`
  - config-driven overrides like `baseRule`, `validateRule`, `formRule`, `componentRule`, `updateDefaultRule`
- When adding a new draggable component, update all of the following as needed:
  - `src/config/rule/<name>.js`
  - `src/config/index.js`
  - `src/locale/*.js` for labels
  - `src/index.js` / `src/form/index.js` if custom runtime or preview components must be registered
  - `types/index.d.ts` if the public API surface changes

## Style and repo-specific notes

- ESLint is configured at the repo root via `.eslintrc.js` and expects 4-space indentation and single quotes.
- The README and example app both assume the package is used as a plugin with Element Plus and `@form-create/element-ui`; the example bootstraps with:
  - `app.use(ELEMENT)`
  - `app.use(formCreate)`
  - `app.use(FcDesigner)`
