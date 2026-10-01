import CourseCard from "../components/CourseCard";
import FinalInviteSection from "../components/FinalInviteSection";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import { corePrograms, enrollPath, featuredPrograms, pageMeta } from "../data/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Courses() {
  usePageMeta(pageMeta.courses);

  return (
    <>
      <PageHero
        eyebrow="Programs & Courses"
        title="Learning built for real growth"
        description="Explore mindset, clarity, business skills, and AI tools — then choose a membership path when you're ready."
      >
        <div className="mt-8 cta-group">
          <Button to="/wealth-framework" size="lg">
            See the Framework
          </Button>
          <Button to={enrollPath} variant="secondary" size="lg">
            View Membership Plans
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Core Paths"
          title="Four foundations of the 10XWC approach"
          description="Inner work and practical application — designed for professionals building a better future."
          className="mb-10"
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {corePrograms.map((program) => (
            <article key={program.title} className="card card-hover p-7">
              <h3 className="text-lg font-bold text-text">{program.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="Brand Ecosystem"
            title="Also under 10X Wealth Creators"
            description="Specialized experiences for mornings and startups."
            className="mb-8"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {featuredPrograms.map((program) => (
              <a
                key={program.id}
                href={program.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-7"
              >
                <span className="badge w-fit">{program.badge}</span>
                <h3 className="mt-3 text-xl font-bold text-text">{program.name}</h3>
                <p className="mt-1 text-sm font-semibold text-primary">{program.tagline}</p>
                <p className="mt-3 text-base text-text-muted">{program.description}</p>
                <span className="mt-5 inline-block text-sm font-bold text-primary">
                  {program.cta} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Course Catalog"
          title="Featured learning experiences"
          description="Preview focused courses included across Silver, Gold, and Diamond membership."
          className="mb-10"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button to={enrollPath} size="lg">
            View Membership Plans
          </Button>
          <Button to="/faq" variant="secondary" size="lg">
            Read FAQs
          </Button>
        </div>
      </section>

      <FinalInviteSection className="pb-24 sm:pb-32" />
    </>
  );
}
