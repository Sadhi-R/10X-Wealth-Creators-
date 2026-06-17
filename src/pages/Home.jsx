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
    icon: "🎯",
  },
  {
    title: "Growth Mindset",
    description:
      "Develop the habits, confidence, and resilience that support long-term progress. Our coaching emphasizes inner shifts — limiting beliefs, self-doubt, and emotional blocks — as the foundation for outer results.",
    icon: "🌱",
  },
  {
    title: "Practical Strategy",
    description:
      "Apply modern tools — including AI — and proven business frameworks to turn insight into action. Learn marketing basics, planning systems, and skill-building approaches you can use immediately.",
    icon: "📈",
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
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={siteImages.heroBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/95 via-bg/85 to-bg/70" />
        <div className="hero-pattern absolute inset-0" aria-hidden="true" />
        <div className="section-container relative section-padding">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="badge">Coaching &amp; Education</p>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Transform your mindset.{" "}
                <span className="gradient-text">Build with purpose.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-text-muted sm:text-xl">
                10X Wealth Creators helps you connect inner growth with practical
                business building — through coaching, community, and skill-based
                programs designed for real-world application.
              </p>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                Where inner growth meets practical business building. Educational
                content only — not financial, legal, or investment advice.
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

            <div className="card relative overflow-hidden p-8 sm:p-10">
              <img
                src={siteImages.logo}
                alt=""
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-32 w-32 opacity-10"
              />
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Mission
              </p>
              <p className="mt-4 text-2xl font-semibold leading-snug text-text">
                Helping people find passion, purpose, and the skills to build a
                life aligned with their values.
              </p>
              <p className="mt-5 text-base leading-relaxed text-text-muted">
                Whether you&apos;re a student, employee, entrepreneur, or career
                changer — we provide the mindset, strategies, and community to
                support your growth journey. Results depend on your effort,
                commitment, and circumstances.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-surface-elevated p-4">
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-surface">
        <div className="section-container py-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-base text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="What We Offer"
          title="Mindset, purpose, and practical skills — together"
          description="Most programs teach tactics without addressing the inner work. We integrate both, because sustainable growth starts from who you are and how you think."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="card card-hover p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-2xl">
                {pillar.icon}
              </span>
              <h3 className="mt-6 text-xl font-bold text-text">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Methodology */}
      <section className="border-y border-border bg-surface">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="How It Works"
            title="A clear path from clarity to action"
            description="Our approach is structured but flexible — you move at your pace, with guidance at every stage."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((item) => (
              <article key={item.step} className="card p-6 sm:p-8">
                <p className="text-4xl font-bold text-primary/30">{item.step}</p>
                <h3 className="mt-4 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="section-container section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="About 10X Wealth Creators"
              title="Empowering dreams, creating leaders"
              description="We are a coaching and education brand dedicated to helping individuals unlock their full potential through the right mindset, strategies, and business knowledge."
            />
            <p className="mt-6 text-base leading-relaxed text-text-muted">
              Our community brings together people who want more than quick fixes —
              they want lasting clarity, practical skills, and a supportive network.
              {" "}
              <em className="text-text">[Placeholder — edit this section to match your voice.]</em>
            </p>
            <Button to="/about" variant="secondary" className="mt-8">
              Learn More About Us
            </Button>
          </div>
          <div className="card p-8 sm:p-10">
            <h3 className="text-xl font-bold text-text">What makes us different</h3>
            <ul className="mt-6 space-y-5">
              {[
                "Mindset-first coaching before tactics and tools",
                "Spiritual and personal growth integrated with business strategy",
                "Practical AI and modern skill-building for today's economy",
                "Community support — you're not building alone",
                "Honest framing — no guaranteed income or results",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-base text-text-muted">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="border-t border-border bg-surface">
        <div className="section-container section-padding">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Programs"
              title="Courses designed for real growth"
              description="Four focused programs covering emotional clarity, abundance mindset, self-discovery, and practical AI skills."
            />
            <Link
              to="/courses"
              className="shrink-0 text-base font-semibold text-primary hover:text-primary-hover"
            >
              View all courses &rarr;
            </Link>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
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
          title="Transformation happens at the intersection of inner work and action"
          description="Illustrative examples — not verified testimonials from named individuals."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="card relative overflow-hidden">
              <div className="aspect-video w-full overflow-hidden sm:aspect-[2/1]">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8 sm:p-10">
                <span className="text-5xl leading-none text-primary/20" aria-hidden="true">
                  &ldquo;
                </span>
                <p className="mt-2 text-lg leading-relaxed text-text-muted sm:text-xl">
                  {item.quote}
                </p>
                <footer className="mt-6 text-sm font-semibold text-primary">{item.role}</footer>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-surface">
        <div className="section-container section-padding">
          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-gradient-to-br from-primary/15 to-transparent p-8 sm:p-12 lg:p-14">
                <p className="badge">Get Started</p>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-text sm:text-4xl">
                  Ready to begin your growth journey?
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  Explore our courses, connect with our community, or reach out with
                  questions. We&apos;re here to support your next step — whatever that
                  looks like for you.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button to="/courses" size="lg">
                    Browse Courses
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="border-t border-border p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-14">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Important Notice
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  10X Wealth Creators provides educational content and coaching
                  services only. We do not offer professional financial, legal, or
                  investment advice. Results mentioned are individual examples and
                  are not typical. Your outcomes depend on your effort, commitment,
                  skills, and market conditions.
                </p>
                <Link
                  to="/disclaimer"
                  className="mt-6 inline-flex text-sm font-semibold text-primary hover:text-primary-hover"
                >
                  Read full disclaimer &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
