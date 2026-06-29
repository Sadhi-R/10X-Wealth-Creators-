import { Link } from "react-router-dom";
import CourseImage from "./CourseImage";

function getExpandedParagraphs(course) {
  return course.description.split("\n\n").filter(Boolean).slice(0, 2);
}

export default function CourseCard({
  course,
  showDetails = true,
  featured = false,
  expanded = false,
}) {
  const expandedParagraphs = expanded ? getExpandedParagraphs(course) : [];

  return (
    <article
      className={`group card card-hover overflow-hidden ${
        featured ? "flex flex-col lg:flex-row lg:items-start" : "flex flex-col"
      }`}
    >
      <div
        className={`relative shrink-0 ${
          featured
            ? "h-52 w-full sm:h-60 lg:h-auto lg:w-[min(100%,340px)] lg:min-h-[260px]"
            : "h-56 sm:h-64"
        }`}
      >
        <CourseImage
          src={course.image}
          alt={course.title}
          className="h-full rounded-none border-0 shadow-none"
        />
        <span className="absolute left-5 top-5 rounded-full border border-primary/25 bg-surface/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md">
          Course
        </span>
        {featured && (
          <h3 className="absolute bottom-5 left-5 right-5 rounded-2xl bg-surface/90 px-4 py-3 text-xl font-bold text-text backdrop-blur-md lg:hidden">
            {course.title}
          </h3>
        )}
      </div>

      <div className={`flex flex-col p-7 sm:p-9 ${featured ? "lg:flex-1" : ""}`}>
        <h3
          className={`font-bold tracking-tight text-text ${
            featured
              ? "hidden text-2xl lg:block lg:text-3xl"
              : "text-xl sm:text-2xl"
          }`}
        >
          {course.title}
        </h3>

        {expanded ? (
          <div className="mt-4 space-y-4">
            <p className="text-base font-medium leading-relaxed text-text">
              {course.shortDescription}
            </p>
            {expandedParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-base leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            {course.shortDescription}
          </p>
        )}

        {course.mentor && expanded && (
          <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-primary">
            {course.mentor}
          </p>
        )}

        {showDetails && (
          <Link
            to={`/courses/${course.slug}`}
            className="btn-primary mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 sm:w-fit"
          >
            View Details
            <span
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            >
              &rarr;
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
