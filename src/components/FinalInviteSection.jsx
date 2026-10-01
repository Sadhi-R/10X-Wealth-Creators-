import Button from "./ui/Button";
import { contact, enrollPath } from "../data/siteContent";

export default function FinalInviteSection({ className = "" }) {
  return (
    <section className={`section-container section-padding ${className}`}>
      <div className="card glossy-panel border-primary/20 p-8 text-center sm:p-10">
        <p className="badge mx-auto w-fit">Ready?</p>
        <h2 className="font-display mt-4 text-2xl font-bold text-text sm:text-3xl">
          Start free. Enroll when ready.
        </h2>
        <div className="cta-group mt-8 justify-center">
          <Button href={contact.whatsappGroup} size="lg">
            Join Community
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Call
          </Button>
          <Button to={enrollPath} variant="ghost" size="lg">
            Plans
          </Button>
        </div>
      </div>
    </section>
  );
}
