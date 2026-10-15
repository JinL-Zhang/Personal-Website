/* =============================================================================
   script.js  —  Jinlun Zhang portfolio
   Vanilla JS. No dependencies. Works from the file system or GitHub Pages.

   Responsibilities
   1. Sticky-header state on scroll (shadow + dark-over-hero)
   2. Mobile navigation toggle (accessible) + sliding active-section pill
   3. Current year in the footer
   4. Staggered scroll-reveal (IntersectionObserver) + card spotlight
   5. Render article cards (home preview + full Insights list)
   6. Render a single article on article.html (?id=…)
   ========================================================================== */
(function () {
  "use strict";

  /* ---------- small helpers ---------------------------------------------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  const CATEGORY_I18N_KEYS = {
    "Emerging Technology": "category.emergingTechnology",
    "Data & AI Strategy": "category.dataAiStrategy",
    "AI Governance": "category.aiGovernance",
    Reflections: "category.reflections",
    Insight: "category.insight",
    Draft: "category.draft",
    Post: "category.post",
  };

  function setI18nText(element, key, fallback) {
    element.textContent = fallback;
    if (key) element.dataset.i18n = key;
    return element;
  }

  function setI18nDate(element, iso) {
    element.textContent = formatDate(iso);
    element.dataset.i18nDate = iso;
    return element;
  }

  function appendMetaValue(meta, value) {
    const dot = document.createElement("span");
    dot.textContent = "•";
    meta.append(dot, value);
  }

  /** Format an ISO date (YYYY-MM-DD) as e.g. "May 2024". Returns "" if invalid. */
  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString("en-CA", { year: "numeric", month: "long" });
  }

  function readingMinutesFromHtml(html) {
    const content = new DOMParser().parseFromString(html || "", "text/html");
    const text = content.body.textContent;
    const ideographs = /[\u3400-\u9fff\uf900-\ufaff\u3040-\u30ff]/g;
    const characters = (text.match(ideographs) || []).length;
    const words = (text.replace(ideographs, " ").match(/[\p{L}\p{N}]+/gu) || []).length;
    return Math.max(1, Math.ceil(characters / 400 + words / 200));
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
    let scheduled = false;
    const update = () => {
      header.classList.toggle("scrolled", window.scrollY > 8);
      scheduled = false;
    };
    update();
    window.addEventListener("scroll", () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
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
    $$(".nav-links a, .nav-cta a", nav).forEach((a) =>
      a.addEventListener("click", () => setOpen(false))
    );

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.dataset.open === "true") {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close when clicking outside the header
    document.addEventListener("click", (e) => {
      if (nav.dataset.open === "true" && !nav.contains(e.target)) setOpen(false);
    });

    window.matchMedia("(max-width: 1080px)").addEventListener("change", () => setOpen(false));
  }

  function initSectionNav() {
    const menu = $(".nav-links");
    const links = $$('.nav-links a[href^="#"]');
    const sections = links.map((link) => $(link.getAttribute("href"))).filter(Boolean);
    if (!menu || !sections.length) return;

    const indicator = document.createElement("li");
    indicator.className = "nav-indicator";
    indicator.setAttribute("role", "presentation");
    indicator.setAttribute("aria-hidden", "true");
    menu.appendChild(indicator);

    const moveIndicator = () => {
      const active = $('a[aria-current="location"]', menu);
      menu.toggleAttribute("data-has-current", Boolean(active));
      if (!active) return;
      indicator.style.setProperty("--x", active.offsetLeft + "px");
      indicator.style.setProperty("--w", active.offsetWidth + "px");
    };

    let scheduled = false;
    let currentId = null;
    const update = () => {
      const offset = $(".site-header").getBoundingClientRect().height + 32;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= offset).pop();
      const nextId = current ? current.id : null;
      if (nextId !== currentId) {
        currentId = nextId;
        links.forEach((link) => {
          if (current && link.hash === "#" + current.id) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
        moveIndicator();
      }
      scheduled = false;
    };
    window.addEventListener("scroll", () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", update);
    // Link widths change with web-font loading and the EN/中文 switch.
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(moveIndicator);
      links.forEach((link) => observer.observe(link));
    }
    update();
    requestAnimationFrame(() => indicator.classList.add("is-ready"));
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
        // Items entering together cascade in reading order.
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry, index) => {
            entry.target.style.setProperty("--reveal-delay", Math.min(index, 6) * 80 + "ms");
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  /* ---------- 4b. cursor spotlight on cards ------------------------------ */
  function initSpotlight() {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const selector = ".focus-item, .skill-card, .theme-card, .edu-card, .article-card, .social-card, .xp";
    document.addEventListener("pointermove", (event) => {
      const card = event.target instanceof Element && event.target.closest(selector);
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", event.clientX - rect.left + "px");
      card.style.setProperty("--my", event.clientY - rect.top + "px");
    }, { passive: true });
  }

  /* ---------- 5. article cards ------------------------------------------- */

  /** Build one article card element. */
  function buildCard(article) {
    const card = document.createElement("article");
    card.className = "article-card reveal";

    const href = "article.html?id=" + encodeURIComponent(article.id);
    const category = article.category || "Insight";
    const dateLabel = formatDate(article.date);

    /* --- Draft / upcoming placeholder --- */
    if (!article.published) {
      card.classList.add("article-card--placeholder");

      const media = document.createElement("div");
      media.className = "article-card__media";
      const tag = document.createElement("span");
      setI18nText(tag, "ui.comingSoon", "Coming soon");
      media.appendChild(tag);

      const body = document.createElement("div");
      body.className = "article-card__body";

      const meta = document.createElement("div");
      meta.className = "article-card__meta";
      const pill = document.createElement("span");
      pill.className = "pill";
      setI18nText(pill, CATEGORY_I18N_KEYS[category], category);
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
      setI18nText(note, "ui.inProgress", "In progress");
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
      img.decoding = "async";
      mediaLink.appendChild(img);
    }

    const body = document.createElement("div");
    body.className = "article-card__body";

    const meta = document.createElement("div");
    meta.className = "article-card__meta";
    const pill = document.createElement("span");
    pill.className = "pill";
    setI18nText(pill, CATEGORY_I18N_KEYS[category], category);
    meta.appendChild(pill);
    if (dateLabel) {
      const date = document.createElement("span");
      appendMetaValue(meta, setI18nDate(date, article.date));
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
      '<span data-i18n="ui.readArticle">Read article</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>';
    foot.appendChild(read);

    body.append(meta, title, excerpt, foot);
    card.append(mediaLink, body);
    return card;
  }

  /** Populate a grid element (#insights-grid or #articles-grid). */
  function renderGrid(grid) {
    const all = orderedArticles().filter((article) => article.published);
    const limit = parseInt(grid.dataset.limit || "0", 10);
    const items = limit > 0 ? all.slice(0, limit) : all;

    grid.innerHTML = "";

    if (!items.length) {
      const empty = document.createElement("p");
      empty.className = "section-intro";
      empty.textContent = grid.dataset.empty || "No articles yet.";
      empty.dataset.i18n = grid.id === "insights-grid"
        ? "ui.emptyPreview"
        : "ui.emptyArticles";
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

  function initPostGrid() {
    const grid = $("#highlights-grid");
    if (!grid) return;
    const limit = parseInt(grid.dataset.limit || "0", 10);
    const sorted = (Array.isArray(window.POSTS) ? window.POSTS : [])
      .filter((post) => post.published !== false)
      .slice()
      .sort((first, second) => (second.date || "").localeCompare(first.date || ""));
    const posts = limit > 0 ? sorted.slice(0, limit) : sorted;
    grid.replaceChildren();

    if (!posts.length) {
      const empty = document.createElement("p");
      empty.className = "section-intro";
      setI18nText(empty, "ui.emptyHighlights", "No highlights yet — check back soon.");
      grid.appendChild(empty);
      return;
    }

    posts.forEach((post) => {
      const card = document.createElement("article");
      card.className = "social-card social-card--post reveal";
      const meta = document.createElement("div");
      meta.className = "article-card__meta";
      const category = document.createElement("span");
      category.className = "pill";
      setI18nText(category, CATEGORY_I18N_KEYS[post.category], post.category || "Post");
      meta.appendChild(category);
      if (post.date) {
        const date = document.createElement("time");
        date.dateTime = post.date;
        appendMetaValue(meta, setI18nDate(date, post.date));
      }

      const title = document.createElement("h3");
      title.className = "social-card__title";
      const link = document.createElement("a");
      link.href = "post.html?id=" + encodeURIComponent(post.id);
      link.className = "social-card__link";
      link.textContent = post.titleEn || post.title;
      if (post.titleEn) link.dataset.i18nZh = post.title;
      else if (post.language) link.lang = post.language;
      title.appendChild(link);

      const excerpt = document.createElement("p");
      excerpt.className = "social-card__text";
      excerpt.textContent = post.excerptEn || post.excerpt || "";
      if (post.excerptEn) excerpt.dataset.i18nZh = post.excerpt;
      else if (post.language) excerpt.lang = post.language;

      const foot = document.createElement("div");
      foot.className = "social-card__foot";
      const reading = document.createElement("span");
      const minutes = readingMinutesFromHtml(post.body);
      reading.dataset.i18nMinutes = String(minutes);
      reading.textContent = minutes + " min read";
      const more = document.createElement("span");
      more.className = "social-card__readmore";
      setI18nText(more, "social.readpost", "Read post →");
      foot.append(reading, more);
      card.append(meta, title, excerpt, foot);
      grid.appendChild(card);
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
        '<span data-i18n="reader.allInsights">All insights</span></a>' +
        '<h1 class="reader__title" data-i18n="reader.articleNotFound">Article not found</h1>' +
        '<p class="reader__deck" data-i18n="reader.articleNotFoundText">Sorry, we couldn\'t find that article. It may have moved or is not published yet.</p>' +
        '<p><a class="btn" href="articles.html" data-i18n="reader.browseInsights">Browse all insights</a></p>';
      return;
    }

    // Found but still a draft -------------------------------------------
    if (!article.published) {
      document.title = article.title + " — Jinlun Zhang";
      root.innerHTML =
        '<a class="reader__back" href="articles.html">' +
        backArrow() +
        '<span data-i18n="reader.allInsights">All insights</span></a>' +
        '<div class="reader__meta"><span class="pill"></span></div>' +
        '<h1 class="reader__title"></h1>' +
        '<p class="reader__deck" data-i18n="reader.articleDraftText">This article is in progress and isn\'t published yet. Please check back soon.</p>' +
        '<p><a class="btn" href="articles.html" data-i18n="reader.browseInsights">Browse all insights</a></p>';
      const draftCategory = article.category || "Draft";
      setI18nText(
        $(".reader__meta .pill", root),
        CATEGORY_I18N_KEYS[draftCategory],
        draftCategory
      );
      $(".reader__title", root).textContent = article.title;
      return;
    }

    // Published — render full article ------------------------------------
    document.title = article.title + " — Jinlun Zhang";
    const metaDesc = $('meta[name="description"]');
    if (metaDesc && article.excerpt) metaDesc.setAttribute("content", article.excerpt);

    const dateLabel = formatDate(article.date);
    const readingMinutes = parseInt(article.readingTime, 10) ||
      readingMinutesFromHtml(article.body);

    const frag = document.createDocumentFragment();

    // Back link
    const back = document.createElement("a");
    back.className = "reader__back";
    back.href = "articles.html";
    back.innerHTML = backArrow() +
      '<span data-i18n="reader.allInsights">All insights</span>';
    frag.appendChild(back);

    // Meta row
    const meta = document.createElement("div");
    meta.className = "reader__meta";
    const pill = document.createElement("span");
    pill.className = "pill";
    const articleCategory = article.category || "Insight";
    setI18nText(
      pill,
      CATEGORY_I18N_KEYS[articleCategory],
      articleCategory
    );
    meta.appendChild(pill);
    if (dateLabel) {
      appendMetaValue(meta, setI18nDate(document.createElement("span"), article.date));
    }
    if (readingMinutes) {
      const reading = document.createElement("span");
      reading.textContent = readingMinutes + " min read";
      reading.dataset.i18nMinutes = String(readingMinutes);
      appendMetaValue(meta, reading);
    }
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
      const noteLead = document.createElement("span");
      setI18nText(
        noteLead,
        "reader.externalLead",
        "The full, original version of this article is published on LinkedIn. A summary is provided below —"
      );
      const originalLink = document.createElement("a");
      originalLink.href = article.externalUrl;
      originalLink.target = "_blank";
      originalLink.rel = "noopener";
      setI18nText(originalLink, "reader.externalLink", "read the original ↗");
      note.append(noteLead, " ", originalLink, ".");
      frag.appendChild(note);
    }

    // Cover
    if (article.cover) {
      const cover = document.createElement("img");
      cover.className = "reader__cover";
      cover.src = article.cover;
      cover.alt = "";
      cover.decoding = "async";
      cover.fetchPriority = "high";
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
        '<p data-i18n="reader.completePrompt">Want the complete piece with full detail?</p>';
      const cta = document.createElement("a");
      cta.className = "btn";
      cta.href = article.externalUrl;
      cta.target = "_blank";
      cta.rel = "noopener";
      setI18nText(cta, "reader.readLinkedIn", "Read the full article on LinkedIn");
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
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg><span data-i18n="reader.allInsights">All insights</span>';
    const mail = document.createElement("a");
    mail.className = "btn btn--ghost";
    mail.href = "mailto:jinzhang15@outlook.com";
    setI18nText(mail, "ui.getInTouch", "Get in touch");
    footer.append(backBtn, mail);
    frag.appendChild(footer);

    root.innerHTML = "";
    root.appendChild(frag);
    window.scrollTo(0, 0);
  }

  function backArrow() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg> ';
  }

  /* ---------- 7. social post reader (post.html?id=…) --------------------- */
  function initPostReader() {
    const root = $("#post-root");
    if (!root) return;

    const id = new URLSearchParams(window.location.search).get("id");
    const list = Array.isArray(window.POSTS) ? window.POSTS : [];
    const post = list.find((p) => p.id === id && p.published !== false);

    // Not found ----------------------------------------------------------
    if (!post) {
      root.innerHTML =
        '<a class="reader__back" href="highlights.html">' +
        backArrow() +
        '<span data-i18n="reader.allHighlights">All highlights</span></a>' +
        '<h1 class="reader__title" data-i18n="reader.postNotFound">Post not found</h1>' +
        '<p class="reader__deck" data-i18n="reader.postNotFoundText">Sorry, we couldn\'t find that post. It may have moved or is not published yet.</p>' +
        '<p><a class="btn" href="highlights.html" data-i18n="reader.backHighlights">Back to highlights</a></p>';
      return;
    }

    // Render -------------------------------------------------------------
    document.title = post.title + " — Jinlun Zhang";
    const metaDesc = $('meta[name="description"]');
    if (metaDesc && post.excerpt) metaDesc.setAttribute("content", post.excerpt);

    const dateLabel = formatDate(post.date);
    const frag = document.createDocumentFragment();

    // Back link
    const back = document.createElement("a");
    back.className = "reader__back";
    back.href = "highlights.html";
    back.innerHTML = backArrow() +
      '<span data-i18n="reader.allHighlights">All highlights</span>';
    frag.appendChild(back);

    // Meta row
    const meta = document.createElement("div");
    meta.className = "reader__meta";
    const pill = document.createElement("span");
    pill.className = "pill";
    const postCategory = post.category || "Post";
    setI18nText(pill, CATEGORY_I18N_KEYS[postCategory], postCategory);
    meta.appendChild(pill);
    if (dateLabel) {
      const date = document.createElement("span");
      appendMetaValue(meta, setI18nDate(date, post.date));
    }
    const reading = document.createElement("span");
    const minutes = readingMinutesFromHtml(post.body);
    reading.dataset.i18nMinutes = String(minutes);
    reading.textContent = minutes + " min read";
    appendMetaValue(meta, reading);
    if (post.language === "zh-Hans") {
      const language = document.createElement("span");
      appendMetaValue(meta, setI18nText(language, "reader.chinese", "Chinese original"));
    }
    if (post.sourceUrl) {
      const source = document.createElement("a");
      source.href = post.sourceUrl;
      source.target = "_blank";
      source.rel = "noopener noreferrer";
      const label = document.createElement("span");
      setI18nText(label, "reader.original", "Original");
      source.append(label, " · " + (post.sourceName || "Source"));
      appendMetaValue(meta, source);
    }
    frag.appendChild(meta);

    // Title + deck
    const h1 = document.createElement("h1");
    h1.className = "reader__title";
    h1.textContent = post.title;
    if (post.language) h1.lang = post.language;
    frag.appendChild(h1);

    if (post.deck) {
      const deck = document.createElement("p");
      deck.className = "reader__deck";
      deck.textContent = post.deck;
      if (post.language) deck.lang = post.language;
      frag.appendChild(deck);
    }

    // Cover
    if (post.cover) {
      const cover = document.createElement("img");
      cover.className = "reader__cover";
      cover.src = post.cover;
      cover.alt = "";
      cover.decoding = "async";
      cover.fetchPriority = "high";
      frag.appendChild(cover);
    }

    // Body (author-controlled HTML from data/posts.js)
    const content = document.createElement("div");
    content.className = "reader__content";
    content.innerHTML = post.body || "";
    if (post.language) content.lang = post.language;
    frag.appendChild(content);

    // Footer row
    const footer = document.createElement("div");
    footer.className = "reader__footer";
    const backBtn = document.createElement("a");
    backBtn.className = "link-arrow";
    backBtn.href = "highlights.html";
    backBtn.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg><span data-i18n="reader.allHighlights">All highlights</span>';
    const mail = document.createElement("a");
    mail.className = "btn btn--ghost";
    mail.href = "mailto:jinzhang15@outlook.com";
    setI18nText(mail, "ui.getInTouch", "Get in touch");
    footer.append(backBtn, mail);
    frag.appendChild(footer);

    root.innerHTML = "";
    root.appendChild(frag);
    window.scrollTo(0, 0);
  }

  function initReadingTools() {
    const content = $(".reader__content");
    if (!content) return;
    const headings = $$("h2", content);
    if (headings.length > 1) {
      const contents = document.createElement("details");
      contents.className = "reader__toc";
      const summary = document.createElement("summary");
      setI18nText(summary, "reader.contents", "In this piece");
      const list = document.createElement("ol");
      if (content.lang) list.lang = content.lang;
      headings.forEach((heading, index) => {
        if (!heading.id) heading.id = "reader-section-" + (index + 1);
        heading.tabIndex = -1;
        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#" + heading.id;
        link.textContent = heading.textContent;
        item.appendChild(link);
        list.appendChild(item);
      });
      contents.append(summary, list);
      content.before(contents);
    }

    const progress = document.createElement("progress");
    progress.className = "reading-progress";
    progress.max = 1;
    progress.value = 0;
    progress.setAttribute("aria-hidden", "true");
    document.body.appendChild(progress);
    let scheduled = false;
    const update = () => {
      const bounds = content.getBoundingClientRect();
      const headerHeight = $(".site-header")?.offsetHeight || 0;
      const distance = Math.max(1, bounds.height - window.innerHeight + headerHeight);
      progress.value = Math.max(0, Math.min(1, (headerHeight - bounds.top) / distance));
      scheduled = false;
    };
    window.addEventListener("scroll", () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    window.addEventListener("resize", update);
    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target && content.contains(target)) target.scrollIntoView({ behavior: "instant" });
    }
    update();
  }

  /* ---------- boot ------------------------------------------------------- */
  function init() {
    initHeaderScroll();
    initNav();
    initYear();
    initToTop();
    initGrids();
    initPostGrid();
    initReader();
    initPostReader();
    initReadingTools();
    initReveal();
    initSpotlight();
    initSectionNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
