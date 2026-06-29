import CourseCard from "../components/CourseCard";
import FinalInviteSection from "../components/FinalInviteSection";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import { corePrograms, enrollPath, pageMeta } from "../data/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Courses() {
  usePageMeta(pageMeta.courses);

  return (
    <>
      <PageHero
        eyebrow="Learning Programs"
        title="Programs built for real growth"
        description="Explore our courses on emotional clarity, abundance mindset, self-discovery, and AI tools. Preview the curriculum, then choose a membership path when you're ready."
      >
        <div className="mt-8 cta-group">
          <Button to="/wealth-framework" size="lg">
            Explore the Framework
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Discovery Call
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Program Overview"
          title="Four core learning paths"
          description="These programs form the foundation of our coaching approach — each addressing both inner work and practical application."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {corePrograms.map((program) => (
            <article key={program.title} className="card card-hover p-8">
              <h3 className="text-xl font-bold text-text">{program.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-text-muted">
                {program.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-alt">
        <div className="section-container section-padding">
          <SectionHeader
            eyebrow="All Courses"
            title="Our full course catalog"
            description="Focused programs included with Silver, Gold, and Diamond membership — preview each course before you enroll."
            className="mb-12"
          />
          <div className="grid gap-8">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} featured expanded />
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <Button to={enrollPath} size="lg">
              View Membership Plans
            </Button>
            <Button to="/faq" variant="secondary" size="lg">
              Read FAQs
            </Button>
          </div>
        </div>
      </section>

      <FinalInviteSection className="pb-24 sm:pb-32" />
    </>
  );
}
