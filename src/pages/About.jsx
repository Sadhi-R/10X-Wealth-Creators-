import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import FinalInviteSection from "../components/FinalInviteSection";
import { aboutStory, contact, mentors, pageMeta, stats } from "../data/siteContent";
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
        eyebrow="About"
        title="Who we are"
        description="Mentorship for mindset, purpose, and practical growth."
      >
        <div className="mt-8 cta-group">
          <Button to="/contact" size="lg">
            Book a Call
          </Button>
          <Button href={contact.whatsappGroup} variant="secondary" size="lg">
            Join Community
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-base text-text-muted">
          {aboutStory.subheadline}
        </p>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <h2 className="font-display text-center text-2xl font-bold text-text">Mentors</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
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
                  <div className="absolute bottom-0 p-4 text-white">
                    <h3 className="text-lg font-bold">{mentor.name}</h3>
                    <p className="text-sm text-white/90">{mentor.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalInviteSection className="pb-24 sm:pb-32" />
    </>
  );
}
