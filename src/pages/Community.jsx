import Button from "../components/ui/Button";
import FinalInviteSection from "../components/FinalInviteSection";
import PageHero from "../components/ui/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { contact, mobileAppUrl, pageMeta } from "../data/siteContent";

export default function Community() {
  usePageMeta(pageMeta.community);

  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Grow together"
        description="Support, accountability, and real connection."
      >
        <div className="mt-8 cta-group">
          <Button href={contact.whatsappGroup} size="lg">
            Join WhatsApp
          </Button>
          <Button href={mobileAppUrl} variant="secondary" size="lg">
            Get the App
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-5 sm:grid-cols-3">
          {[
            { title: "WhatsApp", text: "Daily updates & peer support", href: contact.whatsappGroup, cta: "Join" },
            { title: "Mobile App", text: "Learn on the go", href: mobileAppUrl, cta: "Download" },
            { title: "Social", text: "Inspiration between sessions", href: contact.social.instagram, cta: "Follow" },
          ].map((item) => (
            <div key={item.title} className="card flex flex-col p-6">
              <h3 className="text-lg font-bold text-text">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-text-muted">{item.text}</p>
              <Button href={item.href} variant="secondary" className="mt-5 w-fit" size="sm">
                {item.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <FinalInviteSection className="pb-24 sm:pb-32" />
    </>
  );
}
