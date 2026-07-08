# Jinlun Zhang — Personal Portfolio

A fast, static personal portfolio website built with plain **HTML, CSS, and
vanilla JavaScript**. No build step, no framework, no backend — it runs by
opening `index.html` in a browser and deploys to **GitHub Pages** as-is.

---

## 1. Folder structure

```
Personal Website/
├── index.html                     # Home + all main sections
├── articles.html                  # Insights: full list of articles
├── article.html                   # Single-article reader (loads ?id=…)
├── 404.html                       # Friendly not-found page
├── styles.css                     # All styling (design tokens at the top)
├── script.js                      # Navigation, reveals, article rendering
├── .nojekyll                      # Tells GitHub Pages to skip Jekyll
├── .gitignore                     # Keeps the résumé PDF out of the public repo
├── README.md                      # This file
├── data/
│   └── articles.js                # ← Your articles live here (edit this)
└── assets/
    ├── favicon.svg                # Site icon (JZ monogram)
    └── img/
        ├── profile.png            # ← Your profile photo
        ├── logo-bdo.png           # Company logos (experience section)
        ├── logo-rbc.png
        ├── logo-queens.png        # School logos (education section)
        ├── logo-schulich.png
        └── articles/
            └── quantum-computing.svg   # Example article cover
```

---

## 2. Where to put your content

| What                | Put it here                              | Then update                                                        |
| ------------------- | ---------------------------------------- | ------------------------------------------------------------------ |
| **Profile photo**   | `assets/img/profile.png`                 | Replace the file (keep the name) — no code change needed.          |
| **Company / school logos** | `assets/img/logo-*.png`           | Replace the matching file (keep the name) to update a logo.        |
| **Article covers**  | `assets/img/articles/`                   | Reference the path in `data/articles.js` (`cover: "..."`).         |
| **Article content** | `data/articles.js`                       | Add/edit article objects (see below).                              |
| **Contact email**   | `index.html` (and article/footer links)  | Search for `jinzhang15@outlook.com` and update if it ever changes. |
| **LinkedIn URL**    | `index.html`, `articles.html`, `article.html` | Search for `linkedin.com/in/` and update if it changes.       |

> Tip: to swap the photo but keep a different filename, update the
> `src="assets/img/profile.png"` reference in `index.html` (look for the
> comment `<!-- Profile photo... -->`).

> **Résumé:** the site intentionally does **not** link to a résumé PDF, and
> `.gitignore` keeps any `*.pdf` out of the public repository. To offer a
> download later, remove the résumé lines from `.gitignore` and add a link.

---

## 3. Adding a new article (no build step)

Open `data/articles.js` and copy an existing `{ … }` block to the **top** of the
`ARTICLES` array (newest first). Fill in the fields:

```js
{
  id: "my-new-article",           // unique; becomes article.html?id=my-new-article
  title: "My New Article Title",
  category: "Data & AI Strategy",  // shown as a small pill / tag
  date: "2026-03-15",              // YYYY-MM-DD (used for ordering + display)
  readingTime: "5 min read",       // optional; auto-estimated if omitted
  cover: "assets/img/articles/my-cover.jpg", // optional ("" = gradient placeholder)
  published: true,                 // false = shows as a "Coming soon" card
  externalUrl: "",                 // optional link to the original (e.g. LinkedIn)
  excerpt: "One or two sentences shown on the card.",
  deck: "A short standfirst shown under the title on the article page.",
  body: `
    <p>Write your article using simple HTML.</p>
    <h2>A section heading</h2>
    <p>More text, <strong>bold</strong>, <em>italics</em>, and
       <a href="https://example.com">links</a> all work.</p>
    <ul><li>Bulleted</li><li>lists too</li></ul>
    <blockquote>And pull-quotes.</blockquote>
  `,
},
```

- **Publish later?** Set `published: false`. The article appears as a tasteful
  “Coming soon” card and won’t open until you flip it to `true`.
- **Ordering** is automatic: published articles show newest-first, followed by
  any upcoming drafts.
- The home page shows the **first 3**; the full list lives on `articles.html`.

> The example “Quantum Computing” entry currently contains a **summary** with a
> link to the original LinkedIn article. To host the full text here, paste it
> into that entry’s `body` field.

---

## 4. Run it locally

**Option A — just open it.** Double-click `index.html`. Everything works,
including articles, because all data is bundled in `data/articles.js`.

**Option B — local server (recommended).** A local server avoids any browser
restrictions and mirrors production:

```powershell
# From the project folder, using Python (already common on Windows):
python -m http.server 5500
# then open http://localhost:5500
```

Or use the VS Code **Live Server** extension → “Go Live”.

---

## 5. Deploy to GitHub Pages

The site is a plain static site at the repository root, so deployment is simple.

### First-time setup

1. Create a new repository on GitHub (public).
   - For a **project site**, name it anything (e.g. `portfolio`).
   - For your **primary user site**, name it `YOUR-USERNAME.github.io`.
2. Push this folder to the repository:

   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages**.
   - **Source:** “Deploy from a branch”.
   - **Branch:** `main`, folder `/ (root)` → **Save**.
4. Wait ~1 minute, then visit your site:
   - Project site: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
   - User site: `https://YOUR-USERNAME.github.io/`

### Updating the site later

```powershell
git add .
git commit -m "Add new article"
git push
```

GitHub Pages redeploys automatically within a minute or two.

> **Why `.nojekyll`?** GitHub Pages runs Jekyll by default. This site doesn’t
> need it, and the `.nojekyll` file ensures every file/folder is served exactly
> as-is (harmless but tidy). All asset paths are **relative**, so the site works
> whether it’s served from a root domain or a `/project` subpath.

---

## 6. Customizing the look

All colours, spacing, shadows, and fonts are defined as CSS variables at the top
of `styles.css` under `:root`. For example, to shift the accent colour, change:

```css
--brand: #35608e;      /* muted slate blue */
```

Fonts are loaded from Google Fonts in each HTML `<head>` (Inter + Source Serif 4).

---

## 7. Notes on content & confidentiality

Client names and confidential engagement details are intentionally omitted.
Selected work is described at a high level. Keep it that way when adding new
content — describe outcomes and capabilities rather than proprietary specifics.
