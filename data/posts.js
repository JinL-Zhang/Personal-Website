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
    id: "returning-home-after-eight-years",
    title: "八年后回国，像从2018年直接穿越到了2026年：熟悉的故乡，陌生的自己",
    titleEn: "Returning Home After Eight Years: A Familiar Hometown, an Unfamiliar Self",
    category: "Reflections",
    date: "2026-09-15",
    language: "zh-Hans",
    sourceUrl: "https://zhuanlan.zhihu.com/p/2083449088536737535",
    sourceName: "Zhihu",
    excerpt: "八年后重返故乡，在陌生的街道、熟悉的朋友与共同保存的记忆里，重新认识今天的自己。",
    excerptEn: "Returning to China after eight years abroad, and finding a sense of belonging in old friendships and shared memories.",
    body: `
      <p>这应该是我这次回国感悟的最后一篇文章了。我从对国内AI和科技产业的观察（<a href="https://zhuanlan.zhihu.com/p/2076169193897059960">超越大模型竞赛：中国最大的AI优势，或许不在AI （第一部分）</a>），写到对国内生活进步的感受（<a href="https://zhuanlan.zhihu.com/p/2080602470724662564">八年没回国，我重新认识了一次中国</a>），再完结到这我更私人的感慨。三部曲，算是对自己久别未归的礼物吧。</p>
      <p>刚回国的头几天，我总有一种很奇怪的感觉。</p>
      <p>像是2018年的某一天，我在国内睡了一觉，做了一个很长很长的梦，然后再睁开眼，时间已经到了2026年。</p>
      <p>街道还是那条街道，商场大概还在原来的位置，家乡那些我闭着眼睛都知道往哪里走的地方也依然存在。可真正走进去以后，我又发现一切都和记忆里的样子对不上号。</p>
      <p>它们熟悉，因为我知道它们是谁。</p>
      <p>它们又陌生，因为我根本不知道它们什么时候变成了今天这个样子。</p>
      <p>有些建筑翻新了，有些商圈扩大了，有些曾经荒凉的地方突然热闹起来，地铁、高铁、商场、各种 App 和新的生活方式悄无声息地长进了城市的肌理里。</p>
      <p>这让我我经常产生一种光怪陆离感。像在做梦。</p>
      <p>甚至有几个瞬间，我会质疑：</p>
      <p><b>到底以前在中国生活的那些年是一场梦，还是后来在加拿大生活的八年才是一场梦？</b></p>
      <p>人的记忆在这种时候，显得非常不可靠。</p>
      <p>过去那些带着金色边框的回忆，在现实面前仿佛一夜之间长满了苔藓。</p>
      <p>有那么几天，我甚至生出了一点说不清楚的恐惧。</p>
      <p>我居然想回加拿大。</p>
      <p>原因倒和国内好不好没有太大关系。</p>
      <p>只是因为在那个瞬间，加拿大反而更接近“现在的我”。</p>
      <p>过去八年，我每天醒来看到的是加拿大的房间，出门走的是加拿大的街道，说的是英文，处理的是那套生活方式，熟悉的是那边超市货架上东西摆放的位置。</p>
      <p>久而久之，人会把重复变成习惯，把习惯变成理所当然，最后再把理所当然误认为“自己”。</p>
      <p>所谓路径依赖，所谓 default setting，在人生里占的分量，可能远比我们愿意承认的更大。</p>
      <p>所以我之前担心的 reverse culture shock（<a href="https://zhuanlan.zhihu.com/p/2059179198762186303">回国之前，我在《Stranger than Heaven》里看见了自己</a>），几乎一项不落地发生了。而且有过之而无不及。</p>
      <p>如果有人在海外待得足够久，我现在真的会建议他/她：两三年还是回来一次看看。</p>
      <p>有些东西隔着互联网看不出来。更重要的是，有些变化如果一次积攒了八年再突然摆到你面前，它带来的冲击已经不只是“变化真大”。</p>
      <p>它甚至会动摇你对自己过去的理解。</p>
      <hr>
      <h2>曾经的路人变得熟悉，曾经熟悉的人反而让我多看两眼</h2>
      <p>我注意到一件很小的事情。</p>
      <p>以前在国内的时候，如果街上走过一个异肤色的外国人，我会下意识的多看一眼。</p>
      <p>那时候“老外”对我而言，还很新奇。</p>
      <p>结果这次回来，我发现自己的目光完全反过来了。</p>
      <p>在人群里看到一个白人，我居然会产生一种莫名的熟悉感。</p>
      <p>甚至会想：“这人不会也是加拿大来的吧？”</p>
      <p>反而是走在街上，看着一张张和自己一样的东亚面孔，我偶尔会觉得新鲜，会忍不住多看几眼。（是的，我在海外，没怎么混国人团体或社区）</p>
      <p>这件事让我自己都觉得有点荒唐。</p>
      <p>曾经的陌生，已经变成了熟悉。</p>
      <p>曾经的熟悉，反而需要重新适应。</p>
      <p>大概这也是离乡的人迟早都要经历的一环。</p>
      <p>那几天我经常想起贺知章的《回乡偶书》：</p>
      <blockquote>少小离家老大回，<br>乡音无改鬓毛衰。<br>儿童相见不相识，<br>笑问客从何处来。</blockquote>
      <p>以前读这首诗，只觉得这是一个很浅白的故事：老人离家多年，晚年回乡，村里的孩子已经不认识他。</p>
      <p>现在我才开始想：这二十八个字以外，到底还有多少没有写出来的东西？</p>
      <p>他走在自己年轻时走过的路上，会不会也觉得路还是那条路，却怎么都和脑海里的样子对不上？</p>
      <p>他看那些乡人，会不会既觉得亲切，又觉得隔了一层？</p>
      <p>他到底是在“回家”，还是在拜访一座保存着自己过去的陌生城市？</p>
      <p>白描写到最后，反而给后人留下了无限的空间去填入自己的情绪。</p>
      <hr>
      <h2>然后，我去见了以前最铁的那几个兄弟</h2>
      <p>中学的时候，我们几个人天天混在一起。</p>
      <p>那时候大家都很吵。满嘴顺口溜，喜欢互相损人，为一点鸡毛蒜皮的事情吵得面红耳赤（例如说，是ap剑圣强还是ad剑圣强（笑）），也会因为一些现在看来幼稚得可笑的事情觉得热血沸腾。</p>
      <p>我们那个时候大概真的相信，眼前的日子，还有很长时间，才会结束。</p>
      <p>后来我出国。哥几个十多年没联系。再坐到一起的时候，大家都已经被生活分配到了自己的位置。</p>
      <p>有的人结婚了。每天在家庭、工作、收入、责任之间来回奔波。</p>
      <p>有的人自己开了店，当了老板。听起来潇洒，而真正做起来却要陪客户、陪玩、应酬，和各种自己未必喜欢的人打交道。</p>
      <p>很多事情他们并不喜欢。却又没有办法完全不做。大家好像都理所当然的接受了今天的生活。可你仔细听，又总觉得里面并没有多少轻松。</p>
      <p>我坐在那里，看着他们说话，突然很难把眼前这几个已经懂得人情世故、知道生意怎么做、知道什么场合该说什么话的男人们，和我记忆里那群天真、吵闹、满嘴胡话的少年们重叠起来。</p>
      <p>人的言语被圈子慢慢塑形。</p>
      <p>兴趣随着生活层次重新锚定。</p>
      <p>很多棱角，在一遍遍现实的碰撞里被磨平。</p>
      <p>于是又是一阵恍惚。又是现实对我记忆的一次嘲弄。</p>
      <hr>
      <h2>但他们还是那群人</h2>
      <p>后来，他们带着我在家乡到处转。</p>
      <p>本地人才知道的小饭店。</p>
      <p>熟人开的场子。</p>
      <p>谁认识谁，哪家店老板是谁，什么地方几点以后最好玩，他们门儿清。</p>
      <p>我几乎不用操心任何事情。跟着走就行。被安排得服服帖帖。</p>
      <p>那几天我第一次如此具体地意识到：</p>
      <p><b>所谓主场优势，原来真的这么大。</b></p>
      <p>人在海外的时候，我们经常把“独立”说得很浪漫。可真正的独立，与我而言则更像是对冰冷现实的妥协。我对我的朋友们说：</p>
      <blockquote>在海外，我们是空降的孤儿。</blockquote>
      <p>没有至亲之人的拥护，没有从小一起长大的朋友，没有认识十几年的关系，也没有人愿意在一个城市里给你兜底。</p>
      <p>生活里大大小小的事情，都得自己处理。</p>
      <p>唯一能够关照自己的人，也只有自己。</p>
      <p>如此下去，或许：</p>
      <blockquote>此生唯一收到的花，或许也是在墓碑前吧。</blockquote>
      <p>背井离乡的代价，就是这样一点一点藏在日常里面的：当你生病的时候，当你搬家的时候，当你遇到麻烦的时候，当本地节日大家都回家欢闹而你一个人坐在出租屋里傻笑时，你会明白我的感受。</p>
      <p>人为什么会在海外变得独立自强？因为那是对庸俗生活的蔑视，对孤苦生活的抗争。</p>
      <p>海外八年，如果没有脱胎换骨，反而才奇怪。</p>
      <hr>
      <h2>然而，一个朋友很随意的一句话，却让我沉默</h2>
      <p>那天我们聊到大家这些年的变化。</p>
      <p>我说，你们现在和以前真的完全不一样了。</p>
      <p>他听完以后没怎么当回事。只说了一句：</p>
      <p><b>“大家都是一个学校出来的兄弟，再怎么变，底色还是一样的。你也没变。”</b></p>
      <p>他说得非常随意。甚至说完以后，可能自己都忘了。</p>
      <p>但我当时一下子安静了。这句话在我脑中久久不能淡去。</p>
      <p>是的，收入当然会不同。</p>
      <p>工作会不同。</p>
      <p>阶层可能会慢慢不同。</p>
      <p>有人结婚，有人创业，有人出国，有人留下。</p>
      <p>大家认识的人变了，生活习惯变了，连平常说话的语气都可能改变了。</p>
      <p>然而，我们曾经感兴趣的一些东西依旧相似，很多思维方式甚至也没有真正改变（我能马上听懂他们的想法和纠结的点是什么）。</p>
      <p>人在后来的人生里会长出很多层东西。</p>
      <p>职业是一层。</p>
      <p>收入是一层。</p>
      <p>社会地位又是一层。</p>
      <p>可底下那层很早就形成的东西，好像比我们想象中要顽固得多。</p>
      <p>我一直以为自己这些年走了很远。远到已经面目全非。</p>
      <p>可那一刻我突然意识到：我和这些故乡的人之间，一直都有一些剪不断、也没有必要剪断的联系。</p>
      <p>奇怪的是，这个发现让我非常安心。回过神来，才注意到我已经在回加拿大的飞机上，泪流满面。</p>
      <hr>
      <h2>人大概一直生活在早年人生建成的大山里</h2>
      <p><b>我们每个人，或许都生活在早年人生为自己修出来的一座山里。</b></p>
      <ul>
        <li>家庭。</li>
        <li>故乡。</li>
        <li>朋友。</li>
        <li>学校。</li>
        <li>小时候看过的东西。</li>
        <li>青春期喜欢过的人。</li>
        <li>年少时相信过的价值。</li>
      </ul>
      <p>那些东西一层层堆起来，最后形成一个人观察世界时站立的地方。</p>
      <p>你当然可以试图离开这座山。我也确实离开了很远。</p>
      <p>可真正把整座山从自己身后铲掉，大概只有一种办法：</p>
      <blockquote>把曾经那个自己，连同现在的自己，一起毁掉。</blockquote>
      <p>否则，这山就会如影随形。</p>
      <p>以前在海外想到这件事情，我多少会觉得无可奈何。因为我并不想受困于过去。</p>
      <p>可这次回到家乡，同样一件事情却突然有了完全不同的意思。</p>
      <p>原来这座山也可以让人如此的安心。</p>
      <p>原来我的很多记忆一直被另外一些人共同的保存着。</p>
      <p>我忘了的事情，他们记得。</p>
      <p>我记得的事情，他们也记得。</p>
      <p>甚至有些记忆已经无法再分清到底最初属于谁。但那却是我们一起经历过的东西。是我们的“专利”。</p>
      <p><i>可能正因为中学时代的我，身边一直围着很多真挚的朋友，所以后来长期独处的时候，我才会变得如此敏感吧。</i></p>
      <hr>
      <h2>我不会辜负那些记忆</h2>
      <p>回忆代表过去。然而，我却认为，回忆是人这一生中，最奇怪也最宝贵的一种财产。</p>
      <ul>
        <li>它永不褪色。</li>
        <li>他人无法触碰。</li>
        <li>无人能够篡改。</li>
        <li>金钱买不到。</li>
        <li>地位换不来。</li>
        <li>甚至时间本身，也没有办法真正把它夺走。</li>
      </ul>
      <p>很多年以后，也许我们之间的差距会更大。</p>
      <p>有人越来越有钱。</p>
      <p>有人越来越忙。</p>
      <p>有人去了其他城市。</p>
      <p>有人有自己的孩子。</p>
      <p>甚至到了更远以后，我们可能再也没有办法像年轻时那样见面。</p>
      <p>可至少在我脑海里，永远有那么一块地方：</p>
      <p>我们还坐在教室里。</p>
      <p>还在互相骂人。</p>
      <p>还在为了完全没有意义的事情哈哈大笑。</p>
      <p>放学路上有很多小吃，之后还有很长的夜。</p>
      <blockquote>今天放学后，明天还会见。</blockquote>
      <p>那段记忆已经成为我身上无法剥离的一部分。</p>
      <p>它会陪着我继续往前走。以后遇到很难熬的时候，我大概还是会想起它。</p>
      <p>想到世界上曾经有过那么一段日子，我不用证明什么，不用规划什么，也不用担心自己最后会成为谁。</p>
      <p>身边有一群单纯善良的人。</p>
      <p>我便很欣慰。</p>
      <hr>
      <h2><b>我从来没有真正离开过自己的故乡</b></h2>
      <p>身体可以走得很远。</p>
      <p>语言可以变。</p>
      <p>习惯可以变。</p>
      <p>人的履历上也可以写满另外一个国家的名字。</p>
      <p>可有些东西，只要重新走回那条街，重新坐到那群人旁边，它们就会从多年积灰的地方一点点亮起来。</p>
      <p>然后提醒你：</p>
      <p>你曾经从这里出发。</p>
      <p>这里有人记得以前的你。</p>
      <p>而那个以前的你，也一直跳动在今天这个你的心里。</p>
      <p><br></p>
      <pre><code>Jin Gunsinger
2026.09</code></pre>
    `,
  },
  {
    id: "stranger-than-heaven",
    title: "回国之前，我在《Stranger than Heaven》里看见了自己",
    titleEn: "Before Going Home, I Saw Myself in Stranger than Heaven",
    excerptEn: "A personal reflection sparked by the game's trailer, on leaving, returning, and what home means after years abroad.",
    language: "zh-Hans",
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
