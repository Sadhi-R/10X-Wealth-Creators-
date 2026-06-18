import PageHero from "../components/ui/PageHero";
import { contact } from "../data/siteContent";

function LegalPage({ title, description, children }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} description={description} />
      <div className="section-container section-padding">
        <div className="card mb-10 border-primary/25 bg-accent-soft/40 p-6">
          <p className="text-sm font-semibold text-primary">DRAFT — Legal review required</p>
          <p className="mt-2 text-base text-text-muted">
            This page contains draft policy text for 10X Wealth Creators. It should be
            reviewed and finalized by a qualified attorney before being treated as binding
            legal documentation.
          </p>
        </div>
        <div className="max-w-3xl space-y-10 text-lg leading-relaxed text-text-muted">
          {children}
        </div>
      </div>
    </>
  );
}

function Section({ title, children }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-text">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export default function RefundPolicy() {
  return (
    <LegalPage
      title="Refund Policy"
      description="Please read this refund policy before enrolling in any Silver, Gold, or Diamond membership plan."
    >
      <Section title="Overview">
        <p>
          10X Wealth Creators offers educational coaching programs through Silver, Gold, and
          Diamond membership plans. Because our programs include immediate access to digital
          content, community resources, and platform materials upon enrollment, refund
          eligibility is limited as described below.
        </p>
      </Section>

      <Section title="Digital Content & Platform Access">
        <p>
          Upon successful payment through our authorized Razorpay links, you typically receive
          access to program materials via ClassPlus and/or our mobile learning app. Once
          access credentials, recordings, worksheets, or community links have been shared,
          the program is considered delivered in part and may not be eligible for a full
          refund.
        </p>
      </Section>

      <Section title="Refund Eligibility">
        <p>Refunds may be considered only in the following circumstances:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Duplicate payment for the same plan made in error (subject to verification)
          </li>
          <li>
            Technical failure preventing access to purchased content, where our team cannot
            resolve the issue within a reasonable timeframe
          </li>
          <li>
            Enrollment made by mistake within 24 hours of payment, provided no substantial
            course content or live session access has been used
          </li>
          <li>
            Any refund window explicitly stated in writing at the time of a specific promotion
            or enrollment offer
          </li>
        </ul>
        <p>
          Refunds are generally not provided for change of mind, lack of time, failure to
          attend sessions, or dissatisfaction with outcomes. Educational results depend on
          your effort, commitment, and application — we do not guarantee income or success.
        </p>
      </Section>

      <Section title="Non-Refundable Items">
        <p>The following are typically non-refundable once provided:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Completed 1-on-1 mentorship sessions (Diamond plan)</li>
          <li>Attended live coaching calls or mastermind sessions</li>
          <li>Downloaded templates, audios, worksheets, or certification materials</li>
          <li>Third-party payment processing fees charged by Razorpay or banks</li>
        </ul>
      </Section>

      <Section title="How to Request a Refund">
        <p>
          To request a refund review, email us at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-semibold text-primary hover:text-primary-hover"
          >
            {contact.email}
          </a>{" "}
          within 7 days of payment with:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Your full name and registered email/phone number</li>
          <li>Plan purchased (Silver, Gold, or Diamond)</li>
          <li>Payment date and Razorpay transaction reference, if available</li>
          <li>Reason for the refund request</li>
        </ul>
        <p>
          We will review your request and respond within 7–10 business days. Approved refunds
          are processed to the original payment method where possible and may take 5–10
          business days to reflect depending on your bank or payment provider.
        </p>
      </Section>

      <Section title="Plan Upgrades & Downgrades">
        <p>
          If you wish to upgrade from Silver to Gold or Diamond, contact us before making a
          separate purchase. In some cases, we may apply a credit toward the higher tier.
          Downgrades after enrollment are generally not available. Each situation is reviewed
          individually.
        </p>
      </Section>

      <Section title="Chargebacks">
        <p>
          If you initiate a chargeback without contacting us first, we reserve the right to
          suspend platform access while the dispute is investigated. We encourage you to
          reach out directly so we can resolve concerns fairly and promptly.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Refund questions? Reach us at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-semibold text-primary hover:text-primary-hover"
          >
            {contact.email}
          </a>{" "}
          or{" "}
          <a
            href={contact.phoneHref}
            className="font-semibold text-primary hover:text-primary-hover"
          >
            {contact.phone}
          </a>
          .
        </p>
        <p>
          <strong className="text-text">Effective date:</strong> June 2025 (draft)
        </p>
      </Section>
    </LegalPage>
  );
}
