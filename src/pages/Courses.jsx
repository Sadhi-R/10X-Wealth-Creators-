import CourseCard from "../components/CourseCard";
import PlanCTASection from "../components/PlanCTASection";
import PlanTierStrip from "../components/PlanTierStrip";
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
        title="Courses included in Silver, Gold & Diamond"
        description="Every program below is part of our membership plans. Choose Silver to start with clarity, Gold to build your business, or Diamond for premium 1-on-1 mentorship."
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button to={enrollPath} size="lg">
            View Membership Plans
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Ask the Expert
          </Button>
        </div>
        <PlanTierStrip className="mt-6" />
      </PageHero>

      <PlanCTASection
        variant="compact"
        showProgression={false}
        title="Enroll in the plan that fits your goals"
        description="Secure checkout via Razorpay. Access all course materials on ClassPlus after enrollment."
        className="section-alt !pb-12 !pt-12"
      />

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
            description="Focused programs covering emotional clarity, abundance mindset, self-discovery, and practical AI skills — included with your membership plan."
            className="mb-12"
          />
          <div className="grid gap-8">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} featured expanded />
            ))}
          </div>
          <div className="mt-14 text-center">
            <Button to={enrollPath} size="lg">
              Enroll — Silver, Gold or Diamond
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
