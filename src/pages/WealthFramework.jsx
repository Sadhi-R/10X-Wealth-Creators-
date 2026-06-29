import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import FinalInviteSection from "../components/FinalInviteSection";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import { pageMeta, transformationSteps, whyUs } from "../data/siteContent";

const pillarIcons = [
  "purpose",
  "mindset",
  "freedom",
  "income",
  "entrepreneurship",
];

export default function WealthFramework() {
  usePageMeta(pageMeta.wealthFramework);

  return (
    <>
      <PageHero
        eyebrow="The 10X Wealth Framework"
        title="Inner clarity plus outer execution"
        description="Most people chase tactics. We start with identity. Our five-pillar framework integrates mindset transformation with practical wealth-building skills — because sustainable growth requires both."
      >
        <div className="mt-8 cta-group">
          <Button to="/courses" size="lg">
            Explore Programs
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Discovery Call
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Five Pillars"
          title="A complete path from purpose to practical action"
          description="Each pillar builds on the last. You can enter at any stage, but lasting results come from integrating all five."
          align="center"
          className="mb-16"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((pillar) => (
            <article key={pillar.title} className="card card-hover p-8 sm:p-10">
              <p className="text-sm font-bold text-primary">{pillar.step}</p>
              <h3 className="mt-4 text-xl font-bold text-text">{pillar.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
        <p className="sr-only">Framework pillars: {pillarIcons.join(", ")}</p>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Transformation Journey"
            title="Four steps from clarity to action"
            description="Our methodology is structured but flexible — you move at your pace, with guidance at every stage."
            align="center"
            className="mb-16"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {transformationSteps.map((item) => (
              <article key={item.step} className="card card-hover p-7 sm:p-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg"
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

      <section className="section-container section-padding">
        <div className="card border-primary/20 bg-accent-soft/30 p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-text">Educational content only</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted">
            The 10X Wealth Framework is a coaching and education model. We do not guarantee
            any specific income or financial outcome. Your results depend on your effort,
            commitment, skills, and market conditions.{" "}
            <Link to="/disclaimer" className="font-semibold text-primary hover:text-primary-hover">
              Read full disclaimer
            </Link>
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Mindset-first before tactics",
              "Purpose-driven entrepreneurship",
              "Practical AI and automation skills",
              "Community accountability",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base text-text-muted">
                <span className="check-badge mt-0.5 shrink-0">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalInviteSection className="section-alt pb-24 sm:pb-32" />
    </>
  );
}
