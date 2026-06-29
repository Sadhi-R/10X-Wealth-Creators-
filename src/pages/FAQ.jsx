import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import FinalInviteSection from "../components/FinalInviteSection";
import PageHero from "../components/ui/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { enrollPath, faqs, pageMeta } from "../data/siteContent";

export default function FAQ() {
  usePageMeta(pageMeta.faq);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Clear answers about our programs, membership, community, and what to expect from 10X Wealth Creators."
      >
        <div className="mt-8 cta-group">
          <Button to="/contact" size="lg">
            Still have questions? Contact us
          </Button>
          <Button to={enrollPath} variant="secondary" size="lg">
            View Membership Plans
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((item) => (
            <details key={item.question} className="card group p-6 sm:p-8">
              <summary className="cursor-pointer list-none text-base font-bold text-text sm:text-lg [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-3 sm:gap-4">
                  <span className="min-w-0 text-left">{item.question}</span>
                  <span
                    className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-text-muted">
          For legal details, see our{" "}
          <Link to="/disclaimer" className="font-semibold text-primary hover:text-primary-hover">
            Disclaimer
          </Link>
          ,{" "}
          <Link to="/refund-policy" className="font-semibold text-primary hover:text-primary-hover">
            Refund Policy
          </Link>
          , and{" "}
          <Link to="/terms-and-conditions" className="font-semibold text-primary hover:text-primary-hover">
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </section>

      <FinalInviteSection className="section-alt pb-24 sm:pb-32" />
    </>
  );
}
