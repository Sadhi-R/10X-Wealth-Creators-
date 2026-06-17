import { Link, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import { getCourseBySlug } from "../data/courses";
import { classplusUrl } from "../data/siteContent";

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
        <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/30 to-transparent" />
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
            {course.mentor}
          </p>
        </div>
      </section>

      <div className="section-container section-padding">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <section>
              <h2 className="text-2xl font-bold text-text">About this program</h2>
              <div className="mt-5 space-y-5">
                {course.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph.slice(0, 48)} className="text-lg leading-relaxed text-text-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-bold text-text">What you&apos;ll learn</h2>
              <ul className="mt-6 space-y-4">
                {course.learnings.map((item) => (
                  <li key={item} className="card flex gap-4 p-5">
                    <span
                      className="check-badge mt-1 shrink-0"
                      aria-hidden="true"
                    >
                      <CheckIcon className="h-3.5 w-3.5" />
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
                Enroll and purchase this program on our official ClassPlus learning
                platform. For questions before enrolling, contact our team directly.
              </p>
              <Button href={classplusUrl} className="mt-5 w-full">
                Buy Now on ClassPlus
              </Button>
              <Button to="/contact" variant="secondary" className="mt-3 w-full">
                Ask the Expert
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
