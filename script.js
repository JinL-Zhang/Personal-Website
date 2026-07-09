/* =============================================================================
   script.js  —  Jinlun Zhang portfolio
   Vanilla JS. No dependencies. Works from the file system or GitHub Pages.

   Responsibilities
   1. Sticky-header shadow on scroll
   2. Mobile navigation toggle (accessible)
   3. Current year in the footer
   4. Subtle scroll-reveal (IntersectionObserver)
   5. Render article cards (home preview + full Insights list)
   6. Render a single article on article.html (?id=…)
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- small helpers ---------------------------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /** Format an ISO date (YYYY-MM-DD) as e.g. "May 2024". Returns "" if invalid. */
  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-CA", { year: "numeric", month: "long" });
  }

  /** Rough reading-time estimate from an HTML string (~200 wpm). */
  function readingTimeFromHtml(html) {
    const text = String(html || "").replace(/<[^>]*>/g, " ");
    const words = (text.match(/\S+/g) || []).length;
    const mins = Math.max(1, Math.round(words / 200));
    return mins + " min read";
  }

  /** Order articles: published (newest first), then upcoming drafts. */
  function orderedArticles() {
    const list = Array.isArray(window.ARTICLES) ? window.ARTICLES.slice() : [];
    const published = list
      .filter((a) => a.published)
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    const upcoming = list
      .filter((a) => !a.published)
      .sort((a, b) => (a.date > b.date ? 1 : -1));
    return published.concat(upcoming);
  }

  /* ---------- 1. header scroll state ------------------------------------- */
  function initHeaderScroll() {
    const header = $(".site-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- 2. mobile navigation --------------------------------------- */
  function initNav() {
    const nav = $(".nav");
    const toggle = $(".nav-toggle");
    if (!nav || !toggle) return;

    const setOpen = (open) => {
      nav.dataset.open = open ? "true" : "false";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    setOpen(false);

    toggle.addEventListener("click", () =>
      setOpen(nav.dataset.open !== "true")
    );

    // Close after choosing a link
    $$(".nav-links a", nav).forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") setOpen(false);
    });

    // Close when clicking outside the header
    document.addEventListener("click", (e) => {
      if (nav.dataset.open === "true" && !nav.contains(e.target)) setOpen(false);
    });
  }

  /* ---------- 3. footer year --------------------------------------------- */
  function initYear() {
    $$("#year").forEach((el) => (el.textContent = String(new Date().getFullYear())));
  }

  /* ---------- 3b. scroll to top ------------------------------------------
     The header is `position: sticky` and always visible, so a plain #top
     anchor never scrolls. Handle these links explicitly. */
  function initToTop() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    $$('a[href="#top"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
        if (window.history && history.replaceState) {
          history.replaceState(null, "", location.pathname + location.search);
        }
      });
    });
  }

  /* ---------- 4. scroll reveal ------------------------------------------- */
  function initReveal() {
    const items = $$(".reveal");
    if (!items.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- 5. article cards ------------------------------------------- */

  /** Build one article card element. */
  function buildCard(article) {
    const card = document.createElement("article");
    card.className = "article-card";

    const href = "article.html?id=" + encodeURIComponent(article.id);
    const category = article.category || "Insight";
    const dateLabel = formatDate(article.date);

    /* --- Draft / upcoming placeholder --- */
    if (!article.published) {
      card.classList.add("article-card--placeholder");

      const media = document.createElement("div");
      media.className = "article-card__media";
      const tag = document.createElement("span");
      tag.textContent = "Coming soon";
      media.appendChild(tag);

      const body = document.createElement("div");
      body.className = "article-card__body";

      const meta = document.createElement("div");
      meta.className = "article-card__meta";
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = category;
      meta.appendChild(pill);

      const title = document.createElement("h3");
      title.className = "article-card__title";
      title.textContent = article.title;

      const excerpt = document.createElement("p");
      excerpt.className = "article-card__excerpt";
      excerpt.textContent = article.excerpt || "";

      const foot = document.createElement("div");
      foot.className = "article-card__foot";
      const note = document.createElement("span");
      note.style.cssText = "font-weight:600;color:var(--muted);font-size:.9rem;";
      note.textContent = "In progress";
      foot.appendChild(note);

      body.append(meta, title, excerpt, foot);
      card.append(media, body);
      return card;
    }

    /* --- Published card --- */
    const mediaLink = document.createElement("a");
    mediaLink.className = "article-card__media";
    mediaLink.href = href;
    mediaLink.setAttribute("aria-hidden", "true");
    mediaLink.setAttribute("tabindex", "-1");
    if (article.cover) {
      const img = document.createElement("img");
      img.src = article.cover;
      img.alt = ""; // decorative; the title link carries the accessible name
      img.loading = "lazy";
      mediaLink.appendChild(img);
    }

    const body = document.createElement("div");
    body.className = "article-card__body";

    const meta = document.createElement("div");
    meta.className = "article-card__meta";
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = category;
    meta.appendChild(pill);
    if (dateLabel) {
      const dot = document.createElement("span");
      dot.textContent = "•";
      const date = document.createElement("span");
      date.textContent = dateLabel;
      meta.append(dot, date);
    }

    const title = document.createElement("h3");
    title.className = "article-card__title";
    const titleLink = document.createElement("a");
    titleLink.href = href;
    titleLink.textContent = article.title;
    title.appendChild(titleLink);

    const excerpt = document.createElement("p");
    excerpt.className = "article-card__excerpt";
    excerpt.textContent = article.excerpt || "";

    const foot = document.createElement("div");
    foot.className = "article-card__foot";
    const read = document.createElement("a");
    read.className = "link-arrow";
    read.href = href;
    read.innerHTML =
      'Read article <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';
    foot.appendChild(read);

    body.append(meta, title, excerpt, foot);
    card.append(mediaLink, body);
    return card;
  }

  /** Populate a grid element (#insights-grid or #articles-grid). */
  function renderGrid(grid) {
    const all = orderedArticles();
    const limit = parseInt(grid.dataset.limit || "0", 10);
    const items = limit > 0 ? all.slice(0, limit) : all;

    grid.innerHTML = "";

    if (!items.length) {
      const empty = document.createElement("p");
      empty.className = "section-intro";
      empty.textContent = grid.dataset.empty || "No articles yet.";
      grid.appendChild(empty);
      return;
    }
    items.forEach((a) => grid.appendChild(buildCard(a)));
  }

  function initGrids() {
    ["#insights-grid", "#articles-grid"].forEach((sel) => {
      const grid = $(sel);
      if (grid) renderGrid(grid);
    });
  }

  /* ---------- 6. single article reader ----------------------------------- */
  function initReader() {
    const root = $("#reader-root");
    if (!root) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const list = Array.isArray(window.ARTICLES) ? window.ARTICLES : [];
    const article = list.find((a) => a.id === id);

    // Not found ----------------------------------------------------------
    if (!article) {
      root.innerHTML =
        '<a class="reader__back" href="articles.html">' +
        backArrow() +
        "All insights</a>" +
        '<h1 class="reader__title">Article not found</h1>' +
        '<p class="reader__deck">Sorry, we couldn\'t find that article. It may have moved or is not published yet.</p>' +
        '<p><a class="btn" href="articles.html">Browse all insights</a></p>';
      return;
    }

    // Found but still a draft -------------------------------------------
    if (!article.published) {
      document.title = article.title + " — Jinlun Zhang";
      root.innerHTML =
        '<a class="reader__back" href="articles.html">' +
        backArrow() +
        "All insights</a>" +
        '<div class="reader__meta"><span class="pill"></span></div>' +
        '<h1 class="reader__title"></h1>' +
        '<p class="reader__deck">This article is in progress and isn\'t published yet. Please check back soon.</p>' +
        '<p><a class="btn" href="articles.html">Browse all insights</a></p>';
      $(".reader__meta .pill", root).textContent = article.category || "Draft";
      $(".reader__title", root).textContent = article.title;
      return;
    }

    // Published — render full article ------------------------------------
    document.title = article.title + " — Jinlun Zhang";
    const metaDesc = $('meta[name="description"]');
    if (metaDesc && article.excerpt) metaDesc.setAttribute("content", article.excerpt);

    const dateLabel = formatDate(article.date);
    const reading = article.readingTime || readingTimeFromHtml(article.body);

    const frag = document.createDocumentFragment();

    // Back link
    const back = document.createElement("a");
    back.className = "reader__back";
    back.href = "articles.html";
    back.innerHTML = backArrow() + "All insights";
    frag.appendChild(back);

    // Meta row
    const meta = document.createElement("div");
    meta.className = "reader__meta";
    const pill = document.createElement("span");
    pill.className = "pill";
    pill.textContent = article.category || "Insight";
    meta.appendChild(pill);
    [dateLabel, reading].filter(Boolean).forEach((txt) => {
      const dot = document.createElement("span");
      dot.textContent = "•";
      const span = document.createElement("span");
      span.textContent = txt;
      meta.append(dot, span);
    });
    frag.appendChild(meta);

    // Title + deck
    const h1 = document.createElement("h1");
    h1.className = "reader__title";
    h1.textContent = article.title;
    frag.appendChild(h1);

    if (article.deck) {
      const deck = document.createElement("p");
      deck.className = "reader__deck";
      deck.textContent = article.deck;
      frag.appendChild(deck);
    }

    // Editorial note when the canonical copy lives elsewhere (e.g. LinkedIn)
    if (article.externalUrl) {
      const note = document.createElement("p");
      note.className = "editor-note";
      note.innerHTML =
        "The full, original version of this article is published on LinkedIn. " +
        'A summary is provided below — <a href="' +
        encodeURI(article.externalUrl) +
        '" target="_blank" rel="noopener">read the original ↗</a>.';
      frag.appendChild(note);
    }

    // Cover
    if (article.cover) {
      const cover = document.createElement("img");
      cover.className = "reader__cover";
      cover.src = article.cover;
      cover.alt = "";
      frag.appendChild(cover);
    }

    // Body (author-controlled HTML from data/articles.js)
    const content = document.createElement("div");
    content.className = "reader__content";
    content.innerHTML = article.body || "";
    frag.appendChild(content);

    // External CTA callout
    if (article.externalUrl) {
      const callout = document.createElement("div");
      callout.className = "reader__callout";
      callout.innerHTML =
        "<p>Want the complete piece with full detail?</p>";
      const cta = document.createElement("a");
      cta.className = "btn";
      cta.href = article.externalUrl;
      cta.target = "_blank";
      cta.rel = "noopener";
      cta.textContent = "Read the full article on LinkedIn";
      callout.appendChild(cta);
      frag.appendChild(callout);
    }

    // Footer row
    const footer = document.createElement("div");
    footer.className = "reader__footer";
    const backBtn = document.createElement("a");
    backBtn.className = "link-arrow";
    backBtn.href = "articles.html";
    backBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg> All insights';
    const mail = document.createElement("a");
    mail.className = "btn btn--ghost";
    mail.href = "mailto:jinzhang15@outlook.com";
    mail.textContent = "Get in touch";
    footer.append(backBtn, mail);
    frag.appendChild(footer);

    root.innerHTML = "";
    root.appendChild(frag);
    window.scrollTo(0, 0);
  }

  function backArrow() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg> ';
  }

  /* ---------- boot ------------------------------------------------------- */
  function init() {
    initHeaderScroll();
    initNav();
    initYear();
    initToTop();
    initGrids();
    initReader();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
