import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import PlanCards from "../components/PlanCards";
import SectionHeader from "../components/ui/SectionHeader";
import {
  classplusPlatformUrl,
  mobileAppUrl,
} from "../data/siteContent";

export default function Plans() {
  return (
    <>
      <PageHero
        eyebrow="Enroll & Learn"
        title="Silver, Gold & Diamond — choose your path"
        description="Every plan is a step forward. Start with mindset clarity, build your business with proven tools, or unlock premium 1-on-1 mentorship. Secure enrollment via Razorpay."
      />

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
