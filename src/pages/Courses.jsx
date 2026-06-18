import CourseCard from "../components/CourseCard";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";
import { enrollPath, elitePrograms } from "../data/siteContent";

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="In-Demand · Learning Programs"
        title="Transform your life with our elite programs"
        description="Each program combines guided coaching with actionable frameworks for passion discovery, mindset growth, business planning, and multiple income stream strategies."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to={enrollPath} size="lg">
            View Enrollment Plans
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Ask the Expert
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="Program Overview"
          title="Four integrated learning paths"
          description="These elite programs form the foundation of our coaching approach — each addressing both inner work and practical application."
          className="mb-12"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {elitePrograms.map((program) => (
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
            description="Focused programs covering emotional clarity, abundance mindset, self-discovery, and practical AI skills. Enroll and purchase through our ClassPlus learning platform."
            className="mb-12"
          />
          <div className="grid gap-8">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} featured expanded />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button to={enrollPath} size="lg">
              Enroll Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
