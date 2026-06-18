import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import {
  aboutStory,
  enrollPath,
  contact,
  mentors,
  stats,
} from "../data/siteContent";
import { siteImages } from "../data/siteImages";

const mentorImages = {
  sampath: siteImages.mentors.sampath,
  ram: siteImages.mentors.ram,
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={aboutStory.headline}
        description={aboutStory.subheadline}
      >
        <div className="mt-8">
          <Button to={enrollPath} size="lg">
            Start Your Journey With Us
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Mission"
              title="Empowering you to achieve financial freedom and growth"
              description="Transforming mindsets, creating wealth skills, and unlocking success through education and coaching."
            />
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              {aboutStory.intro}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              {aboutStory.extended}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              Through expert mentorship, proven strategies, and a powerful community,
              we guide you on the path to personal growth and practical business
              building — with honesty about what coaching can and cannot guarantee.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card overflow-hidden">
              <img
                src={siteImages.heroBackground}
                alt="10X Wealth Creators community"
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>
            <div className="card p-8 sm:p-10">
              <h3 className="text-xl font-bold text-text">Our values</h3>
              <ul className="mt-6 space-y-5">
                {aboutStory.values.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-text-muted">
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
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="card p-6 text-center sm:p-8">
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="mt-2 text-sm text-text-muted sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Mentors"
            title="Sampath Kumar & Ram Prasad"
            description="At 10X Wealth Creators, we believe true success starts with the right mindset. Our mentors combine psychology-backed growth coaching with engineers-focused business strategy."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {mentors.map((mentor) => (
              <article key={mentor.name} className="card card-hover overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
                  <img
                    src={mentorImages[mentor.imageKey]}
                    alt={mentor.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-text">{mentor.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{mentor.role}</p>
                  <p className="mt-1 text-xs text-text-muted">{mentor.credentials}</p>
                  <p className="mt-5 text-base leading-relaxed text-text-muted">{mentor.bio}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
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
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="card border-primary/20 bg-accent-soft/30 p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-text">Educational content only</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted">
            10X Wealth Creators provides educational content and coaching services only
            and does not offer professional financial, legal, or investment advice. We
            do not guarantee any specific income or financial outcome. Your results
            depend on your effort, commitment, skills, and market conditions.
          </p>
        </div>
      </section>

      <section className="section-container pb-24 sm:pb-32">
        <div className="card p-8 sm:p-12">
          <SectionHeader
            eyebrow="Visit Us"
            title="Get in touch"
            description="Confused about where to start? Reach out and we'll help you find the right path."
          />
          <address className="mt-8 space-y-3 text-base not-italic leading-relaxed text-text-muted">
            <p>
              {contact.address.line1}
              <br />
              {contact.address.line2}
              <br />
              {contact.address.city}
            </p>
            <p>
              <a href={contact.phoneHref} className="text-primary hover:text-primary-hover">
                {contact.phone}
              </a>
              {" · "}
              <a href={contact.phoneAltHref} className="text-primary hover:text-primary-hover">
                {contact.phoneAlt}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${contact.email}`}
                className="text-primary hover:text-primary-hover"
              >
                {contact.email}
              </a>
            </p>
          </address>
          <Button to="/contact" variant="secondary" className="mt-8">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
