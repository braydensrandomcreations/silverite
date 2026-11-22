# Silverite — portable single-file build

Open **`index.html`** in a browser. It is the complete reduced app; no sibling files are required at runtime.

`silverite-single-file.html` is the same build under the original filename.

A full-screen warning appears on startup explaining that this is the portable build and that proxy browsing is unavailable. Press **CONTINUE** to enter the app. The original home menu is the default landing view, with logo and **G4M3S**, **SETTINGS**, and **CREDITS** buttons.

## What is included

- Original home menu (logo and navigation only — no proxy bar, shortcuts, clock, or search bar)
- g4m3s game library and game player
- Interface and advanced settings (reduce motion, game-close confirmation, reset)
- Credits
- Ctrl/Cmd+K command palette for pages, games, and settings

Changelogs, proxy browsing/tabs/settings, AI/HomeworkBot/Studi, appearance customization (accent, background, cursor, glow), the secret cat easter egg, and the UGS and Seraph game libraries are not included.

## Files in this folder

- `index.html` — generated single-file app (open this)
- `silverite-single-file.html` — generated single-file app, original filename
- `source.html`, `app.js`, `styles.css` — editable sources used by the build
- `assets/` — images and audio embedded by the build
- `build.mjs` — rebuild script
- `package.json` — folder-local build command

## Rebuild

From this folder:

```powershell
npm run build
```

Or directly:

```powershell
node build.mjs
```

The build downloads Google Fonts once and embeds them, so rebuilding needs an internet connection. The generated HTML must stay under 10 MB; the build fails if it exceeds that limit.

The root `npm run build:single` command also delegates to this build script.

## Notes

- No external CSS or JavaScript files are referenced by `index.html`; everything is inline.
- Local images, the secret GIF and audio, fonts, app logic, and styles are embedded as data URIs.
- Some game catalogs and thumbnails are fetched from public sources, so an internet connection may still be needed for the full game list.
