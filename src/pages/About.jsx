import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { siteImages } from "../data/siteImages";

const mentors = [
  {
    name: "Sampath Kumar",
    role: "Growth Mindset Mentor",
    image: siteImages.mentors.sampath,
    bio: "Sampath Kumar helps individuals shift from limiting beliefs to a success-oriented mindset. He specializes in confidence-building, goal-setting, emotional resilience, and high-performance habits that support long-term personal and professional growth.",
    focus: ["Mindset transformation", "Goal-setting frameworks", "Confidence & habits", "Emotional clarity"],
  },
  {
    name: "Ram Prasad",
    role: "Business Mentor",
    image: siteImages.mentors.ram,
    bio: "Ram Prasad guides professionals and entrepreneurs to start, structure, and scale businesses with practical strategy. His expertise includes digital marketing, business automation, AI-enabled workflows, and revenue growth planning grounded in consistent effort.",
    focus: ["Business strategy", "Digital marketing", "Automation systems", "AI for business growth"],
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Empowering dreams, creating leaders"
        description="10X Wealth Creators is a coaching and education brand helping individuals find clarity, build mindset, and take practical steps toward purpose-driven work and business building."
      />

      <section className="section-container section-padding">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              eyebrow="Mission"
              title="We believe lasting change starts from within"
              description="Our mission is to help people discover their passion and purpose — then equip them with the mindset, strategies, and skills to build a life aligned with their values."
            />
            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Whether you&apos;re a student exploring options, an employee considering a
              pivot, or an entrepreneur refining your path — we meet you where you are.
              Our programs integrate emotional clarity, abundance thinking, and modern
              tools like AI into a cohesive growth experience.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-text-muted">
              <em className="text-text">[Placeholder — edit this section to reflect your brand story.]</em>
            </p>
          </div>

          <div className="space-y-6">
            <div className="card overflow-hidden">
              <img
                src={siteImages.heroBackground}
                alt="10X Wealth Creators community"
                className="h-56 w-full object-cover sm:h-72"
              />
            </div>
            <div className="card p-8 sm:p-10">
              <h3 className="text-xl font-bold text-text">Our values</h3>
              <ul className="mt-6 space-y-5">
                {[
                  "Integrity — honest about what coaching can and cannot do",
                  "Growth — mindset-first, always learning, always evolving",
                  "Community — no one builds alone",
                  "Practicality — skills and tools you can apply immediately",
                  "Responsibility — your results depend on your effort and commitment",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-base text-text-muted">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Mentors"
            title="Learn from experienced guides"
            description="Our mentors combine mindset coaching and business strategy to help you grow with clarity, consistency, and practical action."
            align="center"
            className="mb-14"
          />
          <div className="grid gap-8 md:grid-cols-2">
            {mentors.map((mentor) => (
              <article key={mentor.name} className="card card-hover overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-8 sm:p-10">
                  <h3 className="text-2xl font-bold text-text">{mentor.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{mentor.role}</p>
                  <p className="mt-5 text-base leading-relaxed text-text-muted">{mentor.bio}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {mentor.focus.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-primary/20 bg-accent-soft px-3 py-1 text-xs font-medium text-primary"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <div className="card border-primary/20 bg-accent-soft/30 p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-text">Educational content only</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-muted">
            10X Wealth Creators provides educational content and coaching services only
            and does not offer professional financial, legal, or investment advice. We
            do not guarantee any specific income or financial outcome. Your results
            depend on your effort, commitment, skills, and market conditions.
          </p>
        </div>
      </section>
    </>
  );
}
