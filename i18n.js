/* =============================================================================
   i18n.js  —  Jinlun Zhang portfolio
   Lightweight, dependency-free English ⇄ Simplified-Chinese switch.

   How it works
   • English lives in the HTML as the source of truth.
   • Any element with [data-i18n="key"] can be swapped to Simplified Chinese
     using the TRANSLATIONS.zh dictionary below.
   • The original English innerHTML is cached on first run, so switching back
     to English simply restores it (nothing is ever lost).
   • The chosen language is remembered in localStorage and applied on load,
     across every page that includes this script.

   Adding / editing copy
   • Give the element a data-i18n key, then add the same key here under `zh`.
   • For elements that also contain an icon (svg) or the dynamic year, wrap ONLY
     the words in a <span data-i18n="…"> so the icon is preserved.
   ========================================================================== */
(function () {
  "use strict";

  var STORAGE_KEY = "site-lang";

  var TRANSLATIONS = {
    zh: {
      /* ---- global chrome ---- */
      "skip": "跳到主要内容",
      "brand.role": "业务 · 数据 · AI",
      "nav.home": "首页",
      "nav.insights": "洞察",
      "nav.highlights": "精选",
      "nav.experience": "经历",
      "nav.skills": "技能",
      "nav.work": "项目",
      "nav.approach": "方法",
      "nav.contact": "联系",

      /* ---- hero ---- */
      "hero.eyebrow": "连接业务、数据与人工智能",
      "hero.headline": "工作于业务战略、数据、人工智能与技术驱动的运营模式的交汇之处。",
      "hero.summary": "我帮助企业将愿景转化为行动——把业务战略转译为切实可行的<strong>数据、人工智能与数字化转型</strong>成果。我的工作涵盖高管研讨、数据与 AI 战略、业务分析以及落地交付：从路线图到可衡量的改进。",
      "hero.cta.articles": "阅读文章",
      "hero.cta.experience": "查看经历",
      "hero.cta.contact": "联系我",
      "hero.meta.based": "所在地",
      "hero.meta.based.val": "加拿大 · 多伦多",
      "hero.meta.focus": "专注领域",
      "hero.meta.focus.val": "数据与 AI · 数字化转型",
      "hero.meta.education": "教育背景",
      "hero.meta.education.val": "人工智能领域 管理硕士（MMAI）<br>计算机科学学士",
      "hero.meta.languages": "语言",
      "hero.meta.languages.val": "英语 · 普通话",
      "hero.badge.title": "数据与 AI 顾问",
      "hero.badge.sub": "战略 · 分析 · 交付",

      /* ---- focus strip ---- */
      "focus.1.h": "数字战略与转型",
      "focus.1.p": "通过路线图与运营模式，让管理层在优先事项与目标上达成一致。",
      "focus.2.h": "数据与 AI 战略",
      "focus.2.p": "治理良好的应用场景、分析就绪度，以及面向业务的价值界定。",
      "focus.3.h": "AI / 机器学习落地",
      "focus.3.p": "从场景评估到在现代数据与 AI 平台上的落地交付。",
      "focus.4.h": "业务分析与交付",
      "focus.4.p": "需求梳理、现状 / 目标状态分析，以及真正落地的变革。",

      /* ---- insights ---- */
      "insights.eyebrow": "洞察",
      "insights.title": "文章与观点",
      "insights.intro": "关于数据、人工智能，以及数字化转型中“人”的一面的不定期写作。",
      "insights.viewall": "查看全部洞察",

      /* ---- social highlights ---- */
      "social.eyebrow": "社交动态",
      "social.title": "精选动态",
      "social.intro": "一些简短的观点与随想——介于长文之间，关于数据、人工智能与技术的思考。此栏目仍在筹备中，敬请期待。",
      "social.soon": "敬请期待",
      "social.wip": "筹备中",
      "social.1.tag": "数据与 AI",
      "social.1.text": "关于数据与人工智能真正创造价值之处的简短观点——以及热度何时超越了实际。",
      "social.2.tag": "科技与社会",
      "social.2.text": "关于技术更广泛影响的随笔——伦理、可及性，以及数字化转型中“人”的一面。",
      "social.3.tag": "工作之道",
      "social.3.text": "关于咨询、交付，以及帮助团队将战略转化为行动的务实思考。",

      /* ---- experience ---- */
      "exp.eyebrow": "职业背景",
      "exp.title": "兼具战略与交付的从业经历",
      "exp.intro": "一条横跨数字化转型、数据与 AI 以及业务分析的咨询之路——将高管层面的顾问工作与亲力亲为的落地实施相结合。",
      "exp.bdo.company": "BDO 加拿大",
      "exp.bdo.period": "2024 — 至今",
      "exp.bdo.location": "加拿大 · 多伦多 · 咨询",
      "exp.bdo.role": "顾问，数字战略与转型",
      "exp.bdo.li1": "主持客户研讨会，梳理痛点、定义现状与目标状态，并制定转型路线图，使高管在优先事项与预期成果上达成一致。",
      "exp.bdo.li2": "将对标分析与方案选项分析转化为面向高管的建议与演示材料。",
      "exp.bdo.li3": "制定数据与 AI 战略交付物——运营模式、治理架构与路线图，以提升数据可靠性、分析就绪度与生产力。",
      "exp.bdo.li4": "通过提案、RFP 响应、工作说明书（SOW）、范围定义与成功指标，支持销售与交付。",
      "exp.bdo.proj1.h": "AI 评估与治理 — “LLM 作为评判者” <span>2025 – 2026</span>",
      "exp.bdo.proj1.p": "设计了一套基于大语言模型（LLM）的评估方法，用于衡量在检索增强（RAG）工作流中用户意图与 AI 生成回复之间的一致性，并在 Azure 上交付。将分析结果转化为用户指导、提示词模板优化与可复用的评估闭环——助力更深入的 AI 采用与更快的交付周期。",
      "exp.bdo.proj2.h": "全球技术架构与整合 <span>2026</span>",
      "exp.bdo.proj2.p": "为一家跨多国运营的跨国企业主导现状与目标状态技术架构——梳理现有系统，并设计在共享平台、本地需求与未来增长之间取得平衡的目标模型。向高管层呈现整体视图，以统一领导层认识，并为后续转型项目的供应商选型提供依据。",
      "exp.rbc.company": "加拿大皇家银行",
      "exp.rbc.period": "2023 — 2024",
      "exp.rbc.location": "加拿大 · 多伦多 · 数据与分析",
      "exp.rbc.role": "人工智能顾问",
      "exp.rbc.li1": "共同开发了一款端到端的自然语言处理应用，用于从文档与数据模型中半自动化地构建数据本体（ontology）。",
      "exp.rbc.li2": "在数据与分析 CTO 组织内，参与数据标注、大语言模型实验（HuggingFace）以及应用 / API 开发。",

      /* ---- academic & skills ---- */
      "skills.eyebrow": "学术背景与技能",
      "skills.title": "扎根于管理学、人工智能与计算机科学",
      "skills.intro": "将商业管理与应用型人工智能，以及计算机科学核心相结合的系统训练。",
      "edu.schulich.school": "约克大学舒立克商学院",
      "edu.schulich.degree": "人工智能管理学硕士（MMAI）",
      "edu.schulich.meta": "以应用型人工智能为专门方向的商业管理。",
      "edu.schulich.tag1": "入学奖学金",
      "edu.schulich.tag2": "优异成绩毕业",
      "edu.queens.school": "女王大学",
      "edu.queens.degree": "计算机科学理学士 — 数据分析方向",
      "edu.queens.meta": "修读期间完成专业实习。",
      "edu.queens.tag1": "优异（前 3%）",
      "edu.queens.tag2": "史密斯商学院商业证书",
      "skill.1.h": "战略与咨询",
      "skill.1.c1": "数字战略",
      "skill.1.c2": "数据与 AI 战略",
      "skill.1.c3": "运营模式设计",
      "skill.1.c4": "路线图制定",
      "skill.1.c5": "高管沟通",
      "skill.1.c6": "研讨会主持",
      "skill.1.c7": "提案与工作说明书",
      "skill.2.h": "数据、AI 与分析",
      "skill.2.c1": "机器学习",
      "skill.2.c2": "深度学习",
      "skill.2.c3": "自然语言处理",
      "skill.2.c4": "大语言模型工作流",
      "skill.2.c6": "提示词 / 回复评估",
      "skill.2.c7": "数据工程与分析",
      "skill.3.h": "技术与交付",
      "skill.3.c4": "解决方案架构",
      "skill.3.c5": "API 开发",
      "skill.4.h": "业务分析与变革",
      "skill.4.c1": "需求与用户故事",
      "skill.4.c2": "现状 / 目标状态分析",
      "skill.4.c3": "干系人协同",
      "skill.4.c4": "兼顾治理的推广",
      "skill.4.c5": "敏捷交付",
      "skill.4.c6": "变革赋能",
      "skill.5.h": "工具 / 平台",
      "skill.6.h": "语言",
      "skill.6.c1": "英语 — 流利",
      "skill.6.c2": "普通话 — 流利",

      /* ---- selected work ---- */
      "work.eyebrow": "精选项目",
      "work.title": "我擅长解决的问题类型",
      "work.intro": "近期项目中的代表性主题。为尊重客户保密要求，细节仅作概括性描述。",
      "work.1.h": "数据与 AI 战略",
      "work.1.p": "让数据与 AI 投入产生回报的运营模式、治理与路线图。",
      "work.2.h": "AI / 机器学习场景评估",
      "work.2.p": "评估可行性、价值与风险，优先排序值得投入的应用场景。",
      "work.3.h": "大语言模型评估与治理",
      "work.3.p": "对 AI 输出进行结构化评估——一致性、质量与负责任使用的护栏。",
      "work.4.h": "数字化转型路线图",
      "work.4.p": "按价值、可行性与组织就绪度排序的从现状到目标的演进路径。",
      "work.5.h": "Microsoft Dynamics 365 应用",
      "work.5.p": "配置并交付 Dynamics 365 业务应用，简化运营与服务流程。",
      "work.6.h": "业务分析与运营模式",
      "work.6.p": "需求、流程设计与运营模式，将战略转化为具体的工作方式。",
      "work.7.h": "高管汇报、提案与工作说明书",
      "work.7.p": "清晰、可支撑决策的交付物——从董事会层面的汇报到范围明确的工作说明书。",
      "work.8.h": "研讨会主持",
      "work.8.p": "结构化的工作坊，梳理痛点、协同干系人并凝聚共同方向。",
      "work.note": "客户名称与机密细节均有意略去，成果仅作概括性描述。",

      /* ---- approach ---- */
      "approach.eyebrow": "我的工作方式",
      "approach.title": "一套简单且可复用的方法",
      "approach.intro": "一种从理解问题，到交付并持续改进成果的咨询节奏。",
      "approach.1.h": "发现",
      "approach.1.p": "通过研讨会与干系人交流，理解业务、目标及其中的人。",
      "approach.2.h": "诊断",
      "approach.2.p": "梳理现状与目标状态，找准数据、AI 与技术真正创造价值的着力点。",
      "approach.3.h": "设计",
      "approach.3.p": "设计运营模式、路线图与架构——明确优先事项与成功指标。",
      "approach.4.h": "交付",
      "approach.4.p": "从计划走向实践——落地交付、兼顾治理的推广与高管沟通。",
      "approach.5.h": "改进",
      "approach.5.p": "衡量成果并建立可复用的闭环，让改进随时间不断累积。",

      /* ---- contact ---- */
      "contact.eyebrow": "联系",
      "contact.title": "让我们开始交流",
      "contact.text": "我很乐意就咨询、数字化转型、AI 与数据战略以及职业交流展开沟通。欢迎联系，我会尽快回复。",
      "contact.btn.email": "发送邮件",
      "contact.btn.linkedin": "在 LinkedIn 联系",
      "contact.method.email": "邮箱",
      "contact.method.linkedin": "LinkedIn",

      /* ---- footer ---- */
      "footer.about": "顾问，专注于业务战略、数据、人工智能与技术驱动的运营模式的交汇之处。",
      "footer.explore": "探索",
      "footer.connect": "联系方式",
      "footer.link.experience": "经历",
      "footer.link.skills": "技能",
      "footer.link.work": "精选项目",
      "footer.link.approach": "方法",
      "footer.link.insights": "洞察",
      "footer.link.highlights": "精选",
      "footer.link.email": "邮箱",
      "footer.link.linkedin": "LinkedIn",
      "footer.rights": "Jinlun Zhang · 保留所有权利。",
      "footer.totop": "返回顶部",

      /* ---- insights listing page (articles.html) ---- */
      "articles.eyebrow": "洞察",
      "articles.title": "文章与观点",
      "articles.intro": "关于数据、人工智能，以及数字化转型中“人”的一面的长篇与短篇写作。",
      "articles.back": "返回首页",

      /* ---- article reader page (article.html) ---- */
      "reader.back": "全部洞察"
    }
  };

  function getLang() {
    try { return localStorage.getItem(STORAGE_KEY) || "en"; }
    catch (e) { return "en"; }
  }
  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function applyLang(lang) {
    var dict = TRANSLATIONS[lang] || null;
    document.documentElement.lang = lang === "zh" ? "zh-Hans" : "en";

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");

      // Cache the original English markup once.
      if (el.getAttribute("data-i18n-en") === null) {
        el.setAttribute("data-i18n-en", el.innerHTML);
      }

      if (dict && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      } else {
        el.innerHTML = el.getAttribute("data-i18n-en");
      }
    }

    // Toggle button label always shows the language you can switch TO.
    var labels = document.querySelectorAll(".lang-toggle__label");
    for (var j = 0; j < labels.length; j++) {
      labels[j].textContent = lang === "zh" ? "EN" : "中文";
    }

    saveLang(lang);
  }

  function initLangToggle() {
    var buttons = document.querySelectorAll("[data-lang-toggle]");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        applyLang(getLang() === "en" ? "zh" : "en");
      });
    }
    applyLang(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLangToggle);
  } else {
    initLangToggle();
  }
})();
