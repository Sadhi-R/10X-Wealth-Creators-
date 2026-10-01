import FinalInviteSection from "../components/FinalInviteSection";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { usePageMeta } from "../hooks/usePageMeta";
import { contact, pageMeta } from "../data/siteContent";
import { testimonials } from "../data/testimonials";

function shortQuote(quote, max = 120) {
  if (quote.length <= max) return quote;
  return `${quote.slice(0, max).trim()}…`;
}

export default function Testimonials() {
  usePageMeta(pageMeta.testimonials);

  return (
    <>
      <PageHero
        eyebrow="Stories"
        title="Community voices"
        description="Personal experiences — not guaranteed outcomes."
      >
        <div className="mt-8 cta-group">
          <Button href={contact.whatsappGroup} size="lg">
            Join Community
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Call
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="card flex flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 text-sm leading-relaxed text-text-muted">
                  &ldquo;{shortQuote(item.quote)}&rdquo;
                </p>
                <footer className="mt-4 text-sm font-semibold text-text">
                  {item.name}
                  <span className="mt-0.5 block text-xs font-normal text-text-muted">
                    {item.role}
                  </span>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <FinalInviteSection className="section-alt pb-24 sm:pb-32" />
    </>
  );
}
