import PageHero from "../components/ui/PageHero";

function LegalPage({ title, children }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <div className="section-container section-padding">
        <div className="card mb-10 border-primary/25 bg-accent-soft/40 p-6">
          <p className="text-sm font-semibold text-primary">DRAFT — Legal review required</p>
          <p className="mt-2 text-base text-text-muted">
            This page contains placeholder text only. Do not treat it as final legal
            documentation before review by a qualified attorney.
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
      <Section title="Information We Collect">
        <p>
          [Placeholder] We may collect information you provide directly, such as your
          name, email address, and messages submitted through contact forms. We may also
          collect usage data through cookies and similar technologies.
        </p>
      </Section>
      <Section title="How We Use It">
        <p>
          [Placeholder] We use collected information to respond to inquiries, improve
          our website and services, and communicate with you about programs you express
          interest in.
        </p>
      </Section>
      <Section title="Cookies">
        <p>
          [Placeholder] Our site may use cookies to remember preferences and analyze
          traffic. You can control cookies through your browser settings.
        </p>
      </Section>
      <Section title="Third-Party Services">
        <p>
          [Placeholder] We may use third-party tools (e.g., analytics, email providers,
          social platforms). Those services have their own privacy policies governing
          how they handle your data.
        </p>
      </Section>
      <Section title="Contact">
        <p>
          For privacy-related questions, contact us at{" "}
          <a
            href="mailto:10xwealthcreators@gmail.com"
            className="font-semibold text-primary hover:text-primary-hover"
          >
            10xwealthcreators@gmail.com
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
