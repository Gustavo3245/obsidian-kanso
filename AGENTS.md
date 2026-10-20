# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.
- `manifest.json` must only contain fields from Obsidian's theme manifest schema (`name`, `version`, `minAppVersion`, `author`, `authorUrl`); there is no `description` field, and Obsidian's theme review flags unknown fields. `scripts/validate-json.mjs` enforces the required-field list, so keep it in sync with the schema, not with whatever fields happen to be present.
- To reproduce Obsidian's community-theme review CSS lint locally (not just this repo's `.stylelintrc.json`), lint with the `stylelint-config-obsidianmd` package instead — it is the same config referenced by `obsidianmd/obsidian-sample-theme`. Its `plugin/no-unsupported-browser-features` rule flags CSS features (e.g. `css-masks`) unsupported by old Chromium on *both* the unprefixed and any vendor-prefixed declaration, so adding a `-webkit-` fallback does not clear that warning by itself; the fix is to raise `minAppVersion` past the Chromium version that gained full support, or avoid the feature.
- CI (`.github/workflows/validate.yml`) runs `npm run validate` (manifest/variant JSON shape) and `npm run lint:css` (this repo's own relaxed `.stylelintrc.json`, not the stricter official config above).
- To visually test `theme.css` in a real Obsidian when no FUSE/X server is available: extract the AppImage (`./Obsidian.AppImage --appimage-extract`, since mounting needs FUSE), then run the extracted `squashfs-root/obsidian` binary with `--no-sandbox --ozone-platform=headless --enable-features=UseOzonePlatform --ozone-override-screen-size=WIDTH,HEIGHT --remote-debugging-port=PORT --user-data-dir=<profile>` (plain `--headless` or `--window-size` do not produce a usable framebuffer; `--ozone-override-screen-size` does). Register the test vault once by writing `<profile>/obsidian.json` with `{"vaults":{"v1":{"path":"<vault>","ts":<ms>,"open":true}}}` before first launch, so it opens straight into the vault instead of the picker. Drive it with `chrome-devtools-axi` pointed at `CHROME_DEVTOOLS_AXI_BROWSER_URL=http://127.0.0.1:PORT`; switch themes/variants from the console with `app.customCss.setTheme('Kanso')` and `document.body.classList.add(...)`. In this headless mode the window chrome (the native title-bar button row specifically) can render a stale/cached frame in screenshots that does not reflect live DOM changes; verify title-bar CSS by checking `getComputedStyle`/`pointerEvents` in `eval` rather than trusting that one region of the screenshot.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
