import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import FinalInviteSection from "../components/FinalInviteSection";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import Logo from "../components/Logo";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  aboutStory,
  brand,
  communityContent,
  contact,
  corePrograms,
  faqs,
  featuredPrograms,
  founderStory,
  impactStats,
  learningResources,
  mentors as mentorData,
  pageMeta,
  problemsWeSolve,
  transformationSteps,
  visionMission,
  visionStat,
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

const featuredTestimonials = testimonials.slice(0, 3);
const homeFaqs = faqs.slice(0, 4);

export default function Home() {
  usePageMeta(pageMeta.home);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroBackground}
            alt="10X Wealth Creators community and mentorship"
            className="h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00102f]/92 via-[#001848]/72 to-[#001848]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00102f]/80 via-transparent to-[#00102f]/40" />
        </div>

        <div className="section-container relative flex min-h-[100svh] items-center pb-16 pt-28 sm:pb-20 sm:pt-32">
          <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <div className="min-w-0 max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#FFA800] backdrop-blur-sm sm:px-4 sm:text-xs">
                {brand.name}
              </p>
              <h1 className="font-display mt-6 text-[clamp(2.35rem,5.5vw,3.9rem)] font-bold tracking-tight text-white leading-[1.08]">
                {brand.heroHeadline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
                {brand.heroSubheadline}
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/75 sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFA800]" />
                  15+ years mentorship
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFA800]" />
                  20+ programs
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFA800]" />
                  1,000+ community members
                </li>
              </ul>

              <div className="cta-group mt-10">
                <Button to="/wealth-framework" size="lg">
                  Start Your Journey
                </Button>
                <Button
                  href={contact.whatsappGroup}
                  variant="secondary"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-[#001848]"
                >
                  Join the Community
                </Button>
              </div>
              <p className="mt-6">
                <Link
                  to="/testimonials"
                  className="text-sm font-semibold text-white/80 underline-offset-4 transition hover:text-[#FFA800] hover:underline"
                >
                  Watch Success Stories →
                </Link>
              </p>
            </div>

            <div className="hidden min-w-0 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-0 shadow-[0_24px_64px_rgba(0,16,47,0.45)] backdrop-blur-md sm:block">
              <img
                src={siteImages.heroMentorship}
                alt="Mentorship space in Hyderabad"
                className="aspect-[4/3] h-auto w-full object-cover lg:aspect-[5/4]"
              />
              <div className="space-y-3 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <Logo size="md" variant="white" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#FFA800]">
                      {brand.tagline}
                    </p>
                    <p className="text-sm text-white/70">Hyderabad, India</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                  {brand.missionStatement}
                </p>
                <p className="text-2xl font-bold text-[#FFA800]">{visionStat.value}</p>
                <p className="text-xs text-white/65">{visionStat.label}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact stats */}
      <section className="relative z-10 mt-4 sm:-mt-6">
        <div className="section-container glass-strong glossy-panel grid gap-6 rounded-3xl p-6 sm:grid-cols-3 sm:gap-8 sm:p-10">
          {impactStats.map((stat, i) => (
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

      {/* Featured sub-programs */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Under 10X Wealth Creators"
          title="Our flagship programs"
          description="Magical Mornings and Dhruva Foundation are part of the 10X Wealth Creators ecosystem — each designed for a different stage of your growth journey."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredPrograms.map((program) => (
            <a
              key={program.id}
              href={program.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex flex-col p-6 sm:p-8"
            >
              <span className="badge w-fit">{program.badge}</span>
              <h3 className="font-display mt-4 text-2xl font-bold text-text group-hover:text-primary">
                {program.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary">{program.tagline}</p>
              <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
                {program.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">
                {program.cta}
                <span aria-hidden>→</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Problems we solve */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="The Challenge"
          title="Sound familiar?"
          description="Most people don't lack ambition — they lack clarity, structure, and support. We built 10X Wealth Creators to fill that gap."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {problemsWeSolve.map((problem) => (
            <article key={problem.title} className="card card-hover p-6 sm:p-8">
              <h3 className="text-xl font-bold text-text">{problem.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{problem.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Vision</p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">{visionMission.vision}</p>
            </div>
            <div className="card p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our Mission</p>
              <p className="mt-4 text-lg leading-relaxed text-text-muted">{visionMission.mission}</p>
            </div>
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-text-muted">
            {visionMission.movement}
          </p>
        </div>
      </section>

      {/* Wealth Framework */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="The 10X Wealth Framework"
          title="A complete path from purpose to practical action"
          description="We integrate mindset, financial education, multiple income strategies, and entrepreneurship skills — because sustainable growth requires inner clarity and outer execution."
          align="center"
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.slice(0, 3).map((pillar, i) => (
            <article key={pillar.title} className="card card-hover glossy-panel p-8 sm:p-10">
              <p className="text-sm font-bold text-primary">{pillar.step}</p>
              <div className="icon-box mt-5">{pillarIcons[i]}</div>
              <h3 className="mt-7 text-xl font-bold text-text">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{pillar.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/wealth-framework" size="lg">
            Explore the Full Framework
          </Button>
        </div>
      </section>

      {/* Transformation journey */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Transformation Journey"
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
            {transformationSteps.map((item) => (
              <article key={item.step} className="card card-hover relative p-7 sm:p-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg shadow-lg"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  {item.step}
                </div>
                <h3 className="mt-6 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="section-container section-padding">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title={founderStory.headline}
              description={founderStory.intro}
            />
            <p className="mt-6 text-base leading-relaxed text-text-muted">{founderStory.extended}</p>
            <blockquote className="mt-6 border-l-4 border-primary/40 pl-6 text-base italic leading-relaxed text-text-muted">
              &ldquo;{founderStory.quote}&rdquo;
            </blockquote>
            <Button to="/about" variant="secondary" className="mt-8">
              Meet the Founders
            </Button>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border/80 shadow-[var(--shadow-card)]">
              <img
                src={siteImages.sectionMentorship}
                alt="Mentorship session with 10X Wealth Creators"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
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
      <section className="section-alt">
        <div className="section-container section-padding">
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
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white sm:p-6">
                    <h3 className="text-lg font-bold sm:text-xl">{mentor.name}</h3>
                    <p className="text-sm text-white/90">{mentor.role}</p>
                    <p className="mt-1 text-xs text-white/75">{mentor.credentials}</p>
                  </div>
                </div>
                <p className="p-6 text-base leading-relaxed text-text-muted">{mentor.bio}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact" size="lg">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Core programs */}
      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Core Learning Paths"
          title="Programs built for real life"
          description="Four integrated learning paths covering passion discovery, mindset mastery, business planning, and multiple income stream strategies."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {corePrograms.map((program) => (
            <article key={program.title} className="card card-hover p-8 sm:p-10">
              <h3 className="text-xl font-bold text-text">{program.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{program.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/courses" size="lg">
            Explore All Programs
          </Button>
        </div>
      </section>

      {/* Success stories */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Success Stories"
            title="Hear from people who transformed their journey"
            description="Stories from our community. Individual results vary — these are personal experiences, not guaranteed outcomes."
            align="center"
            className="mb-16"
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredTestimonials.map((item) => (
              <blockquote key={item.id} className="card card-hover flex flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover object-top"
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
        </div>
      </section>

      {/* Community */}
      <section className="section-container section-padding">
        <div className="grid min-w-0 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <SectionHeader
              eyebrow="Community"
              title={communityContent.headline}
              description={communityContent.description}
            />
          </div>
          <ul className="min-w-0 space-y-4">
            {communityContent.highlights.map((item) => (
              <li key={item} className="card flex gap-4 p-5">
                <span className="check-badge mt-0.5 shrink-0">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-base text-text-muted">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="cta-group mt-10 justify-center sm:justify-center">
          <Button href={contact.whatsappGroup} size="lg">
            Join WhatsApp Community
          </Button>
          <Button to="/community" variant="secondary" size="lg">
            Learn About Community
          </Button>
        </div>
      </section>

      {/* Learning resources */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Start Learning"
            title="Free ways to begin your journey"
            description="Explore our framework, watch teachings, or talk to our team — no enrollment required."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {learningResources.map((resource) => (
              <article key={resource.title} className="card card-hover flex flex-col p-8">
                <h3 className="text-lg font-bold text-text">{resource.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-text-muted">
                  {resource.description}
                </p>
                {resource.external ? (
                  <Button href={resource.href} variant="secondary" className="mt-6 w-fit">
                    {resource.cta}
                  </Button>
                ) : (
                  <Button to={resource.href} variant="secondary" className="mt-6 w-fit">
                    {resource.cta}
                  </Button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Courses preview */}
      <section className="section-container section-padding">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Our Courses"
            title="Programs designed for real growth"
            description="Focused courses covering emotional clarity, abundance mindset, self-discovery, and practical AI skills."
          />
          <Button to="/courses" variant="secondary" className="w-full sm:w-auto">
            View all courses &rarr;
          </Button>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="FAQs"
            title="Common questions"
            description="Quick answers before you take the next step."
            align="center"
            className="mb-12"
          />
          <div className="mx-auto max-w-3xl space-y-4">
            {homeFaqs.map((item) => (
              <details key={item.question} className="card group p-6">
                <summary className="cursor-pointer list-none pr-1 text-base font-semibold text-text sm:text-lg [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-3 sm:gap-4">
                    <span className="min-w-0 text-left">{item.question}</span>
                    <span
                      className="shrink-0 text-primary transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/faq" variant="secondary">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      {/* Final invite */}
      <section className="pb-8">
        <FinalInviteSection />
        <div className="section-container mt-6 max-w-3xl pb-24 text-center sm:pb-32">
          <p className="text-sm leading-relaxed text-text-muted">
            10X Wealth Creators provides educational content and coaching services only.
            We do not offer professional financial, legal, or investment advice.{" "}
            <Link to="/disclaimer" className="font-semibold text-primary hover:text-primary-hover">
              Read full disclaimer
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
