# Kanso for Obsidian

A calm, minimal Obsidian theme ported from [kanso.nvim](https://github.com/webhooked/kanso.nvim), with four variants: Zen, Ink, Mist, and Pearl.

![Kanso Zen in Obsidian](screenshot.png)

## Features

- Four variants matching kanso.nvim's palettes: three dark (Zen, Ink, Mist) and one light (Pearl)
- Code blocks colored like kanso.nvim
- Things-inspired task checkboxes, with eight styled markers and a choice of square, rounded, or circle
- Styling for the [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks) plugin's due, scheduled, and start dates
- Optional settings through [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)

## Installation

**From Obsidian (recommended):** open **Settings → Appearance → Themes → Manage**, search for **Kanso**, then select **Install and use**.

**Manually:** download `manifest.json` and `theme.css` from the [latest release](https://github.com/friesentius/obsidian-kanso/releases/latest), and put both in `<your-vault>/.obsidian/themes/Kanso/`. Then select **Kanso** under **Settings → Appearance → Themes**.

## Settings

Kanso works without any plugins. With the Style Settings plugin installed, the **Kanso** section adds:

| Setting | Options | Default |
| --- | --- | --- |
| Variant | Zen, Ink, Mist, Pearl | Without the plugin: Zen in dark mode, Pearl in light mode |
| Checkbox shape | Square, Rounded, Circle | Rounded |
| Readable line width | Width in pixels | 760px |
| Radius | Size in pixels | 8px |
| Editor font size | Size in pixels | 16px |

Choosing a variant sets the color scheme: Pearl is always light, and Zen, Ink, and Mist are always dark.

![Checkbox shapes: Square, Rounded, Circle](assets/checkbox-shapes.png)

## Task checkboxes

| Marker | Meaning | Style |
| --- | --- | --- |
| `[ ]` | To do | Outlined |
| `[x]` | Done | Green, muted text |
| `[-]` | Cancelled | Grey with an X, struck-through text |
| `[>]` | Forwarded | Blue, right arrow |
| `[<]` | Scheduled | Violet, left arrow |
| `[!]` | Important | Red, exclamation mark |
| `[?]` | Question | Yellow, question mark |
| `[/]` | In progress | Half-filled aqua |

## Tasks plugin

If the Tasks plugin is installed, Kanso colors its dates. Due dates are red when overdue and orange when due today. Scheduled and start dates are orange once they have passed. Created, done, and cancelled dates are muted. You don't need any extra markup.

## Compatibility

Requires Obsidian 1.5.8 or later, on desktop and mobile.

## Credits

- Colors from [kanso.nvim](https://github.com/webhooked/kanso.nvim) by webhooked.
- The idea of styling alternate checkbox markers comes from [obsidian-things](https://github.com/colineckert/obsidian-things) (MIT), which credits kepano's [Minimal theme](https://minimal.guide/Block+types/Checklists#Checkbox+styling). Kanso's own selectors, icons, and colors are an independent implementation.

## Feedback

Found a bug or have an idea? [Open an issue](https://github.com/friesentius/obsidian-kanso/issues).

## License

[MIT](LICENSE)
