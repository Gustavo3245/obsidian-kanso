# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.
- `manifest.json` must only contain fields from Obsidian's theme manifest schema (`name`, `version`, `minAppVersion`, `author`, `authorUrl`); there is no `description` field, and Obsidian's theme review flags unknown fields. `scripts/validate-json.mjs` enforces the required-field list, so keep it in sync with the schema, not with whatever fields happen to be present.
- To reproduce Obsidian's community-theme review CSS lint locally (not just this repo's `.stylelintrc.json`), lint with the `stylelint-config-obsidianmd` package instead — it is the same config referenced by `obsidianmd/obsidian-sample-theme`. Its `plugin/no-unsupported-browser-features` rule flags CSS features (e.g. `css-masks`) unsupported by old Chromium on *both* the unprefixed and any vendor-prefixed declaration, so adding a `-webkit-` fallback does not clear that warning by itself; the fix is to raise `minAppVersion` past the Chromium version that gained full support, or avoid the feature.
- CI (`.github/workflows/validate.yml`) runs `npm run validate` (manifest/variant JSON shape) and `npm run lint:css` (this repo's own relaxed `.stylelintrc.json`, not the stricter official config above).

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
