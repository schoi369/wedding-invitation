# Gemini Project Context: Wedding Invitation Template

This document provides essential context and instructions for AI agents working on the Wedding Invitation Template project.

## User Communication Preference

- The user is not skilled at web coding. Explain implementation steps clearly and step by step in Korean when helping them customize the website.

## Project Overview

A modern, responsive mobile wedding invitation template built with **React 19**, **Vite 7**, **TypeScript**, and **SASS**. It features a clean UI with scroll-triggered animations and integrations with Naver Maps and Kakao SDK.

### Core Technologies
- **Frontend Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** SASS (SCSS) with CSS Variables
- **Date Management:** Day.js
- **Icons:** SVG (via `vite-plugin-svgr`)
- **Maps:** Naver Maps API
- **Social Sharing:** Kakao SDK

---

## Architecture & Structure

The project follows a component-based architecture where sections of the invitation are modularized.

- `src/const.ts`: **Primary configuration file**. Contains all wedding-specific data (names, dates, location, accounts).
- `src/App.tsx`: Main orchestrator of the sections.
- `src/component/`: Contains all UI components. Each component typically has its own `.tsx` and `.scss` file.
  - `modal/`: Custom modal management system with focus trap.
  - `store/`: Simple state management for external SDKs (Naver, Kakao).
  - `lazyDiv/`: A wrapper component that adds fade-in animations when scrolled into view.
- `vite.config.ts`: Configured to inject constants from `src/const.ts` directly into `index.html` and `manifest.json`.

---

## Development Workflow

### Key Commands
- `npm run dev`: Starts the Vite development server (port 3000).
- `npm run build`: Generates the production build in the `build/` directory.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run preview`: Previews the production build locally.

### Environment Variables
The project uses the following environment variables (defined in `.env`):
- `VITE_NAVER_MAP_CLIENT_ID`: Client ID for Naver Maps.
- `VITE_KAKAO_SDK_JS_KEY`: JavaScript key for Kakao SDK.
- `VITE_SERVER_URL`: URL for the guestbook/attendance backend.
- `VITE_STATIC_ONLY`: Set to `true` to disable backend-dependent features (Guestbook, Attendance).

---

## Coding Conventions & Guidelines

### 1. Configuration First
Always check `src/const.ts` before hardcoding any wedding-related information. New configuration items should be added here to maintain a single source of truth.

### 2. Documentation
- **Korean Friendly:** The codebase is fully documented with Korean comments (JSDoc style). This is intended to help Korean users easily understand and customize the template. When adding new features, please maintain this standard.

### 3. Styling
- **Responsive Design:** Use `rem` units for spacing and font sizes. The root `font-size` is responsive (`4vw` on small screens).
- **Theming:** Use CSS variables defined in `src/App.scss` (e.g., `var(--theme-color)`).
- **SCSS Modules:** While not using `.module.scss`, each component has its own SCSS file scoped by a top-level class (e.g., `.cover`).

### 3. Components
- **Animations:** Wrap major sections in `<LazyDiv>` to enable scroll-triggered fade-in animations.
- **Modals:** Use the custom `ModalProvider` and `useModal` hook (if applicable) for overlays. Modals are managed via a dedicated `modals-wrapper` div.

### 4. Images
- Keep images optimized. Large studio photos should be resized to ~1000px before being placed in `src/images/`.

---

## Testing & Validation
- Ensure all changes are tested on both desktop and mobile viewports.
- Verify that social sharing (Kakao) and maps (Naver) work correctly with the provided environment variables.
- If modifying the build process, ensure `manifest-inject` and HTML injection in `vite.config.ts` still function as expected.

---

# PROGRESS

- Reworked the site to visually follow the saved HTML in `/reference/`, while keeping React/Vite as the implementation structure.
- Added reference-style assets under `src/images/reference/` and wired them through `src/images/index.ts`.
- Updated `src/App.tsx` to use the reference page order: cover, parent messages, video, love letter, gallery, calendar, location, account, share.
- Kept interactive parts in React:
  - Naver map and navigation buttons still use the existing `Location` / `Map` implementation.
  - Address, account, and invitation URL copy buttons use `navigator.clipboard`.
  - Kakao share still depends on `VITE_KAKAO_SDK_JS_KEY` and Kakao developer domain setup.
- Replaced the broken YouTube embed behavior with a normal YouTube watch link to avoid the reference page's Error 153 issue.
- Restored the D-day countdown below the reference calendar image, using `WEDDING_DATE` from `src/const.ts`.
- `npm run build` has passed after the design migration and after restoring the D-day counter.
- For public repositories, ignore only the root reference source folder with `/reference/`; do not use `reference/` because that also ignores `src/images/reference/`.
