import CourseCard from "../components/CourseCard";
import PageHero from "../components/ui/PageHero";
import SectionHeader from "../components/ui/SectionHeader";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Learning Programs"
        title="Courses built for mindset, clarity, and practical skills"
        description="Each program combines guided coaching principles with actionable frameworks. Browse below to find the right starting point for your growth journey. Informational only — no checkout on this site yet."
      />

      <section className="section-container section-padding">
        <SectionHeader
          eyebrow="All Programs"
          title="Four paths. One growth-focused approach."
          description="Every course addresses inner work and outer application — because lasting change requires both. All descriptions are DRAFT and pending your final review."
          className="mb-12"
        />
        <div className="grid gap-8">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} featured />
          ))}
        </div>
      </section>
    </>
  );
}
