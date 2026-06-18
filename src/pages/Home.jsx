import { Link } from "react-router-dom";
import TiltCard from "../components/background/TiltCard";
import CourseCard from "../components/CourseCard";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import Logo from "../components/Logo";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import {
  aboutStory,
  brand,
  enrollPath,
  elitePrograms,
  mentors as mentorData,
  stats,
  whyUs,
} from "../data/siteContent";
import { siteImages } from "../data/siteImages";
import { testimonials } from "../data/testimonials";

const mentorImages = {
  sampath: siteImages.mentors.sampath,
  ram: siteImages.mentors.ram,
};

const pillarIcons = [
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
    </svg>
  ),
  (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
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
    text: "Gain practical knowledge in business planning, AI tools, automation, and modern growth strategies through guided programs.",
  },
  {
    step: "04",
    title: "Take Action",
    text: "Move from learning to doing with community support, mentorship, and accountability — at your own pace.",
  },
];

const featuredTestimonials = testimonials.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[88vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroBackground}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-bg/90 via-bg/70 to-bg/50" />
        </div>

        <div className="section-container relative flex min-h-[88vh] items-center py-20 lg:py-28">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div className="max-w-2xl animate-fade-up">
              <p className="badge">{brand.name}</p>
              <h1 className="font-display mt-6 text-[clamp(2.25rem,5vw,3.75rem)] font-bold tracking-tight text-text leading-[1.08]">
                Transforming lives by helping{" "}
                <span className="gradient-text">{brand.missionGoal}</span> find their passion
                &amp; purpose
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-muted sm:text-xl">
                Purpose-driven entrepreneurship, mindset coaching, and practical skills —
                so you can build sustainable income with clarity and confidence.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-text-muted sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Mindset &amp; self-discovery
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Expert mentorship
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Business growth tools
                </li>
              </ul>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button to={enrollPath} size="lg">
                  Start Your Journey
                </Button>
                <Button to="/courses" variant="secondary" size="lg">
                  Explore Courses
                </Button>
              </div>
            </div>

            <TiltCard
              className="glass-strong overflow-hidden rounded-3xl border-primary/15 p-0"
            >
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary-hover to-primary/30" />
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-4">
                  <Logo size="lg" />
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                      {brand.tagline}
                    </p>
                    <p className="text-sm text-text-muted">Hyderabad, India</p>
                  </div>
                </div>

                <p className="mt-6 text-xl font-semibold leading-snug text-text sm:text-2xl">
                  {brand.missionStatement}
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    "Growth mindset & emotional clarity",
                    "Business strategy & AI-powered skills",
                    "Community support on your journey",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-base text-text-muted">
                      <span className="check-badge mt-0.5 shrink-0">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="stat-card mt-8 text-center">
                  <p className="text-3xl font-bold gradient-text">{stats[0].value}</p>
                  <p className="mt-1 text-sm leading-snug text-text-muted">{stats[0].label}</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 -mt-6 px-4 sm:px-6">
        <div
          className="section-container glass-strong grid gap-8 rounded-3xl p-8 sm:grid-cols-3 sm:p-10"
          style={{ boxShadow: "var(--shadow-card-hover)" }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? "sm:border-l sm:border-border/50 sm:pl-8" : ""}`}
            >
              <p className="text-3xl font-bold gradient-text sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why 10X Wealth Creators */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Why 10X Wealth Creators?"
          title="A complete path from purpose to practical action"
          description="We integrate mindset, financial education, multiple income strategies, and entrepreneurship skills — because sustainable growth requires inner clarity and outer execution."
          align="center"
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((pillar, i) => (
            <article
              key={pillar.title}
              className="card card-hover group relative overflow-hidden p-8 sm:p-10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 transition-all duration-300 group-hover:bg-primary/10"
                aria-hidden="true"
              />
              <p className="text-sm font-bold text-primary">{pillar.step}</p>
              <div className="icon-box mt-5">{pillarIcons[i]}</div>
              <h3 className="mt-7 text-xl font-bold text-text">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Elite Programs */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Elite Programs"
            title="Transform your life with our programs"
            description="Four integrated learning paths covering passion discovery, mindset mastery, business planning, and multiple income stream strategies."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {elitePrograms.map((program) => (
              <article key={program.title} className="card card-hover p-8 sm:p-10">
                <h3 className="text-xl font-bold text-text">{program.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  {program.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to={enrollPath} size="lg">
              Discover Comprehensive Solutions
            </Button>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section-container section-padding">
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
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg shadow-lg" style={{ boxShadow: "var(--shadow-glow)" }}>
                {item.step}
              </div>
              <h3 className="mt-6 text-lg font-bold text-text">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeader
                eyebrow="About 10X Wealth Creators"
                title={aboutStory.headline}
                description={aboutStory.intro}
              />
              <p className="mt-6 text-base leading-relaxed text-text-muted">
                {aboutStory.extended}
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
                  {aboutStory.values.map((item) => (
                    <li key={item} className="flex gap-4 text-base text-text-muted">
                      <span className="check-badge mt-0.5">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Meet Your Mentors"
          title="Sampath Kumar & Ram Prasad"
          description="Expert mentorship combining growth mindset psychology and engineers-focused business strategy."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-8 md:grid-cols-2">
          {mentorData.map((mentor) => (
            <article key={mentor.name} className="card card-hover overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={mentorImages[mentor.imageKey]}
                  alt={mentor.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                  <p className="text-sm text-white/90">{mentor.role}</p>
                  <p className="mt-1 text-xs text-white/75">{mentor.credentials}</p>
                </div>
              </div>
              <p className="p-6 text-base leading-relaxed text-text-muted">{mentor.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Courses */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="In-Demand · Our Courses"
              title="Programs designed for real growth"
              description="Focused courses covering emotional clarity, abundance mindset, self-discovery, and practical AI skills — available on our learning platform."
            />
            <div className="flex flex-wrap gap-3">
              <Button to={enrollPath} size="md">
                View Enrollment Plans
              </Button>
              <Link
                to="/courses"
                className="btn-primary inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200"
              >
                View all courses
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
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
          eyebrow="Success Stories"
          title="Hear from students and professionals who transformed their lives"
          description="Stories from our community. Individual results vary — these are personal experiences, not guaranteed outcomes."
          align="center"
          className="mb-16"
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {featuredTestimonials.map((item) => (
            <blockquote key={item.id} className="card card-hover group flex flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col p-8">
                <p className="text-sm font-semibold text-primary">{item.title}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <cite className="block text-sm font-semibold not-italic text-text">
                    {item.name}
                  </cite>
                  <p className="mt-1 text-xs text-text-muted">{item.role}</p>
                  <p className="mt-2 text-xs text-primary">Mentor: {item.mentor}</p>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/testimonials" variant="secondary">
            View All Success Stories
          </Button>
        </div>
      </section>

      {/* CTA */}
      <section className="section-container pb-24 sm:pb-32">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent" />
          <div className="card relative overflow-hidden border-primary/20">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-14">
                <p className="badge">Get Started</p>
                <h2 className="font-display mt-6 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-text leading-[1.1]">
                  Confused about where to start? Let&apos;s find the right path for you.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-text-muted">
                  Reach out today or join our learning platform to take your first step
                  toward mindset growth, skill-building, and purpose-driven action.
                </p>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Button to={enrollPath} size="lg">
                    Start Your Journey
                  </Button>
                  <Button to="/contact" variant="secondary" size="lg">
                    Book a Free Call
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
                  className="mt-6 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
