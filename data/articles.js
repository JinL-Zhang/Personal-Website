/* =============================================================================
   articles.js  —  Insights / Articles content store
   -----------------------------------------------------------------------------
   HOW TO ADD A NEW ARTICLE
   1. Copy one { ... } block below and paste it at the TOP of the ARTICLES array
      (newest first).
   2. Give it a unique "id" (lowercase, dashes). This becomes the page URL:
      article.html?id=your-id
   3. Fill in title, category, date (YYYY-MM-DD), excerpt, deck and body.
   4. To publish: set "published: true". Draft/upcoming pieces use
      "published: false" and appear as a "Coming soon" card.
   5. Optional cover image: drop a file in assets/img/articles/ and set
      "cover" to its path. Leave "cover" empty ("") to use an automatic
      gradient placeholder.
   6. "body" accepts simple HTML (<p>, <h2>, <h3>, <ul>, <li>, <blockquote>,
      <a>, <strong>, <em>). This content is authored by you and rendered as-is.

   No build step is required — this file is loaded directly by the browser.
   ========================================================================== */

const ARTICLES = [
  /* ---------------------------------------------------------------------------
     EXAMPLE ARTICLE (published) — based on the LinkedIn article.
     NOTE: The text below is a concise summary prepared for this website.
     The full, canonical version is published on LinkedIn (see externalUrl).
     ▸ To host the complete article here, paste your full text into "body".
  --------------------------------------------------------------------------- */
  {
    id: "ethical-analysis-quantum-computing",
    title: "An Ethical Analysis of Quantum Computing: Are We Ready for the Incoming Power?",
    category: "Emerging Technology",
    date: "2024-06-01",              // TODO: set to the real publish date
    readingTime: "6 min read",
    cover: "assets/img/articles/quantum-computing.svg", // optional cover image
    published: true,
    externalUrl:
      "https://www.linkedin.com/pulse/ethical-analysis-quantum-computing-we-ready-incoming-power-jin-zhang-k69vc/",
    excerpt:
      "Quantum computing promises a step-change in computational power. This piece examines the ethical questions that arrive with it — from cryptography and security to access, equity and governance.",
    deck:
      "As quantum capability moves from the lab toward the enterprise, the harder questions are not only technical. They are ethical, and they deserve attention before the power is fully here.",
    /* Summary body. Replace with your full article text when ready. */
    body: `
      <p><em>The following is a short summary prepared for this site. The full
      article is published on LinkedIn — the link is at the end of this page.</em></p>

      <h2>The promise, and the pace</h2>
      <p>Quantum computing is often described as a leap rather than a step. By
      exploiting properties such as superposition and entanglement, quantum
      machines promise to solve certain classes of problems — optimisation,
      simulation of molecules and materials, and specific cryptographic tasks —
      far faster than classical computers ever could. The opportunity is real.
      So is the responsibility that comes with it.</p>

      <h2>Where the ethical questions concentrate</h2>
      <p>The debate is easy to frame as science fiction. It is more useful to
      ground it in a few concrete areas where impact is likely to land first:</p>
      <ul>
        <li><strong>Cryptography and security.</strong> Much of today's digital
        trust rests on encryption that a sufficiently capable quantum computer
        could eventually break. That raises urgent questions about
        "harvest-now, decrypt-later" risk and the transition to
        quantum-resistant standards.</li>
        <li><strong>Access and equity.</strong> If the earliest advantages accrue
        only to the best-resourced institutions, quantum capability could widen
        rather than narrow existing gaps in security, research and economic
        power.</li>
        <li><strong>Dual-use potential.</strong> The same capability that
        accelerates drug discovery or climate modelling can be turned toward less
        benign ends. Intent, not just capability, becomes part of the design
        conversation.</li>
        <li><strong>Governance and accountability.</strong> Standards, oversight
        and international coordination tend to lag breakthroughs. Closing that gap
        deliberately is itself an ethical choice.</li>
      </ul>

      <h2>Are we ready?</h2>
      <p>Honestly, not yet — and that is the point. Readiness is not a single
      milestone we cross; it is a set of practices we build in advance:
      inventorying where sensitive data and long-lived secrets live, planning
      migration to post-quantum cryptography, and treating equitable access and
      responsible use as first-class requirements rather than afterthoughts.</p>

      <blockquote>The most important quantum decisions may be the governance ones
      we make before the technology fully matures — while we still have time to
      shape how the power is used.</blockquote>

      <h2>A pragmatic path forward</h2>
      <p>For leaders, the near-term action is not to buy a quantum computer. It is
      to build awareness, assess exposure, and follow the emerging standards for
      quantum-safe security — while keeping an ethical lens on who benefits and
      who could be harmed. Powerful technologies reward those who prepare
      thoughtfully and early.</p>
    `,
  },

  /* ---------------------------------------------------------------------------
     PLACEHOLDER — upcoming article (draft). Set "published: true" to release.
  --------------------------------------------------------------------------- */
  {
    id: "data-ai-operating-models",
    title: "Designing Data & AI Operating Models That Actually Stick",
    category: "Data & AI Strategy",
    date: "2026-01-01",
    readingTime: "Coming soon",
    cover: "",
    published: false,
    externalUrl: "",
    excerpt:
      "A practical look at the operating-model choices — governance, roles, and ways of working — that decide whether a data & AI strategy survives contact with the organisation.",
    deck: "",
    body: `<p>This article is in progress. Check back soon.</p>`,
  },

  /* ---------------------------------------------------------------------------
     PLACEHOLDER — upcoming article (draft).
  --------------------------------------------------------------------------- */
  {
    id: "llm-as-a-judge-evaluation",
    title: "LLM-as-a-Judge: Evaluating AI Beyond Accuracy",
    category: "AI Governance",
    date: "2026-02-01",
    readingTime: "Coming soon",
    cover: "",
    published: false,
    externalUrl: "",
    excerpt:
      "Why alignment between intent and output — not accuracy alone — is becoming the metric that matters, and how structured evaluation makes AI adoption measurable.",
    deck: "",
    body: `<p>This article is in progress. Check back soon.</p>`,
  },
];

/* Expose for both module and classic script usage. */
if (typeof window !== "undefined") {
  window.ARTICLES = ARTICLES;
}
