import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import Button from "../components/ui/Button";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import { siteImages } from "../data/siteImages";

const stats = [
  { value: "10,200+", label: "Community members worldwide" },
  { value: "4", label: "Focused learning programs" },
  { value: "24/7", label: "Community support access" },
  { value: "100%", label: "Mindset-first coaching approach" },
];

const pillars = [
  {
    title: "Find Your Purpose",
    description:
      "Discover what genuinely drives you and learn how to shape it into meaningful work. Clarity comes before strategy — we help you identify your strengths, values, and direction before you build.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Growth Mindset",
    description:
      "Develop the habits, confidence, and resilience that support long-term progress. Our coaching emphasizes inner shifts — limiting beliefs, self-doubt, and emotional blocks — as the foundation for outer results.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Practical Strategy",
    description:
      "Apply modern tools — including AI — and proven business frameworks to turn insight into action. Learn marketing basics, planning systems, and skill-building approaches you can use immediately.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const steps = [
  {
    step: "01",
    title: "Clarify & Reflect",
    text: "Start with self-discovery and emotional clarity. Understand where you are, what you want, and what's holding you back.",
  },
  {
    step: "02",
    title: "Build Mindset",
    text: "Strengthen abundance thinking, confidence, and daily habits that support consistent effort — the real driver of progress.",
  },
  {
    step: "03",
    title: "Learn Skills",
    text: "Gain practical knowledge in business planning, AI tools, and modern growth strategies through guided programs.",
  },
  {
    step: "04",
    title: "Take Action",
    text: "Move from learning to doing with community support, mentorship, and accountability — at your own pace.",
  },
];

const testimonials = [
  {
    id: 1,
    role: "Illustrative example — tech professional",
    image: siteImages.testimonials.sadhi,
    quote:
      "After years in software engineering, I wanted to share what I'd learned without leaving my values behind. Working with this community helped me shift from employee mindset to mentoring others — using AI tools and business strategy in a way that felt authentic, not rushed.",
  },
  {
    id: 2,
    role: "Illustrative example — coaching & personal growth",
    image: siteImages.testimonials.rajitha,
    quote:
      "I always sensed my personal growth work and my business goals were connected, but I didn't know how to bridge them. The coaching here helped me align inner clarity with practical steps — and build a practice that reflects who I actually am.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/90 to-bg/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/30" />
          <div className="hero-pattern absolute inset-0" aria-hidden="true" />
        </div>

        <div className="glow-orb left-1/4 top-1/4 h-72 w-72 opacity-50" aria-hidden="true" />
        <div className="glow-orb bottom-1/4 right-1/4 h-96 w-96 opacity-30" aria-hidden="true" />

        <div className="section-container relative flex min-h-[90vh] items-center py-24 lg:py-32">
          <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="animate-fade-up">
              <p className="badge">Coaching &amp; Education</p>
              <h1 className="mt-7 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]">
                Transform your mindset.{" "}
                <span className="gradient-text">Build with purpose.</span>
              </h1>
              <p className="mt-7 text-lg leading-relaxed text-text-muted sm:text-xl">
                10X Wealth Creators helps you connect inner growth with practical
                business building — through coaching, community, and skill-based
                programs designed for real-world application.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button to="/courses" size="lg">
                  Explore Courses
                </Button>
                <Button to="/about" variant="secondary" size="lg">
                  Our Story
                </Button>
              </div>
            </div>

            <div className="glass-strong animate-float rounded-3xl p-8 sm:p-10" style={{ animationDelay: "1s" }}>
              <div className="flex items-center gap-4">
                <img
                  src={siteImages.logo}
                  alt=""
                  aria-hidden="true"
                  className="h-14 w-14 rounded-2xl object-cover ring-2 ring-primary/30"
                />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    Our Mission
                  </p>
                  <p className="text-sm text-text-muted">Purpose-driven growth</p>
                </div>
              </div>
              <p className="mt-6 text-2xl font-semibold leading-snug text-text">
                Helping people find passion, purpose, and the skills to build a life
                aligned with their values.
              </p>
              <p className="mt-5 text-base leading-relaxed text-text-muted">
                Whether you&apos;re a student, employee, entrepreneur, or career changer
                — we provide the mindset, strategies, and community to support your
                growth journey.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="stat-card">
                    <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                    <p className="mt-1 text-sm leading-snug text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-8 px-4 sm:px-6">
        <div
          className="section-container glass-strong grid gap-6 rounded-3xl p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4"
          style={{ boxShadow: "var(--shadow-card-hover)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center sm:text-left ${i > 0 ? "lg:border-l lg:border-border/60 lg:pl-8" : ""}`}
            >
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="What We Offer"
          title="Mindset, purpose, and practical skills — together"
          description="Most programs teach tactics without addressing the inner work. We integrate both, because sustainable growth starts from who you are and how you think."
          align="center"
          className="mb-16"
        />
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {pillars.map((pillar, i) => (
            <article
              key={pillar.title}
              className="card card-hover group relative overflow-hidden p-8 sm:p-10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-all duration-500 group-hover:bg-primary/10"
                aria-hidden="true"
              />
              <div className="icon-box">{pillar.icon}</div>
              <h3 className="mt-7 text-xl font-bold text-text">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="section-alt border-y border-border/60">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="How It Works"
            title="A clear path from clarity to action"
            description="Our approach is structured but flexible — you move at your pace, with guidance at every stage."
            align="center"
            className="mb-16"
          />
          <div className="relative grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div
              className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent xl:block"
              aria-hidden="true"
            />
            {steps.map((item) => (
              <article key={item.step} className="card card-hover relative p-7 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
                  {item.step}
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="section-container section-padding">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="About 10X Wealth Creators"
              title="Empowering dreams, creating leaders"
              description="We are a coaching and education brand dedicated to helping individuals unlock their full potential through the right mindset, strategies, and business knowledge."
            />
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Our community brings together people who want more than quick fixes —
              they want lasting clarity, practical skills, and a supportive network.{" "}
              <em className="text-text">[Placeholder — edit this section to match your voice.]</em>
            </p>
            <Button to="/about" variant="secondary" className="mt-8">
              Learn More About Us
            </Button>
          </div>
          <div className="card overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary via-primary-hover to-primary/30" />
            <div className="p-8 sm:p-10">
              <h3 className="text-xl font-bold text-text">What makes us different</h3>
              <ul className="mt-7 space-y-5">
                {[
                  "Mindset-first coaching before tactics and tools",
                  "Spiritual and personal growth integrated with business strategy",
                  "Practical AI and modern skill-building for today's economy",
                  "Community support — you're not building alone",
                  "Honest framing — no guaranteed income or results",
                ].map((item) => (
                  <li key={item} className="flex gap-4 text-base text-text-muted">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-primary">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="section-alt border-t border-border/60">
        <div className="section-container section-padding">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Programs"
              title="Courses designed for real growth"
              description="Four focused programs covering emotional clarity, abundance mindset, self-discovery, and practical AI skills."
            />
            <Link
              to="/courses"
              className="btn-primary inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              View all courses
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Community Stories"
          title="Transformation at the intersection of inner work and action"
          description="Illustrative examples — not verified testimonials from named individuals."
          align="center"
          className="mb-16"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="card card-hover group overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative p-8 sm:p-10">
                <span
                  className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-serif text-white"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="mt-4 text-lg leading-relaxed text-text-muted">
                  {item.quote}
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm font-semibold text-primary">{item.role}</span>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-container pb-24 sm:pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-transparent" />
          <div className="glow-orb -left-20 top-0 h-64 w-64" aria-hidden="true" />
          <div className="card relative overflow-hidden border-primary/20">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="badge">Get Started</p>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                  Ready to begin your growth journey?
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  Explore our courses, connect with our community, or reach out with
                  questions. We&apos;re here to support your next step.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button to="/courses" size="lg">
                    Browse Courses
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="border-t border-border/60 bg-surface-elevated/50 p-8 backdrop-blur-sm sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Important Notice
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  10X Wealth Creators provides educational content and coaching
                  services only. We do not offer professional financial, legal, or
                  investment advice. Results mentioned are individual examples and are
                  not typical. Your outcomes depend on your effort, commitment, skills,
                  and market conditions.
                </p>
                <Link
                  to="/disclaimer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-hover"
                >
                  Read full disclaimer <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
