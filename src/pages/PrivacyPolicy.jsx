import PageHero from "../components/ui/PageHero";
import { contact } from "../data/siteContent";

function LegalPage({ title, children }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
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

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <Section title="Introduction">
        <p>
          10X Wealth Creators (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
          the website at 10xwealthcreators.com and related online services, including enrollment
          pages, coaching programs, and our ClassPlus learning platform. This Privacy Policy
          explains how we collect, use, disclose, and protect your personal information when
          you visit our website, contact us, enroll in a program, or interact with our services.
        </p>
        <p>
          By using our website or services, you agree to the collection and use of information
          in accordance with this policy. If you do not agree, please discontinue use of our
          services.
        </p>
      </Section>

      <Section title="Information We Collect">
        <p>We may collect the following categories of information:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-text">Personal information you provide:</strong> name, email
            address, phone number, messages submitted through contact forms, enrollment details,
            and any other information you voluntarily share with us.
          </li>
          <li>
            <strong className="text-text">Payment-related information:</strong> when you enroll
            through our Razorpay payment links, payment processing is handled by Razorpay. We do
            not store full card or banking details on our servers; Razorpay processes transactions
            according to its own privacy policy.
          </li>
          <li>
            <strong className="text-text">Learning platform data:</strong> if you access programs
            on ClassPlus, certain activity and account information may be collected by ClassPlus
            as part of platform usage.
          </li>
          <li>
            <strong className="text-text">Automatically collected data:</strong> IP address, browser
            type, device information, pages visited, referring URLs, and general usage data through
            cookies and similar technologies.
          </li>
          <li>
            <strong className="text-text">Communications:</strong> records of emails, WhatsApp
            messages, calls, or other correspondence when you contact us or join our community
            channels.
          </li>
        </ul>
      </Section>

      <Section title="How We Use Your Information">
        <p>We use collected information to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Respond to inquiries and provide customer support</li>
          <li>Process enrollments and manage access to programs</li>
          <li>Send service-related updates, confirmations, and administrative messages</li>
          <li>Improve our website, courses, coaching content, and user experience</li>
          <li>Communicate about programs, events, or offerings you have expressed interest in</li>
          <li>Maintain security, prevent fraud, and enforce our terms</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
        <p>
          We do not sell your personal information to third parties for their independent
          marketing purposes.
        </p>
      </Section>

      <Section title="Legal Basis for Processing">
        <p>
          Where applicable, we process personal information based on one or more of the
          following: your consent; performance of a contract (such as enrollment in a program);
          our legitimate interests in operating and improving our educational services; and
          compliance with legal obligations.
        </p>
      </Section>

      <Section title="Cookies and Tracking Technologies">
        <p>
          Our website may use cookies, local storage, and similar technologies to remember
          preferences (such as theme settings), analyze traffic, and improve functionality.
          You can control or disable cookies through your browser settings. Disabling cookies
          may affect certain features of the site.
        </p>
      </Section>

      <Section title="Third-Party Services">
        <p>
          We use third-party services that may collect information according to their own
          policies, including but not limited to:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong className="text-text">Razorpay</strong> — secure payment processing for
            Silver, Gold, and Diamond enrollment plans
          </li>
          <li>
            <strong className="text-text">ClassPlus</strong> — online learning platform for course
            delivery and student access
          </li>
          <li>
            <strong className="text-text">Google Fonts</strong> — typography delivery
          </li>
          <li>
            <strong className="text-text">Social media platforms</strong> — Instagram, YouTube,
            X (Twitter), and WhatsApp when you interact with our official channels or community
            groups
          </li>
          <li>
            <strong className="text-text">Analytics or hosting providers</strong> — as needed to
            operate and monitor the website
          </li>
        </ul>
        <p>
          We are not responsible for the privacy practices of third-party websites or services.
          We encourage you to review their policies before providing personal information.
        </p>
      </Section>

      <Section title="Data Sharing and Disclosure">
        <p>We may share information:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>With service providers who assist in payments, hosting, email, or platform delivery</li>
          <li>With mentors or staff involved in delivering programs you have enrolled in</li>
          <li>When required by law, regulation, court order, or governmental request</li>
          <li>To protect the rights, safety, and security of 10X Wealth Creators, our users, or others</li>
          <li>In connection with a business transfer, merger, or restructuring, with appropriate safeguards</li>
        </ul>
      </Section>

      <Section title="Data Retention">
        <p>
          We retain personal information only as long as necessary to fulfill the purposes
          described in this policy, including enrollment records, support history, and legal
          compliance requirements. When data is no longer needed, we take reasonable steps to
          delete or anonymize it.
        </p>
      </Section>

      <Section title="Data Security">
        <p>
          We implement reasonable administrative, technical, and organizational measures to
          protect your information. However, no method of transmission over the internet or
          electronic storage is completely secure. We cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="Your Rights and Choices">
        <p>
          Depending on applicable law, you may have the right to request access to, correction
          of, or deletion of your personal information; to withdraw consent where processing is
          consent-based; and to object to or restrict certain processing. To exercise these
          rights, contact us using the details below. We may need to verify your identity before
          responding.
        </p>
      </Section>

      <Section title="Children's Privacy">
        <p>
          Our services are intended for individuals who can enter into a binding agreement.
          We do not knowingly collect personal information from children under 18 without
          appropriate parental consent. If you believe a child has provided us personal data,
          please contact us so we can take appropriate action.
        </p>
      </Section>

      <Section title="International Users">
        <p>
          10X Wealth Creators is based in India. If you access our services from outside India,
          your information may be transferred to and processed in India or other locations where
          our service providers operate.
        </p>
      </Section>

      <Section title="Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. The revised version will be
          posted on this page with an updated effective date. Continued use of our services
          after changes constitutes acceptance of the updated policy.
        </p>
        <p>
          <strong className="text-text">Effective date:</strong> June 2025 (draft)
        </p>
      </Section>

      <Section title="Contact Us">
        <p>
          For privacy-related questions, requests, or concerns, contact us at:
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
