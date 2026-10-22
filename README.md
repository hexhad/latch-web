# latch-web

The website for [Latch](https://latch-web.vercel.app), the HEXHAD menu bar app that puts the Mac apps you choose behind Touch ID.

| Route | What it is |
| --- | --- |
| `/` | App overview and the DMG download |
| `/privacy` | Privacy policy |

Built with Next.js (App Router), fully static. Geist and Geist Mono (the app's fonts) are self-hosted from `app/fonts`, so pages load no third-party resources. The glass surfaces are a CSS approximation of Apple's Liquid Glass (`.glass` in `app/globals.css`), with a solid fallback under reduced transparency.

Screenshots in `public/screens/*-{light,dark}.png` are real captures from the app (`Latch --preview`) and follow the visitor's theme.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static build; npm run lint for ESLint
```

## Shipping a new Latch version

1. In the app repo, bump `CFBundleShortVersionString` and run `scripts/make-dmg.sh`.
2. Copy `dist/Latch-<version>.dmg` into `public/download/` and delete the old one.
3. Update `VERSION` and `DMG_SIZE` in `app/site.ts`.

## Deploy

Deploy on Vercel from this repo's `main` branch (framework preset: Next.js, no settings needed). Every push to `main` redeploys.

---

<p align="center">
  <a href="https://hexhad.github.io"><img src=".github/hexhad.svg" width="40" height="40" alt="HEXHAD"></a>
  <br>
  <sub>Built by <a href="https://hexhad.github.io"><b>HEXHAD</b></a> · Made in Sri Lanka</sub>
</p>
