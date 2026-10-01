import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import FinalInviteSection from "../components/FinalInviteSection";
import {
  aboutStory,
  contact,
  founderStory,
  mentors,
  pageMeta,
  stats,
  visionMission,
} from "../data/siteContent";
import { siteImages } from "../data/siteImages";
import { usePageMeta } from "../hooks/usePageMeta";

const mentorImages = {
  sampath: siteImages.mentors.sampath,
  ram: siteImages.mentors.ram,
};

export default function About() {
  usePageMeta(pageMeta.about);

  return (
    <>
      <PageHero
        eyebrow="About 10X Wealth Creators"
        title={aboutStory.headline}
        description={aboutStory.subheadline}
      >
        <div className="mt-8 cta-group">
          <Button to="/wealth-framework" size="lg">
            Explore the Framework
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Discovery Call
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeader
              eyebrow="Our Story"
              title={founderStory.headline}
              description={founderStory.intro}
            />
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              {founderStory.extended}
            </p>
            <blockquote className="mt-6 border-l-4 border-primary/40 pl-5 text-base italic leading-relaxed text-text-muted">
              &ldquo;{founderStory.quote}&rdquo;
            </blockquote>
          </div>
          <div className="space-y-5">
            <div className="overflow-hidden rounded-3xl border border-border/80">
              <img
                src={siteImages.sectionMentorship}
                alt="10X Wealth Creators mentorship"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="card p-7">
              <h3 className="text-lg font-bold text-text">Our values</h3>
              <ul className="mt-5 space-y-3">
                {aboutStory.values.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-text-muted sm:text-base">
                    <span className="check-badge mt-0.5 shrink-0">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="card p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Vision</p>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                {visionMission.vision}
              </p>
            </div>
            <div className="card p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Mission</p>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
                {visionMission.mission}
              </p>
            </div>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-6 text-center">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Mentors"
          title="Sampath Kumar & Ram Prasad"
          description="Mindset psychology and practical business strategy under one brand."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-7 md:grid-cols-2">
          {mentors.map((mentor) => (
            <article key={mentor.name} className="card overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={mentorImages[mentor.imageKey]}
                  alt={mentor.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold">{mentor.name}</h3>
                  <p className="text-sm text-white/90">{mentor.role}</p>
                  <p className="mt-1 text-xs text-white/75">{mentor.credentials}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-base leading-relaxed text-text-muted">{mentor.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {mentor.focus.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-primary/20 bg-accent-soft px-3 py-1 text-xs font-medium text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="card p-8 sm:p-10">
            <h2 className="text-xl font-bold text-text">Visit & connect</h2>
            <p className="mt-3 max-w-2xl text-base text-text-muted">
              Based in Hyderabad. Reach out anytime — we help you find the right starting point.
            </p>
            <address className="mt-6 space-y-2 text-base not-italic text-text-muted">
              <p>
                {contact.address.line1}, {contact.address.line2}, {contact.address.city}
              </p>
              <p>
                <a href={contact.phoneHref} className="font-semibold text-primary hover:text-primary-hover">
                  {contact.phone}
                </a>
                {" · "}
                <a href={`mailto:${contact.email}`} className="font-semibold text-primary hover:text-primary-hover">
                  {contact.email}
                </a>
              </p>
            </address>
            <Button to="/contact" className="mt-7">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <FinalInviteSection className="pb-24 sm:pb-32" />
    </>
  );
}
