import Button from "../components/ui/Button";
import FinalInviteSection from "../components/FinalInviteSection";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import CheckIcon from "../components/ui/CheckIcon";
import { usePageMeta } from "../hooks/usePageMeta";
import {
  communityContent,
  contact,
  mobileAppUrl,
  pageMeta,
} from "../data/siteContent";

export default function Community() {
  usePageMeta(pageMeta.community);

  return (
    <>
      <PageHero
        eyebrow="Community"
        title={communityContent.headline}
        description={communityContent.description}
      >
        <div className="mt-8 cta-group">
          <Button href={contact.whatsappGroup} size="lg">
            Join WhatsApp Community
          </Button>
          <Button href={mobileAppUrl} variant="secondary" size="lg">
            Download Mobile App
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="What You Get"
          title="Support at every stage of your journey"
          description="Our community is designed for learners who want accountability, inspiration, and real connection — not just content."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {communityContent.highlights.map((item) => (
            <div key={item} className="card flex gap-4 p-6 sm:p-8">
              <span className="check-badge mt-0.5 shrink-0">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-base leading-relaxed text-text-muted">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <SectionHeader
                eyebrow="WhatsApp"
                title="Join our community group"
                description="Connect with members, get quick updates, and stay motivated between sessions."
              />
              <Button href={contact.whatsappGroup} className="mt-6">
                Join on WhatsApp &rarr;
              </Button>
            </div>
            <div className="card p-8 sm:p-10">
              <SectionHeader
                eyebrow="Mobile App"
                title="Learn on the go"
                description="Access courses, track progress, and stay connected from your Android phone."
              />
              <Button href={mobileAppUrl} className="mt-6">
                Get the Android App &rarr;
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="card p-8 sm:p-12">
          <SectionHeader
            eyebrow="Social"
            title="Follow along between sessions"
            description="Daily inspiration, teachings, and community highlights on our social channels."
          />
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={contact.social.youtube} variant="secondary">
              YouTube
            </Button>
            <Button href={contact.social.instagram} variant="secondary">
              Instagram
            </Button>
            <Button href={contact.social.x} variant="secondary">
              X (Twitter)
            </Button>
          </div>
        </div>
      </section>

      <FinalInviteSection className="pb-24 sm:pb-32" />
    </>
  );
}
