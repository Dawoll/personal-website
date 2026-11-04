# Project documentation

[Live website ↗](https://dawoll.github.io/personal-website/) · [README](../README.md) · [Dokumentacja po polsku](documentation.pl.md)

## Project structure

| Location | Purpose |
| --- | --- |
| `index.html` | Home page |
| `cs.html`, `music.html`, `mygame.html` | English subpages: Counter-Strike, music and my game project |
| `pl/` | Folder containing the corresponding Polish pages |
| `css/style.css` | Styles, themes and responsive layouts |
| `javaScript/functions.js` | Main website interactions |
| `javaScript/storage.js` | Saved theme and language preferences |
| `javaScript/contact.js` | Web3Forms contact form |
| `assets/` | Icons, photos, backgrounds, fonts, character GIFs and videos |
| `docs/` | Documentation and asset information in both languages |

## Main features

### functions.js

- Theme switching.
- Initial theme icon.
- Language flag matching the theme.
- Animated icons.
- Copying the email address.
- Photo previews.
- Character animation showcase.
- Video player and recording selection.
- Automatic advance to the next video.
- Animated scrolling back to the top.
- Collapsible mobile menu.

### storage.js

- Saves values in `localStorage`.
- Opens the corresponding subpage in the saved language.
- Applies the saved theme when opening another subpage.

Each language has its own HTML files, which is a practical solution for four pages. JS does not translate the text; it only remembers the choice.

### contact.js

The contact.js file handles the form using Web3Forms. It was based on an integration example and adapted to the project.

### HTML and CSS features

- Music lists.
- Navigation and external links.
- Tilted, overlapping photos.
- Revealing contact details.
- Hover effects.
- Team names in the background.
- Decorative corners around the video.
- Player information, **which is not automatically fetched from HLTV**.

## Technical choices

### HTML

- **Semantics and headings:** `header`, `nav`, `main`, `section`, `article` and `footer` describe content roles. Each page has a main `h1`, section headings using `h2` and, where needed, `h3`.
- **Accessibility:** the site uses `aria-label`, `aria-controls`, `aria-expanded` and `aria-current="page"`. These help screen readers.
- **An ID and a class on the same element:** the ID identifies a specific element for an ARIA reference, while the class applies shared styles.
- **Empty `alt=""`:** decorative icons beside equivalent text are skipped by screen readers to avoid repeating information.
- `aria-hidden="true"` similarly hides decorative content from screen readers.
- **`defer`:** scripts download while HTML is being parsed and run after parsing is complete.
- **`?v=n`:** a parameter in the file path that, when changed, gives the file a different URL and helps refresh an older cached version.
- **`target="_blank"` and `rel="noopener"`:** open a link in a new tab and prevent the opened page from accessing the original page through `window.opener`.

### CSS

- **Variables:** `--text`, `--panel`.
- **Attribute selectors `[]`:** select elements based on their HTML attributes.
- **Pseudo-classes:** `:hover`, `:last-child`.
- **Pseudo-elements:** `::before` and `::after`.
- **Fonts:** TrueType `.ttf`.
- **`inherit`:** uses the parent's font or colour.
- `vw` and `vh` depend on viewport dimensions, while `em` depends on font size.
- **`clamp()`** provides fluid sizes within limits.
- **`calc()`** calculates values using different sizes or units.
- `translateX(0)` restores the horizontal position.
- `white-space: nowrap` keeps the amount and currency together.

## Responsive layout

The reference views are **390, 768, 1366 and 1920 px**, with fluid adjustments between them.
A separate 529–900 px rule centres the third player card below the other two on the Counter-Strike page.

## Assets and licenses

[Graphics, AI editing and font licenses](credits.en.md).

## Author

**Dawid Głowacki**  
Student at Lublin University of Technology, third year, semester 5.
