import { Link } from "react-router-dom";

export default function CourseCard({ course, showDetails = true, featured = false }) {
  return (
    <article
      className={`card card-hover flex flex-col overflow-hidden ${featured ? "lg:flex-row" : ""}`}
    >
      <div
        className={`relative overflow-hidden bg-surface-elevated ${
          featured ? "min-h-[240px] lg:min-h-full lg:w-2/5" : "h-52 sm:h-56"
        }`}
      >
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <p className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-wider text-white">
          Course
        </p>
      </div>

      <div className={`flex flex-1 flex-col p-6 sm:p-8 ${featured ? "lg:justify-center" : ""}`}>
        <h3 className="text-xl font-bold tracking-tight text-text sm:text-2xl">
          {course.title}
        </h3>
        <p className="mt-3 flex-1 text-base leading-relaxed text-text-muted">
          {course.shortDescription}
        </p>
        {showDetails && (
          <Link
            to={`/courses/${course.slug}`}
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View Details
            <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </article>
  );
}
