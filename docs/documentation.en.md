# Project documentation

[Live website](https://dawoll.github.io/personal-website/) · [README](../README.md) · [Polska dokumentacja](documentation.pl.md)

## 📁 Project structure

```text
personal-website/
├── index.html                  # Home page (EN)
├── cs.html                     # Counter-Strike (EN)
├── music.html                  # Music (EN)
├── mygame.html                 # Game project (EN)
├── pl/                         # Polish versions of the four pages
├── css/style.css               # Shared styles and responsive layouts
├── javaScript/functions.js     # Website interactions
├── javaScript/storage.js       # Saved theme and language
├── javaScript/contact.js       # Web3Forms form
├── assets/                     # Graphics, icons, fonts, GIFs and videos
├── docs/                       # Documentation
├── README.md                   # English README
└── README.pl.md                # Polish README
```

## ⚙️ Main features

### functions.js

- Light and dark theme switching.
- Language switching.
- Matching the theme icon.
- Matching the language flag.
- Icon animations.
- Copying the email address.
- Enlarging photos.
- Displaying character animations.
- Selecting and playing videos.
- Automatically advancing to the next video.
- Smooth scrolling back to the top.
- Collapsible menu on phones.

### storage.js

- Saves values in `localStorage`.
- Opens the corresponding subpage in the saved language.
- Applies the saved theme when opening another subpage.

Each language has its own HTML files, which is a practical solution for four pages. JS does not translate the text; it only remembers the choice.

### contact.js

The contact.js file handles the Web3Forms form using generated code and keys from the original website.

### HTML and CSS features

- Music lists.
- Navigation and external links.
- Tilted, overlapping photos.
- Revealing contact details.
- Hover effects.
- Team names in the background.
- Decorative corners around the video.
- Player information, **which is not automatically fetched from HLTV**.

## 🔧 Technical choices

### HTML

- **Semantics and headings:** **`header`, `nav`, `main`, `section`, `article` and `footer`** describe content roles. <br>
  Each page has a main **`h1`**, section headings using **`h2`** and, where needed, **`h3`**.
- **Accessibility:** the site uses **`aria-label`, `aria-controls`, `aria-expanded`, `aria-current="page"`**. These help screen readers.
- Assigning **an ID and a class to the same element:** the ID identifies a specific element for an ARIA reference, while the class applies shared styles.
- **Empty `alt=""`:** decorative icons beside equivalent text are skipped by screen readers to avoid repeating information.
- **`aria-hidden="true"`** hides decorative content from screen readers.
- **`defer`:** scripts download while HTML is being parsed and run after parsing is complete.
- **`?v=n`:** a parameter in the file path that, when changed, gives the file a different URL and helps refresh an older cached version.
- **`target="_blank"` and `rel="noopener"`:** open a link in a new tab and prevent the opened page from accessing or modifying the source page through `window.opener`.

### CSS

- **Variables: `--text`, `--panel`**.
- **Pseudo-classes: `:hover`, `:last-child`**.
- **Pseudo-elements: `::before` and `::after`**.
- **Fonts:** TrueType **`.ttf`**.
- **Attribute selectors `[]`:** select elements based on their HTML attributes.
- **`inherit`:** uses the parent's font or colour.
- **`vw` and `vh`** depend on viewport dimensions, while **`em`** depends on font size.
- **`clamp()`** provides fluid sizes.
- **`calc()`** calculates a value using different sizes or units.
- **`translateX(0)`** restores the horizontal position.
- **`white-space: nowrap`** keeps the amount and currency together.

## 📱 Responsive layout

The reference views are **390px, 768px, 1366px and 1920px**, with fluid adjustments between them. <br>
A separate **529–900px** rule centres the third player card below the other two on the Counter-Strike page.

## 📜 Assets and licenses

Read about the **licenses** of the materials used: [licenses and AI assistance](credits.en.md)

## 👤 Author

**Dawid Głowacki**<br>
Student at **Lublin University of Technology**, **third** year, semester **5**.

