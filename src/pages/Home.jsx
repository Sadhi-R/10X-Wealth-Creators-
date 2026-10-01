import { Link } from "react-router-dom";
import FinalInviteSection from "../components/FinalInviteSection";
import Button from "../components/ui/Button";
import Logo from "../components/Logo";
import SectionHeader from "../components/ui/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  brand,
  contact,
  featuredPrograms,
  impactStats,
  mentors as mentorData,
  pageMeta,
} from "../data/siteContent";
import { siteImages } from "../data/siteImages";
import { testimonials } from "../data/testimonials";

const mentorImages = {
  sampath: siteImages.mentors.sampath,
  ram: siteImages.mentors.ram,
};

const featuredTestimonials = testimonials.slice(0, 2);

export default function Home() {
  usePageMeta(pageMeta.home);

  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteImages.heroBackground}
            alt="Happy family living with freedom and peace"
            className="h-full w-full object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40" />
        </div>

        <div className="section-container relative flex min-h-[88svh] items-center pb-14 pt-28 sm:pb-16 sm:pt-32">
          <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="min-w-0 max-w-xl">
              <p className="badge">{brand.name}</p>
              <h1 className="font-display mt-5 text-[clamp(2.2rem,5vw,3.5rem)] font-bold tracking-tight text-text leading-[1.08]">
                {brand.heroHeadline}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
                {brand.heroSubheadline}
              </p>
              <div className="cta-group mt-8">
                <Button to="/wealth-framework" size="lg">
                  Start Your Journey
                </Button>
                <Button href={contact.whatsappGroup} variant="secondary" size="lg">
                  Join Community
                </Button>
              </div>
            </div>

            <div className="glass-strong min-w-0 overflow-hidden rounded-3xl border-primary/15 shadow-[var(--shadow-card)]">
              <img
                src={siteImages.heroFamily}
                alt="A happy family enjoying freedom together"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="flex items-center gap-3 p-5">
                <Logo size="md" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {brand.tagline}
                  </p>
                  <p className="text-sm text-text-muted">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-4 sm:-mt-8">
        <div className="section-container glass-strong grid gap-4 rounded-3xl p-5 sm:grid-cols-3 sm:gap-6 sm:p-8">
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${i > 0 ? "sm:border-l sm:border-border/50 sm:pl-6" : ""}`}
            >
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-container section-padding">
        <SectionHeader title="Our programs" description="Two paths. One ecosystem." />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featuredPrograms.map((program) => (
            <a
              key={program.id}
              href={program.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover group flex flex-col p-6"
            >
              <span className="badge w-fit">{program.badge}</span>
              <h3 className="font-display mt-3 text-xl font-bold text-text group-hover:text-primary">
                {program.name}
              </h3>
              <p className="mt-1 text-sm font-semibold text-primary">{program.tagline}</p>
              <span className="mt-5 text-sm font-bold text-primary">
                {program.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader title="Your mentors" description="Clarity + business strategy." align="center" />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {mentorData.map((mentor) => (
              <article key={mentor.name} className="card overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={mentorImages[mentor.imageKey]}
                    alt={mentor.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{mentor.name}</h3>
                    <p className="text-sm text-white/90">{mentor.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/contact" size="lg">
              Book a Call
            </Button>
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <SectionHeader title="Stories" description="Real people. Real journeys." align="center" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featuredTestimonials.map((item) => (
            <blockquote key={item.id} className="card p-6">
              <p className="text-base leading-relaxed text-text-muted">
                &ldquo;{item.quote.length > 140 ? `${item.quote.slice(0, 140).trim()}…` : item.quote}&rdquo;
              </p>
              <footer className="mt-4 text-sm font-semibold text-text">
                {item.name}
                <span className="mt-0.5 block text-xs font-normal text-text-muted">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/testimonials" variant="secondary">
            More Stories
          </Button>
        </div>
      </section>

      <section className="pb-8">
        <FinalInviteSection />
        <div className="section-container mt-4 max-w-2xl pb-20 text-center sm:pb-24">
          <p className="text-xs text-text-muted">
            Education &amp; coaching only — not financial advice.{" "}
            <Link to="/disclaimer" className="font-semibold text-primary hover:text-primary-hover">
              Disclaimer
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
