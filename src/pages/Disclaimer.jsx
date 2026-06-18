import PageHero from "../components/ui/PageHero";
import { Link } from "react-router-dom";
import { contact } from "../data/siteContent";

export default function Disclaimer() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Please read this disclaimer carefully before using our website, mobile app, or enrolling in any program."
      />
      <div className="section-container section-padding">
        <div className="card mb-10 border-primary/25 bg-accent-soft/40 p-6">
          <p className="text-sm font-semibold text-primary">DRAFT — Legal review required</p>
          <p className="mt-2 text-base text-text-muted">
            This page contains draft disclaimer text for 10X Wealth Creators. It should be
            reviewed and finalized by a qualified attorney before being treated as binding
            legal documentation.
          </p>
        </div>

        <div className="max-w-3xl space-y-10 text-lg leading-relaxed text-text-muted">
          <section>
            <h2 className="text-2xl font-bold text-text">
              Educational &amp; Coaching Content Only
            </h2>
            <p className="mt-4">
              10X Wealth Creators provides educational content, coaching, and mentorship
              services only. Nothing on this website, in our mobile app, in live sessions,
              or in any program materials constitutes professional financial, legal, tax,
              investment, medical, or psychological therapy advice.
            </p>
            <p className="mt-4">
              You should consult qualified licensed professionals before making financial,
              legal, health, or investment decisions. Our mentors — including Sampath Kumar
              (Growth Mindset Mentor) and Ram Prasad (Engineers Business Mentor) — provide
              coaching and education, not regulated advisory services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">No Guaranteed Results</h2>
            <p className="mt-4">
              Results vary. No income or success guarantees. Any income examples, testimonials,
              case studies, or success stories shared on this site or in our community reflect
              individual experiences and are not typical. We do not guarantee that you will
              earn any specific amount of income, build a business, achieve financial freedom,
              or reach any particular personal outcome.
            </p>
            <p className="mt-4">
              Your outcomes depend on your effort, commitment, skills, consistency, market
              conditions, and personal circumstances. Past results of other students are not
              indicative of future results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">Membership Plans &amp; Payments</h2>
            <p className="mt-4">
              Silver, Gold, and Diamond plans describe educational inclusions and coaching
              access levels. Payment links are processed through Razorpay. Pricing, inclusions,
              and access details are subject to the terms stated at the time of enrollment.
              See our{" "}
              <Link to="/refund-policy" className="font-semibold text-primary hover:text-primary-hover">
                Refund Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-and-conditions" className="font-semibold text-primary hover:text-primary-hover">
                Terms &amp; Conditions
              </Link>{" "}
              for payment and refund information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">
              Third-Party Platforms
            </h2>
            <p className="mt-4">
              We use third-party services including ClassPlus (web and mobile learning),
              Razorpay (payments), WhatsApp (community), and social media platforms. We are
              not responsible for outages, data practices, or terms of those third-party
              services. Your use of those platforms is governed by their respective policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">Testimonials &amp; Marketing</h2>
            <p className="mt-4">
              Testimonials and stories represent personal experiences of individual community
              members. They are shared for inspiration and illustration only and should not be
              interpreted as promises of similar outcomes. We do not verify every claim made
              in user-submitted stories and encourage you to evaluate information critically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">Personal Responsibility</h2>
            <p className="mt-4">
              You are solely responsible for how you apply the information, tools, and coaching
              provided. 10X Wealth Creators is not liable for decisions you make based on
              educational content received through this site, our app, programs, or community
              channels.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">Limitation of Liability</h2>
            <p className="mt-4">
              To the fullest extent permitted by law, 10X Wealth Creators and its mentors,
              partners, and affiliates shall not be liable for any direct, indirect,
              incidental, or consequential damages arising from your use of our website,
              programs, or content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">Contact</h2>
            <p className="mt-4">
              Questions about this disclaimer? Email{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-semibold text-primary hover:text-primary-hover"
              >
                {contact.email}
              </a>{" "}
              or call{" "}
              <a
                href={contact.phoneHref}
                className="font-semibold text-primary hover:text-primary-hover"
              >
                {contact.phone}
              </a>
              .
            </p>
            <p className="mt-4">
              <strong className="text-text">Effective date:</strong> June 2025 (draft)
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
