# Library for Reusing Components 🎨🔧

A small collection of reusable React components and example apps divided across two example projects:

- `mostlyUsedByUs` — a vanilla React (JS) component library and demo pages.
- `my-react-ts-app` — an example React + TypeScript app demonstrating usage with local state and Redux slices.

---

## 🚀 Quick start

Clone (already done) and install dependencies per project:

```bash
# From the repo root
cd mostlyUsedByUs
npm install
npm run start    # dev server (vite)

# In a new terminal for the TS example
cd my-react-ts-app
npm install
npm run start
```

Open http://localhost:5173 (or the port Vite shows) to view the dev server.

---

## 📁 Project structure

- `mostlyUsedByUs/`
  - `src/components/` — reusable UI components (Accordion, Button, Dropdown, Link, Modal, Panel, Route, Sidebar, SortableTable, Table, ...)
  - `src/pages/` — demo pages showing component usage
  - scripts: `start`, `build`, `preview`, `lint`

- `my-react-ts-app/`
  - `src/components/` — typed components (CarForm, CarList, CarSearch, CarValue)
  - `src/store/` — Redux slices and store demo
  - scripts: `start`, `build`, `preview`, `lint`

---

## 🧩 How to use the components

- Import directly from the corresponding project folder in your app for local development, or copy the components into your project.

Example (JS):
```js
import Button from '../mostlyUsedByUs/src/components/Button'
```

Example (TS):
```ts
import CarList from '../my-react-ts-app/src/components/CarList'
```

Note: Components may rely on Tailwind and other utilities included in each project — replicate relevant build configs when copying components into other repos.

---

## ✅ Scripts

Run these inside each project (`mostlyUsedByUs` or `my-react-ts-app`):

- `npm run start` — start Vite dev server
- `npm run build` — build for production
- `npm run preview` — preview a production build
- `npm run lint` — run ESLint

---

## ✍️ Contributing

1. Fork the repo and create a branch: `feature/<name>`.
2. Add or update components and ensure demos/pages show their usage.
3. Run `npm run lint` and fix issues.
4. Open a PR with a short description and a demo screenshot (if UI changes).

Guidelines:
- Keep components small and focused.
- Add PropTypes (JS) or proper typings (TS) and concise README or usage notes for new components.

---

## 🔍 Notes & TODOs

- Add a LICENSE file (none included currently).
- Add unit tests and Storybook for better component documentation.
- Consider publishing components as an npm package or monorepo setup in the future.

---

## 📬 Contact

If you want help integrating a component or want to propose changes, open an issue or a PR in this repo.

---

*Generated README — feel free to edit and extend with your project-specific details.*
