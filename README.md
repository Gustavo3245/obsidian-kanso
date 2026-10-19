# Kanso for Obsidian

An Obsidian app theme based on [`webhooked/kanso.nvim`](https://github.com/webhooked/kanso.nvim), with variants for Zen, Ink, Mist, and Pearl.

## Install

Copy this folder into:

```text
<your-vault>/.obsidian/themes/Kanso
```

Then open **Settings → Appearance → Themes** and select **Kanso**.

## Variants

Install the [Style Settings](https://github.com/mgmeyers/obsidian-style-settings) plugin and pick a variant from the **Kanso** section:

- Kanso Zen
- Kanso Ink
- Kanso Mist
- Kanso Pearl

The selected variant overrides Obsidian's base color scheme:

- Kanso Pearl always uses the light palette.
- Kanso Zen, Kanso Ink, and Kanso Mist always use dark palettes.

Style Settings also provides Kanso layout controls (readable width, radius, editor font size) and a **Checkbox shape** option (Square, Rounded, Circle). Without the Style Settings plugin installed, checkboxes default to Rounded.

## Task checkboxes

Checkbox shape is Rounded by default (Square and Circle are also available, see above), and a handful of alternate checkbox markers get their own color and glyph in Kanso's own palette:

| Marker | Meaning | Style |
| --- | --- | --- |
| `[ ]` | To-do | Outlined |
| `[x]` | Done | Filled green, muted text (no strikethrough) |
| `[-]` | Cancelled | Outlined muted, minus, strikethrough text |
| `[>]` | Forwarded | Filled blue, arrow |
| `[<]` | Scheduled | Filled violet, arrow |
| `[!]` | Important | Filled red, exclamation mark |
| `[?]` | Question | Filled yellow, question mark |
| `[/]` | In progress | Half-filled aqua |

The idea of styling alternate checkbox markers was inspired by [colineckert/obsidian-things](https://github.com/colineckert/obsidian-things) (MIT licensed), which documents the technique as originating from kepano's [Minimal theme](https://minimal.guide/Block+types/Checklists#Checkbox+styling). Kanso's selectors, icons, and colors are an independent implementation in Kanso's own palette.

## License

[MIT](LICENSE)
