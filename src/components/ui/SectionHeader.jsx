export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const alignClass =
    align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && <p className="badge mb-4">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-text-muted sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
