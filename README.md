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
├── post.html                      # Single-highlight reader (loads ?id=…)
├── 404.html                       # Friendly not-found page
├── styles.css                     # All styling (design tokens at the top)
├── script.js                      # Navigation, reveals, article rendering
├── i18n.js                        # English / Simplified Chinese interface
├── .nojekyll                      # Tells GitHub Pages to skip Jekyll
├── .gitignore                     # Keeps the résumé PDF out of the public repo
├── README.md                      # This file
├── data/
│   ├── articles.js                # ← Long-form Insights live here
│   └── posts.js                   # ← Highlight posts live here
└── assets/
    ├── favicon.svg                # Site icon (JZ monogram)
    └── img/
      ├── profile.webp           # Optimized profile photo used on the site
      ├── profile-social.jpg     # Social-share preview image
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
| **Profile photo**   | `assets/img/profile.webp`                | Replace the optimized file, or update its path in `index.html`.    |
| **Company / school logos** | `assets/img/logo-*.png`           | Replace the matching file (keep the name) to update a logo.        |
| **Article covers**  | `assets/img/articles/`                   | Reference the path in `data/articles.js` (`cover: "..."`).         |
| **Article content** | `data/articles.js`                       | Add/edit article objects (see below).                              |
| **Highlight images** | `assets/img/social/`                    | Reference optimized WebP images from `data/posts.js`.              |
| **Highlight content** | `data/posts.js`                        | Add/edit post objects; each opens through `post.html?id=...`.       |
| **Contact email**   | `index.html` (and article/footer links)  | Search for `jinzhang15@outlook.com` and update if it ever changes. |
| **LinkedIn URL**    | `index.html`, `articles.html`, `article.html` | Search for `linkedin.com/in/` and update if it changes.       |

> Tip: keep editable Word documents and original artwork in the ignored source
> folders/files listed in `.gitignore`. Only optimized web assets should be
> committed and deployed.

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
  published: true,                 // false = omitted from public listings
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

- **Publish later?** Set `published: false`. The article is omitted from the
  homepage and Insights listing until you flip it to `true`. Its direct reader
  link shows an unpublished notice.
- **Ordering** is automatic: published articles show newest-first.
- The home page shows the **first 3**; the full list lives on `articles.html`.

Drafts in JavaScript files are still downloadable, even when hidden from the
interface. Keep confidential or genuinely private drafts outside the deployed
files.

The “Quantum Computing” entry is fully self-hosted in `data/articles.js`.

### Adding a Highlight post

Add a post object to `data/posts.js`, place its optimized images in
`assets/img/social/` when needed. The homepage generates cards from this data,
newest first; no separate HTML card or translation-dictionary entry is needed.
Each full post opens at `post.html?id=your-post-id`.

- Use `title`, `excerpt`, and `body` for the original text. `deck` and `cover`
  are optional. Use an ISO `date` for sorting.
- For a Chinese post, set `language: "zh-Hans"`. Optional `titleEn` and
  `excerptEn` provide English previews; the full body stays in Chinese in
  either interface language.
- Optional `sourceUrl` and `sourceName` add a clearly labelled original-source
  link. The September 2026 homecoming essay is reproduced from the author's
  Zhihu post, using its displayed last-edited date. The original has no images.
- Set `published: false` to omit a post from the homepage and its reader.
  Existing posts without the field remain published.
- The reader generates a collapsible contents list for two or more `h2`
  headings, a reading-progress indicator, and a reading-time estimate that
  accounts for both Chinese characters and English words.
- Preserve author formatting with paragraphs, headings, emphasis, lists,
  blockquotes, rules, and code blocks. Do not paste platform scripts, tracking
  attributes, or automatically inserted search links into the content.

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

Fonts are loaded from Google Fonts in each HTML `<head>` (Manrope + Source Serif 4,
with local Chinese fallbacks). The design uses graphite text, blue navigation
accents, green editorial details, and unframed section layouts.

The homepage highlights the current section in navigation. Mobile navigation
keeps the language switch visible, puts Contact in the menu, and returns keyboard
focus to the toggle when dismissed with Escape. Short reveal transitions respect
the operating system's reduced-motion preference.

---

## 7. Notes on content & confidentiality

Client names and confidential engagement details are intentionally omitted.
Selected work is described at a high level. Keep it that way when adding new
content — describe outcomes and capabilities rather than proprietary specifics.

## 8. Checks before publishing

- Open the homepage at mobile and desktop widths in both interface languages.
- Open both Highlights and an Insight; check contents links, images, and source
  links. Confirm unknown post/article IDs show a useful fallback.
- Use the keyboard to open/close the mobile menu and follow the skip link.
- Check reduced motion and make sure published content remains readable.
- Confirm `git status` contains no private documents or unoptimized originals.

Useful next content improvements: short, anonymized case studies with verified
outcomes, and static per-post HTML metadata if unique search/social previews
become a priority. The current query-based readers render their content and
titles in JavaScript; social crawlers may only see the generic HTML metadata.
