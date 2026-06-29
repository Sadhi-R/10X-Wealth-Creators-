import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import PlanCards from "../components/PlanCards";
import SectionHeader from "../components/ui/SectionHeader";
import {
  classplusPlatformUrl,
  contact,
  mobileAppUrl,
  pageMeta,
} from "../data/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Plans() {
  usePageMeta(pageMeta.plans);

  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Become a member when you're ready"
        description="Silver, Gold, and Diamond are structured paths — not just price tiers. Start with mindset clarity, build your business, or go all-in with 1-on-1 mentorship. Book a call if you're unsure which fits."
      >
        <div className="mt-8 cta-group">
          <Button href={contact.phoneHref} size="lg">
            Book a Discovery Call
          </Button>
          <Button to="/faq" variant="secondary" size="lg">
            Read FAQs
          </Button>
        </div>
      </PageHero>

      <section className="section-container pb-8 pt-4">
        <PlanCards variant="full" showProgression />
      </section>

      <section className="section-container section-padding pt-0">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card glossy-panel border-primary/20 p-8 sm:p-10">
            <SectionHeader
              eyebrow="After Enrollment"
              title="Access programs on ClassPlus"
              description="Once payment is complete, log in to our ClassPlus learning platform for course materials, recordings, worksheets, and community resources."
            />
            <Button href={classplusPlatformUrl} variant="secondary" className="mt-6">
              Go to ClassPlus Web &rarr;
            </Button>
          </div>

          <div className="card glossy-panel border-primary/20 p-8 sm:p-10">
            <SectionHeader
              eyebrow="Mobile App"
              title="Learn on the go"
              description="Download the 10X Wealth Creators app on Google Play — take courses, track progress, and stay connected with your learning journey from your phone."
            />
            <Button href={mobileAppUrl} className="mt-6">
              Get the Android App &rarr;
            </Button>
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-text-muted">
          Payments are processed securely via Razorpay. 10X Wealth Creators provides
          educational coaching only — not financial, legal, or investment advice. Results
          vary; no income or success guarantees. See our{" "}
          <Link to="/terms-and-conditions" className="font-semibold text-primary hover:text-primary-hover">
            Terms &amp; Conditions
          </Link>
          ,{" "}
          <Link to="/refund-policy" className="font-semibold text-primary hover:text-primary-hover">
            Refund Policy
          </Link>
          , and{" "}
          <Link to="/disclaimer" className="font-semibold text-primary hover:text-primary-hover">
            Disclaimer
          </Link>{" "}
          for details.
        </p>
      </section>
    </>
  );
}
