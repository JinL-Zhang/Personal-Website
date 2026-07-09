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
     Ethical Analysis of Quantum Computing — full article, self-hosted here.
     Originally published by Jin Zhang on LinkedIn and Medium (April 2024).
  --------------------------------------------------------------------------- */
  {
    id: "ethical-analysis-quantum-computing",
    title: "An Ethical Analysis of Quantum Computing: Are We Ready for the Incoming Power?",
    category: "Emerging Technology",
    date: "2024-04-20",
    readingTime: "29 min read",
    cover: "assets/img/articles/quantum-computing.svg", // optional cover image
    published: true,
    externalUrl: "",
    excerpt:
      "Quantum computing promises a step-change in computational power. This piece examines the ethical questions that arrive with it — from cryptography and security to market power, privacy, inequality and governance.",
    deck:
      "As quantum capability moves from the lab toward the enterprise, the harder questions are not only technical. They are ethical — spanning security, market power, privacy and social equity — and they deserve attention before the power is fully here.",
    /* Full article, self-hosted. Originally published April 2024. */
    body: `
      <p><em>Originally published on LinkedIn and Medium in April 2024. This is a
      self-hosted copy of the complete article. Images from the original have been
      omitted; the text is reproduced in full.</em></p>

      <h2>What is Quantum Computing</h2>
      <p>Quantum computing is a multidisciplinary field, comprising aspects of
      computer science, physics, and mathematics (Amazon Web Services, n.d.). It
      utilizes specialized technology — including computer hardware and algorithms
      that take advantage of quantum mechanics — to efficiently solve problems
      involving vast amounts of data and complex calculations that classical
      computers or supercomputers cannot solve, or cannot solve quickly enough
      (IBM, n.d.).</p>
      <p>While traditional computers use binary bits, either 0s or 1s, as the
      smallest units to process information, quantum computers utilize quantum bits,
      or qubits, that can exist in a state of 0, 1, or both simultaneously (due to
      the superposition of states) to perform millions of operations at once thanks
      to the inherent parallelism given by the superposition of qubits. This property
      exponentially increases the computational efficiency of quantum computers over
      traditional ones for certain tasks (Amazon Web Services, n.d.).</p>
      <p>In addition, quantum entanglement also plays a key role in enabling quantum
      computers to solve complex problems much faster than traditional computers. As
      entanglement allows qubits to be interconnected so closely that the knowledge
      of one qubit gives immediate knowledge about the other (no matter how far apart
      they are), quantum processors can conclude quickly about one qubit by measuring
      the other (Amazon Web Services, n.d.). This property further empowers quantum
      computers to perform complex operations and communicate information in ways that
      traditional computers cannot, potentially solving problems that are currently
      intractable on traditional computers, such as simulating physical systems in
      chemistry, physics, and materials science (Microsoft, n.d.).</p>

      <h2>Development of Quantum Computing</h2>
      <p>The concept of quantum computing was first formalized by the theoretical
      physicist Richard Feynman in the early 1980s. Feynman highlighted the
      limitations of traditional computers in simulating quantum phenomena and
      proposed the idea of a quantum computer that could do so efficiently. Hence,
      Feynman can be credited for laying the groundwork for the field of quantum
      computation and simulation. The development of quantum computing is then marked
      by a milestone in 1994, in which the first quantum algorithm, Shor's algorithm,
      was created, proving that quantum computers could factor large integers
      exponentially faster than traditional computers. This discovery posed a threat
      to many contemporary public-key cryptosystems underlying the security of
      e-commerce, including Rivest–Shamir–Adleman (RSA) and Elliptic Curve
      Cryptography (Microsoft, n.d.). The creation of the first quantum algorithm was
      soon followed by the first proposals for building early quantum computers
      (Nature News, 2022).</p>
      <p>Afterwards, progress in building practical quantum computers has been slow
      and full of technical challenges. For example, it is very difficult to design a
      quantum processor feature that can delay the decoherence of the quantum state
      in a qubit, because environmental factors, like radiation, can cause the quantum
      state of a qubit to collapse prematurely (Amazon Web Services, n.d.). Moreover,
      researchers cannot even agree on what metrics the performance of quantum
      computers should be measured on (Brooks, 2023). All these technical difficulties
      result in the quantum computers available today being unable to accelerate
      computations to the promised revolutionary level in computing.</p>
      <p>However, despite the current obstacles, researchers are overall optimistic
      and believe that development in this realm is proceeding better than anticipated
      (Brooks, 2023). Furthermore, as of 2023, quantum computing is moving out of the
      laboratories of universities into industrial research and development
      facilities, and this transition is backed by the chequebooks of multinational
      corporations and venture capitalists (Ferrie, 2023). Companies like IBM, Google,
      and Rigetti, along with research institutions and universities, have been
      consistently contributing to quantum computing technologies, developing quantum
      processors, and exploring quantum algorithms (Ferrie, 2023). Hence, in the
      foreseeable future, quantum computers may emerge just as ChatGPT has today, and
      we must be vigilant now to the potential ethical issues this technology can
      raise.</p>

      <h2>Intended Application of Quantum Computing</h2>
      <p>Due to their exceptional capability in solving problems that require
      calculating a large number of possible combinations, one intuitive and early
      application of quantum computers will be in cryptography. Although quantum
      computers and algorithms (like Shor's Algorithm) threaten current cryptographic
      schemes such as the RSA scheme that is widely used in e-commerce for secure data
      transmission (Microsoft, n.d.), they also pave the way for developing more robust
      cryptographic protocols and algorithms that secure information transmission in a
      way that is theoretically not vulnerable to any computational attack, such as
      eavesdropping, initiated from either quantum or traditional computers (Lella &amp;
      Schmid, 2023). Thus, quantum computing can elevate the security of digital
      communications and the protection of privacy to an unprecedented level, at the
      expense of obsoleting all existing asymmetric encryption methods.</p>
      <p>Additionally, in the field of materials science, quantum computing is able to
      simulate molecular structures and chemical reactions accurately at the atomic
      scale, making the discovery and experimentation of new materials easier and
      faster. This may have significant influences on batteries, pharmaceuticals,
      fertilisers, and other chemistry-based domains (Ferrie, 2023). Moreover, as
      quantum computers can address difficult optimization problems effectively, they
      can be applied to tackle large-scale problems in areas like logistics and
      finance, enabling more in-depth and faster analytics for financial trading and
      increased efficiency in supply chain management systems (Burns, 2023).</p>
      <p>On top of that, another key application of quantum computing lies in its
      substantial enhancements to the progression and capabilities of AI / ML (Machine
      Learning). For example, in predictive modelling, quantum computing can enable ML
      models to efficiently recognize patterns in complex datasets by effectively
      solving deconvolution problems. Likewise, for visual ML tasks that involve
      Convolutional Neural Networks (CNNs), quantum computers can unlock deeper and
      more sophisticated model architectures, as they can compute convolutions at high
      speed due to their ability to compute Fourier transforms extremely rapidly
      (Microsoft, n.d.). Therefore, the integration of quantum computing into AI/ML can
      not only improve the performance of existing models but also open up new research
      and development in the field by training sophisticated models with large-scale
      datasets that are currently computationally infeasible.</p>
      <p>In short, quantum computing can revolutionize contemporary encryption
      standards, speed up decision-making in financial transactions and supply chain
      management, and strengthen AI/ML developments and capabilities. However, the goal
      of quantum computers should not be to replace traditional computers but to
      complement them by solving specific and complex problems more efficiently. As a
      result, quantum computers are expected to coexist with traditional computers,
      with hybrid systems leveraging the strengths of both for various applications.</p>

      <h2>Who Will Gain or Lose from the Development of Quantum Computing</h2>
      <p>Although quantum computing stands to benefit a wide array of sectors — such as
      scientific communities and industries relying on complex simulations and
      optimizations — the primary beneficiaries of quantum computing should be
      considered today's major technology companies, such as Amazon, IBM, Google, and
      Microsoft, who have been consistently investing in and developing their quantum
      capabilities over the years. To obtain larger future competitive advantages and
      more Returns on Investment (ROIs), those technology companies have integrated
      quantum computing into their existing ecosystems of services (Biondi et al.,
      2021). For example, they have already launched commercial quantum-computing
      cloud services to monetize this quantum technology now, such as Azure Quantum
      from Microsoft and Amazon Braket.</p>
      <p>This integration and business strategy not only allow those technology
      companies to gain early returns by offering quantum computing as a service, but
      also facilitate the adoption of, and dependency on, third-party quantum computing
      infrastructures by other business sectors, such as pharmaceuticals and finance.
      Since personal or mobile quantum computing is unlikely to be realized in decades,
      the cloud may be the main way for early users to experience the benefits of
      quantum computing until the larger quantum ecosystem matures — leading
      quantum cloud-based services to potentially become the most valuable part of the
      early quantum ecosystem and to create outsize rewards for those who control them
      (Biondi et al., 2021). According to 2021 McKinsey research, the value at stake for
      quantum-computing players is nearly $80 billion, and such a broad and lucrative
      market should incentivize those giant technology companies to compete vigorously
      and persistently for "quantum supremacy". As a result, the considerable ROIs
      received, along with the possible business leadership in the value chains of
      quantum computing that can influence industry standards and the future direction
      of this technology, cause those technology companies to be the primary
      beneficiaries of quantum computing.</p>
      <p>On the other hand, there are also noticeable "losers" in this quantum
      computing revolution. As quantum computing possesses the capability to break many
      of the encryption algorithms currently used to secure digital communications and
      data protection, all entities that collect and utilize data — especially those
      who heavily rely on current encryption standards, such as financial service
      providers and communication application providers — are likely to face big
      disadvantages if they do not increase the budget and time to prepare for the
      transition to post-quantum cryptography now. From another perspective, this also
      means that small and medium-sized enterprises (SMEs) who need data but cannot
      afford the cost of initiating a massive and timely adoption of new security
      protocols are likely to lose out and go bankrupt at the start of the post-quantum
      computing era.</p>
      <p>Additionally, according to a Deloitte poll, more than half of surveyed
      professionals (50.2%) believe that their organizations are at risk for
      "harvest now, decrypt later" (HNDL) cybersecurity attacks. This refers to an
      attack where threat actors collect encrypted data from target organizations
      today, fully anticipating that the data will be decrypted later when quantum
      computing reaches a maturity level capable of rendering many publicly utilized
      cryptographic algorithms entirely obsolete (Burns, 2023). Though the threats
      posed to organizations are already foreseeable, nearly 20% of enterprises appear
      to be taking a "wait and see" approach (Burns, 2023), potentially causing them to
      fall behind in the post-quantum world due to the loss of public trust.</p>
      <p>Furthermore, quantum computing can render current blockchain technology
      extremely vulnerable. For instance, in the Bitcoin blockchain, it currently takes
      about 10 minutes for transactions to be mined. If a quantum computer can derive a
      user's private key from the corresponding public key (publicly known in the
      blockchain) in this 10-minute window of opportunity, then the Bitcoin blockchain
      will be inherently broken (Barmes &amp; Bosch, 2023). This is because the quantum
      attacker can steal the victim user's bitcoins by abusing the derived private key —
      namely by falsifying the user's digital signature — to initiate a transaction to
      the attacker's own address. Even though the user can take some protective
      measures against the quantum attack (such as transferring the bitcoins to a new
      p2pkh address), if many other users in the network did not take the same
      protective measures, and many Bitcoins are stolen, the price of Bitcoin will
      likely crash and confidence in blockchain technology will be lost (Barmes &amp;
      Bosch, 2023). According to a 2020 Deloitte report, there were over 4 million
      bitcoins (about 25% of all Bitcoins) potentially vulnerable to quantum attacks,
      valued at over 40 billion USD at that time. As a result, all cryptocurrency
      investors and participants (not limited to Bitcoin) may suffer significant
      financial loss due to quantum computing until the birth of "post-quantum
      cryptography" that is inherently resistant to quantum attacks.</p>

      <h2>Ethical Significance of Quantum Computing</h2>
      <p>According to a strategist from Bank of America, the impact of quantum
      computing can be as transformative as that of smartphones in the 2010s (and even
      more radical in terms of its business impact), highly likely to revolutionize
      numerous aspects of human life and yielding implications across political,
      economic, and social spheres.</p>

      <h3>Macro Perspective</h3>
      <p>From a macroscopic viewpoint, governments around the world, recognizing the
      strategic importance of quantum computing due to its capability of obsoleting
      current encryption protocols and blockchain technologies, are investing heavily
      in research and development to secure a competitive advantage in future
      "defense" technologies. This competition inevitably intensifies global tensions
      and leads to a quantum "arms race" (Buchholz &amp; Ammanath, 2022). As of January
      2021, 17 countries — including the US, China, Russia, and the UK — have a national
      initiative or strategy to support their own quantum technology research and
      development, while more than 150 countries in the world do not yet have a quantum
      strategy (Hidary &amp; Sarkar, 2023).</p>
      <p>Consequently, this quantum "arms race" may produce negative geopolitical
      implications and widen global socio-economic divides, meaning that already-
      dominant countries — who have the capacity and resources to invest in quantum
      computing — can gain superabundant advantages in cybersecurity, economic power,
      and technological innovation, leaving all following countries with no means to
      compete. This larger socio-economic disparity between "quantum-advanced" nations
      and the rest of the world can exacerbate existing inequalities and create new
      forms of national dependency and vulnerability. For example, nations without
      quantum capabilities may be unable to protect their digital infrastructures and
      sensitive information, causing them to become increasingly dependent on the
      leading nations for quantum-based services or protection. Such dependencies could
      undermine those nations' sovereignty, leaving them vulnerable to exploitation,
      which is extremely similar to the historical patterns of technological and
      economic colonialism.</p>
      <p>From the perspective of Thomas Hobbes (<a href="https://www.linkedin.com/posts/jin-zhang-1ba407171_this-may-be-an-irrelevant-post-to-my-career-activity-7158278432471109633-Gjrr" target="_blank" rel="noopener">you can read my post about his book, Leviathan, here</a>),
      this quantum "arms race" is a perfect embodiment of mankind's perpetual and
      restless desire of power after power, that ceaseth only in death. Those preeminent
      countries are never content with their current levels of power because they are
      constantly uncertain about whether the power and means to "live well" are enough
      without the acquisition of more. Thus, driven by the fear of losing competitive
      global positioning and the eagerness for both economic and technological
      dominance, each preeminent country invests heavily in quantum computing in the
      hope of receiving, maintaining, or enhancing its power over the others.</p>

      <h3>Micro Perspective</h3>
      <p>From a microscopic viewpoint, rampant personal data collection will take place
      in the post-quantum era. Since quantum computers can process large volumes of
      data more rapidly than today's most sophisticated servers, the availability of
      quantum computing could further incentivize organizations to collect even more
      consumer data, thus supercharging the data harvesting that already takes place
      (Buchholz &amp; Ammanath, 2022). In such a scenario, on the opposite side of the
      claimed benefits brought by quantum computing to privacy protection, there may not
      be any "privacy" remaining for an ordinary person, as their physical attributes
      like age and residence address, as well as personal preferences such as shopping
      behaviours, are all precisely captured by multiple companies with or without their
      knowledge or consent. Then, by utilizing quantum computing to perform data mining
      and simulation based on the highly granular data collected from a person's online
      activities and social interactions, an accurate "digital twin" of the person can
      be created, which could model the person's behaviours accurately under a given
      condition. Therefore, companies could exploit those digital twins by running
      hypothetical experiments on them to predict individual actions or reactions to
      certain policies or products, turning customers into the archetypes of companies'
      experimental mice.</p>
      <p>Under such a situation, where customers are all simplified into subjects
      (digital twins) for the "search of reality", companies will never establish an
      "I-Thou" relationship (a concept from Martin Buber) with their customers, while
      ironically, most companies claim themselves to be customer-centric. Hence, due to
      quantum computing, customers are more likely to be profiled and exploited as the
      means to achieve commercial objectives rather than being treated as ends in
      themselves, causing customers' intrinsic worth and dignity to be compromised. If
      "whoever lives only with 'I-It' is not human", then will working for a company
      that only establishes "I-It" relationships with customers still be attractive to a
      human? In other words, from Aristotle's perspective, will working to monitor and
      even manipulate people's preferences and behaviours be helpful for someone to
      pursue eudaimonia, or a virtuous life?</p>
      <p>Lastly, all the ethical concerns related to the lack of explainability in deep
      learning neural networks will be aggravated with quantum machine learning, because
      with quantum computers, explainability is more of a physics problem than a
      programming problem. It will be very difficult to evaluate and judge the
      decision-making process of quantum algorithms because they will recognize even
      more complex patterns across even more data points than today's machine learning
      models, rendering an ultimate black-box problem and potentially obsoleting the
      majority of current efforts made to reveal how the hidden processing layers of
      neural networks arrive at an answer (Buchholz &amp; Ammanath, 2022). As a result,
      ethical concerns — like the incapability of detecting whether models embed the
      biases present in training data that lead to unfair decision-making and
      discriminatory treatment of individuals or groups — will be remarkably amplified
      in the post-quantum world, which can exacerbate existing social inequalities and
      the negative social impacts of large technology corporations.</p>
      <p>Additionally, the "black box" issue may gradually promote public skepticism
      towards quantum machine learning models, as people cannot understand their
      decision-making processes and so tend to suspect them to be biased and
      undependable once those people are not in favour of decisions made by those models
      (even if the models function appropriately). Consequently, from Mill's utilitarian
      perspective, the diminishing public trust in quantum machine learning minimizes
      the contribution of this technology to the greatest happiness for the greatest
      number.</p>

      <h2>Ethical Questions and Concerns Regarding Quantum Computing</h2>

      <h3>Dominance of Today's Technology Giants in the Post-Quantum Era</h3>
      <p>As established, the primary beneficiaries of quantum computing are likely to be
      today's major technology companies, due to their consistent investment in the
      development of their quantum capabilities over the years. Those companies, by
      developing quantum infrastructures and standards and offering quantum computing as
      a service, not only gain early returns on investment but also facilitate the
      adoption of, and dependency on, third-party quantum computing infrastructures by
      other business sectors. This leads the technology companies to easily become the
      "aristocrats" in the post-quantum world, where the demand for supercomputational
      power is skyrocketing and inelastic, resulting in their bargaining power being
      exorbitant. Consequently, through advocating and promoting neoliberalism, the
      technology companies will likely achieve uncontrolled market dominance and
      exploitation, which leads to ethical concerns such as market oligopoly and
      aggravated social-economic inequality.</p>

      <h3>Market Oligopoly Implication on the Quantum Computing Market Segment Itself</h3>
      <p>Similar to the current oligopoly in the GPU market (Nvidia vs. AMD) and the
      smartphone operating system market (Apple iOS vs. Google Android), the quantum
      computing market will be oligopolistic due to high market entry barriers — namely,
      that the majority of quantum computing resources are in the hands of a few
      technology companies. Thus, those technology companies can dictate the terms and
      pricing in business contracts with their clients by exerting their high bargaining
      power, achieving humongous financial benefits with minimal risk, especially when
      their clients are usually enterprises.</p>
      <p>This lucrative positioning provides sufficient incentives for those technology
      companies to collaborate and engage in unfair competitive practices to maintain
      their sole dominance, such as using predatory pricing and securing patents to
      control access to essential quantum technologies to drive out new entrants. As
      Adam Smith famously declared, "People of the same trade seldom meet together, even
      for merriment and diversion, but the conversation ends in a conspiracy against the
      publick, or in some contrivance to raise prices" — the autonomous democratization
      of ownership of quantum computing resources is improbable to occur. In other
      words, the betrayal of any one of the established oligopolistic companies to
      facilitate market entry for new competitors is unlikely to occur naturally,
      because it compromises all the oligopolistic companies' pricing controls and
      bargaining power. Hence, such betrayal will either never occur or be prevented in
      advance by the other oligopolistic companies through measures similar to the
      Treaty on the Non-Proliferation of Nuclear Weapons, particularly when those
      oligopolistic companies are densely populated within the same political regimes and
      regions (e.g. the USA), meaning that they are deeply connected and united by mutual
      interests and ideologies.</p>
      <p>As a result, there is an urgent demand in the post-quantum world for regulatory
      bodies to intervene to mitigate the risks associated with oligopolistic market
      control, such as the compulsory unfavourable terms on enterprise clients or tacit
      collusion in the oligopolistic quantum computing market, as well as the consistent
      pursuit of neoliberalism by those oligopolistic technology companies.</p>

      <h3>Market Oligopoly Implication on Small and Medium-sized Enterprises (SMEs)</h3>
      <p>For small and medium-sized enterprises (SMEs), subscriptions to the
      quantum-computing-as-a-service offered by the oligopolistic technology companies
      will likely become mandatory for competitiveness. Similar to how the business
      department of a company today (e.g. the Customer Relationship Management branch)
      must subscribe to various business intelligence tools like Salesforce or Microsoft
      Dynamics to enhance operational efficiency and business insight to grow and
      compete, subscriptions to quantum computing services by the R&amp;D department of a
      company will be integral for pushing the boundaries of innovation and sustaining
      the competitive positioning of the company in its corresponding market segment.
      However, as the vendors of those subscription services are only a few (e.g. Amazon,
      IBM, Google, and Microsoft), while they are gradually extending their service reach
      across the entire operational spectrum of an SME, the idea of a free market may be
      dramatically reshaped as the fundamental supporting services required by most SMEs
      in various industries become increasingly and entirely dependent on the few vendors
      in the market. In other words, the survival of SMEs will be immensely difficult in
      the post-quantum era due to their low bargaining power, especially if neoliberalism
      prevails (which partially explains why those technology giants are vigorously and
      persistently advocating for free-market capitalism).</p>
      <p>This dynamic suggests that if an SME operates successfully, or if the economy is
      on an upward trend, an arbitrary portion of the SME's revenues can be demanded as
      the expense of continuing partnerships with the technology companies. On the other
      hand, if the SME suffers from financial losses or the economy is in a downturn, the
      SME is indebted to the technology companies, as the utilization of quantum services
      is mandatory for competition — leading the overall profitability of the SME to be
      controlled at a moderately low-level range, while that of the oligopolistic
      technology companies is unbounded and can be sky-high due to zero financial risk on
      their side.</p>
      <p>From a moral or Kantian perspective, the forced SME compliance with the demands
      and conditions set by a few dominant technology companies disrespects the autonomy
      of SMEs, as they are coerced into dependency, which is morally problematic as it
      goes against the Kantian principle that individuals (or SMEs in this case) should be
      able to act according to their own rational decisions, free from external coercion.
      In addition, from a social-economic perspective, severe class solidification will
      emerge as wealth becomes more concentrated in the hands of the few in the upper
      class — more so than it is now — while the peaceful and legitimate opportunities
      for upward social mobility become even rarer, as SMEs are traditionally considered
      to be the engines of innovation, job creation, and primitive capital accumulation.
      Therefore, considering the causes of the French Revolution, this class-rigidity
      landscape and the reduced economic diversity will undoubtedly exacerbate existing
      socio-economic inequalities and increase social unrest.</p>

      <h3>Ethical Concerns with Social-Economic Inequality</h3>
      <p>Although quantum computing does not yield direct positive impacts on individual
      consumers, it benefits Research &amp; Development efficiency in a wide array of
      sectors, such as pharmaceuticals, logistics, supply chain management, and finance,
      which can result in broad implications of accelerationism. However, as
      <a href="https://en.wikipedia.org/wiki/Evgeny_Morozov" target="_blank" rel="noopener">Evgeny Morozov</a>
      points out, this technology is not owned by the people, but owned by those giant
      technology companies that are differently motivated than people. Even the most
      acquisitive people do not solely want to make money (they want other things too,
      such as friendship, love, order, etc.), while the publicly traded technology
      companies are exclusively focused on maximizing shareholder value, meaning that
      saving humanity, making life better, or increasing abundance is never their primary
      goal but a means to further incentivize consumption and generate revenue. As
      Friedrich Nietzsche stated, "In individuals, insanity is rare; but in groups,
      parties, nations, and epochs, it is the rule" — there are many ethical concerns
      regarding the social-economic aspects brought up by the exploitative practices of
      those oligopolistic technology companies.</p>
      <p>As quantum computing tends to become a core component of corporate computing
      infrastructures across various industries for the efficient development of products
      and services, data processing, and the resolution of intricate challenges, those
      quantum computing service providers sit on top of the whole value chain, receiving
      the highest proportions of the benefits of business at the lowest level of risk.
      This allows the employees in those companies, such as the executives and a small
      number of highly skilled staff, as well as the major shareholders, to be extremely
      affluent in the post-quantum era. This means that a significant portion of the
      wealth generated by quantum computing is obtained by a select few, leading to
      greater economic disparity as the majority of the population remains excluded from
      these financial benefits. This exacerbated economic inequality has two implications
      on society.</p>

      <h4>Implication of Distributive Justice</h4>
      <p>The first implication is that quality social resources, such as advanced
      healthcare and education services, will become more disproportionately (or even
      exclusively) available to those elite groups, disadvantaging the majority of the
      population who are generally not affluent, and reinforcing social class rigidity.
      This not only violates Aristotle's idea of distributive justice — in which
      resources should be distributed based on the merit of individuals rather than on
      the wealth and status in the social hierarchy achieved through oligopoly and
      exploitation — but also compromises the common good and well-being of societies
      from a utilitarian perspective (the greatest happiness for the greatest number)
      due to the exacerbated societal divisions and discontent brought by the wider
      inequality. Not to mention that the principle of egalitarianism, which advocates
      for equal treatment of all people regardless of their economic status or
      background, is directly challenged in this scenario.</p>
      <p>A baseline "snapshot" of such a divided society can be seen in current South
      Korea, where a small number of large conglomerates, or chaebols, like Samsung and
      Hyundai, dominate the economy and enjoy privileged access to superior healthcare
      and educational resources, leaving the public to have statistically significantly
      lower educational achievement compared to their wealthier counterparts (Byun &amp;
      Kim, 2010). These remarkable disparities in access to quality resources directly
      contribute to severe class rigidity in South Korea, because it is nearly impossible
      for individuals from less affluent backgrounds to obtain the same quality of life
      and opportunities as those from wealthier segments, perpetuating their born
      socio-economic status and a cycle of privilege and disadvantage. In such a
      situation, high-level pleasures (e.g. pleasures of the intellect and moral
      sentiments) are likely to be reserved for the privileged, as the disadvantaged have
      no capacity nor opportunity to develop an appreciation for such experiences and to
      cultivate a sense of pursuing high-level pleasures, reducing the financially
      disadvantaged to a state more akin to animals than to fully realized human beings.
      However, in the meantime, the privileged access of those chaebols to superior
      resources is not acquired through merit, as the chaebols are facing criticism for
      nepotism, lack of transparency, and weak corporate governance, which is
      indefensible from Aristotle's point of view and could pose valid concerns for the
      oligopolistic technology companies in the future.</p>
      <p>In short, this highly skewed resource distribution due to exacerbated economic
      inequality can undermine the ethical and philosophical principles of fairness and
      justice that many societies strive to uphold. Therefore, rectificatory action must
      be formulated and taken urgently in the post-quantum world to alleviate the social
      unrest triggered by the disproportionate access to quality social resources and to
      reflect the humanitarian pursuit of equity and fairness.</p>

      <h4>Implication on Social Benefits</h4>
      <p>As those oligopolistic technology companies have unparalleled market power, they
      can unilaterally prioritize their quantum computing resources for the partnerships
      and applications that best serve their commercial interests, overlooking areas and
      projects that are less lucrative but could benefit society more broadly. For
      example, applications that promise immediate and substantial financial returns,
      such as optimizing logistics for faster delivery or improving pharmaceutical
      designs for lucrative drugs, will be strongly preferred and allocated more quantum
      computing resources and expertise than ones that could have significant social
      benefits but less direct commercial reward, such as combating climate change by
      modelling complex environmental systems with quantum computing.</p>
      <p>Thus, while claiming that quantum computing could revolutionize industries and
      potentially solve complex societal problems,</p>
      <blockquote>most of the quantum computing resources are under the absolute control
      of profit-driven entities who intrinsically prefer to concentrate the applications
      of quantum computing resources on those that are commercially viable rather than
      socially beneficial.</blockquote>
      <p>This may invalidate all the proposed social benefits of quantum computing (as
      they are all ultimately translated into commercial value) and is intuitively a form
      of technological determinism, where market forces, rather than collective human
      needs, dictate the progress and use of transformative technologies like quantum
      computing. As a result, the major financial benefits brought by advancements in
      quantum computing are primarily directed towards the people in the oligopolistic
      technology companies, or towards the areas that will yield the highest financial
      returns for these technology companies, rather than being distributed more evenly
      across society to address broader social needs.</p>
      <p>Considering South Korea again: the chaebols have created an education arms race
      in the country, where working at a chaebol is the only acceptable employment option
      for most South Korean college students, and chaebols almost exclusively hire from
      the private SKY universities, the three most prestigious universities in South
      Korea. This extreme academic competition has led South Korean parents to
      increasingly send their children to expensive private cram schools that specialize
      in preparation for South Korea's highly competitive college admissions test.
      Nevertheless, for students who do not have the financial means for a private
      education or tutoring, gaining admission to a SKY university or employment at a
      chaebol is virtually unrealistic, which widens South Korea's social-economic gaps
      and lowers the life satisfaction rate among adolescents in South Korea (Brown
      Political Review, n.d.).</p>
      <p>This scenario in South Korea serves as a cautionary tale. If the technology
      companies (e.g. chaebols) can freely prioritize corporate gains (e.g. simply and
      exclusively hiring from SKY universities to save talent acquisition costs) over
      public interests (e.g. funding the public educational institutions that serve the
      wider population to cultivate the next generation of the chaebols or the country),
      social-economic disparities can be further entrenched. By solely emphasizing
      collaboration with the sectors that can yield immediate and substantial financial
      returns for these technology companies, the services and sectors that are essential
      for societal well-being but less profitable, such as education and environmental
      protection, suffer from neglect and insufficient funding (e.g. lack of financial
      attention and so few capital infusions) in the post-quantum era. Therefore,
      governmental regulations and policy frameworks must be established in time to ensure
      that a small elite group cannot easily exercise their power to prioritize their
      interests over the public good, preventing the benefits of quantum computing
      advancements from being reserved for a select few, leaving the majority behind and
      creating a more divided society.</p>

      <h2>Ethical Concerns to Privacy and the Level of Surveillance</h2>
      <p>Rampant personal data collection will take place in the post-quantum era,
      because the ability of quantum computers to process large volumes of data more
      rapidly than today's most sophisticated servers incentivizes organizations to
      collect even more consumer data, and so supercharges the data harvesting that
      already takes place. In such a situation, as quantum computing enables effective
      analysis of vast datasets related to an individual to create a comprehensive
      personal profile (e.g. a digital twin of the person), deep insights into an
      individual's behaviours, preferences, and vulnerabilities can be obtained, causing
      zero "privacy" to remain for the individual, as they have little control over how
      and how much of their personal information can be collected and used by business
      organizations. This extreme asymmetry of knowledge between customers and companies
      allows the companies to predict and influence individual and group behaviours to an
      unprecedented degree imperceptibly, which potentially gives rise to a surveillance
      state where power is exercised through information control.</p>
      <p>As a result, in the post-quantum era, we tend to live in a world that is similar
      to the one depicted in "1984" or "Jon". In such a world, individuals are
      unconsciously manipulated to do what they are told to do and follow the paths laid
      out by data-driven algorithms. For instance, individuals will buy what
      organizations want them to buy, as the reactions of individuals to a product or an
      intervention are precisely predicted through utilizing quantum computing to perform
      data mining and simulation based on the extensive and highly granular data
      collected from a person's digital footprints and social interactions. By passively
      and unintentionally transferring the autonomy of "what to do" and "what to think"
      to organizations and machines, customers (buyers) and people (non-buyers) are
      effectively reduced to sums of money, or to nothing (as they have nothing private
      to hide anymore).</p>
      <p>In such a world, individuals' sense of values, particularly adolescents', can be
      fundamentally altered by unwittingly conforming to the prescribed behaviours of
      business entities. All the traditional yet aristocratic values, such as dignity,
      honesty, challenge, and sacrifice, may be publicly seen as obsolete and no longer
      count for anything, replaced by the enjoyment of low-level pleasures (e.g. buying,
      eating) and the numbness of feeling nothing strongly or deeply. This can be
      detrimental to the prosperity of society and the nation, because those people who
      become lacking in deep understanding or empathy can potentially lead society to
      collapse, and all sorts of social activities that are historically thought to be
      important — and therefore subsidized — to disappear. On the other hand, from the
      positioning of the business organizations, customers who are prone to hysteria and
      faddishness are "ideal" for their sales and market growth, while those
      organizations have no incentive to build or maintain social conditions in which
      ideas can be exchanged and conversation is possible.</p>
      <p>Therefore, it should be mandated for policymakers and the C-level leaders in both
      the organizations subscribing to quantum computing services and the technology
      companies providing the quantum computing resources to collectively construct
      regulatory frameworks to prohibit invasive surveillance practices and the excessive
      erosion of privacy.</p>

      <h2>Ethical Concerns Regarding the "Black-Box" Issue in ML Exacerbated by Quantum Computing</h2>
      <p>All the ethical concerns related to the lack of explainability in deep learning
      neural networks will be aggravated with quantum machine learning, because it will be
      much more difficult to evaluate and judge the decision-making process of quantum
      algorithms. Hence, if quantum machine learning models are directly deployed in
      production environments of areas like finance and law enforcement, the embedded
      biases that cannot be detected — learned from the training data — can lead to unfair
      or discriminatory judicial or investment decisions, exacerbating existing
      socio-economic divides. Under such a scenario,</p>
      <blockquote>not only will the market confidence in automated systems be undermined
      due to their unexplainable and biased decision-making processes, but also the public
      trust in the institutions that employ such technologies will be eroded.</blockquote>
      <p>Since AI is not a creature (autonomous entity), but a form of "social
      collaboration", its products (decisions) are guaranteed to encapsulate human biases
      and discriminations that can further intensify socio-economic inequalities. Thus,
      the deployment of quantum machine learning models should be suspended indefinitely
      until their explainability reaches a certain threshold level and the embedded biases
      can be eradicated, to avert exacerbating social-economic disparities and public
      distrust.</p>
      <p>From another angle, the lack of explainability in quantum machine learning models
      may also suggest that the ignorance of "basic science" in favour of "applied
      science" is undesirable and should be ceased, because those high-stakes sectors like
      finance and law enforcement demand causal explanations and "theories" to avoid the
      negative impacts of "black-box" issues on both companies and society. Hence,
      according to the terminology of
      <a href="https://hls.harvard.edu/faculty/jonathan-l-zittrain/" target="_blank" rel="noopener">Jonathan Zittrain</a>,
      automated decisions that are made "theory-free" should be avoided as they generate
      enormous
      <a href="https://www.cambridge.org/core/books/cambridge-handbook-of-responsible-artificial-intelligence/intellectual-debt/F5D4CF05857D072ABED383AE7A3222E4" target="_blank" rel="noopener">intellectual debt</a>,
      meaning that the primary research emphasis should gradually shift from "applied
      science" to the "basic science" that mainly focuses on deductively understanding and
      explaining phenomena.</p>

      <h2>Vicious Cycle of Quantum Computing and Post-Quantum Cryptography</h2>
      <p>As quantum computing can render current cryptographic schemes and blockchain
      technology extremely vulnerable, the development and adoption of post-quantum
      cryptography that is inherently resistant to quantum attacks will be the top
      priority at the beginning of the post-quantum computing era. Nevertheless, the
      information people attempt to protect stays the same, meaning that for the same
      personal data (e.g. residence address, gender, preferences), financial records, and
      sensitive communications, more sophisticated and more expensive protection measures
      are constantly required as the technology interminably evolves. The incessant desire
      for growth in computation power tends to perpetuate the demand for more well-rounded
      cryptographic schemes, which is also a manifestation of "a perpetual and restless
      desire of power after power, that ceaseth only in death" according to Hobbes. Such
      eternal synchronization of technological advancement in computing power and the
      advancement in cryptographic defenses results in a vicious cycle in cybersecurity,
      where the capabilities of attackers and defenders continuously escalate in response
      to each other, while the rewards/stakes (e.g. data) stay unchanged, leading to
      substantial resource waste and one more unnecessary arms race.</p>
      <p>From another aspect, this vicious cycle of advancement in computing power and
      cryptographic defenses is a good embodiment of a misfortune created by us. Due to our
      continuous demands for more advancement in computing capabilities (e.g. Moore's law)
      for the good life with attributes like stability and peace, we create a perpetual
      escalation of threats and defenses in the cybersecurity field, resulting in a
      timeless state of disorder and conflict on the contrary. This self-perpetuating cycle
      is a misfortune of our own making that, while driven by a desire for progress,
      ironically results in a constant state of insecurity and instability.</p>
      <p>Moreover, ongoing investment in improving cryptographic protective measures to
      counter new methods of attack is required to secure the same data entities,
      signifying both an intentional misallocation of resources and effort, and the
      Sisyphean nature of this cybersecurity arms race (constantly competing to maintain
      the same status quo of security rather than achieving a long-lasting solution).
      However, from the standpoint of the cybersecurity industry, where the oligopolistic
      technology companies tend to be deeply involved and consulted in the post-quantum
      era, the industry growth is fuelled by the perpetual threat landscape, turning
      misfortune into a sustainable source of profit. On the other hand, from the
      perspective of those SMEs who may not be able to afford the cost of initiating a
      massive and timely adoption of new security protocols at the start of the
      post-quantum computing era, they are likely to go bankrupt and suffer from this
      misfortune. Ergo, comprehensive regulatory frameworks must be formulated in the
      post-quantum computing era to set boundaries and standards for the responsible
      development and use of high-performance computing, including quantum computing, which
      should mitigate the arms race in cybersecurity to a certain extent.</p>

      <p><em>Thank you for reading. I also proposed some remedies to mitigate the ethical
      issues I brought up, which I will publish shortly if this article receives positive
      feedback. Please leave your comments to share your thoughts as well.</em></p>

      <h2>References</h2>
      <ul>
        <li>Barmes, I., &amp; Bosch, B. (2023, August 10). <em>Quantum computers and the Bitcoin blockchain.</em> Deloitte Netherlands.</li>
        <li>Biondi, M., Heid, A., Henke, N., Mohr, N., Pautasso, L., Ostojic, I., Wester, L., &amp; Zemmel, R. (2021, December 14). <em>Quantum computing use cases are getting real — what you need to know.</em> McKinsey &amp; Company.</li>
        <li>Brooks, M. (2023, May 24). <em>Quantum computers: What are they good for?</em> Nature News.</li>
        <li>Buchholz, S., &amp; Ammanath, B. (2022, May 18). <em>Quantum computing may create ethical risks for businesses. It's time to prepare.</em> Deloitte Insights.</li>
        <li>Burns, R. (2023, February 21). <em>The cybersecurity implications of quantum computing.</em> Security Info Watch.</li>
        <li>Byun, S., &amp; Kim, K. (2010, May 11). <em>Educational inequality in South Korea: The widening socioeconomic gap in student achievement.</em> Emerald Insight.</li>
        <li>Ferrie, C. (2023, November 1). <em>Quantum computers in 2023: How they work, what they do, and where they're heading.</em> The Conversation.</li>
        <li>Hidary, J., &amp; Sarkar, A. (2023, January 19). <em>The world is heading for a "quantum divide": Here's why it matters.</em> World Economic Forum.</li>
        <li>Lella, E., &amp; Schmid, G. (2023, October 20). <em>On the security of Quantum Key Distribution Networks.</em> MDPI.</li>
        <li>Matthews, C. (2019, December 12). <em>Quantum computing will be the smartphone of the 2020s, says Bank of America strategist.</em> MarketWatch.</li>
        <li>Nature Publishing Group. (2022, January 10). <em>40 years of quantum computing.</em> Nature News.</li>
        <li>Amazon Web Services. (n.d.). <em>What is quantum computing?</em> AWS.</li>
        <li>IBM. (n.d.). <em>What is quantum computing?</em> IBM.</li>
        <li>Microsoft (SoniaLopezBravo). (n.d.). <em>Understanding quantum computing — Azure Quantum.</em> Microsoft Learn.</li>
      </ul>
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
