import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"

export type Lang = "fr" | "en" | "es" | "ee"

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
  { code: "ee", label: "Eʋegbe", short: "EE" },
]

export const contact = {
  email: "fabriceviagbo@gmail.com",
  phone: "+228 96 86 78 58",
  phoneHref: "+22896867858",
}

const fr = {
  nav: {
    home: "Accueil",
    about: "À propos",
    actions: "Nos axes d’action",
    leadership: "Notre vision",
    portfolio: "Portfolio",
    news: "Actualités",
    contact: "Contact",
  },
  header: { collaborate: "Collaborer avec NADI" },
  brand: { line1: "Novara Africa", line2: "Development Initiative" },
  hero: {
    eyebrow: "Novara Africa Development Initiative",
    titleBefore: "Accélérer le développement ",
    titleEm: "inclusif",
    titleAfter: " de l’Afrique.",
    intro:
      "Nous connectons les idées, les personnes et les opportunités pour contribuer à une Afrique plus inclusive, innovante et prospère.",
    primary: "Découvrir notre vision",
    secondary: "Rejoindre l’initiative",
    noteLeft: "Une initiative panafricaine",
    noteRight: "Fondée par Fabrice Komlan Séna VIAGBO",
    imageAlt:
      "Jeunes professionnels africains réunis autour de leurs ordinateurs",
    quote: "Transformer les idées en opportunités durables.",
    cue: "Découvrir",
  },
  mission: {
    eyebrow: "Notre mission",
    title: "Une vision ambitieuse pour l’Afrique",
    text: "NOVARA AFRICA DEVELOPMENT INITIATIVE est une initiative tournée vers la promotion d’un développement africain inclusif. Elle entend favoriser les échanges d’idées, l’engagement des jeunes et les dynamiques de collaboration capables de contribuer à la transformation du continent.",
  },
  pillars: [
    {
      number: "01",
      title: "Développement économique",
      text: "Mieux comprendre les dynamiques qui façonnent les économies africaines.",
    },
    {
      number: "02",
      title: "Leadership des jeunes",
      text: "Faire émerger les voix, les talents et les ambitions d’une nouvelle génération.",
    },
    {
      number: "03",
      title: "Politiques publiques",
      text: "Nourrir un dialogue constructif au service de décisions plus inclusives.",
    },
  ],
  approach: {
    eyebrow: "Notre méthode",
    title: "Une démarche en quatre mouvements.",
    intro:
      "Une manière de travailler calme, exigeante et tournée vers l’impact : écouter avant de penser, penser avant d’agir.",
    seal: "NADI",
    steps: [
      {
        index: "01",
        title: "Écouter",
        text: "Comprendre les réalités, les attentes et les ambitions des acteurs engagés pour le développement de l’Afrique.",
      },
      {
        index: "02",
        title: "Analyser",
        text: "Produire des perspectives claires et honnêtes sur les enjeux économiques et sociaux du continent.",
      },
      {
        index: "03",
        title: "Connecter",
        text: "Rapprocher les idées, les talents, les institutions et les opportunités qui peuvent faire avancer les projets.",
      },
      {
        index: "04",
        title: "Agir",
        text: "Transformer les constats et les rencontres en initiatives utiles, durables et inclusives.",
      },
    ],
  },
  leader: {
    eyebrow: "Le leadership",
    title: "Un leadership tourné vers l’avenir de l’Afrique",
    p1: "Fabrice Komlan Séna VIAGBO est un jeune leader visionnaire profondément engagé dans le développement de l’Afrique.",
    p2: "Ses centres d’intérêt portent notamment sur l’analyse économique, le dialogue sur les politiques publiques et l’autonomisation des jeunes.",
    p3: "Il représente une nouvelle génération de leaders africains résolument tournée vers l’action, l’innovation et l’impact.",
    cta: "Découvrir notre engagement",
    name: "Fabrice Komlan Séna VIAGBO",
    role: "Fondateur · NADI",
    imageAlt:
      "Portrait de Fabrice Komlan Séna VIAGBO, fondateur de NADI",
  },
  ticker: [
    "Analyse économique",
    "Dialogue sur les politiques publiques",
    "Autonomisation des jeunes",
    "Leadership",
    "Inclusion",
    "Innovation",
    "Collaboration",
    "Impact durable",
  ],
  activities: {
    eyebrow: "Nos activités",
    previous: "Activité précédente",
    next: "Activité suivante",
    items: [
      {
        kicker: "Réflexion collective",
        title: "Ateliers d’idées et d’innovation",
        text: "Des formats participatifs pour croiser les expertises, faire émerger des perspectives et transformer les constats en pistes d’action.",
      },
      {
        kicker: "Dialogue",
        title: "Rencontres et conversations publiques",
        text: "Des espaces exigeants et accessibles pour rapprocher les décideurs, les chercheurs, les entrepreneurs et la jeunesse.",
      },
      {
        kicker: "Transmission",
        title: "Leadership et montée en compétence",
        text: "Des expériences pensées pour renforcer la confiance, la capacité d’initiative et le pouvoir d’agir des jeunes talents.",
      },
      {
        kicker: "Rayonnement",
        title: "Forums et rendez-vous panafricains",
        text: "Des temps forts pour partager les connaissances et ouvrir de nouvelles possibilités de collaboration à l’échelle du continent.",
      },
    ],
  },
  actionsPreview: {
    eyebrow: "Nos axes d’action",
    title: "Réfléchir. Connecter. Agir.",
    cta: "Explorer tous nos axes",
  },
  actionAreas: [
    {
      number: "I",
      title: "Analyse économique",
      text: "Encourager la réflexion, l’analyse et la compréhension des enjeux économiques qui influencent le développement de l’Afrique.",
    },
    {
      number: "II",
      title: "Dialogue sur les politiques publiques",
      text: "Promouvoir les échanges constructifs, les idées et la participation aux réflexions sur les politiques publiques.",
    },
    {
      number: "III",
      title: "Autonomisation des jeunes",
      text: "Valoriser le potentiel des jeunes, leur leadership et leur contribution aux transformations économiques et sociales.",
    },
  ],
  vision: {
    eyebrow: "Notre vision pour l’Afrique",
    title: "Une Afrique où chaque potentiel compte.",
    text: "Nous croyons en une Afrique capable de transformer ses idées, ses talents et ses ressources en opportunités durables pour toutes et tous.",
    cta: "Construisons ensemble",
    quoteLine1: "Accelerating Africa’s",
    quoteLine2: "Inclusive Development.",
  },
  portfolioPreview: {
    eyebrow: "Portfolio d’initiatives",
    title: "Des idées conçues pour devenir des espaces d’impact.",
    text: "Découvrez les formats envisagés par NADI pour analyser, rassembler et faire progresser les ambitions du continent.",
    cta: "Explorer le portfolio",
  },
  portfolioItems: [
    {
      number: "01",
      category: "Économie & innovation",
      title: "Observatoire des opportunités africaines",
      text: "Un concept de veille et d’analyse pour rendre les dynamiques économiques plus lisibles.",
    },
    {
      number: "02",
      category: "Jeunesse & leadership",
      title: "NADI Next Generation Forum",
      text: "Un format envisagé pour connecter les jeunes talents aux idées, outils et réseaux qui accélèrent leur impact.",
    },
    {
      number: "03",
      category: "Politiques publiques",
      title: "Conversations pour l’Afrique",
      text: "Une série éditoriale et événementielle imaginée pour nourrir un dialogue constructif et pluraliste.",
    },
  ],
  portfolioPage: {
    eyebrow: "Portfolio d’initiatives",
    title: "Imaginer aujourd’hui les plateformes d’impact de demain.",
    intro:
      "Une sélection de concepts et de formats envisagés pour donner corps à la mission de NADI. Aucun de ces projets n’est présenté comme déjà réalisé.",
    noticeLabel: "Portefeuille prospectif",
    noticeText:
      "Ces propositions constituent une direction de travail et pourront évoluer avec les partenaires, les publics concernés et les priorités de l’organisation.",
    statusLabel: "Statut",
    statusValue: "Concept à développer",
    cta: "Construire cette initiative avec NADI",
  },
  partnerships: {
    eyebrow: "Partenariats & collaboration",
    title: "Ensemble, donnons de l’élan au développement africain",
    intro:
      "NADI souhaite favoriser les synergies entre les jeunes, les institutions, les organisations, les chercheurs, les entrepreneurs et les partenaires engagés en faveur du développement inclusif.",
    entries: [
      "Devenir partenaire",
      "Participer à nos initiatives",
      "Nous contacter",
    ],
  },
  news: {
    eyebrow: "Actualités & perspectives",
    title: "Les idées qui font avancer le continent",
    ctaAll: "Voir toutes les publications",
    demoBadge: "Contenu de démonstration",
    metaSuffix: "À venir",
    readPreview: "Lire l’aperçu",
  },
  articles: [
    {
      category: "Développement économique",
      tagId: "economy",
      tag: "Économie",
      title: "Comprendre les nouveaux moteurs de la croissance inclusive",
      excerpt:
        "Un espace éditorial pour décrypter les dynamiques économiques africaines.",
    },
    {
      category: "Jeunesse et leadership",
      tagId: "youth",
      tag: "Jeunesse",
      title: "La jeunesse au cœur des transformations du continent",
      excerpt:
        "Perspectives sur l’engagement, l’initiative et le leadership de demain.",
    },
    {
      category: "Politiques publiques",
      tagId: "policy",
      tag: "Politiques publiques",
      title: "Faire du dialogue une force de transformation",
      excerpt:
        "Regards croisés sur la participation et la fabrique de politiques inclusives.",
    },
  ],
  filters: [
    { id: "all", label: "Tous" },
    { id: "economy", label: "Économie" },
    { id: "youth", label: "Jeunesse" },
    { id: "policy", label: "Politiques publiques" },
  ],
  newsPage: {
    eyebrow: "Actualités & perspectives",
    title: "Un espace pour comprendre, partager et ouvrir le dialogue.",
    intro:
      "Cette page accueillera les analyses, annonces et publications officielles de NADI.",
    demoTitle: "Maquette éditoriale",
    demoText:
      "Les contenus ci-dessous sont des exemples et ne constituent pas des publications officielles.",
    filterLabel: "Filtrer les articles",
  },
  finalCta: {
    eyebrow: "Notre ambition commune",
    title: "L’avenir de l’Afrique se construit ensemble.",
    text: "Connectons les idées, les talents et les opportunités pour accélérer un développement plus inclusif.",
    cta: "Entrer en contact avec NADI",
  },
  footer: {
    tagline: "Accelerating Africa’s Inclusive Development.",
    navLabel: "Navigation",
    joinLabel: "Nous rejoindre",
    collaborate: "Collaborer avec NADI",
    stayLabel: "Rester informé",
    newsletterIntro:
      "Recevez un aperçu des analyses et rendez-vous de NADI, une fois par mois.",
    newsletterPlaceholder: "votre@email.org",
    newsletterAria: "Adresse e-mail",
    subscribe: "S’inscrire",
    newsletterOk:
      "Merci — votre inscription a bien été simulée dans cette maquette.",
    newsletterError: "Merci de saisir une adresse e-mail valide.",
    keywords: "Développement inclusif · Leadership · Collaboration",
    credit: "Site conçu et développé par ATF — LAWSON Prince",
  },
  about: {
    eyebrow: "À propos de NADI",
    title: "Une initiative pour relier les ambitions africaines.",
    intro:
      "NADI se construit comme une plateforme de réflexion, de dialogue et de mise en relation au service d’un développement plus inclusif.",
    reasonEyebrow: "Notre raison d’être",
    reasonTitle: "Créer les conditions d’une transformation partagée",
    p1: "NOVARA AFRICA DEVELOPMENT INITIATIVE porte une ambition simple : rapprocher les idées, les personnes et les opportunités qui peuvent contribuer à l’avenir du continent.",
    p2: "Son approche privilégie l’écoute, l’analyse et la coopération entre générations, disciplines et institutions. NADI entend créer des espaces où les perspectives deviennent des collaborations et où les collaborations peuvent produire un impact durable.",
    valuesEyebrow: "Valeurs proposées",
    valuesTitle: "Les principes qui orientent notre démarche",
    valuesIntro:
      "Ces valeurs expriment l’orientation actuelle de NADI et pourront être précisées avec l’organisation.",
    values: [
      "Inclusion",
      "Innovation",
      "Leadership",
      "Intégrité",
      "Collaboration",
      "Impact durable",
    ],
  },
  leadershipPage: {
    eyebrow: "Le leadership",
    title: "Une vision portée par l’écoute, l’action et l’impact.",
    intro:
      "Fabrice Komlan Séna VIAGBO incarne une génération de leaders africains engagée à transformer les idées en opportunités.",
    caption: "Fabrice Komlan Séna VIAGBO · Fondateur de NADI",
    storyEyebrow: "Portrait",
    storyTitle: "Construire une plateforme au service des possibles",
    p1: "Fabrice Komlan Séna VIAGBO est un jeune leader visionnaire profondément engagé dans le développement de l’Afrique. Ses centres d’intérêt portent notamment sur l’analyse économique, le dialogue sur les politiques publiques et l’autonomisation des jeunes.",
    p2: "À travers NADI, il construit une plateforme destinée à connecter les idées, les personnes et les opportunités afin de contribuer à la transformation du continent africain.",
    quote:
      "Le développement inclusif commence lorsque chaque voix peut contribuer à dessiner l’avenir.",
    quoteSmall: "— Formulation éditoriale pour la maquette",
    cta: "Échanger avec NADI",
  },
  actionsPage: {
    eyebrow: "Nos axes d’action",
    title: "Trois leviers pour faire progresser les idées et l’action.",
    intro:
      "Des champs de réflexion et de collaboration pensés pour répondre aux transformations économiques et sociales du continent.",
    axisLabel: "Axe stratégique",
    extra:
      "L’approche envisagée associe veille, échanges de perspectives et mise en relation d’acteurs concernés. Les formats et collaborations seront développés avec les partenaires de NADI.",
    cta: "Explorer une collaboration",
  },
  contactPage: {
    eyebrow: "Entrer en contact",
    title: "Les grandes transformations commencent par une conversation.",
    intro:
      "Parlons partenariat, participation et opportunités de collaboration en faveur du développement inclusif.",
    writeEyebrow: "Écrivez-nous",
    writeTitle: "Construisons des synergies durables.",
    writeText:
      "Retrouvez ci-dessous les coordonnées officielles de NADI pour échanger avec nous.",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    socialLabel: "Réseaux sociaux",
    socialValue: "À confirmer",
    form: {
      name: "Nom complet *",
      namePlaceholder: "Votre nom",
      email: "Adresse e-mail *",
      emailPlaceholder: "vous@organisation.org",
      organisation: "Organisation",
      organisationPlaceholder: "Nom de votre organisation",
      subject: "Sujet",
      message: "Message *",
      messagePlaceholder: "Parlez-nous de votre projet ou de votre demande…",
      subjects: [
        { value: "partenariat", label: "Partenariat" },
        { value: "collaboration", label: "Collaboration" },
        { value: "participation", label: "Participation" },
        { value: "general", label: "Demande générale" },
      ],
      error:
        "Merci de renseigner votre nom, votre e-mail et votre message.",
      success:
        "Merci. Votre demande a bien été simulée dans cette maquette.",
      submit: "Envoyer le message",
      submitting: "Envoi en cours…",
    },
  },
  faq: {
    eyebrow: "Questions fréquentes",
    title: "Ce qu’il est utile de savoir.",
    entries: [
      {
        q: "Comment collaborer avec NADI ?",
        a: "Écrivez-nous via le formulaire de contact en précisant votre organisation et votre domaine d’intérêt. Nous étudions chaque proposition de partenariat, de participation ou de coconstruction.",
      },
      {
        q: "NADI publie-t-il déjà des analyses ?",
        a: "L’espace « Actualités & perspectives » est une maquette éditoriale. Les publications officielles, annonces et comptes rendus seront intégrés dès que l’organisation entre en activité.",
      },
      {
        q: "Quels domaines NADI couvre-t-il ?",
        a: "Trois axes principaux : l’analyse économique, le dialogue sur les politiques publiques et l’autonomisation des jeunes.",
      },
      {
        q: "Puis-je proposer une idée ou un format d’initiative ?",
        a: "Oui. NADI souhaite favoriser les synergies entre les jeunes, les institutions, les chercheurs, les entrepreneurs et les partenaires. Présentez votre idée via le formulaire de contact.",
      },
    ],
  },
  realisation: {
    eyebrow: "Conception & réalisation",
    title: "Un site pensé et développé par ATF.",
    intro:
      "La conception éditoriale, le design et le développement de cette plateforme ont été assurés par ATF, l’agence digitale en charge de la présence en ligne de NADI.",
    name: "LAWSON Prince",
    role: "Directeur technique & Développement digital · ATF",
    note: "De la première esquisse à la mise en ligne, chaque détail a été pensé pour refléter l’ambition panafricaine de NADI.",
    imageAlt: "LAWSON Prince, directeur technique d’ATF, développeur du site NADI",
  },
  intro: { skip: "Entrer sur le site" },
  misc: {
    backToTop: "Revenir en haut de la page",
    langLabel: "Langue",
    offline: "Découvrir",
  },
}

export type Content = typeof fr

const en: Content = {
  nav: {
    home: "Home",
    about: "About",
    actions: "Our focus areas",
    leadership: "Our vision",
    portfolio: "Portfolio",
    news: "News",
    contact: "Contact",
  },
  header: { collaborate: "Collaborate with NADI" },
  brand: { line1: "Novara Africa", line2: "Development Initiative" },
  hero: {
    eyebrow: "Novara Africa Development Initiative",
    titleBefore: "Accelerating Africa’s ",
    titleEm: "inclusive",
    titleAfter: " development.",
    intro:
      "We connect ideas, people and opportunities to help build a more inclusive, innovative and prosperous Africa.",
    primary: "Discover our vision",
    secondary: "Join the initiative",
    noteLeft: "A pan-African initiative",
    noteRight: "Founded by Fabrice Komlan Séna VIAGBO",
    imageAlt:
      "Young African professionals gathered around their computers",
    quote: "Turning ideas into lasting opportunities.",
    cue: "Discover",
  },
  mission: {
    eyebrow: "Our mission",
    title: "An ambitious vision for Africa",
    text: "NOVARA AFRICA DEVELOPMENT INITIATIVE is driven by the promotion of inclusive African development. It aims to foster the exchange of ideas, the engagement of young people and collaborative dynamics that can contribute to the transformation of the continent.",
  },
  pillars: [
    {
      number: "01",
      title: "Economic development",
      text: "Better understand the dynamics shaping African economies.",
    },
    {
      number: "02",
      title: "Youth leadership",
      text: "Bring out the voices, talents and ambitions of a new generation.",
    },
    {
      number: "03",
      title: "Public policy",
      text: "Nurture constructive dialogue in service of more inclusive decisions.",
    },
  ],
  approach: {
    eyebrow: "Our method",
    title: "An approach in four movements.",
    intro:
      "A calm, demanding and impact-oriented way of working: listen before thinking, think before acting.",
    seal: "NADI",
    steps: [
      {
        index: "01",
        title: "Listen",
        text: "Understand the realities, expectations and ambitions of those committed to Africa’s development.",
      },
      {
        index: "02",
        title: "Analyse",
        text: "Produce clear and honest perspectives on the continent’s economic and social issues.",
      },
      {
        index: "03",
        title: "Connect",
        text: "Bring together the ideas, talent, institutions and opportunities that can move projects forward.",
      },
      {
        index: "04",
        title: "Act",
        text: "Turn findings and encounters into useful, lasting and inclusive initiatives.",
      },
    ],
  },
  leader: {
    eyebrow: "Leadership",
    title: "Leadership turned towards Africa’s future",
    p1: "Fabrice Komlan Séna VIAGBO is a young visionary leader deeply committed to Africa’s development.",
    p2: "His interests focus in particular on economic analysis, public policy dialogue and youth empowerment.",
    p3: "He represents a new generation of African leaders resolutely oriented towards action, innovation and impact.",
    cta: "Discover our commitment",
    name: "Fabrice Komlan Séna VIAGBO",
    role: "Founder · NADI",
    imageAlt:
      "Portrait of Fabrice Komlan Séna VIAGBO, founder of NADI",
  },
  ticker: [
    "Economic analysis",
    "Public policy dialogue",
    "Youth empowerment",
    "Leadership",
    "Inclusion",
    "Innovation",
    "Collaboration",
    "Lasting impact",
  ],
  activities: {
    eyebrow: "Our activities",
    previous: "Previous activity",
    next: "Next activity",
    items: [
      {
        kicker: "Collective thinking",
        title: "Ideas and innovation workshops",
        text: "Participatory formats to cross expertise, surface fresh perspectives and turn observations into courses of action.",
      },
      {
        kicker: "Dialogue",
        title: "Public meetings and conversations",
        text: "Demanding yet accessible spaces to bring together decision-makers, researchers, entrepreneurs and young people.",
      },
      {
        kicker: "Transmission",
        title: "Leadership and skills development",
        text: "Experiences designed to strengthen confidence, initiative and the power to act of young talent.",
      },
      {
        kicker: "Reach",
        title: "Pan-African forums and gatherings",
        text: "Highlights to share knowledge and open new possibilities for collaboration across the continent.",
      },
    ],
  },
  actionsPreview: {
    eyebrow: "Our focus areas",
    title: "Think. Connect. Act.",
    cta: "Explore all our focus areas",
  },
  actionAreas: [
    {
      number: "I",
      title: "Economic analysis",
      text: "Encourage reflection, analysis and understanding of the economic issues influencing Africa’s development.",
    },
    {
      number: "II",
      title: "Public policy dialogue",
      text: "Promote constructive exchanges, ideas and participation in reflections on public policy.",
    },
    {
      number: "III",
      title: "Youth empowerment",
      text: "Value the potential of young people, their leadership and their contribution to economic and social transformation.",
    },
  ],
  vision: {
    eyebrow: "Our vision for Africa",
    title: "An Africa where every potential counts.",
    text: "We believe in an Africa able to turn its ideas, talent and resources into lasting opportunities for all.",
    cta: "Let’s build together",
    quoteLine1: "Accelerating Africa’s",
    quoteLine2: "Inclusive Development.",
  },
  portfolioPreview: {
    eyebrow: "Portfolio of initiatives",
    title: "Ideas designed to become spaces of impact.",
    text: "Discover the formats NADI envisages to analyse, gather and advance the continent’s ambitions.",
    cta: "Explore the portfolio",
  },
  portfolioItems: [
    {
      number: "01",
      category: "Economy & innovation",
      title: "Observatory of African opportunities",
      text: "A monitoring and analysis concept to make economic dynamics more legible.",
    },
    {
      number: "02",
      category: "Youth & leadership",
      title: "NADI Next Generation Forum",
      text: "A format designed to connect young talent with the ideas, tools and networks that accelerate their impact.",
    },
    {
      number: "03",
      category: "Public policy",
      title: "Conversations for Africa",
      text: "An editorial and event series imagined to nurture constructive and plural dialogue.",
    },
  ],
  portfolioPage: {
    eyebrow: "Portfolio of initiatives",
    title: "Imagining today the impact platforms of tomorrow.",
    intro:
      "A selection of concepts and formats envisaged to give shape to NADI’s mission. None of these projects is presented as already completed.",
    noticeLabel: "Prospective portfolio",
    noticeText:
      "These proposals represent a working direction and may evolve with partners, the audiences concerned and the organisation’s priorities.",
    statusLabel: "Status",
    statusValue: "Concept to be developed",
    cta: "Build this initiative with NADI",
  },
  partnerships: {
    eyebrow: "Partnerships & collaboration",
    title: "Together, let’s give momentum to African development",
    intro:
      "NADI aims to foster synergies between young people, institutions, organisations, researchers, entrepreneurs and partners committed to inclusive development.",
    entries: ["Become a partner", "Join our initiatives", "Contact us"],
  },
  news: {
    eyebrow: "News & perspectives",
    title: "The ideas moving the continent forward",
    ctaAll: "See all publications",
    demoBadge: "Demonstration content",
    metaSuffix: "Coming soon",
    readPreview: "Read the preview",
  },
  articles: [
    {
      category: "Economic development",
      tagId: "economy",
      tag: "Economy",
      title: "Understanding the new drivers of inclusive growth",
      excerpt:
        "An editorial space to decipher African economic dynamics.",
    },
    {
      category: "Youth and leadership",
      tagId: "youth",
      tag: "Youth",
      title: "Young people at the heart of the continent’s transformations",
      excerpt:
        "Perspectives on engagement, initiative and tomorrow’s leadership.",
    },
    {
      category: "Public policy",
      tagId: "policy",
      tag: "Public policy",
      title: "Making dialogue a force for transformation",
      excerpt:
        "Crossed views on participation and the making of inclusive policies.",
    },
  ],
  filters: [
    { id: "all", label: "All" },
    { id: "economy", label: "Economy" },
    { id: "youth", label: "Youth" },
    { id: "policy", label: "Public policy" },
  ],
  newsPage: {
    eyebrow: "News & perspectives",
    title: "A space to understand, share and open the dialogue.",
    intro:
      "This page will host NADI’s analyses, announcements and official publications.",
    demoTitle: "Editorial mock-up",
    demoText:
      "The content below is illustrative and does not constitute official publications.",
    filterLabel: "Filter articles",
  },
  finalCta: {
    eyebrow: "Our shared ambition",
    title: "Africa’s future is built together.",
    text: "Let’s connect ideas, talent and opportunities to accelerate more inclusive development.",
    cta: "Get in touch with NADI",
  },
  footer: {
    tagline: "Accelerating Africa’s Inclusive Development.",
    navLabel: "Navigation",
    joinLabel: "Join us",
    collaborate: "Collaborate with NADI",
    stayLabel: "Stay informed",
    newsletterIntro:
      "Receive an overview of NADI’s analyses and events, once a month.",
    newsletterPlaceholder: "you@email.org",
    newsletterAria: "Email address",
    subscribe: "Subscribe",
    newsletterOk:
      "Thank you — your subscription has been simulated in this mock-up.",
    newsletterError: "Please enter a valid email address.",
    keywords: "Inclusive development · Leadership · Collaboration",
    credit: "Website designed and developed by ATF — LAWSON Prince",
  },
  about: {
    eyebrow: "About NADI",
    title: "An initiative to connect African ambitions.",
    intro:
      "NADI is being built as a platform for reflection, dialogue and connection in service of more inclusive development.",
    reasonEyebrow: "Our purpose",
    reasonTitle: "Creating the conditions for shared transformation",
    p1: "NOVARA AFRICA DEVELOPMENT INITIATIVE carries a simple ambition: to bring together the ideas, people and opportunities that can contribute to the continent’s future.",
    p2: "Its approach favours listening, analysis and cooperation between generations, disciplines and institutions. NADI intends to create spaces where perspectives become collaborations and where collaborations can produce lasting impact.",
    valuesEyebrow: "Proposed values",
    valuesTitle: "The principles guiding our approach",
    valuesIntro:
      "These values express NADI’s current orientation and may be refined with the organisation.",
    values: [
      "Inclusion",
      "Innovation",
      "Leadership",
      "Integrity",
      "Collaboration",
      "Lasting impact",
    ],
  },
  leadershipPage: {
    eyebrow: "Leadership",
    title: "A vision driven by listening, action and impact.",
    intro:
      "Fabrice Komlan Séna VIAGBO embodies a generation of African leaders committed to turning ideas into opportunities.",
    caption: "Fabrice Komlan Séna VIAGBO · Founder of NADI",
    storyEyebrow: "Portrait",
    storyTitle: "Building a platform in service of what is possible",
    p1: "Fabrice Komlan Séna VIAGBO is a young visionary leader deeply committed to Africa’s development. His interests focus in particular on economic analysis, public policy dialogue and youth empowerment.",
    p2: "Through NADI, he is building a platform designed to connect ideas, people and opportunities in order to contribute to the transformation of the African continent.",
    quote:
      "Inclusive development begins when every voice can help shape the future.",
    quoteSmall: "— Editorial wording for the mock-up",
    cta: "Talk with NADI",
  },
  actionsPage: {
    eyebrow: "Our focus areas",
    title: "Three levers to advance ideas and action.",
    intro:
      "Fields of reflection and collaboration designed to respond to the continent’s economic and social transformations.",
    axisLabel: "Strategic pillar",
    extra:
      "The envisaged approach combines monitoring, exchanges of perspectives and connecting the actors concerned. Formats and collaborations will be developed with NADI’s partners.",
    cta: "Explore a collaboration",
  },
  contactPage: {
    eyebrow: "Get in touch",
    title: "Great transformations begin with a conversation.",
    intro:
      "Let’s talk about partnership, participation and collaboration opportunities in favour of inclusive development.",
    writeEyebrow: "Write to us",
    writeTitle: "Let’s build lasting synergies.",
    writeText:
      "Find NADI’s official contact details below to get in touch with us.",
    emailLabel: "Email",
    phoneLabel: "Phone",
    socialLabel: "Social media",
    socialValue: "To be confirmed",
    form: {
      name: "Full name *",
      namePlaceholder: "Your name",
      email: "Email address *",
      emailPlaceholder: "you@organisation.org",
      organisation: "Organisation",
      organisationPlaceholder: "Your organisation’s name",
      subject: "Subject",
      message: "Message *",
      messagePlaceholder: "Tell us about your project or request…",
      subjects: [
        { value: "partenariat", label: "Partnership" },
        { value: "collaboration", label: "Collaboration" },
        { value: "participation", label: "Participation" },
        { value: "general", label: "General enquiry" },
      ],
      error: "Please provide your name, email and message.",
      success:
        "Thank you. Your request has been simulated in this mock-up.",
      submit: "Send the message",
      submitting: "Sending…",
    },
  },
  faq: {
    eyebrow: "Frequently asked questions",
    title: "What is useful to know.",
    entries: [
      {
        q: "How can I collaborate with NADI?",
        a: "Write to us via the contact form, specifying your organisation and your field of interest. We review every partnership, participation or co-construction proposal.",
      },
      {
        q: "Does NADI already publish analyses?",
        a: "The “News & perspectives” section is an editorial mock-up. Official publications, announcements and reports will be added as soon as the organisation becomes active.",
      },
      {
        q: "Which fields does NADI cover?",
        a: "Three main areas: economic analysis, public policy dialogue and youth empowerment.",
      },
      {
        q: "Can I propose an idea or an initiative format?",
        a: "Yes. NADI aims to foster synergies between young people, institutions, researchers, entrepreneurs and partners. Submit your idea via the contact form.",
      },
    ],
  },
  realisation: {
    eyebrow: "Design & development",
    title: "A website designed and developed by ATF.",
    intro:
      "The editorial design, the visual identity and the development of this platform were carried out by ATF, the digital agency in charge of NADI’s online presence.",
    name: "LAWSON Prince",
    role: "Technical Director & Digital Development · ATF",
    note: "From the first sketch to going live, every detail was designed to reflect NADI’s pan-African ambition.",
    imageAlt: "LAWSON Prince, technical director at ATF, developer of the NADI website",
  },
  intro: { skip: "Enter the website" },
  misc: {
    backToTop: "Back to top",
    langLabel: "Language",
    offline: "Discover",
  },
}

const es: Content = {
  nav: {
    home: "Inicio",
    about: "Acerca de",
    actions: "Nuestros ejes de acción",
    leadership: "Nuestra visión",
    portfolio: "Portafolio",
    news: "Actualidad",
    contact: "Contacto",
  },
  header: { collaborate: "Colaborar con NADI" },
  brand: { line1: "Novara Africa", line2: "Development Initiative" },
  hero: {
    eyebrow: "Novara Africa Development Initiative",
    titleBefore: "Acelerar el desarrollo ",
    titleEm: "inclusivo",
    titleAfter: " de África.",
    intro:
      "Conectamos ideas, personas y oportunidades para contribuir a una África más inclusiva, innovadora y próspera.",
    primary: "Descubrir nuestra visión",
    secondary: "Unirse a la iniciativa",
    noteLeft: "Una iniciativa panafricana",
    noteRight: "Fundada por Fabrice Komlan Séna VIAGBO",
    imageAlt:
      "Jóvenes profesionales africanos reunidos en torno a sus ordenadores",
    quote: "Transformar las ideas en oportunidades duraderas.",
    cue: "Descubrir",
  },
  mission: {
    eyebrow: "Nuestra misión",
    title: "Una visión ambiciosa para África",
    text: "NOVARA AFRICA DEVELOPMENT INITIATIVE es una iniciativa orientada a promover un desarrollo africano inclusivo. Pretende favorecer el intercambio de ideas, el compromiso de los jóvenes y las dinámicas de colaboración capaces de contribuir a la transformación del continente.",
  },
  pillars: [
    {
      number: "01",
      title: "Desarrollo económico",
      text: "Comprender mejor las dinámicas que configuran las economías africanas.",
    },
    {
      number: "02",
      title: "Liderazgo juvenil",
      text: "Hacer emerger las voces, los talentos y las ambiciones de una nueva generación.",
    },
    {
      number: "03",
      title: "Políticas públicas",
      text: "Alimentar un diálogo constructivo al servicio de decisiones más inclusivas.",
    },
  ],
  approach: {
    eyebrow: "Nuestro método",
    title: "Un enfoque en cuatro movimientos.",
    intro:
      "Una forma de trabajar serena, exigente y orientada al impacto: escuchar antes de pensar, pensar antes de actuar.",
    seal: "NADI",
    steps: [
      {
        index: "01",
        title: "Escuchar",
        text: "Comprender las realidades, expectativas y ambiciones de los actores comprometidos con el desarrollo de África.",
      },
      {
        index: "02",
        title: "Analizar",
        text: "Producir perspectivas claras y honestas sobre los retos económicos y sociales del continente.",
      },
      {
        index: "03",
        title: "Conectar",
        text: "Acercar las ideas, los talentos, las instituciones y las oportunidades que pueden hacer avanzar los proyectos.",
      },
      {
        index: "04",
        title: "Actuar",
        text: "Transformar los diagnósticos y los encuentros en iniciativas útiles, duraderas e inclusivas.",
      },
    ],
  },
  leader: {
    eyebrow: "El liderazgo",
    title: "Un liderazgo orientado al futuro de África",
    p1: "Fabrice Komlan Séna VIAGBO es un joven líder visionario profundamente comprometido con el desarrollo de África.",
    p2: "Sus intereses se centran en particular en el análisis económico, el diálogo sobre las políticas públicas y el empoderamiento de los jóvenes.",
    p3: "Representa a una nueva generación de líderes africanos decididamente orientada a la acción, la innovación y el impacto.",
    cta: "Descubrir nuestro compromiso",
    name: "Fabrice Komlan Séna VIAGBO",
    role: "Fundador · NADI",
    imageAlt:
      "Retrato de Fabrice Komlan Séna VIAGBO, fundador de NADI",
  },
  ticker: [
    "Análisis económico",
    "Diálogo sobre políticas públicas",
    "Empoderamiento juvenil",
    "Liderazgo",
    "Inclusión",
    "Innovación",
    "Colaboración",
    "Impacto duradero",
  ],
  activities: {
    eyebrow: "Nuestras actividades",
    previous: "Actividad anterior",
    next: "Actividad siguiente",
    items: [
      {
        kicker: "Reflexión colectiva",
        title: "Talleres de ideas e innovación",
        text: "Formatos participativos para cruzar experiencias, hacer emerger perspectivas y convertir los diagnósticos en líneas de acción.",
      },
      {
        kicker: "Diálogo",
        title: "Encuentros y conversaciones públicas",
        text: "Espacios exigentes y accesibles para acercar a los responsables de decisiones, investigadores, emprendedores y jóvenes.",
      },
      {
        kicker: "Transmisión",
        title: "Liderazgo y desarrollo de competencias",
        text: "Experiencias pensadas para reforzar la confianza, la capacidad de iniciativa y el poder de actuar de los jóvenes talentos.",
      },
      {
        kicker: "Alcance",
        title: "Foros y citas panafricanas",
        text: "Momentos clave para compartir conocimientos y abrir nuevas posibilidades de colaboración en todo el continente.",
      },
    ],
  },
  actionsPreview: {
    eyebrow: "Nuestros ejes de acción",
    title: "Pensar. Conectar. Actuar.",
    cta: "Explorar todos nuestros ejes",
  },
  actionAreas: [
    {
      number: "I",
      title: "Análisis económico",
      text: "Fomentar la reflexión, el análisis y la comprensión de los retos económicos que influyen en el desarrollo de África.",
    },
    {
      number: "II",
      title: "Diálogo sobre las políticas públicas",
      text: "Promover los intercambios constructivos, las ideas y la participación en las reflexiones sobre las políticas públicas.",
    },
    {
      number: "III",
      title: "Empoderamiento de los jóvenes",
      text: "Valorar el potencial de los jóvenes, su liderazgo y su contribución a las transformaciones económicas y sociales.",
    },
  ],
  vision: {
    eyebrow: "Nuestra visión para África",
    title: "Una África donde cada potencial cuenta.",
    text: "Creemos en una África capaz de transformar sus ideas, sus talentos y sus recursos en oportunidades duraderas para todos.",
    cta: "Construyamos juntos",
    quoteLine1: "Accelerating Africa’s",
    quoteLine2: "Inclusive Development.",
  },
  portfolioPreview: {
    eyebrow: "Portafolio de iniciativas",
    title: "Ideas concebidas para convertirse en espacios de impacto.",
    text: "Descubra los formatos que NADI prevé para analizar, reunir e impulsar las ambiciones del continente.",
    cta: "Explorar el portafolio",
  },
  portfolioItems: [
    {
      number: "01",
      category: "Economía e innovación",
      title: "Observatorio de las oportunidades africanas",
      text: "Un concepto de vigilancia y análisis para hacer más legibles las dinámicas económicas.",
    },
    {
      number: "02",
      category: "Juventud y liderazgo",
      title: "NADI Next Generation Forum",
      text: "Un formato previsto para conectar a los jóvenes talentos con las ideas, herramientas y redes que aceleran su impacto.",
    },
    {
      number: "03",
      category: "Políticas públicas",
      title: "Conversaciones para África",
      text: "Una serie editorial y de eventos imaginada para alimentar un diálogo constructivo y plural.",
    },
  ],
  portfolioPage: {
    eyebrow: "Portafolio de iniciativas",
    title: "Imaginar hoy las plataformas de impacto del mañana.",
    intro:
      "Una selección de conceptos y formatos previstos para dar cuerpo a la misión de NADI. Ninguno de estos proyectos se presenta como ya realizado.",
    noticeLabel: "Portafolio prospectivo",
    noticeText:
      "Estas propuestas constituyen una dirección de trabajo y podrán evolucionar con los socios, los públicos implicados y las prioridades de la organización.",
    statusLabel: "Estado",
    statusValue: "Concepto por desarrollar",
    cta: "Construir esta iniciativa con NADI",
  },
  partnerships: {
    eyebrow: "Alianzas y colaboración",
    title: "Juntos, demos impulso al desarrollo africano",
    intro:
      "NADI desea favorecer las sinergias entre los jóvenes, las instituciones, las organizaciones, los investigadores, los emprendedores y los socios comprometidos con el desarrollo inclusivo.",
    entries: ["Ser socio", "Participar en nuestras iniciativas", "Contactarnos"],
  },
  news: {
    eyebrow: "Actualidad y perspectivas",
    title: "Las ideas que hacen avanzar al continente",
    ctaAll: "Ver todas las publicaciones",
    demoBadge: "Contenido de demostración",
    metaSuffix: "Próximamente",
    readPreview: "Leer el avance",
  },
  articles: [
    {
      category: "Desarrollo económico",
      tagId: "economy",
      tag: "Economía",
      title: "Comprender los nuevos motores del crecimiento inclusivo",
      excerpt:
        "Un espacio editorial para descifrar las dinámicas económicas africanas.",
    },
    {
      category: "Juventud y liderazgo",
      tagId: "youth",
      tag: "Juventud",
      title: "La juventud en el corazón de las transformaciones del continente",
      excerpt:
        "Perspectivas sobre el compromiso, la iniciativa y el liderazgo del mañana.",
    },
    {
      category: "Políticas públicas",
      tagId: "policy",
      tag: "Políticas públicas",
      title: "Hacer del diálogo una fuerza de transformación",
      excerpt:
        "Miradas cruzadas sobre la participación y la elaboración de políticas inclusivas.",
    },
  ],
  filters: [
    { id: "all", label: "Todos" },
    { id: "economy", label: "Economía" },
    { id: "youth", label: "Juventud" },
    { id: "policy", label: "Políticas públicas" },
  ],
  newsPage: {
    eyebrow: "Actualidad y perspectivas",
    title: "Un espacio para comprender, compartir y abrir el diálogo.",
    intro:
      "Esta página acogerá los análisis, anuncios y publicaciones oficiales de NADI.",
    demoTitle: "Maqueta editorial",
    demoText:
      "Los contenidos siguientes son ejemplos y no constituyen publicaciones oficiales.",
    filterLabel: "Filtrar los artículos",
  },
  finalCta: {
    eyebrow: "Nuestra ambición común",
    title: "El futuro de África se construye juntos.",
    text: "Conectemos las ideas, los talentos y las oportunidades para acelerar un desarrollo más inclusivo.",
    cta: "Contactar con NADI",
  },
  footer: {
    tagline: "Accelerating Africa’s Inclusive Development.",
    navLabel: "Navegación",
    joinLabel: "Unirse a nosotros",
    collaborate: "Colaborar con NADI",
    stayLabel: "Manténgase informado",
    newsletterIntro:
      "Reciba un resumen de los análisis y citas de NADI, una vez al mes.",
    newsletterPlaceholder: "usted@email.org",
    newsletterAria: "Dirección de correo electrónico",
    subscribe: "Suscribirse",
    newsletterOk:
      "Gracias — su suscripción ha sido simulada en esta maqueta.",
    newsletterError: "Introduzca una dirección de correo válida.",
    keywords: "Desarrollo inclusivo · Liderazgo · Colaboración",
    credit: "Sitio concebido y desarrollado por ATF — LAWSON Prince",
  },
  about: {
    eyebrow: "Acerca de NADI",
    title: "Una iniciativa para conectar las ambiciones africanas.",
    intro:
      "NADI se construye como una plataforma de reflexión, diálogo y conexión al servicio de un desarrollo más inclusivo.",
    reasonEyebrow: "Nuestra razón de ser",
    reasonTitle: "Crear las condiciones de una transformación compartida",
    p1: "NOVARA AFRICA DEVELOPMENT INITIATIVE tiene una ambición sencilla: acercar las ideas, las personas y las oportunidades que pueden contribuir al futuro del continente.",
    p2: "Su enfoque privilegia la escucha, el análisis y la cooperación entre generaciones, disciplinas e instituciones. NADI pretende crear espacios donde las perspectivas se conviertan en colaboraciones y donde las colaboraciones puedan producir un impacto duradero.",
    valuesEyebrow: "Valores propuestos",
    valuesTitle: "Los principios que orientan nuestro enfoque",
    valuesIntro:
      "Estos valores expresan la orientación actual de NADI y podrán precisarse con la organización.",
    values: [
      "Inclusión",
      "Innovación",
      "Liderazgo",
      "Integridad",
      "Colaboración",
      "Impacto duradero",
    ],
  },
  leadershipPage: {
    eyebrow: "El liderazgo",
    title: "Una visión impulsada por la escucha, la acción y el impacto.",
    intro:
      "Fabrice Komlan Séna VIAGBO encarna a una generación de líderes africanos comprometida con transformar las ideas en oportunidades.",
    caption: "Fabrice Komlan Séna VIAGBO · Fundador de NADI",
    storyEyebrow: "Retrato",
    storyTitle: "Construir una plataforma al servicio de lo posible",
    p1: "Fabrice Komlan Séna VIAGBO es un joven líder visionario profundamente comprometido con el desarrollo de África. Sus intereses se centran en particular en el análisis económico, el diálogo sobre las políticas públicas y el empoderamiento de los jóvenes.",
    p2: "A través de NADI, construye una plataforma destinada a conectar las ideas, las personas y las oportunidades para contribuir a la transformación del continente africano.",
    quote:
      "El desarrollo inclusivo comienza cuando cada voz puede contribuir a dibujar el futuro.",
    quoteSmall: "— Formulación editorial para la maqueta",
    cta: "Hablar con NADI",
  },
  actionsPage: {
    eyebrow: "Nuestros ejes de acción",
    title: "Tres palancas para hacer avanzar las ideas y la acción.",
    intro:
      "Campos de reflexión y colaboración pensados para responder a las transformaciones económicas y sociales del continente.",
    axisLabel: "Eje estratégico",
    extra:
      "El enfoque previsto combina la vigilancia, el intercambio de perspectivas y la conexión de los actores implicados. Los formatos y las colaboraciones se desarrollarán con los socios de NADI.",
    cta: "Explorar una colaboración",
  },
  contactPage: {
    eyebrow: "Ponerse en contacto",
    title: "Las grandes transformaciones comienzan con una conversación.",
    intro:
      "Hablemos de alianzas, participación y oportunidades de colaboración en favor del desarrollo inclusivo.",
    writeEyebrow: "Escríbanos",
    writeTitle: "Construyamos sinergias duraderas.",
    writeText:
      "Encuentre a continuación los datos de contacto oficiales de NADI para comunicarse con nosotros.",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    socialLabel: "Redes sociales",
    socialValue: "Por confirmar",
    form: {
      name: "Nombre completo *",
      namePlaceholder: "Su nombre",
      email: "Correo electrónico *",
      emailPlaceholder: "usted@organizacion.org",
      organisation: "Organización",
      organisationPlaceholder: "Nombre de su organización",
      subject: "Asunto",
      message: "Mensaje *",
      messagePlaceholder: "Cuéntenos su proyecto o su solicitud…",
      subjects: [
        { value: "partenariat", label: "Alianza" },
        { value: "collaboration", label: "Colaboración" },
        { value: "participation", label: "Participación" },
        { value: "general", label: "Consulta general" },
      ],
      error: "Indique su nombre, su correo y su mensaje.",
      success:
        "Gracias. Su solicitud ha sido simulada en esta maqueta.",
      submit: "Enviar el mensaje",
      submitting: "Enviando…",
    },
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Lo que es útil saber.",
    entries: [
      {
        q: "¿Cómo colaborar con NADI?",
        a: "Escríbanos a través del formulario de contacto precisando su organización y su ámbito de interés. Estudiamos cada propuesta de alianza, participación o coconstrucción.",
      },
      {
        q: "¿NADI ya publica análisis?",
        a: "El espacio «Actualidad y perspectivas» es una maqueta editorial. Las publicaciones oficiales, anuncios e informes se integrarán en cuanto la organización entre en actividad.",
      },
      {
        q: "¿Qué ámbitos cubre NADI?",
        a: "Tres ejes principales: el análisis económico, el diálogo sobre las políticas públicas y el empoderamiento de los jóvenes.",
      },
      {
        q: "¿Puedo proponer una idea o un formato de iniciativa?",
        a: "Sí. NADI desea favorecer las sinergias entre los jóvenes, las instituciones, los investigadores, los emprendedores y los socios. Presente su idea a través del formulario de contacto.",
      },
    ],
  },
  realisation: {
    eyebrow: "Concepción y realización",
    title: "Un sitio pensado y desarrollado por ATF.",
    intro:
      "La concepción editorial, el diseño y el desarrollo de esta plataforma han sido realizados por ATF, la agencia digital encargada de la presencia en línea de NADI.",
    name: "LAWSON Prince",
    role: "Director técnico y de Desarrollo digital · ATF",
    note: "Desde el primer boceto hasta la publicación, cada detalle ha sido pensado para reflejar la ambición panafricana de NADI.",
    imageAlt: "LAWSON Prince, director técnico de ATF, desarrollador del sitio NADI",
  },
  intro: { skip: "Entrar en el sitio" },
  misc: {
    backToTop: "Volver arriba",
    langLabel: "Idioma",
    offline: "Descubrir",
  },
}

const ee: Content = {
  nav: {
    home: "Aƒeme",
    about: "Mía ŋuti",
    actions: "Mía dɔwɔƒewo",
    leadership: "Mía ŋkuɖodzinu",
    portfolio: "Dɔwɔwɔwo",
    news: "Nyadzɔdzɔwo",
    contact: "Kaƒoƒo",
  },
  header: { collaborate: "Wɔ ɖeka kple NADI" },
  brand: { line1: "Novara Africa", line2: "Development Initiative" },
  hero: {
    eyebrow: "Novara Africa Development Initiative",
    titleBefore: "Na Afrika ƒe ",
    titleEm: "tsitsim",
    titleAfter: " nafɔ.",
    intro:
      "Míekplaa susuwo, amewo kple goyiyiwo ɖekae bene Afrika nanye dukɔ si me amewo katã le, si le yeyee wɔm eye wòle dzidzɔm.",
    primary: "Kpɔ mía ŋkuɖodzinu",
    secondary: "Va kpe ɖe mía ŋu",
    noteLeft: "Afrika Katã ƒe dɔwɔwɔ",
    noteRight: "Fabrice Komlan Séna VIAGBO ye ɖe eteƒe",
    imageAlt: "Afrika ɖekakpuiwo le woƒe kɔmpiutawo gbɔ",
    quote: "Trɔ susuwo wɔ dɔ siwo anɔ anyi ɖaa.",
    cue: "Kpɔ ɖe edzi",
  },
  mission: {
    eyebrow: "Mía dɔ",
    title: "Ɖoɖokui si sɔ na Afrika",
    text: "NOVARA AFRICA DEVELOPMENT INITIATIVE nye dɔwɔwɔ si kpɔa Afrika ƒe tsitsim si me amewo katã le ɖe ŋgɔ. Eti be yeana susuwo ƒe tsɔtsɔ, ɖekakpuwo ƒe wɔwɔ ɖekae kple dɔwɔɖekae siwo ate ŋu aɖe vi na dukɔa ƒe trɔtrɔ.",
  },
  pillars: [
    {
      number: "01",
      title: "Ganyawo ƒe ŋgɔyiyi",
      text: "Nɔnɔme siwo le Afrika ƒe ganyawo wɔwɔm la gɔmeɖeɖe nyuie.",
    },
    {
      number: "02",
      title: "Ɖekakpuwo ƒe dzixɔse",
      text: "Na gbe, dɔ kple ɖoɖoɖomakpɔmakpɔ siwo le dzidzime yeye la ƒe ya name.",
    },
    {
      number: "03",
      title: "Dukɔ ƒe ɖoɖowo",
      text: "Wɔ numeku numeku si sɔ ɖe ɖoɖo siwo me amewo katã le ŋu.",
    },
  ],
  approach: {
    eyebrow: "Mía mɔnu",
    title: "Mɔnu ene siwo dzi mía zɔna.",
    intro:
      "Mɔ si dzi míezɔna le bɔbɔe, si bia dzadzɛ eye wòkpɔa vi: ƒo to ɖe nya ŋu do ŋgɔ na susu, nɔ susu ŋu do ŋgɔ na dɔwɔwɔ.",
    seal: "NADI",
    steps: [
      {
        index: "01",
        title: "Ƒo to",
        text: "Se nɔnɔme, mɔkpɔkpɔ kple ɖoɖoɖomakpɔmakpɔ siwo ame siwo le dɔ wɔm ɖe Afrika ƒe ŋgɔyiyi ŋu la tɔ.",
      },
      {
        index: "02",
        title: "Dzro nya",
        text: "Dze nukpɔkpɔ siwo nɔa te kple nuteƒewɔwɔ ɖe dukɔa ƒe ganyawo kple xɔlɔ̃me nyawo ŋu.",
      },
      {
        index: "03",
        title: "Kplɔ ɖekae",
        text: "Dɔ susuwo, dɔwɔlawo, dɔwɔƒewo kple goyiyi siwo ate ŋu ayi dɔa ɖe ŋgɔ la ɖo ɖekae.",
      },
      {
        index: "04",
        title: "Wɔ dɔ",
        text: "Trɔ nu siwo nèkpɔ kple ame siwo nèdo go la wɔ dɔ siwo nyea vi, nɔa anyi ɖaa eye amewo katã kpɔa.",
      },
    ],
  },
  leader: {
    eyebrow: "Dzixɔse",
    title: "Dzixɔse si kpɔ Afrika ƒe etsɔ me",
    p1: "Fabrice Komlan Séna VIAGBO nye ɖekakpui si kpɔa ŋgɔ eye wòdi Afrika ƒe ŋgɔyiyi vevie.",
    p2: "Eƒe susu le vevie ɖe ganyawo ƒe dzrowɔwɔ, dukɔ ƒe ɖoɖowo dzi nuƒoƒo kple ɖekakpuwo ƒe ŋusẽ ŋu.",
    p3: "Edzɔa dzidzime yeye ƒe Afrika dzixɔselawo ƒe nɔnɔme si wɔa dɔ, le yeyee wɔm eye wòkpɔa vi.",
    cta: "Kpɔ mía ƒe dɔwɔwɔ",
    name: "Fabrice Komlan Séna VIAGBO",
    role: "Eteƒeɖɔla · NADI",
    imageAlt: "Fabrice Komlan Séna VIAGBO ƒe nɔnɔmetata, NADI ƒe eteƒeɖɔla",
  },
  ticker: [
    "Ganyawo ƒe dzrowɔwɔ",
    "Dukɔ ƒe ɖoɖowo dzi nuƒoƒo",
    "Ɖekakpuwo ƒe ŋusẽ",
    "Dzixɔse",
    "Ame katã ƒe nyɔnyɔ",
    "Yeyedɔwɔwɔ",
    "Dɔwɔɖekae",
    "Viwɔwɔ si nɔa anyi ɖaa",
  ],
  activities: {
    eyebrow: "Mía dɔwɔwɔwo",
    previous: "Dɔ si do ŋgɔ",
    next: "Dɔ si gbɔna",
    items: [
      {
        kicker: "Susuɖekae",
        title: "Susu kple yeyedɔwɔwɔ ƒe dɔƒe",
        text: "Dɔwɔɖekae ƒe mɔnu siwo kplaa nusɔsrɔ̃ ɖekae, ɖea nukpɔkpɔ yeyewo ɖe go eye wòtrɔa nyawo wɔa dɔwɔwɔ ƒe mɔ.",
      },
      {
        kicker: "Nuƒoƒo",
        title: "Dɔwɔƒe kple nuƒoƒo le gaglɔƒe",
        text: "Dɔwɔƒe siwo bia dɔ eye woawɔ bɔbɔe na ɖoɖowɔlawo, numekukulawo, asitsalawo kple ɖekakpuwo.",
      },
      {
        kicker: "Nutsɔtsɔ",
        title: "Dzixɔse kple nunya ƒe dzidzi",
        text: "Dɔwɔwɔ siwo wɔ ɖe ɖoɖo be woade dzixɔse, dɔwɔwɔ ƒe ŋusẽ kple ɖekakpuwo ƒe ŋusẽ ɖe dɔ ŋu.",
      },
      {
        kicker: "Koklo",
        title: "Afrika katã ƒe dɔwɔƒe kple kpekpe",
        text: "Ɣeyiɣi veviwo be míema nunya eye míeʋu mɔ yeyewo na dɔwɔɖekae le dukɔa katã me.",
      },
    ],
  },
  actionsPreview: {
    eyebrow: "Mía dɔwɔƒewo",
    title: "Nɔ susu ŋu. Kplɔ ɖekae. Wɔ dɔ.",
    cta: "Kpɔ mía dɔwɔƒewo katã",
  },
  actionAreas: [
    {
      number: "I",
      title: "Ganyawo ƒe dzrowɔwɔ",
      text: "Ɖo gbe ɖe susu, dzrowɔwɔ kple gɔmeɖeɖe ɖe ganyawo ƒe nya siwo le Afrika ƒe ŋgɔyiyi ŋu la ŋu.",
    },
    {
      number: "II",
      title: "Dukɔ ƒe ɖoɖowo dzi nuƒoƒo",
      text: "De dɔwɔwɔ, susu kple kpekpeɖeŋu ɖe nuƒoƒo le dukɔ ƒe ɖoɖowo ŋu la ɖe ŋgɔ.",
    },
    {
      number: "III",
      title: "Ɖekakpuwo ƒe ŋusẽ",
      text: "De ŋgɔ na ɖekakpuwo ƒe ŋusẽ, woƒe dzixɔse kple woƒe kpekpeɖeŋu ɖe ganyawo kple xɔlɔ̃me ƒe trɔtrɔ ŋu.",
    },
  ],
  vision: {
    eyebrow: "Mía ŋkuɖodzinu na Afrika",
    title: "Afrika si me ŋusẽ ɖe sia ɖe xɔa nɔƒe.",
    text: "Míexɔ sea be Afrika ate ŋu atrɔ eƒe susuwo, dɔwɔlawo kple nunu siwo le eme wɔ goyiyi siwo nɔa anyi ɖaa na amewo katã.",
    cta: "Mi wɔ ɖekae",
    quoteLine1: "Accelerating Africa’s",
    quoteLine2: "Inclusive Development.",
  },
  portfolioPreview: {
    eyebrow: "Dɔwɔwɔ ƒe kotoku",
    title: "Susu siwo wowɔ be woava zu nɔƒe siwo kpɔa vi.",
    text: "Kpɔ mɔnu siwo NADI ɖo ɖi be yeawɔ dzrowɔwɔ, akplɔ ɖekae eye wòana dukɔa ƒe ɖoɖoɖomakpɔmakpɔwo ayi ŋgɔ.",
    cta: "Kpɔ dɔwɔwɔ ƒe kotoku",
  },
  portfolioItems: [
    {
      number: "01",
      category: "Ganyawo kple yeyedɔwɔwɔ",
      title: "Afrika ƒe goyiyiwo ƒe kpɔƒe",
      text: "Nukpɔkpɔ kple dzrowɔwɔ ƒe susu be ganyawo ƒe nɔnɔme nanya bɔbɔe.",
    },
    {
      number: "02",
      category: "Ɖekakpuwo kple dzixɔse",
      title: "NADI Next Generation Forum",
      text: "Mɔnu si woɖo ɖi be yeakplɔ ɖekakpu dɔwɔlawo kple susuwo, dɔwɔnuwo kple kadodo siwo dzi woƒe viwɔwɔ zɔa kabakaba la ɖo ɖekae.",
    },
    {
      number: "03",
      category: "Dukɔ ƒe ɖoɖowo",
      title: "Nuƒoƒo na Afrika",
      text: "Nuŋlɔɖi kple kpekpe ƒe kekea si wowɔ ɖe ɖoɖo be yeana numeku numeku si sɔ eye ame geɖe katã ƒe susu le eme la.",
    },
  ],
  portfolioPage: {
    eyebrow: "Dɔwɔwɔ ƒe kotoku",
    title: "Mi do ŋugbe etsɔme ƒe viwɔwɔ ƒe nɔƒewo egbe.",
    intro:
      "Susu kple mɔnu siwo woɖo ɖi be woana NADI ƒe dɔ ƒe ŋutilã. Ðeke ɖe le dɔ siawo ŋu be wowɔ wo vɔ o.",
    noticeLabel: "Kotoku si gbɔna",
    noticeText:
      "Ndɔɖɔ siawo nye dɔwɔwɔ ƒe mɔ ɖeka eye wɔate ŋu atrɔ kple hadɔwɔlawo, ame siwo wòkan la kple dɔwɔƒea ƒe ɖoɖo gbãtɔwo.",
    statusLabel: "Nɔnɔme",
    statusValue: "Susu si wòawɔ",
    cta: "Wɔ dɔ sia kple NADI",
  },
  partnerships: {
    eyebrow: "Hadɔwɔwɔ kple dɔwɔɖekae",
    title: "Mi katã, mi na Afrika ƒe ŋgɔyiyi ƒe ŋusẽ",
    intro:
      "NADI di be yeana dɔwɔɖekae le ɖekakpuwo, dɔwɔƒewo, hawo, numekukulawo, asitsalawo kple hadɔwɔla siwo lɔ̃ Afrika ƒe ŋgɔyiyi la dome.",
    entries: ["Zu hadɔwɔla", "Va kpe ɖe mía dɔwɔwɔwo ŋu", "Kaƒo kple mí"],
  },
  news: {
    eyebrow: "Nyadzɔdzɔwo kple nukpɔkpɔwo",
    title: "Susu siwo naa dukɔa yi ŋgɔ",
    ctaAll: "Kpɔ nuŋlɔɖiwo katã",
    demoBadge: "Nunyaɖeɖe ƒe nuŋlɔɖi",
    metaSuffix: "Gbɔna",
    readPreview: "Xlẽ eƒe gɔmedzedze",
  },
  articles: [
    {
      category: "Ganyawo ƒe ŋgɔyiyi",
      tagId: "economy",
      tag: "Ganyawo",
      title: "Nɔnɔme yeye siwo gbɔna kple ganyawo ƒe tsitsim la gɔmeɖeɖe",
      excerpt:
        "Nuŋlɔɖi ƒe nɔƒe be woagɔme ɖe Afrika ƒe ganyawo ƒe nɔnɔme.",
    },
    {
      category: "Ɖekakpuwo kple dzixɔse",
      tagId: "youth",
      tag: "Ɖekakpuwo",
      title: "Ɖekakpuwo le dukɔa ƒe trɔtrɔ ƒe titina",
      excerpt:
        "Nukpɔkpɔ ɖe dɔwɔwɔ, mɔɖoɖo kple etsɔme dzixɔse ŋu.",
    },
    {
      category: "Dukɔ ƒe ɖoɖowo",
      tagId: "policy",
      tag: "Dukɔ ƒe ɖoɖowo",
      title: "Wɔ nuƒoƒo wòzu trɔtrɔ ƒe ŋusẽ",
      excerpt:
        "Nukpɔkpɔ ɖe kpekpeɖeŋu kple ɖoɖo siwo me amewo katã le wɔwɔ ŋu.",
    },
  ],
  filters: [
    { id: "all", label: "Katã" },
    { id: "economy", label: "Ganyawo" },
    { id: "youth", label: "Ɖekakpuwo" },
    { id: "policy", label: "Dukɔ ƒe ɖoɖowo" },
  ],
  newsPage: {
    eyebrow: "Nyadzɔdzɔwo kple nukpɔkpɔwo",
    title: "Nɔƒe be wòase nya, wòama nya eye wòaʋu nuƒoƒo.",
    intro:
      "Ƒe sia axɔ NADI ƒe dzrowɔwɔwo, gbeɖeɖewo kple nuŋlɔɖi siwo tso dɔwɔƒea.",
    demoTitle: "Nuŋlɔɖi ƒe kpɔɖeŋu",
    demoText:
      "Nu siwo le ete la nye kpɔɖeŋuɖeɖe eye womanye dɔwɔƒea ƒe nuŋlɔɖi tututu o.",
    filterLabel: "Tia nuŋlɔɖiwo",
  },
  finalCta: {
    eyebrow: "Mía katã ƒe ɖoɖoɖomakpɔmakpɔ",
    title: "Wɔa Afrika ƒe etsɔme ɖekae.",
    text: "Mi kplɔ susuwo, dɔwɔlawo kple goyiyiwo ɖekae be Afrika ƒe ŋgɔyiyi nayi kabakaba.",
    cta: "Kaƒo kple NADI",
  },
  footer: {
    tagline: "Accelerating Africa’s Inclusive Development.",
    navLabel: "Mɔzɔzɔ",
    joinLabel: "Va kpe ɖe mía ŋu",
    collaborate: "Wɔ ɖeka kple NADI",
    stayLabel: "Nɔ nya ŋu",
    newsletterIntro:
      "Xɔ NADI ƒe dzrowɔwɔwo kple kpekpewo ƒe nukpɔkpɔ, ɣleti ɖeka ɖeka.",
    newsletterPlaceholder: "wò@email.org",
    newsletterAria: "E-mail adrɛs",
    subscribe: "Ŋlɔ wò ŋkɔ",
    newsletterOk:
      "Akpe — wɔwɔ wò ŋkɔla le kpɔɖeŋu sia me ko.",
    newsletterError: "Ŋlɔ e-mail adrɛs si sɔ.",
    keywords: "Ŋgɔyiyi si me amewo katã le · Dzixɔse · Dɔwɔɖekae",
    credit: "ATF ye wɔ site sia — LAWSON Prince",
  },
  about: {
    eyebrow: "NADI ŋuti",
    title: "Dɔwɔwɔ be yeakplɔ Afrika ƒe ɖoɖoɖomakpɔmakpɔwo ɖo ɖekae.",
    intro:
      "Wole NADI tum be wòazu susuɖoɖo, nuƒoƒo kple kadodo ƒe nɔƒe na ŋgɔyiyi si me amewo katã le.",
    reasonEyebrow: "Mía ƒe susu",
    reasonTitle: "Wɔ nɔnɔme na trɔtrɔ si míekpɔ ɖekae",
    p1: "NOVARA AFRICA DEVELOPMENT INITIATIVE kpɔa ɖoɖoɖomakpɔmakpɔ ɖeka: be yeakplɔ susuwo, amewo kple goyiyi siwo ate ŋu anɔ dukɔa ƒe etsɔme ŋu la ɖo ɖekae.",
    p2: "Eƒe mɔnu dea ŋgɔ na toɖoɖo, dzrowɔwɔ kple dɔwɔɖekae le dzidzimewo, nunyawo kple dɔwɔƒewo dome. NADI di be yeawɔ nɔƒe siwo me nukpɔkpɔwo ava zu dɔwɔɖekae eye dɔwɔɖekae ana vi si nɔa anyi ɖaa.",
    valuesEyebrow: "Ŋusẽ siwo wodo",
    valuesTitle: "Ƒoɖoɖo siwo kplɔa mía mɔ",
    valuesIntro:
      "Ŋusẽ siawo ɖea NADI ƒe mɔfiafia fifia fia eye wɔate ŋu anya bɔbɔe kple dɔwɔƒea.",
    values: [
      "Ame katã ƒe nyɔnyɔ",
      "Yeyedɔwɔwɔ",
      "Dzixɔse",
      "Nuteƒewɔwɔ",
      "Dɔwɔɖekae",
      "Viwɔwɔ si nɔa anyi ɖaa",
    ],
  },
  leadershipPage: {
    eyebrow: "Dzixɔse",
    title: "Nukpɔkpɔ si toɖoɖo, dɔwɔwɔ kple viwɔwɔ kplɔ.",
    intro:
      "Fabrice Komlan Séna VIAGBO dzɔa Afrika dzixɔselawo ƒe dzidzime si wɔa dɔ be woatsɔ susuwo awɔ goyiyi.",
    caption: "Fabrice Komlan Séna VIAGBO · NADI ƒe eteƒeɖɔla",
    storyEyebrow: "Nɔnɔmetata",
    storyTitle: "Wɔ nɔƒe si wòaɖe vi na mɔ siwo wowɔna",
    p1: "Fabrice Komlan Séna VIAGBO nye ɖekakpui si kpɔa ŋgɔ eye wòdi Afrika ƒe ŋgɔyiyi vevie. Eƒe susu le vevie ɖe ganyawo ƒe dzrowɔwɔ, dukɔ ƒe ɖoɖowo dzi nuƒoƒo kple ɖekakpuwo ƒe ŋusẽ ŋu.",
    p2: "Le NADI dzi la, ekpɔa nɔƒe ɖo be yeakplɔ susuwo, amewo kple goyiyiwo ɖo ɖekae bene wòaɖe vi na Afrika dukɔa ƒe trɔtrɔ.",
    quote:
      "Ŋgɔyiyi si me amewo katã le dzea egɔme ne gbe ɖe sia ɖe ate ŋu aŋlɔ etsɔme.",
    quoteSmall: "— Kpɔɖeŋu ƒe nya",
    cta: "Ƒo nu kple NADI",
  },
  actionsPage: {
    eyebrow: "Mía dɔwɔƒewo",
    title: "Mɔnu etɔ̃ be susuwo kple dɔwɔwɔ nayi ŋgɔ.",
    intro:
      "Susuɖoɖo kple dɔwɔɖekae ƒe nɔƒe siwo wowɔ ɖe ɖoɖo be woatsɔ aɖiɖi ganyawo kple xɔlɔ̃me ƒe trɔtrɔ siwo le dukɔa dzi la.",
    axisLabel: "Ɖoɖo ƒe mɔnu",
    extra:
      "Mɔnu si woɖo ɖi la kplɔa nukpɔkpɔ, nukpɔkpɔ ƒe tsɔtsɔ kple kplɔlɔ ŋu. Mɔnu kple dɔwɔɖekae awɔ kple NADI ƒe hadɔwɔlawo.",
    cta: "Kpɔ dɔwɔɖekae",
  },
  contactPage: {
    eyebrow: "Kaƒo kple mí",
    title: "Trɔtrɔ gãwo dzea egɔme le nuƒoƒo me.",
    intro:
      "Mi ƒo nu tso hadɔwɔwɔ, kpeɖeŋu kple dɔwɔɖekae ƒe mɔ na ŋgɔyiyi si me amewo katã le ŋu.",
    writeEyebrow: "Ŋlɔ mí",
    writeTitle: "Mi wɔ dɔwɔɖekae si nɔa anyi ɖaa.",
    writeText:
      "Kpɔ NADI ƒe kaƒoƒo ƒe nyawo le ete be nàkaƒo kple mí.",
    emailLabel: "E-mail",
    phoneLabel: "Telefon",
    socialLabel: "Kadodo ƒe nɔƒewo",
    socialValue: "Woana anya",
    form: {
      name: "Ŋkɔ blibo *",
      namePlaceholder: "Wò ŋkɔ",
      email: "E-mail adrɛs *",
      emailPlaceholder: "wò@dɔwɔƒe.org",
      organisation: "Dɔwɔƒe",
      organisationPlaceholder: "Wò dɔwɔƒe ƒe ŋkɔ",
      subject: "Nya",
      message: "Kadodo *",
      messagePlaceholder: "Ƒo nu tso wò dɔ alo wò biabia ŋu…",
      subjects: [
        { value: "partenariat", label: "Hadɔwɔwɔ" },
        { value: "collaboration", label: "Dɔwɔɖekae" },
        { value: "participation", label: "Kpeɖeŋu" },
        { value: "general", label: "Biabia bɔbɔe" },
      ],
      error: "Ŋlɔ wò ŋkɔ, wò e-mail kple wò nya.",
      success:
        "Akpe. Wɔwɔ wò biabia le kpɔɖeŋu sia me ko.",
      submit: "Ɖo dzo nyaa",
      submitting: "Dzoɖoɖom…",
    },
  },
  faq: {
    eyebrow: "Biabia siwo wowɔna zi geɖe",
    title: "Nu si nyo be nànya.",
    entries: [
      {
        q: "Aleke nàwɔ ɖeka kple NADI?",
        a: "Ŋlɔ mí to kadodo ƒe nyatakaka la dzi, eye nàƒo nu tso wò dɔwɔƒe kple nusi nèdi ŋu. Míedzroa hadɔwɔwɔ, kpeɖeŋu alo dɔwɔɖekae ƒe ɖoɖo ɖe sia ɖe ŋu.",
      },
      {
        q: "Ɖe NADI le dzrowɔwɔwo ɖom go xoxo?",
        a: "Nɔƒe «Nyadzɔdzɔwo kple nukpɔkpɔwo» nye nuŋlɔɖi ƒe kpɔɖeŋu. Dɔwɔƒea ƒe nuŋlɔɖi, gbeɖeɖe kple nusɔsrɔ̃ siwo tso dɔ me la ava eme ne dɔwɔƒea dze dɔ gɔme.",
      },
      {
        q: "Nya kawo ŋu NADI le dɔ wɔm?",
        a: "Mɔnu gã etɔ̃: ganyawo ƒe dzrowɔwɔ, dukɔ ƒe ɖoɖowo dzi nuƒoƒo kple ɖekakpuwo ƒe ŋusẽ.",
      },
      {
        q: "Ðe mate ŋu aɖo susu alo dɔwɔwɔ ƒe mɔnu ɖa?",
        a: "Ɛ. NADI di be yeana dɔwɔɖekae le ɖekakpuwo, dɔwɔƒewo, numekukulawo, asitsalawo kple hadɔwɔlawo dome. Ðo wò susu ɖa to kadodo ƒe nyatakaka la dzi.",
      },
    ],
  },
  realisation: {
    eyebrow: "Wɔwɔ kple dzidzigbɔɖiɖi",
    title: "ATF ye da site sia ŋu eye wòwɔe.",
    intro:
      "ATF, dɔwɔƒe si kpɔa NADI ƒe dɔ le internet dzi, ye wɔ site sia ƒe nuŋlɔɖi, nɔnɔmetata kple dɔwɔwɔ.",
    name: "LAWSON Prince",
    role: "Technique ƒe Dzikpɔla & Digital Dɔwɔwɔ · ATF",
    note: "Tso nɔnɔmetata gbãtɔ vaseɖe eƒe dɔdɔ ŋu la, wokpɔ nusianu ɖoɖo be wòaɖe NADI ƒe Afrika katã ƒe ɖoɖoɖomakpɔmakpɔ la fia.",
    imageAlt: "LAWSON Prince, ATF ƒe technique dzikpɔla, site NADI ƒe dɔwɔla",
  },
  intro: { skip: "Ge ɖe site la me" },
  misc: {
    backToTop: "Trɔ yi dzi",
    langLabel: "Gbe",
    offline: "Kpɔ ɖe edzi",
  },
}

export const content: Record<Lang, Content> = { fr, en, es, ee }

type I18nValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  c: Content
}

const I18nContext = createContext<I18nValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "fr"
    const stored = window.localStorage.getItem("nadi-lang") as Lang | null
    return stored && languages.some((item) => item.code === stored)
      ? stored
      : "fr"
  })

  useEffect(() => {
    window.localStorage.setItem("nadi-lang", lang)
    document.documentElement.lang = lang
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, setLang, c: content[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) throw new Error("useI18n must be used within LangProvider")
  return value
}
