import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Success stories from 10X Wealth Creators"
        description="Hear from students and professionals who have transformed their lives through our programs. Individual results vary — these reflect personal experiences, not guaranteed outcomes."
      />

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Community Voices"
          title="Real stories from our learning community"
          description="Mindset shifts, new income approaches, and practical growth — shared by members who worked with our mentors."
          align="center"
          className="mb-14"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="card card-hover flex flex-col overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <p className="text-sm font-semibold text-primary">{item.title}</p>
                <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <cite className="block text-sm font-semibold not-italic text-text">
                    {item.name}
                  </cite>
                  <p className="mt-1 text-xs text-text-muted">{item.role}</p>
                  <p className="mt-2 text-xs text-primary">Mentor: {item.mentor}</p>
                </footer>
              </div>
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
