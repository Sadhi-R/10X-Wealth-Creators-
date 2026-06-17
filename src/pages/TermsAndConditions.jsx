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

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms & Conditions">
      <Section title="Use of Site">
        <p>
          [Placeholder] By accessing this website, you agree to use it for lawful
          purposes only and in accordance with these terms. Content is provided for
          educational and informational purposes.
        </p>
      </Section>
      <Section title="User Responsibilities">
        <p>
          [Placeholder] You are responsible for the accuracy of information you provide
          and for how you apply any educational content. You agree not to misuse the
          site or attempt to disrupt its operation.
        </p>
      </Section>
      <Section title="Intellectual Property">
        <p>
          [Placeholder] All content on this site — including text, graphics, and course
          materials — is owned by 10X Wealth Creators or its licensors and may not be
          reproduced without permission.
        </p>
      </Section>
      <Section title="Limitation of Liability">
        <p>
          [Placeholder] To the fullest extent permitted by law, 10X Wealth Creators
          shall not be liable for any indirect, incidental, or consequential damages
          arising from your use of this site or its content.
        </p>
      </Section>
      <Section title="Governing Law">
        <p>
          [Placeholder] These terms shall be governed by the laws of India. Any disputes
          shall be subject to the exclusive jurisdiction of courts in Hyderabad,
          Telangana.
        </p>
      </Section>
      <Section title="Contact">
        <p>
          Questions about these terms? Email{" "}
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
