import PageHero from "../components/ui/PageHero";
import { Link } from "react-router-dom";
import { contact } from "../data/siteContent";

function LegalPage({ title, children }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <div className="section-container section-padding">
        <div className="card mb-10 border-primary/25 bg-accent-soft/40 p-6">
          <p className="text-sm font-semibold text-primary">DRAFT — Legal review required</p>
          <p className="mt-2 text-base text-text-muted">
            This page contains draft terms for 10X Wealth Creators. It should be reviewed and
            finalized by a qualified attorney before being treated as binding legal documentation.
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

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions">
      <Section title="Acceptance of Terms">
        <p>
          Welcome to 10X Wealth Creators. By accessing or using our website, enrolling in any
          program, making a payment, joining our community channels, or using our learning
          platform, you agree to be bound by these Terms &amp; Conditions. If you do not agree,
          you must not use our services.
        </p>
      </Section>

      <Section title="About Our Services">
        <p>
          10X Wealth Creators provides educational content, coaching, mentorship, and personal
          development programs focused on mindset, self-discovery, business skills, and practical
          growth strategies. Our services are for educational and coaching purposes only.
        </p>
        <p>
          We do not provide professional financial, legal, tax, investment, medical, or
          psychological therapy services. Nothing on this website or in our programs should be
          construed as professional advice. You should consult qualified professionals before
          making financial, legal, or health-related decisions.
        </p>
      </Section>

      <Section title="Enrollment and Plans">
        <p>
          We offer enrollment through Silver, Gold, and Diamond plans available on our Plans page.
          Each plan provides different levels of access to programs, resources, and community
          support as described at the time of enrollment.
        </p>
        <p>
          By selecting a plan and completing payment through our authorized Razorpay links, you
          agree to the pricing, inclusions, and terms presented for that plan at the time of
          purchase. Access to course materials is typically provided through our ClassPlus learning
          platform after successful enrollment.
        </p>
      </Section>

      <Section title="Payments and Refunds">
        <p>
          Payments are processed securely through Razorpay. You agree to provide accurate payment
          information and authorize charges for the plan you select. All fees are stated in
          Indian Rupees unless otherwise specified.
        </p>
        <p>
          Refund eligibility is governed by our{" "}
          <Link to="/refund-policy" className="font-semibold text-primary hover:text-primary-hover">
            Refund Policy
          </Link>
          . Unless explicitly stated at enrollment, fees for digital educational content and
          coaching programs may be non-refundable once access has been granted. Contact us at{" "}
          {contact.email} for enrollment or billing questions.
        </p>
      </Section>

      <Section title="Use of Website">
        <p>
          You agree to use this website only for lawful purposes and in a manner that does not
          infringe the rights of others or restrict their use of the site. You must not:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Attempt to gain unauthorized access to our systems, accounts, or platforms</li>
          <li>Copy, scrape, redistribute, or resell our content without written permission</li>
          <li>Upload malicious code, spam, or harmful material</li>
          <li>Misrepresent your identity or affiliation with 10X Wealth Creators</li>
          <li>Use our materials to make false income claims or misleading marketing representations</li>
        </ul>
      </Section>

      <Section title="User Responsibilities">
        <p>
          You are responsible for the accuracy of information you provide during enrollment or
          contact, and for how you apply educational content received through our programs. Your
          results depend on your effort, commitment, skills, consistency, and external factors
          beyond our control.
        </p>
        <p>
          You agree to participate respectfully in community spaces, including WhatsApp groups and
          live sessions, and not to harass, abuse, or harm other members or mentors.
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          All content on this website and in our programs — including text, graphics, logos,
          course materials, videos, recordings, worksheets, and branding — is owned by 10X Wealth
          Creators or its licensors and is protected by applicable intellectual property laws.
        </p>
        <p>
          Enrollment grants you a personal, non-transferable, non-exclusive license to access
          materials for your own learning. You may not reproduce, distribute, publicly display,
          sublicense, or create derivative works from our content without prior written consent.
        </p>
      </Section>

      <Section title="No Income or Success Guarantees">
        <p>
          Results vary. No income or success guarantees. Any income examples, testimonials, or
          success stories shared on this site reflect individual experiences and are not typical.
          We do not guarantee that you will earn any specific amount of income, build a business,
          or achieve financial or personal success.
        </p>
        <p>
          Our programs teach frameworks, mindset practices, and skills — but outcomes depend on
          your effort, application, market conditions, and personal circumstances. Past results of
          other students are not indicative of future results.
        </p>
      </Section>

      <Section title="Coaching and Educational Disclaimer">
        <p>
          Coaching and educational content provided by 10X Wealth Creators, including sessions
          led by Sampath Kumar and Ram Prasad, are intended to support personal and professional
          development. They are not a substitute for licensed therapy, medical treatment, or
          regulated financial advisory services.
        </p>
      </Section>

      <Section title="Third-Party Platforms">
        <p>
          Our services may integrate with or link to third-party platforms such as Razorpay,
          ClassPlus, WhatsApp, Instagram, YouTube, and others. Your use of those platforms is
          governed by their respective terms and policies. We are not responsible for third-party
          service interruptions, data practices, or content.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, 10X Wealth Creators and its mentors,
          employees, affiliates, and partners shall not be liable for any indirect, incidental,
          special, consequential, or punitive damages, or for any loss of profits, revenue, data,
          or business opportunities arising from your use of our website, programs, or content.
        </p>
        <p>
          Our total liability for any claim relating to our services shall not exceed the amount
          you paid to us for the specific program giving rise to the claim in the twelve (12)
          months preceding the event, unless a greater limitation is required by law.
        </p>
      </Section>

      <Section title="Indemnification">
        <p>
          You agree to indemnify and hold harmless 10X Wealth Creators from any claims, damages,
          losses, or expenses (including reasonable legal fees) arising from your misuse of our
          services, violation of these terms, or infringement of any third-party rights.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          We may suspend or terminate your access to programs, community channels, or the website
          if you violate these terms, engage in harmful conduct, or misuse our intellectual
          property. Upon termination, provisions that by their nature should survive will remain
          in effect, including disclaimers and limitations of liability.
        </p>
      </Section>

      <Section title="Governing Law and Disputes">
        <p>
          These Terms &amp; Conditions shall be governed by the laws of India. Any disputes arising
          out of or relating to these terms or our services shall be subject to the exclusive
          jurisdiction of the courts in Hyderabad, Telangana, unless otherwise required by
          applicable consumer protection law.
        </p>
      </Section>

      <Section title="Changes to Terms">
        <p>
          We may update these Terms &amp; Conditions from time to time. Updated terms will be
          posted on this page. Material changes may also be communicated through email or platform
          notices where appropriate. Continued use after updates constitutes acceptance of the
          revised terms.
        </p>
        <p>
          <strong className="text-text">Effective date:</strong> June 2025 (draft)
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms? Contact us at:
        </p>
        <p>
          <strong className="text-text">10X Wealth Creators</strong>
          <br />
          {contact.address.line1}, {contact.address.line2}
          <br />
          {contact.address.city}, {contact.address.country}
          <br />
          Email:{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-semibold text-primary hover:text-primary-hover"
          >
            {contact.email}
          </a>
          <br />
          Phone:{" "}
          <a
            href={contact.phoneHref}
            className="font-semibold text-primary hover:text-primary-hover"
          >
            {contact.phone}
          </a>
        </p>
      </Section>
    </LegalPage>
  );
}
