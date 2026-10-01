import Button from "../components/ui/Button";
import FinalInviteSection from "../components/FinalInviteSection";
import PageHero from "../components/ui/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { pageMeta, whyUs } from "../data/siteContent";

export default function WealthFramework() {
  usePageMeta(pageMeta.wealthFramework);

  return (
    <>
      <PageHero
        eyebrow="Framework"
        title="Five pillars. One path."
        description="Mindset first. Then skills, income, and action."
      >
        <div className="mt-8 cta-group">
          <Button to="/courses" size="lg">
            View Programs
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Call
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((pillar) => (
            <article key={pillar.title} className="card p-6">
              <p className="text-sm font-bold text-primary">{pillar.step}</p>
              <h3 className="mt-2 text-lg font-bold text-text">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {pillar.description.length > 110
                  ? `${pillar.description.slice(0, 110).trim()}…`
                  : pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <FinalInviteSection className="section-alt pb-24 sm:pb-32" />
    </>
  );
}
