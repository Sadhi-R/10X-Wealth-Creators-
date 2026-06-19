import { Link, useParams } from "react-router-dom";
import Button from "../components/ui/Button";
import CheckIcon from "../components/ui/CheckIcon";
import CourseImage from "../components/CourseImage";
import { getCourseBySlug } from "../data/courses";
import { enrollmentPlans, enrollPath } from "../data/siteContent";

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
      <section className="section-container section-padding">
        <Link
          to="/courses"
          className="inline-flex text-sm font-semibold text-primary hover:text-primary-hover"
        >
          &larr; Back to Courses
        </Link>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="badge">Course Overview</p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl">
              {course.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-muted sm:text-xl">
              {course.shortDescription}
            </p>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary">
              {course.mentor}
            </p>
          </div>
          <CourseImage
            src={course.image}
            alt={course.title}
            className="aspect-[4/3] rounded-3xl"
          />
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
            <div className="card overflow-hidden p-4 sm:p-5">
              <CourseImage
                src={course.image}
                alt={course.title}
                className="aspect-video rounded-2xl"
                padding="compact"
              />
              <div className="px-1 pt-5 sm:px-2">
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

            <div className="card glossy-panel border-primary/20 p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Enroll via membership
              </p>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                This course is included in our Silver, Gold, and Diamond plans. Choose the
                tier that matches how much support and mentorship you need.
              </p>
              <div className="mt-6 space-y-3">
                {enrollmentPlans.map((plan) => (
                  <Button
                    key={plan.id}
                    href={plan.paymentUrl}
                    className={`plan-cta plan-cta--${plan.id} w-full`}
                  >
                    {plan.ctaLabel}
                  </Button>
                ))}
              </div>
              <Button to={enrollPath} variant="secondary" className="mt-3 w-full">
                Compare all plans
              </Button>
              <Button to="/contact" variant="ghost" className="mt-3 w-full">
                Ask before enrolling
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
