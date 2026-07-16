/* =============================================================================
   posts.js  —  Social "Highlights" content store
   -----------------------------------------------------------------------------
   Short-form / personal posts shown in the Highlights section and rendered
   full-length on post.html?id=…  (separate from the long-form Insights in
   data/articles.js).

   HOW TO ADD A POST
   1. Copy a { … } block and paste it at the TOP of the POSTS array.
   2. Unique "id" (lowercase, dashes) → becomes post.html?id=your-id
   3. Fill in title, category, date (YYYY-MM-DD), excerpt, deck, body.
   4. Drop images in assets/img/social/ and reference them in "body".
   5. "body" accepts simple HTML (<p>, <h2>, <blockquote>, <img>, <em>, …)
      and is authored by you and rendered as-is.
   ========================================================================== */

const POSTS = [
  {
    id: "stranger-than-heaven",
    title: "回国之前，我在《Stranger than Heaven》里看见了自己",
    category: "Reflections",
    date: "2026-07-01",
    cover: "assets/img/social/post1-image1.webp",
    excerpt:
      "看到游戏《Stranger than Heaven》预告后的一些随想 —— 关于离乡、归乡，以及多年海外生活后，“家”究竟意味着什么。",
    deck:
      "看到游戏《Stranger than Heaven》的预告，恰好在一个很微妙的时间点。关于离乡与归乡，以及多年海外生活之后，“家”究竟意味着什么的一些随想。",
    body: `
      <p>这篇帖子是关于我最近看到游戏《Stranger than Heaven》的游戏预告而有感而发。它恰好在一个很微妙的时间点出现了。</p>

      <p>故事里的主角，大东真，的青年时期，与我这种久居海外而不归的人来说，还是很有共鸣的。2017 年，我出国去了英国；2018 年转去加拿大。此后因为疫情、经济条件、现实压力等各种原因，我再也没有回过国。算下来，已近八年。在现在即将回国之际，看到那个被命运推搡、又试图回到“故土”的青年，我很难不产生共鸣。</p>

      <p>宣传片开头，主角在双亲死去后，在美国遭受不公，为寻找自己真正的归宿，偷渡回日本。眺望远方 —— <em>the Japan you have been dreaming about</em>。其目的地即似皇冠，又似火场。它既预示着接下来的故事，也某种程度上照见了我此刻的处境。对我而言，国内当然有一种“如日中天”的吸引力。哪怕很卷，哪怕竞争激烈，但那种卷，或者叫恶性竞争, 本身也意味着生机、活力和向上的势能。街道、语言、食物、亲人、朋友、熟悉的社交语境，这些东西仿佛都在召唤我一般。</p>

      <img src="assets/img/social/post1-image2.webp" alt="Stranger than Heaven trailer still" loading="lazy" decoding="async" />
      <img src="assets/img/social/post1-image3.webp" alt="Stranger than Heaven trailer still" loading="lazy" decoding="async" />

      <p>我也很清楚，对于一个多年未归、长期在海外生活的人来说，那里也可能不再只是皇冠，而是火场。甚至更残酷一点说，也许是火葬场。你以为自己只是回家，可真正回去之后，才发现家，或许早已不是家，而也是异域他乡。</p>

      <p>随着故事推进，大东真显然并没有真正被“本地”或“国土”接纳。他回到了日本，却并不自然地属于日本。他最终步入极道。当然，日本极道在 1920 年前后的社会语境里，或许曾经承担过某些秩序、保护或边缘共同体的功能，但无论如何，那都不该被视为正途。</p>

      <p>可问题在于，当一个人不被任何地方接纳时，他还能往哪里去？那句质问，<em>what are we trying so hard to protect</em>，令我惆怅。是的，我在海外这么多年，又到底是在追求和保护些什么呢？</p>

      <img src="assets/img/social/post1-image4.webp" alt="Stranger than Heaven trailer still" loading="lazy" decoding="async" />

      <blockquote>I get this is the place I am carving out for myself, but is it really what I want?</blockquote>

      <p>自我的质疑在日复一日与他族人、本族人交流和活动时，与日俱增。这些年，我确实在加拿大一点点给自己凿出了一块地方。读书、实习、找工作、留在这里、适应这里的语言、规则、职场和人际关系。我当然知道这一切来之不易，也知道自己曾经为此付出了很多。可是，这由我亲手开凿出来的地方，真的是我想要的吗？我到底是在保护一个选择，还是在保护一个我已经不再确信的叙事？</p>

      <p>这个问题，我也总是忍不住地问自己。那么答案，是否就是游戏中所说的：</p>

      <blockquote>Our only way forward is to make a place for ourselves. If this country would not accept us, we will carve out our own right from underneath it.</blockquote>

      <img src="assets/img/social/post1-image5.webp" alt="Stranger than Heaven trailer still" loading="lazy" decoding="async" />

      <p>我很想提一下这个宣传片的 bridge 部分，是我觉得全片最爽、也最“好莱坞”的一段。</p>

      <p>画面的打击感和音乐的律动形成了高度同态。拳脚、剪辑、节拍、鼓点几乎是一起砸下来的，情绪层层 built up。并且其歌词，对于我而言，也是意味深长（需要说明的是，写下这篇文章时，官方尚未正式发布歌词，以下仅是我个人听译）：</p>

      <blockquote>Pave my way, won't live in my past.<br>
      Once you come here, you will never look back.<br>
      Pull no shots till you're part of these packs — stranger than heaven.</blockquote>

      <p>这里我最想谈的是 “Pull no shots till you're part of these packs.” 这一句。“Pull no shots” 并不是最常见的表达，更接近 “pull no punches” 的变体或口语误用，意思大概是毫不留情、直言不讳、手下不留情。放在这里，我喜欢把它理解成：在真正找到自己 fit 的归宿之前，我会竭尽全力，不留余地。因此这段很像是主角的独白：我会自力更生，永不回首，竭尽全力。</p>

      <p>对于一个正站在两国选择之前的人来说，这种表达无疑是 aspirational 的。</p>

      <p>最后一段，则是全片最打动大众的一段。刚回国时，大东真和好友优站在烟囱台上，对着远方呐喊：<em>Hey Japan, I am Home — Saraba America. This is my home and NOTHING GONNA CHANGE THAT.</em></p>

      <img src="assets/img/social/post1-image6.webp" alt="Stranger than Heaven trailer still" loading="lazy" decoding="async" />
      <img src="assets/img/social/post1-image7.webp" alt="Stranger than Heaven trailer still" loading="lazy" decoding="async" />

      <p>然后镜头一转，人生几何。多年沧桑漂泊，几帧闪回，几段厮杀，几场命运沉浮，最后落到戴礼帽的那个切片上（帅的不谈）。总结了这个宣传片的尾段。那种少年意气与人生迟暮之间的流动，被剪得太有后劲了。毫不夸张地说，我看了不下 50 次。</p>

      <p>尾端的歌词我也想谈谈。</p>

      <blockquote>I found a place where I'm not alone.<br>
      Tore down the gates, took all my pain and made a weapon.<br>
      錆ひとつない 触らせやしない 媚びる気はない<br>
      I found a place that I can call home.<br>
      Tested my fate (Tested my fate), took all my pain and made a weapon.<br>
      連れ行くその場所は、<br>
      Stranger than heaven.</blockquote>

      <p>这一段中日混杂的歌词很有意思：我总算找到了一个我不再孤身一人、可以称之为家的地方（而现代人，无论在海外的或是在国内的，孤独与距离感已然如影随形）。战胜困难与命运，将悲痛化为武器。</p>

      <blockquote>錆ひとつない、触らせやしない、媚びる気はない。<br><em>绝不褪色，休想触碰，拒不逢迎。</em></blockquote>

      <p>很有风骨了。</p>

      <p>然而，在付出这一切即将到达的那个地方，却是 Stranger than Heaven。</p>

      <p>这里我想谈一下我自己对 stranger than heaven 的理解。heaven 理应是个美好的表象，如 utopia 一样，虽不至，但却熟悉。在这个 context 里面，对主角而言，那是日本；对我而言，则是祖国。</p>

      <p>那里有我认为美好的一切：熟悉的语言、环境、食物、亲人、朋友，还有那些不需要翻译的情绪和玩笑。然而，当真正回到了那里，連れ行くその場所，它却也可能让我感到陌生、奇异，甚至不知所措。因为这些我认为珍重的东西，也许已经不再真正熟悉。八年时间，足够让一个人改变，也足够让一个地方变革。所谓故土，也可能早已物是人非。</p>

      <p>所以它是天堂，却不似天堂。</p>

      <blockquote>It is heaven, but stranger than heaven.</blockquote>

      <p>最后，这次的音乐确实极好。从音乐性上看，它本身就是一种文化大杂烩：日语与英语交织，说唱与高音吟唱并置，欧美式律动和日式叙事美学互相嵌合。它并没有把“混杂”处理成割裂，反而把这种受多地文化影响的身份状态，转化成了一种独特的张力。</p>

      <p>这或许也是我被它打动的原因。</p>

      <p>多年海外生活的人，多少都会成为某种意义上的混合体。你不完全属于这里，也不再完全属于那里。你以为自己在寻找一个确定的答案，但最后找到的，往往只是一个更复杂的问题。</p>

      <p>我即将回国。说不期待是假的，说不害怕也是假的。</p>

      <p>我不知道这次回去后，我会看到皇冠，还是火场。</p>

      <p>但至少我认为，在过完海关的那一刻，我想我或许会对着自己说一句：</p>

      <blockquote>Hey China, I am home.</blockquote>

      <p class="post-sign"><strong>Jinlun Zhang.</strong><br>2026.07</p>
    `,
  },
];

/* Expose for both module and classic script usage. */
if (typeof window !== "undefined") {
  window.POSTS = POSTS;
}
