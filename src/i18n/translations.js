// translations.js

const createCommonServices = (lang) => ({
  marketIntelligence: {
    title: lang === "en" ? "Market Intelligence" : "マーケットインテリジェンス",
    desc:
      lang === "en"
        ? "We provide timely and accurate insights through research, feasibility studies, and regulatory analysis. Our reports help businesses make informed decisions and reduce risk when entering new markets."
        : "新市場進出における意思決定を支援するため、市場調査、実現可能性調査、規制分析を通じて、迅速かつ正確なインサイトを提供します。弊社のレポートは、企業が情報に基づいた判断を行い、リスクを軽減することに貢献します。",
    points:
      lang === "en"
        ? [
            "Market Research & Insights",
            "Feasibility Studies",
            "Regulatory Affairs Support",
            "Risk Analysis & Forecasting",
            "Publishing (e.g. Kenya energy reports)",
          ]
        : [
            "市場調査・インサイト",
            "実現可能性調査",
            "規制対応支援",
            "リスク分析・予測",
            "出版物（例：ケニアのエネルギー報告書）",
          ],
  },
  businessMatch: {
    title:
      lang === "en"
        ? "Market Links (Business Matchmaking)"
        : "マーケットリンク（ビジネスマッチング）",
    desc:
      lang === "en"
        ? "We connect Japanese businesses with vetted African partners — and vice versa — ensuring each match supports long-term collaboration and business success."
        : "日本企業と信頼できるアフリカのパートナーを相互につなぎ、長期的な協力関係とビジネスの成功を支援します。",
    points:
      lang === "en"
        ? [
            "B2B Matchmaking",
            "Partner Verification",
            "Government & Liaison Support",
            "Cultural & Business Etiquette Training",
          ]
        : [
            "B2Bマッチング",
            "パートナーの信頼性確認",
            "政府・渉外支援",
            "文化・ビジネスマナー研修",
          ],
  },
  expertConnect: {
    title:
      lang === "en" ? "ExpertConnect™ Solutions" : "エキスパートコネクト™ ソリューション",
    desc:
      lang === "en"
        ? "Through our proprietary expert-matching platform, we connect organizations with specialized industry professionals, ensuring access to critical knowledge when and where it is needed."
        : "弊社独自の専門家マッチングプラットフォームを通じて、必要なときに必要な知識を持つ業界専門家をご紹介します。",
    points:
      lang === "en"
        ? [
            "Expert Database Access",
            "Talent Matching for Japan–Africa Setup",
            "Custom Sector Advisory",
            "Knowledge Bank Access",
          ]
        : [
            "専門家データベースへのアクセス",
            "日アフリカ事業立ち上げの人材マッチング",
            "業界別カスタムアドバイザリー",
            "ナレッジバンクアクセス",
          ],
  },
  tradeLink: {
    title: lang === "en" ? "Trade Links" : "トレードリンク",
    desc:
      lang === "en"
        ? "We support businesses — especially in Africa — to source high-quality goods from Japan. Our services include supplier identification, verification, negotiation support, and coordination of logistics."
        : "特にアフリカ企業が日本から高品質な商品を調達する際の支援を行います。サプライヤー選定、信頼性確認、交渉支援、物流調整を含みます。",
    points:
      lang === "en"
        ? [
            "Japan Product Sourcing",
            "Seller Identification & Verification",
            "Procurement Negotiation",
            "Logistics Coordination",
          ]
        : [
            "日本製品の調達",
            "販売者の特定・信頼性確認",
            "調達交渉",
            "物流調整",
          ],
  },
});

const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      insights: "Insights",
      contact: "Contact",
    },
    home: {
      welcomeTitle: "Welcome to Intellink Nippon Consulting GK",
      welcomeIntro:
        "Your dedicated partner in connecting Japan with the world’s most promising emerging markets...",
      marketIntelligenceTitle: "Market Intelligence",
      marketIntelligenceDesc:
        "We deliver research, feasibility studies, and risk insights to support data-driven decisions in new markets.",
      expertConnectTitle: "ExpertConnect™ Solutions",
      expertConnectDesc:
        "Access our expert-matching platform to connect with qualified professionals for your market expansion goals.",
      tradeLinksTitle: "Trade Links",
      tradeLinksDesc:
        "We support procurement from Japan to Africa, offering supplier identification, negotiation, and logistics coordination.",
      ctaExploreServices: "Explore Our Services",
      ctaContactUs: "Get in Touch",
      ctaAboutUs: "Learn More About Us",
    },
    about: {
      mission: "Mission",
      missionText:
        "Our mission is to make international business between Japan and emerging markets accessible...",
      vision: "Vision",
      visionText:
        "To be the foremost facilitator of impactful cross-border business...",
      aboutUs: "About Us",
      aboutText:
        "Intellink Nippon Consulting GK is a Japan-based consulting firm...",
      whoWeAre: "Who We Are",
      whoWeAreText:
        "We are a team of professionals with deep experience in international consulting...",
      whatWeDo: "What We Do",
      whatWeDoText:
        "We provide advisory and facilitation services that support market entry...",
      philosophy: "Our Philosophy",
      philosophyText:
        "We believe that business thrives on understanding, trust, and shared purpose...",
      values: "Our Core Values",
      valuesList: [
        [
          "Kaizen Mindset",
          "We embrace continuous learning and improvement for ourselves and our clients.",
        ],
        [
          "Partnership Beyond Projects",
          "We build lasting relationships that generate value beyond transactions.",
        ],
        [
          "Responsible Growth",
          "We promote sustainable business that benefits all stakeholders: clients, communities, and the environment.",
        ],
      ],
      ourStory: "Our Story",
      ourStoryText:
        "Intellink Nippon Consulting GK was established in Tokyo in 2025...",
    },
    services: createCommonServices("en"),
    contact: {
      title: "Contact Us",
      subtitle:
        "Let’s start a conversation. Reach out directly or leave us a message.",
      form: {
        name: "Your Name",
        email: "Your Email",
        phone: "Your Phone Number",
        location: "Your Location / Address",
        message: "Your Message",
        submit: "Schedule a Consultation",
      },
    },
    insights: {
      successTitle: "Success Stories",
      successText:
        "We supported a Japanese agritech firm in establishing partnerships...",
      feedbackTitle: "Featured Client Feedback",
      feedbackText:
        "“Intellink Nippon helped us understand complex regulatory landscapes in record time...”",
      feedbackClient: "— Japanese SME Executive, Manufacturing Sector",
      articlesTitle: "Thought Leadership",
      articles: [
        "Why Japan-Africa Trade Needs More Than Capital: The Role of Cultural Brokers",
        "Navigating Market Compliance Across Borders: A Practical Framework",
        "From Opportunity to Action: Building Trust in Emerging Markets",
      ],
      download: "Download Article",
      subscribeCTA: "Subscribe to Access",
      subscribePrompt:
        "Please log in and subscribe to access this article.",
    },
    tradeLink: {
      hero: {
        title: "Cross-Border Trade Made Simple.",
        desc:
          "Doing business across borders can be complex — even overwhelming — without deep local knowledge. TradeLink simplifies the process so you can trade with confidence and clarity.",
        imgAlt: "Cross-Border Trade",
      },
      intro: {
        title: "What is TradeLink?",
        text:
          "TradeLink is our dedicated solution for facilitating secure, efficient, and well-informed international trade — especially between Japan and Africa/emerging markets. Whether you need a verified supplier, a trustworthy distributor, or a route to market, we connect you with intelligence-backed opportunities.",
      },
      offer: {
        title: "What We Offer",
        imgAlt: "TradeLink Services",
        points: [
          {
            title: "Partner & Supplier Identification",
            desc: "Discover and connect with reliable partners tailored to your needs.",
          },
          {
            title: "Supplier & Product Verification",
            desc: "Background checks, profiling, and reference verifications.",
          },
          {
            title: "Negotiation & Communication Support",
            desc: "Bridge language and cultural gaps during negotiations.",
          },
          {
            title: "Market Entry & Sales Channel Strategy",
            desc: "Identify the best entry routes and promotional opportunities.",
          },
          {
            title: "Logistics Coordination",
            desc: "Ensure efficient, compliant freight and customs processes.",
          },
        ],
      },
      why: {
        title: "Why TradeLink?",
        imgAlt: "Why Choose TradeLink",
        points: [
          "Risk Mitigation — Avoid scams, misunderstandings, and delays",
          "Local Knowledge — Navigate regulations and cultural norms",
          "Reliable Network — Work only with vetted partners",
          "Market Growth — Expand with purpose",
          "End-to-End Support — From sourcing to delivery",
        ],
      },
      cases: {
        title: "Use Cases",
        items: [
          "Japanese company sourcing organic coffee beans from Uganda with no starting point.",
          "Ghanaian artisan brand selling handmade textiles in Japan.",
          "Tokyo-based food company seeking verified Kenyan ingredient suppliers.",
          "Wellness brand testing products in Japan via exhibitions and pop-up stores.",
        ],
      },
      cta: {
        title: "Get Started Today",
        desc:
          "Let us help you trade with confidence. Whether you’re buying, selling, or exploring partnerships, TradeLink ensures you're never navigating blindly.",
        button: "Contact Us",
      },
    },   

      


 jp: {
  navbar: {
    home: "ホーム",
    about: "会社情報",
    services: "サービス",
    insights: "知見",
    contact: "お問い合わせ",
  },
  home: {
    welcomeTitle: "Intellink Nippon Consulting GK へようこそ",
    welcomeIntro:
      "Intellinkは、日本とアフリカ、その他新興市場をつなぐ信頼できるパートナーです。現地に根差した知見と国際的なネットワークを活用し、持続可能かつ実行可能なビジネスソリューションを提供します。",
    marketIntelligenceTitle: "マーケットインテリジェンス",
    marketIntelligenceDesc:
      "新市場での意思決定を支援するため、調査、実現可能性分析、リスク評価を行います。",
    expertConnectTitle: "エキスパートコネクト™",
    expertConnectDesc:
      "専門家マッチングプラットフォームを通じて、市場拡大に必要なプロフェッショナルとつながることができます。",
    tradeLinksTitle: "トレードリンク",
    tradeLinksDesc:
      "日本からアフリカへの調達を支援し、サプライヤー選定、交渉、物流調整を行います。",
    ctaExploreServices: "サービスを見る",
    ctaContactUs: "お問い合わせ",
    ctaAboutUs: "会社情報を見る",
  },
  about: {
    mission: "ミッション",
    missionText:
      "日本と新興市場間の国際ビジネスを、信頼できるパートナーシップと戦略的ソリューションを通じて促進します。",
    vision: "ビジョン",
    visionText:
      "国境を越えたビジネスを推進する主要なファシリテーターとなり、持続可能な成長を実現します。",
    aboutUs: "会社概要",
    aboutText:
      "Intellink Nippon Consulting GKは、日本を拠点にアフリカを中心とする新興市場へのビジネス展開を支援するコンサルティング会社です。",
    whoWeAre: "私たちについて",
    whoWeAreText:
      "私たちは国際コンサルティング、貿易支援、異文化コミュニケーションに深い知見を持つ専門家チームです。",
    whatWeDo: "提供するサービス",
    whatWeDoText:
      "日本と新興市場間の市場参入、貿易、投資、事業開発を支援するアドバイザリーおよびファシリテーションサービスを提供しています。",
    philosophy: "私たちの理念",
    philosophyText:
      "ビジネスは理解、信頼、そして共通の目的の上に成り立ちます。",
    values: "価値観",
    valuesList: [
      ["カイゼンマインドセット", "継続的な学びと改善を自らとクライアントのために追求します。"],
      ["プロジェクトを超えるパートナーシップ", "一過性ではなく長期的な価値を生む関係を築きます。"],
      ["責任ある成長", "クライアント、地域社会、環境すべてに貢献するビジネスを推進します。"],
    ],
    ourStory: "私たちの歩み",
    ourStoryText: "Intellink Nippon Consulting GKは2025年に東京で設立されました。",
  },
  services: createCommonServices("jp"),
  contact: {
    title: "お問い合わせ",
    subtitle:
      "お気軽にご連絡ください。下記フォームよりメッセージをお送りいただけます。",
    form: {
      name: "お名前",
      email: "メールアドレス",
      phone: "電話番号",
      location: "所在地／住所",
      message: "メッセージ",
      submit: "ご相談の予約",
    },
  },
  insights: {
    successTitle: "成功事例",
    successText:
      "日本のアグリテック企業が東アフリカで現地パートナーを確立し、持続的な事業展開を実現しました。",
    feedbackTitle: "クライアントの声",
    feedbackText:
      "「Intellink Nipponは複雑な規制環境の理解を迅速に支援してくれました。」",
    feedbackClient: "— 日本の中小製造業エグゼクティブ",
    articlesTitle: "リーダーシップ記事",
    articles: [
      "日本・アフリカ貿易に資本以上のものが必要な理由：文化仲介者の役割",
      "国境を越えたコンプライアンスの実践フレームワーク",
      "チャンスを行動へ：新興市場で信頼を築く方法",
    ],
    download: "記事をダウンロード",
    subscribeCTA: "購読してアクセス",
    subscribePrompt: "記事にアクセスするには、ログインして購読してください。",
  },

  tradeLink: {
    hero: {
      title: "越境取引をシンプルに",
      desc:
        "深い現地知識がなければ、国境を越えるビジネスは複雑で負担になりがちです。TradeLinkはプロセスを簡素化し、自信と明確さを持って取引できるようにします。",
      imgAlt: "越境取引",
    },
    intro: {
      title: "TradeLinkとは？",
      text:
        "TradeLinkは、日本とアフリカ／新興市場間を中心に、安全で効率的かつ情報に基づく国際取引を実現するための専用ソリューションです。検証済みのサプライヤーや信頼できるディストリビューター、市場参入ルートが必要な場合でも、確かな知見で機会をつなぎます。",
    },
    offer: {
      title: "提供内容",
      imgAlt: "TradeLinkサービス",
      points: [
        { title: "パートナー・サプライヤー探索", desc: "要件に合った信頼できる相手先を特定し、つなぎます。" },
        { title: "サプライヤー／製品の検証", desc: "バックグラウンドチェック、プロファイリング、リファレンス確認を実施します。" },
        { title: "交渉・コミュニケーション支援", desc: "言語・文化のギャップを埋め、交渉を円滑に進めます。" },
        { title: "市場参入・販売チャネル戦略", desc: "最適な参入ルートとプロモーション機会を特定します。" },
        { title: "物流コーディネーション", desc: "効率的で法令遵守した輸送・通関を手配します。" },
      ],
    },
    why: {
      title: "TradeLinkを選ぶ理由",
      imgAlt: "TradeLinkの強み",
      points: [
        "リスク低減 — 詐欺・誤解・遅延を回避",
        "ローカル知見 — 規制や商慣習をスムーズに理解",
        "信頼ネットワーク — 検証済みの相手のみと取引",
        "市場成長 — 目的に沿った拡大を支援",
        "エンドツーエンド支援 — 調達から納品まで対応",
      ],
    },
    cases: {
      title: "ユースケース",
      items: [
        "ゼロからウガンダ産有機コーヒー豆を調達したい日本企業。",
        "ガーナの職人ブランドが日本で手仕事のテキスタイルを販売。",
        "東京都内の食品会社が検証済みのケニア産原料サプライヤーを探索。",
        "ウェルネスブランドが展示会やポップアップ店舗で日本市場を試験展開。",
      ],
    },
    cta: {
      title: "今すぐ始める",
      desc:
        "自信を持って取引できるよう支援します。仕入れ、販売、パートナー探索のいずれでも、TradeLinkが暗中模索を避ける力となります。",
      button: "お問い合わせ",
    },
  },

  services: {
    headerTitle: "私たちのサービス",
    headerDescription:
      "日本と新興市場をつなぐソリューションを提供し、持続可能なビジネス成長を可能にする洞察、つながり、貿易機会をお届けします。",
    marketIntelligence: {
      title: "マーケットインテリジェンス",
      description:
        "調査、実現可能性分析、法規制分析を通じて正確かつタイムリーな情報を提供します。レポートは新市場参入時の意思決定を支援し、リスクを軽減します。",
    },
    marketLinks: {
      title: "マーケットリンク（ビジネスマッチング）",
      description:
        "日本企業と信頼できるアフリカのパートナーをつなぎ、その逆も行います。長期的な協力とビジネスの成功につながるマッチングを支援します。",
    },
    expertConnect: {
      title: "エキスパートコネクト™ソリューション",
      description:
        "独自の専門家マッチングプラットフォームを通じて、組織と業界の専門家を結びつけ、必要なときに必要な知識へ確実にアクセスできる環境を提供します。",
    },
    tradeLinks: {
      title: "トレードリンク",
      description:
        "特にアフリカ企業が日本から高品質な商品を調達できるよう支援します。サプライヤーの特定・確認、交渉サポート、物流調整を行います。",
    },
  },

  marketLink: {
    hero: {
      title: "マーケットインテリンク",
      desc: "確信を持って始めよう — 自信と明確さを持って新しい市場へ。",
      button: "今すぐ始める",
    },
    intro: {
      text:
        "新しい市場への参入は大胆な一歩ですが、無謀な挑戦であってはなりません。マーケットインテリンクは、成功に必要な情報、洞察、そして信頼できる現地ネットワークを初日から提供します。",
    },
    about: {
      title: "マーケットインテリンクとは？",
      text:
        "国際企業が新たな地域を理解し、適応し、成長するために特別設計された市場調査・支援サービスです。最新の現地情報から適切なパートナー探しまで、市場参入をスムーズかつ戦略的に実現します。",
      imgAlt: "市場調査",
    },
    services: {
      title: "提供サービス",
      items: [
        ["市場調査", "トレンド、競合、消費者行動の徹底分析。"],
        ["ビジネスマッチング", "信頼できる現地パートナーやサプライヤーと接続。"],
        ["ローカルナビゲーション", "法務、文化、運営面でのガイドを提供。"],
        ["戦略アドバイザリー", "成功のために設計されたカスタム市場参入プラン。"],
      ],
    },
    why: {
      title: "マーケットインテリンクを選ぶ理由",
      points: [
        "新興市場での深い現地知識",
        "数多くの市場参入成功実績",
        "複数地域にわたる信頼できるネットワーク",
        "長期的成功のためのデータ主導型戦略",
      ],
    },
    ideal: {
      title: "対象となるお客様",
      items: ["輸出企業", "投資家", "スタートアップ", "貿易機関", "事業拡大を目指す企業"],
    },
    finalCTA: {
      title: "仮説ではなく確信から始めよう",
      desc: "マーケットインテリンクと提携し、自信を持って新たな機会の扉を開きましょう。",
      button: "お問い合わせ",
    },
  },
 },
}
  
};

export default translations;
