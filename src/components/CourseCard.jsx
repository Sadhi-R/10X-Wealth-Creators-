import { Link } from "react-router-dom";

export default function CourseCard({ course, showDetails = true, featured = false }) {
  return (
    <article
      className={`group card card-hover flex flex-col overflow-hidden ${featured ? "lg:flex-row" : ""}`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "min-h-[260px] lg:min-h-full lg:w-[42%]" : "h-56 sm:h-64"
        }`}
      >
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
          Course
        </span>
        {featured && (
          <h3 className="absolute bottom-5 left-5 right-5 text-2xl font-bold text-white lg:hidden">
            {course.title}
          </h3>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-7 sm:p-9 ${featured ? "lg:justify-center" : ""}`}>
        {!featured && (
          <h3 className="text-xl font-bold tracking-tight text-text sm:text-2xl">
            {course.title}
          </h3>
        )}
        {featured && (
          <h3 className="hidden text-2xl font-bold tracking-tight text-text lg:block lg:text-3xl">
            {course.title}
          </h3>
        )}
        <p className="mt-4 flex-1 text-base leading-relaxed text-text-muted">
          {course.shortDescription}
        </p>
        {showDetails && (
          <Link
            to={`/courses/${course.slug}`}
            className="btn-primary mt-7 inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            View Details
            <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
