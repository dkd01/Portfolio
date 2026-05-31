# Aryan Dhakad Portfolio

One-page Vite + React portfolio with a paper-glass visual system.

## Local development

Use the Codex-bundled Node runtime if `node` or `npm` is missing in your shell:

```bash
export PATH="/Applications/Codex.app/Contents/Resources:$PATH"
npm install
npm run dev
```

Default local URL:

```text
http://127.0.0.1:5173/
```

## Production build

```bash
export PATH="/Applications/Codex.app/Contents/Resources:$PATH"
npm run build
```

## Deploy on Vercel

This app is already Vercel-ready.

Project settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### GitHub import flow

1. Push this repository to GitHub.
2. Open Vercel and choose `Add New...` -> `Project`.
3. Import `dkd01/Portfolio`.
4. Keep the default Vite settings above.
5. Deploy.

### CLI flow

```bash
export PATH="/Applications/Codex.app/Contents/Resources:$PATH"
npx vercel
```

For production deploys after the first setup:

```bash
export PATH="/Applications/Codex.app/Contents/Resources:$PATH"
npx vercel --prod
```
