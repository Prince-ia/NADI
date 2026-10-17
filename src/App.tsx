import { useCallback, useEffect, useRef, useState } from "react"
import type { FormEvent, ReactNode } from "react"
import { contact, languages, useI18n } from "./i18n"
import type { Content, Lang } from "./i18n"

type Page =
  | "home"
  | "about"
  | "leadership"
  | "actions"
  | "portfolio"
  | "news"
  | "contact"

const pageOrder: { id: Page; key: keyof Content["nav"] }[] = [
  { id: "home", key: "home" },
  { id: "about", key: "about" },
  { id: "actions", key: "actions" },
  { id: "leadership", key: "leadership" },
  { id: "portfolio", key: "portfolio" },
  { id: "news", key: "news" },
  { id: "contact", key: "contact" },
]

const pageIds = pageOrder.map((page) => page.id)

const media = {
  logo: "media/logo.png",
  logoLight: "media/logo-2.png",
  video: "media/video-logo.mp4",
  videoPoster: "media/video-logo-poster.jpg",
  founder: "media/fondateur.jpg",
}

const activityImages = [
  "media/activite-1.jpg",
  "media/activite-2.jpg",
  "media/activite-3.jpg",
  "media/activite-4.jpg",
  "media/activite-5.jpg",
  "media/activite-6.jpg",
  "media/activite-7.jpg",
  "media/activite-8.jpg",
  "media/activite-9.jpg",
]

const heroImage = activityImages[0]
const articleImages = [activityImages[1], activityImages[2], activityImages[3]]

const actionImages = [articleImages[0], articleImages[1], articleImages[2]]
const activityImageList = [
  activityImages[4],
  activityImages[5],
  activityImages[6],
  activityImages[7],
]
const portfolioImageList = [
  activityImages[8],
  activityImages[1],
  activityImages[5],
]

const responsableImages = [
  "media/responsable-2.jpg",
  "media/responsable-1.jpg",
  "media/responsable-3.jpg",
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  )
}

function Brand({ light = false }: { light?: boolean }) {
  const { c } = useI18n()
  return (
    <div className={`brand ${light ? "brand-light" : ""}`} aria-label="NADI">
      <img
        className="brand-logo"
        src={light ? media.logoLight : media.logo}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <span className="brand-name">NADI</span>
      <span className="brand-rule" />
      <span className="brand-full">
        {c.brand.line1}
        <br />
        {c.brand.line2}
      </span>
    </div>
  )
}

function LanguageSwitcher() {
  const { lang, setLang, c } = useI18n()
  return (
    <select
      className="lang-select"
      value={lang}
      onChange={(event) => setLang(event.target.value as Lang)}
      aria-label={c.misc.langLabel}
    >
      {languages.map((item) => (
        <option key={item.code} value={item.code}>
          {item.label}
        </option>
      ))}
    </select>
  )
}

function IntroSplash({ onDone }: { onDone: () => void }) {
  const { c } = useI18n()
  const [leaving, setLeaving] = useState(false)
  const finished = useRef(false)

  const finish = useCallback(() => {
    if (finished.current) return
    finished.current = true
    setLeaving(true)
    window.setTimeout(onDone, 900)
  }, [onDone])

  useEffect(() => {
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previous
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(finish, 9000)
    return () => window.clearTimeout(timer)
  }, [finish])

  return (
    <div
      className={`intro ${leaving ? "intro-leaving" : ""}`}
      role="dialog"
      aria-label="NADI"
    >
      <video
        className="intro-video"
        src={media.video}
        poster={media.videoPoster}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
      />
      <button className="intro-skip" onClick={finish} type="button">
        {c.intro.skip}
      </button>
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
  const { c } = useI18n()
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
          aria-label={c.nav.home}
        >
          <Brand />
        </button>
        <nav
          className={`nav ${open ? "nav-open" : ""}`}
          aria-label="Navigation"
        >
          {pageOrder.map((page) => (
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
              {c.nav[page.key]}
            </a>
          ))}
          <LanguageSwitcher />
        </nav>
        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "×" : "≡"}
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
  const { c } = useI18n()
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">{c.hero.eyebrow}</p>
        <h1>
          {c.hero.titleBefore}
          <em>{c.hero.titleEm}</em>
          {c.hero.titleAfter}
        </h1>
        <p className="hero-intro">{c.hero.intro}</p>
        <div className="button-row">
          <Button onClick={() => navigate("leadership")}>
            {c.hero.primary}
          </Button>
          <Button variant="secondary" onClick={() => navigate("contact")}>
            {c.hero.secondary}
          </Button>
        </div>
        <div className="hero-note">
          <span>{c.hero.noteLeft}</span>
          <span>{c.hero.noteRight}</span>
        </div>
      </div>
      <div className="hero-visual">
        <img
          src={heroImage}
          alt={c.hero.imageAlt}
          loading="eager"
          decoding="async"
        />
        <div className="hero-quote">
          <span className="quote-mark">“</span>
          <p>{c.hero.quote}</p>
        </div>
        <div className="gold-arc" />
      </div>
      <a
        className="hero-cue"
        href="#mission"
        aria-label={c.hero.cue}
      >
        <span>{c.hero.cue}</span>
        <i />
      </a>
    </section>
  )
}

function Mission() {
  const { c } = useI18n()
  return (
    <section className="section mission" id="mission">
      <div className="mission-lead">
        <SectionHeading
          eyebrow={c.mission.eyebrow}
          title={c.mission.title}
        />
        <p>{c.mission.text}</p>
      </div>
      <div className="pillar-grid">
        {c.pillars.map((pillar) => (
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
  const { c } = useI18n()
  return (
    <section className="leader-feature">
      <div className="leader-portrait">
        <img
          className="portrait-photo"
          src={media.founder}
          alt={c.leader.imageAlt}
          loading="lazy"
          decoding="async"
        />
        <div className="portrait-caption">
          <strong>{c.leader.name}</strong>
          <span>{c.leader.role}</span>
        </div>
      </div>
      <div className="leader-copy">
        <p className="eyebrow">{c.leader.eyebrow}</p>
        <h2>{c.leader.title}</h2>
        <p>{c.leader.p1}</p>
        <p>{c.leader.p2}</p>
        <p>{c.leader.p3}</p>
        <Button variant="text" onClick={() => navigate("leadership")}>
          {c.leader.cta}
        </Button>
      </div>
    </section>
  )
}

function Actions({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <section className="section actions-preview">
      <div className="section-topline">
        <SectionHeading
          eyebrow={c.actionsPreview.eyebrow}
          title={c.actionsPreview.title}
        />
        <Button variant="text" onClick={() => navigate("actions")}>
          {c.actionsPreview.cta}
        </Button>
      </div>
      <div className="action-grid">
        {c.actionAreas.map((area, index) => (
          <article className="action-card" key={area.number}>
            <div className="action-image">
              <img
                src={actionImages[index]}
                alt=""
                loading="lazy"
                decoding="async"
              />
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
  const { c } = useI18n()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const activities = c.activities.items

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
  }, [paused, activities.length])

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
      aria-roledescription="carousel"
      aria-label={c.activities.eyebrow}
    >
      <div className="carousel-copy">
        <div>
          <p className="eyebrow">{c.activities.eyebrow}</p>
          <span className="carousel-count">
            0{active + 1} <i /> 0{activities.length}
          </span>
          <p className="carousel-kicker">{activities[active].kicker}</p>
          <h2>{activities[active].title}</h2>
          <p className="carousel-text">{activities[active].text}</p>
        </div>
        <div className="carousel-controls">
          <button onClick={previous} aria-label={c.activities.previous}>
            <ArrowIcon />
          </button>
          <button onClick={next} aria-label={c.activities.next}>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className="carousel-visual" aria-live="polite">
        {activities.map((activity, index) => (
          <img
            key={activity.title}
            className={index === active ? "active" : ""}
            src={activityImageList[index]}
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
              aria-label={activity.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function PortfolioPreview({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <section className="portfolio-preview">
      <div className="portfolio-intro">
        <div>
          <p className="eyebrow">{c.portfolioPreview.eyebrow}</p>
          <h2>{c.portfolioPreview.title}</h2>
        </div>
        <div>
          <p>{c.portfolioPreview.text}</p>
          <Button variant="light" onClick={() => navigate("portfolio")}>
            {c.portfolioPreview.cta}
          </Button>
        </div>
      </div>
      <div className="portfolio-strip">
        {c.portfolioItems.map((item, index) => (
          <article key={item.number}>
            <img
              src={portfolioImageList[index]}
              alt=""
              loading="lazy"
              decoding="async"
            />
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
  const { c } = useI18n()
  return (
    <section className="vision-band">
      <div className="vision-orbit" />
      <div>
        <p className="eyebrow">{c.vision.eyebrow}</p>
        <h2>{c.vision.title}</h2>
        <p>{c.vision.text}</p>
        <Button variant="light" onClick={() => navigate("contact")}>
          {c.vision.cta}
        </Button>
      </div>
      <blockquote>
        {c.vision.quoteLine1}
        <br />
        <em>{c.vision.quoteLine2}</em>
      </blockquote>
    </section>
  )
}

function Partnerships({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <section className="section partnerships">
      <div className="partnership-copy">
        <SectionHeading
          eyebrow={c.partnerships.eyebrow}
          title={c.partnerships.title}
          intro={c.partnerships.intro}
        />
      </div>
      <div className="partnership-links">
        {c.partnerships.entries.map((label, index) => (
          <button
            key={label}
            onClick={() => navigate("contact")}
          >
            <span>0{index + 1}</span>
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
  const { c } = useI18n()
  const list = c.articles
    .filter((article) => !filter || filter === "all" || article.tagId === filter)
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
            <img
              src={articleImages[c.articles.indexOf(article)]}
              alt=""
              loading="lazy"
              decoding="async"
            />
            <span>{c.news.demoBadge}</span>
          </div>
          <p className="article-meta">
            {article.category} · {c.news.metaSuffix}
          </p>
          <h3>{article.title}</h3>
          <p>{article.excerpt}</p>
          <Button variant="text" onClick={() => navigate("news")}>
            {c.news.readPreview}
          </Button>
        </article>
      ))}
    </div>
  )
}

function Home({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <>
      <Hero navigate={navigate} />
      <Mission />
      <Approach />
      <LeaderFeature navigate={navigate} />
      <Realisation />
      <Ticker />
      <ActivityCarousel />
      <Actions navigate={navigate} />
      <Vision navigate={navigate} />
      <PortfolioPreview navigate={navigate} />
      <Partnerships navigate={navigate} />
      <section className="section news-preview">
        <div className="section-topline">
          <SectionHeading
            eyebrow={c.news.eyebrow}
            title={c.news.title}
          />
          <Button variant="text" onClick={() => navigate("news")}>
            {c.news.ctaAll}
          </Button>
        </div>
        <NewsGrid navigate={navigate} limit={3} filter="all" />
      </section>
      <LeaderFeature navigate={navigate} />
      <Realisation />
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
  const { c } = useI18n()
  return (
    <>
      <PageHero
        eyebrow={c.about.eyebrow}
        title={c.about.title}
        intro={c.about.intro}
      />
      <section className="section editorial-split">
        <div>
          <p className="eyebrow">{c.about.reasonEyebrow}</p>
          <h2>{c.about.reasonTitle}</h2>
        </div>
        <div className="rich-copy">
          <p>{c.about.p1}</p>
          <p>{c.about.p2}</p>
        </div>
      </section>
      <section className="values-section">
        <SectionHeading
          eyebrow={c.about.valuesEyebrow}
          title={c.about.valuesTitle}
          intro={c.about.valuesIntro}
          light
        />
        <div className="values-grid">
          {c.about.values.map((value, index) => (
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
  const { c } = useI18n()
  return (
    <>
      <PageHero
        eyebrow={c.leadershipPage.eyebrow}
        title={c.leadershipPage.title}
        intro={c.leadershipPage.intro}
      />
      <section className="section leadership-page">
        <div className="large-portrait">
          <img
            className="portrait-photo"
            src={media.founder}
            alt={c.leader.imageAlt}
            loading="lazy"
            decoding="async"
          />
          <p>{c.leadershipPage.caption}</p>
        </div>
        <div className="leadership-story">
          <p className="eyebrow">{c.leadershipPage.storyEyebrow}</p>
          <h2>{c.leadershipPage.storyTitle}</h2>
          <p>{c.leadershipPage.p1}</p>
          <p>{c.leadershipPage.p2}</p>
          <blockquote>
            “{c.leadershipPage.quote}”
            <small>{c.leadershipPage.quoteSmall}</small>
          </blockquote>
          <Button onClick={() => navigate("contact")}>
            {c.leadershipPage.cta}
          </Button>
        </div>
      </section>
    </>
  )
}

function ActionsPage({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <>
      <PageHero
        eyebrow={c.actionsPage.eyebrow}
        title={c.actionsPage.title}
        intro={c.actionsPage.intro}
      />
      <section className="section action-list">
        {c.actionAreas.map((area) => (
          <article key={area.number}>
            <div className="action-list-number">{area.number}</div>
            <div>
              <p className="eyebrow">{c.actionsPage.axisLabel}</p>
              <h2>{area.title}</h2>
            </div>
            <div className="rich-copy">
              <p>{area.text}</p>
              <p>{c.actionsPage.extra}</p>
              <Button variant="text" onClick={() => navigate("contact")}>
                {c.actionsPage.cta}
              </Button>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}

function PortfolioPage({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <>
      <PageHero
        eyebrow={c.portfolioPage.eyebrow}
        title={c.portfolioPage.title}
        intro={c.portfolioPage.intro}
      />
      <section className="section portfolio-page">
        <div className="portfolio-notice">
          <span>{c.portfolioPage.noticeLabel}</span>
          <p>{c.portfolioPage.noticeText}</p>
        </div>
        {c.portfolioItems.map((item, index) => (
          <article
            className={
              index % 2 ? "portfolio-project reverse" : "portfolio-project"
            }
            key={item.number}
          >
            <div className="portfolio-project-image">
              <img
                src={portfolioImageList[index]}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span>{item.number}</span>
            </div>
            <div className="portfolio-project-copy">
              <p className="eyebrow">{item.category}</p>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <div className="project-meta">
                <span>{c.portfolioPage.statusLabel}</span>
                <strong>{c.portfolioPage.statusValue}</strong>
              </div>
              <Button variant="text" onClick={() => navigate("contact")}>
                {c.portfolioPage.cta}
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
  const { c } = useI18n()
  const [filter, setFilter] = useState("all")
  return (
    <>
      <PageHero
        eyebrow={c.newsPage.eyebrow}
        title={c.newsPage.title}
        intro={c.newsPage.intro}
      />
      <section className="section news-page">
        <div className="demo-notice">
          <strong>{c.newsPage.demoTitle}</strong>
          <span>{c.newsPage.demoText}</span>
        </div>
        <div className="filters" aria-label={c.newsPage.filterLabel}>
          {c.filters.map((category) => (
            <button
              key={category.id}
              className={filter === category.id ? "active" : ""}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        <NewsGrid navigate={navigate} filter={filter} />
      </section>
    </>
  )
}

function ContactPage() {
  const { c } = useI18n()
  const form = c.contactPage.form
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState("")

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (!data.get("name") || !data.get("email") || !data.get("message")) {
      setError(form.error)
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
        eyebrow={c.contactPage.eyebrow}
        title={c.contactPage.title}
        intro={c.contactPage.intro}
      />
      <section className="section contact-layout">
        <div className="contact-aside">
          <p className="eyebrow">{c.contactPage.writeEyebrow}</p>
          <h2>{c.contactPage.writeTitle}</h2>
          <p>{c.contactPage.writeText}</p>
          <div className="contact-detail">
            <span>{c.contactPage.emailLabel}</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="contact-detail">
            <span>{c.contactPage.phoneLabel}</span>
            <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          </div>
          <div className="contact-detail">
            <span>{c.contactPage.socialLabel}</span>
            <strong>{c.contactPage.socialValue}</strong>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit} noValidate>
          <div className="field-row">
            <label>
              {form.name}
              <input name="name" type="text" placeholder={form.namePlaceholder} />
            </label>
            <label>
              {form.email}
              <input
                name="email"
                type="email"
                placeholder={form.emailPlaceholder}
              />
            </label>
          </div>
          <div className="field-row">
            <label>
              {form.organisation}
              <input
                name="organisation"
                type="text"
                placeholder={form.organisationPlaceholder}
              />
            </label>
            <label>
              {form.subject}
              <select name="subject" defaultValue={form.subjects[0].value}>
                {form.subjects.map((subject) => (
                  <option value={subject.value} key={subject.value}>
                    {subject.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label>
            {form.message}
            <textarea
              name="message"
              rows={6}
              placeholder={form.messagePlaceholder}
            />
          </label>
          {status === "error" && <p className="form-message error">{error}</p>}
          {status === "success" && (
            <p className="form-message success">{form.success}</p>
          )}
          <Button type="submit">
            {status === "loading" ? form.submitting : form.submit}
          </Button>
        </form>
      </section>
      <Faq />
    </>
  )
}

function FinalCta({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <section className="final-cta">
      <p className="eyebrow">{c.finalCta.eyebrow}</p>
      <h2>{c.finalCta.title}</h2>
      <p>{c.finalCta.text}</p>
      <Button onClick={() => navigate("contact")}>{c.finalCta.cta}</Button>
    </section>
  )
}

function Realisation() {
  const { c } = useI18n()
  return (
    <section className="section realisation">
      <div className="realisation-copy">
        <p className="eyebrow">{c.realisation.eyebrow}</p>
        <h2>{c.realisation.title}</h2>
        <p className="realisation-intro">{c.realisation.intro}</p>
        <div className="realisation-person">
          <strong>{c.realisation.name}</strong>
          <span>{c.realisation.role}</span>
        </div>
        <p className="realisation-note">{c.realisation.note}</p>
      </div>
      <div className="realisation-gallery">
        {responsableImages.map((image, index) => (
          <figure className="realisation-photo" key={image}>
            <img
              src={image}
              alt={`${c.realisation.imageAlt} ${index + 1}`}
              loading="lazy"
              decoding="async"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

function Footer({ navigate }: { navigate: (page: Page) => void }) {
  const { c } = useI18n()
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Brand light />
          <p className="footer-tagline">{c.footer.tagline}</p>
          <Newsletter />
        </div>
        <div>
          <p className="footer-label">{c.footer.navLabel}</p>
          {pageOrder.slice(0, 5).map((page) => (
            <a
              key={page.id}
              href={`#/${page.id}`}
              onClick={(event) => {
                event.preventDefault()
                navigate(page.id)
              }}
            >
              {c.nav[page.key]}
            </a>
          ))}
        </div>
        <div>
          <p className="footer-label">{c.footer.joinLabel}</p>
          <a
            href="#/contact"
            onClick={(event) => {
              event.preventDefault()
              navigate("contact")
            }}
          >
            {c.footer.collaborate}
          </a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
          <span>{c.contactPage.socialValue}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NADI</span>
        <span>{c.footer.credit}</span>
        <span>{c.footer.keywords}</span>
      </div>
    </footer>
  )
}

function Ticker() {
  const { c } = useI18n()
  const items = [...c.ticker, ...c.ticker]
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

function Approach() {
  const { c } = useI18n()
  return (
    <section className="section approach" id="approach">
      <div className="approach-head">
        <SectionHeading
          eyebrow={c.approach.eyebrow}
          title={c.approach.title}
          intro={c.approach.intro}
        />
        <span className="approach-seal">{c.approach.seal}</span>
      </div>
      <div className="approach-grid">
        {c.approach.steps.map((step) => (
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

function Faq() {
  const { c } = useI18n()
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="section faq">
      <div className="section-topline">
        <SectionHeading eyebrow={c.faq.eyebrow} title={c.faq.title} />
      </div>
      <div className="faq-list">
        {c.faq.entries.map((entry, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={entry.q}
          >
            <button
              className="faq-q"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
            >
              {entry.q}
              <span aria-hidden="true">+</span>
            </button>
            <div className="faq-a">
              <p>{entry.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Newsletter() {
  const { c } = useI18n()
  const [message, setMessage] = useState<null | "ok" | "error">(null)
  function subscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = new FormData(event.currentTarget).get("newsletter-email")
    setMessage(email && String(email).includes("@") ? "ok" : "error")
  }
  return (
    <div className="newsletter">
      <p className="footer-label">{c.footer.stayLabel}</p>
      <p className="newsletter-intro">{c.footer.newsletterIntro}</p>
      <form className="newsletter-form" onSubmit={subscribe} noValidate>
        <input
          className="newsletter-input"
          name="newsletter-email"
          type="email"
          placeholder={c.footer.newsletterPlaceholder}
          aria-label={c.footer.newsletterAria}
        />
        <button className="newsletter-submit" type="submit">
          {c.footer.subscribe}
        </button>
      </form>
      {message === "ok" && (
        <p className="newsletter-message">{c.footer.newsletterOk}</p>
      )}
      {message === "error" && (
        <p className="newsletter-message error">
          {c.footer.newsletterError}
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
  const { c } = useI18n()
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
      aria-label={c.misc.backToTop}
    >
      <ArrowIcon />
    </button>
  )
}

export default function App() {
  const { lang } = useI18n()
  const initialPage = (
    window.location.hash.replace("#/", "") || "home"
  ) as Page
  const [currentPage, setCurrentPage] = useState<Page>(
    pageIds.includes(initialPage) ? initialPage : "home",
  )
  const [introDone, setIntroDone] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  function navigate(page: Page) {
    setCurrentPage(page)
    window.location.hash = `/${page}`
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const onHashChange = () => {
      const page = window.location.hash.replace("#/", "") as Page
      if (pageIds.includes(page)) setCurrentPage(page)
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
  }, [currentPage, lang])

  return (
    <div className="app">
      {!introDone && <IntroSplash onDone={() => setIntroDone(true)} />}
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
