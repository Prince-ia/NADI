import { useEffect, useState } from "react"
import type { FormEvent, ReactNode } from "react"

type Page =
  | "home"
  | "about"
  | "leadership"
  | "actions"
  | "portfolio"
  | "news"
  | "contact"

const heroImage =
  "https://images.unsplash.com/photo-1655720348590-c739c860beed?auto=format&fit=crop&w=1600&q=85"
const articleImages = [
  "https://images.unsplash.com/photo-1549086802-bb458f399f05?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1584365098838-50ccef838f4a?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1573496528298-f0e9d3c7ce55?auto=format&fit=crop&w=1000&q=80",
]

const pages: { id: Page; label: string }[] = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "actions", label: "Nos axes d’action" },
  { id: "leadership", label: "Notre vision" },
  { id: "portfolio", label: "Portfolio" },
  { id: "news", label: "Actualités" },
  { id: "contact", label: "Contact" },
]

const pillars = [
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
]

const actionAreas = [
  {
    number: "I",
    title: "Analyse économique",
    text: "Encourager la réflexion, l’analyse et la compréhension des enjeux économiques qui influencent le développement de l’Afrique.",
    image: articleImages[0],
  },
  {
    number: "II",
    title: "Dialogue sur les politiques publiques",
    text: "Promouvoir les échanges constructifs, les idées et la participation aux réflexions sur les politiques publiques.",
    image: articleImages[1],
  },
  {
    number: "III",
    title: "Autonomisation des jeunes",
    text: "Valoriser le potentiel des jeunes, leur leadership et leur contribution aux transformations économiques et sociales.",
    image: articleImages[2],
  },
]

const articles = [
  {
    category: "Développement économique",
    tag: "Économie",
    title: "Comprendre les nouveaux moteurs de la croissance inclusive",
    excerpt:
      "Un espace éditorial pour décrypter les dynamiques économiques africaines.",
    image: articleImages[0],
  },
  {
    category: "Jeunesse et leadership",
    tag: "Jeunesse",
    title: "La jeunesse au cœur des transformations du continent",
    excerpt:
      "Perspectives sur l’engagement, l’initiative et le leadership de demain.",
    image: articleImages[1],
  },
  {
    category: "Politiques publiques",
    tag: "Politiques publiques",
    title: "Faire du dialogue une force de transformation",
    excerpt:
      "Regards croisés sur la participation et la fabrique de politiques inclusives.",
    image: articleImages[2],
  },
]

const activities = [
  {
    kicker: "Réflexion collective",
    title: "Ateliers d’idées et d’innovation",
    text: "Des formats participatifs pour croiser les expertises, faire émerger des perspectives et transformer les constats en pistes d’action.",
    image:
      "https://images.unsplash.com/photo-1720700126957-769e2f2fc0fc?auto=format&fit=crop&w=1600&q=85",
  },
  {
    kicker: "Dialogue",
    title: "Rencontres et conversations publiques",
    text: "Des espaces exigeants et accessibles pour rapprocher les décideurs, les chercheurs, les entrepreneurs et la jeunesse.",
    image:
      "https://images.unsplash.com/photo-1751139846255-d0d65f3d192a?auto=format&fit=crop&w=1600&q=85",
  },
  {
    kicker: "Transmission",
    title: "Leadership et montée en compétence",
    text: "Des expériences pensées pour renforcer la confiance, la capacité d’initiative et le pouvoir d’agir des jeunes talents.",
    image:
      "https://images.unsplash.com/photo-1562910859-be83f1df7b56?auto=format&fit=crop&w=1600&q=85",
  },
  {
    kicker: "Rayonnement",
    title: "Forums et rendez-vous panafricains",
    text: "Des temps forts pour partager les connaissances et ouvrir de nouvelles possibilités de collaboration à l’échelle du continent.",
    image:
      "https://images.unsplash.com/photo-1778876091112-f7e985acdb01?auto=format&fit=crop&w=1600&q=85",
  },
]

const portfolioItems = [
  {
    number: "01",
    category: "Économie & innovation",
    title: "Observatoire des opportunités africaines",
    text: "Un concept de veille et d’analyse pour rendre les dynamiques économiques plus lisibles.",
    image:
      "https://images.unsplash.com/photo-1742339879400-04cae8a582a6?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "02",
    category: "Jeunesse & leadership",
    title: "NADI Next Generation Forum",
    text: "Un format envisagé pour connecter les jeunes talents aux idées, outils et réseaux qui accélèrent leur impact.",
    image:
      "https://images.unsplash.com/photo-1720700126947-a6ba1ebba73d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    number: "03",
    category: "Politiques publiques",
    title: "Conversations pour l’Afrique",
    text: "Une série éditoriale et événementielle imaginée pour nourrir un dialogue constructif et pluraliste.",
    image:
      "https://images.unsplash.com/photo-1766131822552-59074d945365?auto=format&fit=crop&w=1200&q=85",
  },
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <div className={`brand ${light ? "brand-light" : ""}`} aria-label="NADI">
      <span className="brand-name">NADI</span>
      <span className="brand-rule" />
      <span className="brand-full">
        Novara Africa
        <br />
        Development Initiative
      </span>
    </div>
  )
}

function Button({
  children,
  variant = "primary",
  onClick,
  type = "button",
  href,
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "light" | "text"
  onClick?: () => void
  type?: "button" | "submit"
  href?: string
}) {
  if (href) {
    return (
      <a
        className={`button button-${variant}`}
        href={href}
        onClick={(event) => {
          if (onClick) {
            event.preventDefault()
            onClick()
          }
        }}
      >
        <span>{children}</span>
        <ArrowIcon />
      </a>
    )
  }
  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      type={type}
    >
      <span>{children}</span>
      <ArrowIcon />
    </button>
  )
}

function Header({
  currentPage,
  navigate,
}: {
  currentPage: Page
  navigate: (page: Page) => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
      <div className="header-inner">
        <button
          className="brand-button"
          onClick={() => navigate("home")}
          aria-label="Accueil"
        >
          <Brand />
        </button>
        <nav
          className={`nav ${open ? "nav-open" : ""}`}
          aria-label="Navigation principale"
        >
          {pages.map((page) => (
            <a
              key={page.id}
              className={
                currentPage === page.id ? "nav-link active" : "nav-link"
              }
              href={`#/${page.id}`}
              aria-current={currentPage === page.id ? "page" : undefined}
              onClick={(event) => {
                event.preventDefault()
                navigate(page.id)
                setOpen(false)
              }}
            >
              {page.label}
            </a>
          ))}
          <Button href="#/contact" onClick={() => navigate("contact")}>
            Collaborer avec NADI
          </Button>
        </nav>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string
  title: string
  intro?: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? "section-heading-light" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  )
}

function Hero({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Novara Africa Development Initiative</p>
        <h1>
          Accélérer le développement <em>inclusif</em> de l’Afrique.
        </h1>
        <p className="hero-intro">
          Nous connectons les idées, les personnes et les opportunités pour
          contribuer à une Afrique plus inclusive, innovante et prospère.
        </p>
        <div className="button-row">
          <Button onClick={() => navigate("leadership")}>
            Découvrir notre vision
          </Button>
          <Button variant="secondary" onClick={() => navigate("contact")}>
            Rejoindre l’initiative
          </Button>
        </div>
        <div className="hero-note">
          <span>Une initiative panafricaine</span>
          <span>Fondée par Fabrice Komlan Séna VIAGBO</span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src={heroImage}
          alt="Jeunes professionnels africains réunis autour de leurs ordinateurs"
          loading="eager"
          decoding="async"
        />
        <div className="hero-quote">
          <span className="quote-mark">“</span>
          <p>Transformer les idées en opportunités durables.</p>
        </div>
        <div className="gold-arc" />
      </div>
      <a
        className="hero-cue"
        href="#mission"
        aria-label="Découvrir la mission de NADI"
      >
        <span>Découvrir</span>
        <i />
      </a>
    </section>
  )
}

function Mission() {
  return (
    <section className="section mission" id="mission">
      <div className="mission-lead">
        <SectionHeading
          eyebrow="Notre mission"
          title="Une vision ambitieuse pour l’Afrique"
        />
        <p>
          NOVARA AFRICA DEVELOPMENT INITIATIVE est une initiative tournée vers
          la promotion d’un développement africain inclusif. Elle entend
          favoriser les échanges d’idées, l’engagement des jeunes et les
          dynamiques de collaboration capables de contribuer à la transformation
          du continent.
        </p>
      </div>
      <div className="pillar-grid">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.number}>
            <span className="pillar-number">{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
            <span className="card-line" />
          </article>
        ))}
      </div>
    </section>
  )
}

function LeaderFeature({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="leader-feature">
      <div className="leader-portrait">
        <div className="portrait-placeholder">
          <span>FKSV</span>
          <small>Portrait officiel à intégrer</small>
        </div>
        <div className="portrait-caption">
          <strong>Fabrice Komlan Séna VIAGBO</strong>
          <span>Fondateur · NADI</span>
        </div>
      </div>
      <div className="leader-copy">
        <p className="eyebrow">Le leadership</p>
        <h2>Un leadership tourné vers l’avenir de l’Afrique</h2>
        <p>
          Fabrice Komlan Séna VIAGBO est un jeune leader visionnaire
          profondément engagé dans le développement de l’Afrique.
        </p>
        <p>
          Ses centres d’intérêt portent notamment sur l’analyse économique, le
          dialogue sur les politiques publiques et l’autonomisation des jeunes.
        </p>
        <p>
          Il représente une nouvelle génération de leaders africains résolument
          tournée vers l’action, l’innovation et l’impact.
        </p>
        <Button variant="text" onClick={() => navigate("leadership")}>
          Découvrir notre engagement
        </Button>
      </div>
    </section>
  )
}

function Actions({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="section actions-preview">
      <div className="section-topline">
        <SectionHeading
          eyebrow="Nos axes d’action"
          title="Réfléchir. Connecter. Agir."
        />
        <Button variant="text" onClick={() => navigate("actions")}>
          Explorer tous nos axes
        </Button>
      </div>
      <div className="action-grid">
        {actionAreas.map((area) => (
          <article className="action-card" key={area.number}>
            <div className="action-image">
              <img src={area.image} alt="" loading="lazy" decoding="async" />
              <span>{area.number}</span>
            </div>
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ActivityCarousel() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (
      paused ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return
    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % activities.length),
      5200,
    )
    return () => window.clearInterval(timer)
  }, [paused])

  const previous = () =>
    setActive(
      (current) => (current - 1 + activities.length) % activities.length,
    )
  const next = () =>
    setActive((current) => (current + 1) % activities.length)

  return (
    <section
      className="activity-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrousel"
      aria-label="Formats d’activités NADI"
    >
      <div className="carousel-copy">
        <div>
          <p className="eyebrow">Nos activités</p>
          <span className="carousel-count">
            0{active + 1} <i /> 0{activities.length}
          </span>
          <p className="carousel-kicker">{activities[active].kicker}</p>
          <h2>{activities[active].title}</h2>
          <p className="carousel-text">{activities[active].text}</p>
        </div>
        <div className="carousel-controls">
          <button onClick={previous} aria-label="Activité précédente">
            <ArrowIcon />
          </button>
          <button onClick={next} aria-label="Activité suivante">
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="carousel-visual" aria-live="polite">
        {activities.map((activity, index) => (
          <img
            key={activity.title}
            className={index === active ? "active" : ""}
            src={activity.image}
            alt={index === active ? activity.title : ""}
            loading="lazy"
            decoding="async"
          />
        ))}
        <div className="carousel-progress">
          {activities.map((activity, index) => (
            <button
              key={activity.title}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Afficher ${activity.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioPreview({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="portfolio-preview">
      <div className="portfolio-intro">
        <div>
          <p className="eyebrow">Portfolio d’initiatives</p>
          <h2>Des idées conçues pour devenir des espaces d’impact.</h2>
        </div>
        <div>
          <p>
            Découvrez les formats envisagés par NADI pour analyser, rassembler
            et faire progresser les ambitions du continent.
          </p>
          <Button variant="light" onClick={() => navigate("portfolio")}>
            Explorer le portfolio
          </Button>
        </div>
      </div>
      <div className="portfolio-strip">
        {portfolioItems.map((item) => (
          <article key={item.number}>
            <img src={item.image} alt="" loading="lazy" decoding="async" />
            <div>
              <span>{item.number}</span>
              <p>{item.category}</p>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Vision({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="vision-band">
      <div className="vision-orbit" />
      <div>
        <p className="eyebrow">Notre vision pour l’Afrique</p>
        <h2>Une Afrique où chaque potentiel compte.</h2>
        <p>
          Nous croyons en une Afrique capable de transformer ses idées, ses
          talents et ses ressources en opportunités durables pour toutes et
          tous.
        </p>
        <Button variant="light" onClick={() => navigate("contact")}>
          Construisons ensemble
        </Button>
      </div>
      <blockquote>
        “Accelerating Africa’s
        <br />
        <em>Inclusive Development.</em>”
      </blockquote>
    </section>
  )
}

function Partnerships({ navigate }: { navigate: (page: Page) => void }) {
  const entries = [
    ["01", "Devenir partenaire"],
    ["02", "Participer à nos initiatives"],
    ["03", "Nous contacter"],
  ]
  return (
    <section className="section partnerships">
      <div className="partnership-copy">
        <SectionHeading
          eyebrow="Partenariats & collaboration"
          title="Ensemble, donnons de l’élan au développement africain"
          intro="NADI souhaite favoriser les synergies entre les jeunes, les institutions, les organisations, les chercheurs, les entrepreneurs et les partenaires engagés en faveur du développement inclusif."
        />
      </div>
      <div className="partnership-links">
        {entries.map(([number, label]) => (
          <button key={number} onClick={() => navigate("contact")}>
            <span>{number}</span>
            <strong>{label}</strong>
            <ArrowIcon />
          </button>
        ))}
      </div>
    </section>
  )
}

function NewsGrid({
  navigate,
  limit,
  filter,
}: {
  navigate: (page: Page) => void
  limit?: number
  filter?: string
}) {
  const list = articles
    .filter((article) => !filter || filter === "Tous" || article.tag === filter)
    .slice(0, limit)
  return (
    <div className="article-grid">
      {list.map((article) => (
        <article
          className="article-card"
          key={article.title}
          onClick={() => navigate("news")}
        >
          <div className="article-image">
            <img src={article.image} alt="" loading="lazy" decoding="async" />
            <span>Contenu de démonstration</span>
          </div>
          <p className="article-meta">{article.category} · À venir</p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <Button variant="text" onClick={() => navigate("news")}>
            Lire l’aperçu
          </Button>
        </article>
      ))}
    </div>
  )
}

function Home({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <Hero navigate={navigate} />
      <Mission />
      <Approach />
      <LeaderFeature navigate={navigate} />
      <Ticker />
      <ActivityCarousel />
      <Actions navigate={navigate} />
      <Vision navigate={navigate} />
      <PortfolioPreview navigate={navigate} />
      <Partnerships navigate={navigate} />
      <section className="section news-preview">
        <div className="section-topline">
          <SectionHeading
            eyebrow="Actualités & perspectives"
            title="Les idées qui font avancer le continent"
          />
          <Button variant="text" onClick={() => navigate("news")}>
            Voir toutes les publications
          </Button>
        </div>
        <NewsGrid navigate={navigate} limit={3} />
      </section>
      <FinalCta navigate={navigate} />
    </>
  )
}

function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string
  title: string
  intro: string
}) {
  return (
    <section className="page-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{intro}</p>
    </section>
  )
}

function AboutPage({ navigate }: { navigate: (page: Page) => void }) {
  const values = [
    "Inclusion",
    "Innovation",
    "Leadership",
    "Intégrité",
    "Collaboration",
    "Impact durable",
  ]
  return (
    <>
      <PageHero
        eyebrow="À propos de NADI"
        title="Une initiative pour relier les ambitions africaines."
        intro="NADI se construit comme une plateforme de réflexion, de dialogue et de mise en relation au service d’un développement plus inclusif."
      />
      <section className="section editorial-split">
        <div>
          <p className="eyebrow">Notre raison d’être</p>
          <h2>Créer les conditions d’une transformation partagée</h2>
        </div>
        <div className="rich-copy">
          <p>
            NOVARA AFRICA DEVELOPMENT INITIATIVE porte une ambition simple :
            rapprocher les idées, les personnes et les opportunités qui peuvent
            contribuer à l’avenir du continent.
          </p>
          <p>
            Son approche privilégie l’écoute, l’analyse et la coopération entre
            générations, disciplines et institutions. NADI entend créer des
            espaces où les perspectives deviennent des collaborations et où les
            collaborations peuvent produire un impact durable.
          </p>
        </div>
      </section>
      <section className="values-section">
        <SectionHeading
          eyebrow="Valeurs proposées"
          title="Les principes qui orientent notre démarche"
          intro="Ces valeurs expriment l’orientation actuelle de NADI et pourront être précisées avec l’organisation."
          light
        />
        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-item" key={value}>
              <span>0{index + 1}</span>
              <h3>{value}</h3>
            </div>
          ))}
        </div>
      </section>
      <FinalCta navigate={navigate} />
    </>
  )
}

function LeadershipPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero
        eyebrow="Le leadership"
        title="Une vision portée par l’écoute, l’action et l’impact."
        intro="Fabrice Komlan Séna VIAGBO incarne une génération de leaders africains engagée à transformer les idées en opportunités."
      />
      <section className="section leadership-page">
        <div className="large-portrait">
          <div className="portrait-placeholder">
            <span>FKSV</span>
            <small>Portrait officiel à intégrer</small>
          </div>
          <p>Fabrice Komlan Séna VIAGBO · Fondateur de NADI</p>
        </div>
        <div className="leadership-story">
          <p className="eyebrow">Portrait</p>
          <h2>Construire une plateforme au service des possibles</h2>
          <p>
            Fabrice Komlan Séna VIAGBO est un jeune leader visionnaire
            profondément engagé dans le développement de l’Afrique. Ses centres
            d’intérêt portent notamment sur l’analyse économique, le dialogue
            sur les politiques publiques et l’autonomisation des jeunes.
          </p>
          <p>
            À travers NADI, il construit une plateforme destinée à connecter les
            idées, les personnes et les opportunités afin de contribuer à la
            transformation du continent africain.
          </p>
          <blockquote>
            “Le développement inclusif commence lorsque chaque voix peut
            contribuer à dessiner l’avenir.”
            <small>— Formulation éditoriale pour la maquette</small>
          </blockquote>
          <Button onClick={() => navigate("contact")}>
            Échanger avec NADI
          </Button>
        </div>
      </section>
    </>
  )
}

function ActionsPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero
        eyebrow="Nos axes d’action"
        title="Trois leviers pour faire progresser les idées et l’action."
        intro="Des champs de réflexion et de collaboration pensés pour répondre aux transformations économiques et sociales du continent."
      />
      <section className="section action-list">
        {actionAreas.map((area) => (
          <article key={area.number}>
            <div className="action-list-number">{area.number}</div>
            <div>
              <p className="eyebrow">Axe stratégique</p>
              <h2>{area.title}</h2>
            </div>
            <div className="rich-copy">
              <p>{area.text}</p>
              <p>
                L’approche envisagée associe veille, échanges de perspectives et
                mise en relation d’acteurs concernés. Les formats et
                collaborations seront développés avec les partenaires de NADI.
              </p>
              <Button variant="text" onClick={() => navigate("contact")}>
                Explorer une collaboration
              </Button>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

function PortfolioPage({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <>
      <PageHero
        eyebrow="Portfolio d’initiatives"
        title="Imaginer aujourd’hui les plateformes d’impact de demain."
        intro="Une sélection de concepts et de formats envisagés pour donner corps à la mission de NADI. Aucun de ces projets n’est présenté comme déjà réalisé."
      />
      <section className="section portfolio-page">
        <div className="portfolio-notice">
          <span>Portefeuille prospectif</span>
          <p>
            Ces propositions constituent une direction de travail et pourront
            évoluer avec les partenaires, les publics concernés et les priorités
            de l’organisation.
          </p>
        </div>
        {portfolioItems.map((item, index) => (
          <article
            className={
              index % 2 ? "portfolio-project reverse" : "portfolio-project"
            }
            key={item.number}
          >
            <div className="portfolio-project-image">
              <img src={item.image} alt="" loading="lazy" decoding="async" />
              <span>{item.number}</span>
            </div>
            <div className="portfolio-project-copy">
              <p className="eyebrow">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className="project-meta">
                <span>Statut</span>
                <strong>Concept à développer</strong>
              </div>
              <Button variant="text" onClick={() => navigate("contact")}>
                Construire cette initiative avec NADI
              </Button>
            </div>
          </article>
        ))}
      </section>
      <FinalCta navigate={navigate} />
    </>
  )
}

function NewsPage({ navigate }: { navigate: (page: Page) => void }) {
  const [filter, setFilter] = useState("Tous")
  const categories = ["Tous", "Économie", "Jeunesse", "Politiques publiques"]
  return (
    <>
      <PageHero
        eyebrow="Actualités & perspectives"
        title="Un espace pour comprendre, partager et ouvrir le dialogue."
        intro="Cette page accueillera les analyses, annonces et publications officielles de NADI."
      />
      <section className="section news-page">
        <div className="demo-notice">
          <strong>Maquette éditoriale</strong>
          <span>
            Les contenus ci-dessous sont des exemples et ne constituent pas des
            publications officielles.
          </span>
        </div>
        <div className="filters" aria-label="Filtrer les articles">
          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <NewsGrid navigate={navigate} filter={filter} />
      </section>
    </>
  )
}

function ContactPage() {
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (!form.get("name") || !form.get("email") || !form.get("message")) {
      setError("Merci de renseigner votre nom, votre e-mail et votre message.")
      setStatus("error")
      return
    }
    setError("")
    setStatus("loading")
    window.setTimeout(() => setStatus("success"), 900)
  }

  return (
    <>
      <PageHero
        eyebrow="Entrer en contact"
        title="Les grandes transformations commencent par une conversation."
        intro="Parlons partenariat, participation et opportunités de collaboration en faveur du développement inclusif."
      />
      <section className="section contact-layout">
        <div className="contact-aside">
          <p className="eyebrow">Écrivez-nous</p>
          <h2>Construisons des synergies durables.</h2>
          <p>
            Les coordonnées officielles et les comptes sociaux de NADI seront
            affichés ici après leur confirmation.
          </p>
          <div className="contact-detail">
            <span>E-mail</span>
            <strong>À renseigner</strong>
          </div>
          <div className="contact-detail">
            <span>Réseaux sociaux</span>
            <strong>À confirmer</strong>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="field-row">
            <label>
              Nom complet *
              <input name="name" type="text" placeholder="Votre nom" />
            </label>
            <label>
              Adresse e-mail *
              <input
                name="email"
                type="email"
                placeholder="vous@organisation.org"
              />
            </label>
          </div>
          <div className="field-row">
            <label>
              Organisation
              <input
                name="organisation"
                type="text"
                placeholder="Nom de votre organisation"
              />
            </label>
            <label>
              Sujet
              <select name="subject" defaultValue="partenariat">
                <option value="partenariat">Partenariat</option>
                <option value="collaboration">Collaboration</option>
                <option value="participation">Participation</option>
                <option value="general">Demande générale</option>
              </select>
            </label>
          </div>
          <label>
            Message *
            <textarea
              name="message"
              rows={6}
              placeholder="Parlez-nous de votre projet ou de votre demande..."
            />
          </label>
          {status === "error" && <p className="form-message error">{error}</p>}
          {status === "success" && (
            <p className="form-message success">
              Merci. Votre demande a bien été simulée dans cette maquette.
            </p>
          )}
          <Button type="submit">
            {status === "loading" ? "Envoi en cours…" : "Envoyer le message"}
          </Button>
        </form>
      </section>
      <Faq />
    </>
  )
}

function FinalCta({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <section className="final-cta">
      <p className="eyebrow">Notre ambition commune</p>
      <h2>L’avenir de l’Afrique se construit ensemble.</h2>
      <p>
        Connectons les idées, les talents et les opportunités pour accélérer un
        développement plus inclusif.
      </p>
      <Button onClick={() => navigate("contact")}>
        Entrer en contact avec NADI
      </Button>
    </section>
  )
}

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Brand light />
          <p className="footer-tagline">
            Accelerating Africa’s Inclusive Development.
          </p>
          <Newsletter />
        </div>
        <div>
          <p className="footer-label">Navigation</p>
          {pages.slice(0, 5).map((page) => (
            <a
              key={page.id}
              href={`#/${page.id}`}
              onClick={(event) => {
                event.preventDefault()
                navigate(page.id)
              }}
            >
              {page.label}
            </a>
          ))}
        </div>
        <div>
          <p className="footer-label">Nous rejoindre</p>
          <a
            href="#/contact"
            onClick={(event) => {
              event.preventDefault()
              navigate("contact")
            }}
          >
            Collaborer avec NADI
          </a>
          <span>E-mail officiel à renseigner</span>
          <span>Réseaux sociaux à confirmer</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} NOVARA AFRICA DEVELOPMENT INITIATIVE
        </span>
        <span>Développement inclusif · Leadership · Collaboration</span>
      </div>
    </footer>
  )
}

const focusAreas = [
  "Analyse économique",
  "Dialogue sur les politiques publiques",
  "Autonomisation des jeunes",
  "Leadership",
  "Inclusion",
  "Innovation",
  "Collaboration",
  "Impact durable",
]

function Ticker() {
  const items = [...focusAreas, ...focusAreas]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, index) => (
          <span className="ticker-item" key={index}>
            {item}
            <em>✦</em>
          </span>
        ))}
      </div>
    </div>
  )
}

const approachSteps = [
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
]

function Approach() {
  return (
    <section className="section approach" id="approach">
      <div className="approach-head">
        <SectionHeading
          eyebrow="Notre méthode"
          title="Une démarche en quatre mouvements."
          intro="Une manière de travailler calme, exigeante et tournée vers l’impact : écouter avant de penser, penser avant d’agir."
        />
        <span className="approach-seal">NADI</span>
      </div>
      <div className="approach-grid">
        {approachSteps.map((step) => (
          <article className="approach-card" key={step.index}>
            <div className="approach-index">{step.index}</div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const faqEntries = [
  {
    question: "Comment collaborer avec NADI ?",
    answer:
      "Écrivez-nous via le formulaire de contact en précisant votre organisation et votre domaine d’intérêt. Nous étudions chaque proposition de partenariat, de participation ou de coconstruction.",
  },
  {
    question: "NADI publie-t-il déjà des analyses ?",
    answer:
      "L’espace « Actualités & perspectives » est une maquette éditoriale. Les publications officielles, annonces et comptes rendus seront intégrés dès que l’organisation entre en activité.",
  },
  {
    question: "Quels domaines NADI couvre-t-il ?",
    answer:
      "Trois axes principaux : l’analyse économique, le dialogue sur les politiques publiques et l’autonomisation des jeunes.",
  },
  {
    question: "Puis-je proposer une idée ou un format d’initiative ?",
    answer:
      "Oui. NADI souhaite favoriser les synergies entre les jeunes, les institutions, les chercheurs, les entrepreneurs et les partenaires. Présentez votre idée via le formulaire de contact.",
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section faq">
      <div className="section-topline">
        <SectionHeading
          eyebrow="Questions fréquentes"
          title="Ce qu’il est utile de savoir."
        />
      </div>
      <div className="faq-list">
        {faqEntries.map((entry, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={entry.question}
          >
            <button
              className="faq-q"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
            >
              {entry.question}
              <span aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>{entry.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Newsletter() {
  const [message, setMessage] = useState<null | "ok" | "error">(null)
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get("newsletter-email")
    setMessage(
      email && String(email).includes("@") ? "ok" : "error",
    )
  }
  return (
    <div className="newsletter">
      <p className="footer-label">Rester informé</p>
      <p className="newsletter-intro">
        Recevez un aperçu des analyses et rendez-vous de NADI, une fois par
        mois.
      </p>
      <form className="newsletter-form" onSubmit={subscribe} noValidate>
        <input
          className="newsletter-input"
          name="newsletter-email"
          type="email"
          placeholder="votre@email.org"
          aria-label="Adresse e-mail"
        />
        <button className="newsletter-submit" type="submit">
          S’inscrire
        </button>
      </form>
      {message === "ok" && (
        <p className="newsletter-message">
          Merci — votre inscription a bien été simulée dans cette maquette.
        </p>
      )}
      {message === "error" && (
        <p className="newsletter-message error">
          Merci de saisir une adresse e-mail valide.
        </p>
      )}
    </div>
  )
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])
  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      aria-hidden="true"
    />
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 640)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <button
      className={`to-top ${show ? "show" : ""}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Revenir en haut de la page"
    >
      <ArrowIcon />
    </button>
  )
}

export default function App() {
  const initialPage = (
    window.location.hash.replace("#/", "") || "home"
  ) as Page
  const [currentPage, setCurrentPage] = useState<Page>(
    pages.some((page) => page.id === initialPage) ? initialPage : "home",
  )

  function navigate(page: Page) {
    setCurrentPage(page)
    window.location.hash = `/${page}`
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const onHashChange = () => {
      const page = window.location.hash.replace("#/", "") as Page
      if (pages.some((item) => item.id === page)) setCurrentPage(page)
    }
    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll(
      "main > section, .section > article, .section-heading, .pillar-card, .action-card, .article-card",
    )
    elements.forEach((element) => element.setAttribute("data-reveal", ""))

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [currentPage])

  return (
    <div className="app">
      <ScrollProgress />
      <Header currentPage={currentPage} navigate={navigate} />
      <main>
        {currentPage === "home" && <Home navigate={navigate} />}
        {currentPage === "about" && <AboutPage navigate={navigate} />}
        {currentPage === "leadership" && <LeadershipPage navigate={navigate} />}
        {currentPage === "actions" && <ActionsPage navigate={navigate} />}
        {currentPage === "portfolio" && <PortfolioPage navigate={navigate} />}
        {currentPage === "news" && <NewsPage navigate={navigate} />}
        {currentPage === "contact" && <ContactPage />}
      </main>
      <Footer navigate={navigate} />
      <BackToTop />
    </div>
  )
}
