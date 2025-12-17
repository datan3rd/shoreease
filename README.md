<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1ESHVqZWuLVTnxqrn44rLaIrR72FtAXq3

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`


## Deploy to GitHub Pages (recommended: GitHub Actions)

This repo is pre-configured for GitHub Pages deployment via **GitHub Actions**.

1. Push this project to a GitHub repo (default branch: `main`).
2. In your GitHub repo, go to **Settings → Pages**:
   - **Build and deployment** → Source: **GitHub Actions**
3. Add your Gemini key (optional) in **Settings → Secrets and variables → Actions**:
   - Create a repository secret named: `GEMINI_API_KEY`
4. Commit/push to `main`. The workflow **Deploy to GitHub Pages** will build and publish the `dist/` folder.

### Local dev
- `npm install`
- Copy `.env.example` → `.env.local` and add your key
- `npm run dev`

> Note: This app calls Gemini directly from the browser. Any API key used here will be visible to users. For production, consider moving the Gemini call behind a small serverless function / proxy.
