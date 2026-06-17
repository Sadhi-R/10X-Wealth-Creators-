import PageHero from "../components/ui/PageHero";

export default function Disclaimer() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Disclaimer"
        description="Please read this disclaimer carefully before using our website or enrolling in any program."
      />
      <div className="section-container section-padding">
        <div className="card mb-10 border-primary/25 bg-accent-soft/40 p-6">
          <p className="text-sm font-semibold text-primary">DRAFT — Legal review required</p>
          <p className="mt-2 text-base text-text-muted">
            This page contains placeholder text only. Do not treat it as final legal
            documentation before review by a qualified attorney.
          </p>
        </div>

        <div className="max-w-3xl space-y-10 text-lg leading-relaxed text-text-muted">
          <section>
            <h2 className="text-2xl font-bold text-text">
              Educational &amp; Coaching Content Only
            </h2>
            <p className="mt-4">
              10X Wealth Creators provides educational content and coaching services
              only. Nothing on this website or in our programs constitutes professional
              financial, legal, tax, or investment advice. You should consult qualified
              professionals before making financial or legal decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">No Guaranteed Results</h2>
            <p className="mt-4">
              Results mentioned on this site — including income examples or success
              stories — are individual illustrations and are not typical. We do not
              guarantee that you will earn any specific amount of income or achieve
              financial success. Your outcomes depend on your effort, commitment, skills,
              and market conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">Personal Responsibility</h2>
            <p className="mt-4">
              You are solely responsible for how you apply the information and coaching
              provided. 10X Wealth Creators is not liable for decisions you make based
              on educational content received through this site or its programs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-text">Contact</h2>
            <p className="mt-4">
              Questions about this disclaimer? Email{" "}
              <a
                href="mailto:10xwealthcreators@gmail.com"
                className="font-semibold text-primary hover:text-primary-hover"
              >
                10xwealthcreators@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
