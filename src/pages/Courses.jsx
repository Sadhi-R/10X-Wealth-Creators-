import CourseCard from "../components/CourseCard";
import FinalInviteSection from "../components/FinalInviteSection";
import Button from "../components/ui/Button";
import PageHero from "../components/ui/PageHero";
import { courses } from "../data/courses";
import { enrollPath, pageMeta } from "../data/siteContent";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Courses() {
  usePageMeta(pageMeta.courses);

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Learn what matters"
        description="Mindset, clarity, and practical skills — preview courses, then choose a plan."
      >
        <div className="mt-8 cta-group">
          <Button to={enrollPath} size="lg">
            View Plans
          </Button>
          <Button to="/contact" variant="secondary" size="lg">
            Book a Call
          </Button>
        </div>
      </PageHero>

      <section className="section-container section-padding">
        <div className="grid gap-6 sm:grid-cols-2">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>

      <FinalInviteSection className="pb-24 sm:pb-32" />
    </>
  );
}
