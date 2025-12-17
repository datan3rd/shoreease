# ShoreEase Landing Page

A static landing page for the ShoreEase beach concierge concept. The app is built with React and Vite and is ready to deploy to GitHub Pages.

## Run locally
1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`

## Build for production
- Generate the static site: `npm run build`
- Preview the build locally: `npm run preview`

## Deploy to GitHub Pages
This repo is configured with a relative asset base so it can be deployed as a GitHub Page.

1. Push the project to a GitHub repository (default branch: `main`).
2. In **Settings → Pages**, select **Source: GitHub Actions**.
3. Enable the default **Deploy to GitHub Pages** workflow or run `npm run build` and publish the `dist/` folder with your preferred workflow.

No API keys or external services are required.
