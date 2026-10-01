import { Link } from "react-router-dom";
import CourseCard from "../components/CourseCard";
import FinalInviteSection from "../components/FinalInviteSection";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import Logo from "../components/Logo";
import Reveal from "../components/ui/Reveal";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  aboutStory,
  brand,
  communityContent,
  contact,
  corePrograms,
  featuredPrograms,
  founderStory,
  impactStats,
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

const featuredTestimonials = testimonials.slice(0, 3);

export default function Home() {
  usePageMeta(pageMeta.home);

  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroBackground}
            alt="Happy family living with freedom and peace"
            className="h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/86 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/45" />
          <div className="hero-orb left-[-4rem] top-24 h-44 w-44 bg-primary/20" />
          <div className="hero-orb anim-float-delayed bottom-16 right-[-2rem] h-52 w-52 bg-[#ffe08a]/35" />
        </div>

        <div className="section-container relative flex min-h-[92svh] items-center pb-16 pt-28 sm:pb-20 sm:pt-32">
          <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            <Reveal className="min-w-0 max-w-2xl">
              <p className="badge">{brand.name}</p>
              <h1 className="font-display mt-5 text-[clamp(2.3rem,5vw,3.7rem)] font-bold tracking-tight text-text leading-[1.08]">
                {brand.heroHeadline}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-text-muted">
                {brand.heroSubheadline}
              </p>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-text-muted sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Mindset mentorship
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Business skills
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Growing community
                </li>
              </ul>
              <div className="cta-group mt-9">
                <Button to="/wealth-framework" size="lg">
                  Explore the Framework
                </Button>
                <Button href={contact.whatsappGroup} variant="secondary" size="lg">
                  Join the Community
                </Button>
              </div>
            </Reveal>

            <Reveal
              delay={120}
              className="glass-strong glossy-panel card-rich min-w-0 overflow-hidden rounded-3xl border-primary/15 shadow-[var(--shadow-card)]"
            >
              <div className="group overflow-hidden">
                <img
                  src={siteImages.heroFamily}
                  alt="A happy family enjoying freedom together"
                  className="img-zoom aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center gap-3">
                  <Logo size="md" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {brand.tagline}
                    </p>
                    <p className="text-sm text-text-muted">Hyderabad, India</p>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-text-muted">
                  {brand.missionStatement}
                </p>
                <div>
                  <p className="text-2xl font-bold gradient-text">{visionStat.value}</p>
                  <p className="mt-1 text-xs text-text-muted">{visionStat.label}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-4 sm:-mt-8">
        <Reveal className="section-container glass-strong glossy-panel grid gap-5 rounded-3xl p-6 sm:grid-cols-3 sm:gap-8 sm:p-9">
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? "sm:border-l sm:border-border/50 sm:pl-8" : ""}`}
            >
              <p className="text-3xl font-bold gradient-text sm:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section-container section-padding">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeader
              eyebrow="The Brand"
              title={founderStory.headline}
              description={founderStory.intro}
            />
            <p className="mt-5 text-base leading-relaxed text-text-muted">{founderStory.extended}</p>
            <blockquote className="mt-6 border-l-4 border-primary/40 pl-5 text-base italic leading-relaxed text-text-muted">
              &ldquo;{founderStory.quote}&rdquo;
            </blockquote>
            <Button to="/about" variant="secondary" className="mt-8">
              About 10X Wealth Creators
            </Button>
          </Reveal>
          <Reveal delay={100} className="space-y-5">
            <div className="group overflow-hidden rounded-3xl border border-border/80 shadow-[var(--shadow-card)]">
              <img
                src={siteImages.sectionMentorship}
                alt="Mentorship at 10X Wealth Creators"
                className="img-zoom aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="card card-rich p-7">
              <h3 className="text-lg font-bold text-text">What we stand for</h3>
              <ul className="mt-5 space-y-3">
                {aboutStory.values.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text-muted sm:text-base">
                    <span className="check-badge mt-0.5 shrink-0">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <Reveal>
            <SectionHeader
              eyebrow="Why 10XWC Exists"
              title="Sound familiar?"
              description="Most people are not short on ambition — they need clarity, structure, and the right mentors."
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {problemsWeSolve.map((problem, i) => (
              <Reveal key={problem.title} delay={i * 60} className="card card-hover card-rich p-6 sm:p-7">
                <h3 className="text-lg font-bold text-text">{problem.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{problem.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <Reveal>
          <SectionHeader
            eyebrow="Vision & Mission"
            title="A brand built for purposeful growth"
            description="We combine inner clarity with practical execution — so wealth and wellbeing grow together."
            align="center"
            className="mb-10"
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="card card-rich p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Vision</p>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">{visionMission.vision}</p>
          </Reveal>
          <Reveal delay={80} className="card card-rich p-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Mission</p>
            <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">{visionMission.mission}</p>
          </Reveal>
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <Reveal>
            <SectionHeader
              eyebrow="10X Wealth Framework"
              title="Five pillars from purpose to action"
              description="A clear path: purpose, mindset, financial freedom, multiple income streams, and entrepreneurship."
              align="center"
              className="mb-12"
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 50} className="card card-hover card-rich p-7">
                <p className="text-sm font-bold text-primary">{pillar.step}</p>
                <h3 className="mt-3 text-lg font-bold text-text">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-base">{pillar.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/wealth-framework" size="lg">Explore Full Framework</Button>
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <Reveal>
          <SectionHeader
            eyebrow="Your Journey"
            title="From clarity to consistent action"
            description="A simple four-step path — move at your pace with guidance when you need it."
            align="center"
            className="mb-12"
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {transformationSteps.map((item, i) => (
            <Reveal key={item.step} delay={i * 60} className="card card-hover p-6">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                {item.step}
              </div>
              <h3 className="mt-5 text-lg font-bold text-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <Reveal>
            <SectionHeader
              eyebrow="Under 10X Wealth Creators"
              title="Flagship programs in our ecosystem"
              description="Magical Mornings and Dhruva Foundation serve different stages of the same growth journey."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featuredPrograms.map((program, i) => (
              <Reveal
                key={program.id}
                delay={i * 80}
                as="a"
                href={program.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover card-rich group flex flex-col p-7 sm:p-8"
              >
                <span className="badge w-fit">{program.badge}</span>
                <h3 className="font-display mt-4 text-2xl font-bold text-text group-hover:text-primary">{program.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{program.tagline}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">{program.description}</p>
                <span className="mt-6 text-sm font-bold text-primary">{program.cta} →</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <Reveal>
          <SectionHeader
            eyebrow="Mentors"
            title="Sampath Kumar & Ram Prasad"
            description="Psychology-backed mindset coaching meets engineers-focused business strategy."
            align="center"
            className="mb-12"
          />
        </Reveal>
        <div className="grid gap-7 md:grid-cols-2">
          {mentorData.map((mentor, i) => (
            <Reveal key={mentor.name} delay={i * 80} className="card card-hover overflow-hidden">
              <div className="group relative aspect-[16/10] overflow-hidden">
                <img
                  src={mentorImages[mentor.imageKey]}
                  alt={mentor.name}
                  className="img-zoom h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                  <p className="text-sm text-white/90">{mentor.role}</p>
                  <p className="mt-1 text-xs text-white/75">{mentor.credentials}</p>
                </div>
              </div>
              <p className="p-6 text-base leading-relaxed text-text-muted">{mentor.bio}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/contact" size="lg">Book a Discovery Call</Button>
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <Reveal>
            <SectionHeader
              eyebrow="Learning Paths"
              title="Programs built for real life"
              description="Passion discovery, mindset mastery, business planning, and multiple income strategies."
              align="center"
              className="mb-10"
            />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {corePrograms.map((program, i) => (
              <Reveal key={program.title} delay={i * 50} className="card card-hover card-rich p-7">
                <h3 className="text-lg font-bold text-text">{program.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-text-muted">{program.description}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/courses" size="lg">Explore All Programs</Button>
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <Reveal>
          <SectionHeader
            eyebrow="Success Stories"
            title="Voices from the community"
            description="Personal journeys from our members. Results vary — these are experiences, not guarantees."
            align="center"
            className="mb-12"
          />
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredTestimonials.map((item, i) => (
            <Reveal key={item.id} delay={i * 70} className="card card-hover flex flex-col overflow-hidden">
              <div className="group relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="img-zoom h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-sm font-semibold text-primary">{item.title}</p>
                <p className="mt-3 flex-1 text-base leading-relaxed text-text-muted">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-5 border-t border-border pt-4">
                  <cite className="block text-sm font-semibold not-italic text-text">{item.name}</cite>
                  <p className="mt-1 text-xs text-text-muted">{item.role}</p>
                </footer>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/testimonials" variant="secondary">View All Stories</Button>
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                eyebrow="Community"
                title={communityContent.headline}
                description={communityContent.description}
              />
            </Reveal>
            <Reveal delay={80} className="space-y-4">
              {communityContent.highlights.map((item) => (
                <div key={item} className="card flex gap-4 p-5">
                  <span className="check-badge mt-0.5 shrink-0">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-base text-text-muted">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
          <div className="cta-group mt-10 justify-center">
            <Button href={contact.whatsappGroup} size="lg">Join WhatsApp Community</Button>
            <Button to="/community" variant="secondary" size="lg">Learn About Community</Button>
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Courses"
            title="Start with focused learning"
            description="Emotional clarity, abundance mindset, self-discovery, and AI tools for growth."
          />
          <Button to="/courses" variant="secondary" className="w-full sm:w-auto">
            View all courses →
          </Button>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {courses.slice(0, 4).map((course, i) => (
            <Reveal key={course.slug} delay={i * 60}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-8">
        <FinalInviteSection />
        <div className="section-container mt-6 max-w-3xl pb-24 text-center sm:pb-28">
          <p className="text-sm leading-relaxed text-text-muted">
            10X Wealth Creators provides educational content and coaching only.
            We do not offer financial, legal, or investment advice.{" "}
            <Link to="/disclaimer" className="font-semibold text-primary hover:text-primary-hover">
              Read disclaimer
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
