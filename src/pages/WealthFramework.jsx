import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import FinalInviteSection from "../components/FinalInviteSection";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { usePageMeta } from "../hooks/usePageMeta";
import { pageMeta, transformationSteps, whyUs } from "../data/siteContent";
import { Link } from "react-router-dom";

export default function WealthFramework() {
  usePageMeta(pageMeta.wealthFramework);

  return (
    <>
      <PageHero
        eyebrow="The 10X Wealth Framework"
        title="Inner clarity plus outer execution"
        description="Most people chase tactics. We start with identity. Our five-pillar framework integrates mindset with practical wealth-building skills."
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
          title="A complete path from purpose to action"
          description="Each pillar builds on the last. Enter at any stage — lasting results come from integrating all five."
          align="center"
          className="mb-12"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((pillar) => (
            <article key={pillar.title} className="card card-hover p-7 sm:p-8">
              <p className="text-sm font-bold text-primary">{pillar.step}</p>
              <h3 className="mt-3 text-xl font-bold text-text">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Transformation Journey"
            title="Four steps from clarity to action"
            description="Structured, flexible, and mentor-supported — you move at your pace."
            align="center"
            className="mb-12"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {transformationSteps.map((item) => (
              <article key={item.step} className="card p-6">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-fg"
                  style={{ boxShadow: "var(--shadow-glow)" }}
                >
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="card border-primary/20 bg-accent-soft/30 p-8 sm:p-10">
          <h2 className="text-xl font-bold text-text sm:text-2xl">Educational content only</h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
            The 10X Wealth Framework is a coaching and education model. We do not guarantee
            income or financial outcomes. Results depend on your effort, skills, and market
            conditions.{" "}
            <Link to="/disclaimer" className="font-semibold text-primary hover:text-primary-hover">
              Read full disclaimer
            </Link>
          </p>
          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
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
