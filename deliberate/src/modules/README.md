# Modules

Every feature of Deliberate is a module in its own folder. A module owns its content, pages,
styles, saved state and XP rules. Nothing outside the folder reaches into it, except through
its `api.js`.

```
src/
  core/      shared building blocks; knows nothing about any module
    store/   the store, persistence and migration, core XP/activity slice
    lib/     dates, levels
    components/  ui, Markdown, Heatmap
    styles/  design tokens and shared component styles
    tracks.js, modules.jsx
  modules/
    learn/ guide/ review/ drills/ decide/ journal/
  app/       the shell: registry, routes, nav, Today, Stats, Backup
```

## Import rules

These are checked by `npm run lint` (`scripts/check-boundaries.mjs`):

- `core/` never imports from `app/` or `modules/`.
- A module imports from `core/`, from its own folder, and from another module's `api.js` only.
- `app/` may import anything. It's the only place that sees every module.

The current cross-module dependencies are all through APIs:

- `learn` uses `review/api` (adds a lesson's flashcards) and `journal/api` (saves practice answers).
- `guide` uses `review/api` (adds an article's flashcards).

## Anatomy of a module

```
modules/example/
  index.js(x)  the manifest (below): the only file the app imports
  api.js       action creators other modules may use; XP amounts
  slice.js     this module's saved state: { initial, reducer, fromV1 }
  data/        static content
  pages/       route components
  example.css  styles used only by this module
```

### State

A module's state lives at `state[id]`. Read it with `useSlice(id)`, and change it by dispatching
actions whose type starts with the module id (`'learn/complete'`). The store sends each action
only to the slice it's prefixed with.

To touch another module or award XP, dispatch an array. It's applied in order as one update:

```js
dispatch([{ type: 'learn/complete', ... }, addCards(ids), earn(30)])
```

`fromV1(old)` builds the slice from progress saved before modules existed (one flat object).
New modules can leave it out and start empty.

### Manifest

```js
export default {
  id: 'example',                 // state key and action prefix
  slice,                         // optional
  routes: [{ path: 'example', Component: ExamplePage }],
  nav: { to: '/example', label: 'Example', icon: '<svg path d>' },
  badge: (slice, { today }) => 0,                  // optional number on the nav item
  cards: [{ id, front, back, source, track }],     // optional flashcards for Review
  today: {                                         // all optional
    rep: (slice, { today }) => ({ title, detail, to, action, done }),
    notice: (slice, { today }) => ({ title, items: [{ key, label, to, meta }] }) || null,
    extra: (slice, { today }) => ({ label, title, to, meta }) || null,
    panel: { title, render: (slice) => <Component /> },
  },
  stats: {                                         // optional
    figures: (slice) => [['Label', value]],
    panel: { title, render: (slice) => <Component /> },
  },
}
```

To add a module, create its folder and add it to `src/app/modules.js`. That list's order is
the order of the nav bar, Today's reps and the Stats figures.
