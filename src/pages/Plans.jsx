import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import SectionHeader from "../components/ui/SectionHeader";
import {
  classplusPlatformUrl,
  enrollmentPlans,
  mobileAppUrl,
  planProgression,
} from "../data/siteContent";

export default function Plans() {
  return (
    <>
      <PageHero
        eyebrow="Enroll & Learn"
        title="Choose your membership plan"
        description="Three tiers designed as a clear progression — from mindset clarity, to business execution, to premium 1-on-1 mentorship with Sampath Kumar and Ram Prasad."
      />

      <section className="section-container section-padding">
        <div className="card mb-12 border-primary/20 bg-accent-soft/40 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            How the plans work
          </p>
          <p className="mt-3 text-base leading-relaxed text-text-muted sm:text-lg">
            {planProgression}
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {enrollmentPlans.map((plan) => (
            <article
              key={plan.id}
              className={`card card-hover relative flex flex-col p-8 sm:p-10 ${
                plan.highlighted ? "border-primary/40 ring-1 ring-primary/20" : ""
              }`}
            >
              {plan.highlighted && (
                <span className="badge absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  Most Popular
                </span>
              )}

              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {plan.name}
                </p>
                <span className="rounded-full border border-border/80 bg-surface-elevated/80 px-2.5 py-0.5 text-xs font-medium text-text-muted">
                  {plan.tier}
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold text-text">{plan.tagline}</h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted">{plan.description}</p>

              {plan.includesPrevious && (
                <p className="mt-5 rounded-2xl border border-primary/20 bg-accent-soft/60 px-4 py-3 text-sm font-semibold text-primary">
                  {plan.includesPrevious}
                </p>
              )}

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {plan.includesPrevious ? "Also includes" : "What's included"}
                </p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                      <span className="check-badge mt-0.5 shrink-0">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button href={plan.paymentUrl} size="lg" className="mt-8 w-full">
                Enroll — {plan.name}
              </Button>
              <p className="mt-3 text-center text-xs text-text-muted">
                Secure checkout via Razorpay
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="card border-primary/20 bg-accent-soft/40 p-8 sm:p-10">
            <SectionHeader
              eyebrow="After Enrollment"
              title="Access programs on ClassPlus"
              description="Once payment is complete, log in to our ClassPlus learning platform for course materials, recordings, worksheets, and community resources."
            />
            <Button href={classplusPlatformUrl} variant="secondary" className="mt-6">
              Go to ClassPlus Web &rarr;
            </Button>
          </div>

          <div className="card border-primary/20 p-8 sm:p-10">
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
