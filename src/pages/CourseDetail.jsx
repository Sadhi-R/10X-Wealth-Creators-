import { Link, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import { getCourseBySlug } from "../data/courses";

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="section-container section-padding">
        <h1 className="text-3xl font-bold text-text">Course not found</h1>
        <Button to="/courses" variant="ghost" className="mt-6">
          &larr; Back to Courses
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={course.image}
          alt={course.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/40" />
        <div className="section-container relative section-padding">
          <Link
            to="/courses"
            className="inline-flex text-sm font-semibold text-primary hover:text-primary-hover"
          >
            &larr; Back to Courses
          </Link>
          <p className="badge mt-6">Course Overview</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
            {course.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-muted sm:text-xl">
            {course.shortDescription}
          </p>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-primary">
            DRAFT content — pending your review
          </p>
        </div>
      </section>

      <div className="section-container section-padding">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-bold text-text">About this program</h2>
              <p className="mt-5 text-lg leading-relaxed text-text-muted">
                {course.description}
              </p>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-text">What you&apos;ll learn</h2>
              <ul className="mt-6 space-y-4">
                {course.learnings.map((item) => (
                  <li key={item} className="card flex gap-4 p-5">
                    <span
                      className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-sm font-bold text-primary"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-base leading-relaxed text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="card overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 sm:p-8">
                <h2 className="text-lg font-bold text-text">Mentor</h2>
                <p className="mt-3 text-base text-text-muted">{course.mentor}</p>
              </div>
            </div>

            <div className="card p-6 sm:p-8">
              <h2 className="text-lg font-bold text-text">Who is this for?</h2>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Anyone ready to invest in personal growth and practical skill-building.
                No prior business or coaching experience required — just openness to
                learn and apply at your own pace.
              </p>
            </div>

            <div className="card border-primary/20 bg-accent-soft/50 p-6 sm:p-8">
              <p className="text-sm leading-relaxed text-text-muted">
                This page is informational only. Enrollment and payment are not
                available on this site yet. Contact us to learn more about joining a
                program.
              </p>
              <Button to="/contact" className="mt-5 w-full text-white">
                Get in Touch
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
