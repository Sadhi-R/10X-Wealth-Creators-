import Button from "./ui/Button";
import SectionHeader from "./ui/SectionHeader";
import { contact, enrollPath } from "../data/siteContent";

export default function FinalInviteSection({ className = "" }) {
  return (
    <section className={`section-container section-padding ${className}`}>
      <div className="card glossy-panel border-primary/20 p-8 text-center sm:p-14">
        <SectionHeader
          eyebrow="Ready to Begin?"
          title="Start free. Learn with us. Enroll when you're ready."
          description="You don't have to figure this out alone. Join our community, explore our framework, or book a call — and become a member when the time is right."
          align="center"
        />
        <div className="mt-10 cta-group">
          <Button href={contact.whatsappGroup} size="lg">
            Join the Community
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Discovery Call
          </Button>
          <Button to={enrollPath} variant="ghost" size="lg">
            Become a Member
          </Button>
        </div>
      </div>
    </section>
  );
}
