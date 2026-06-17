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
      {eyebrow && <p className="badge mb-5">{eyebrow}</p>}
      <h2 className="font-display text-[clamp(1.875rem,4vw,3.25rem)] font-bold tracking-tight text-text leading-[1.1]">
        {title}
      </h2>
      {align === "center" && (
        <div className="divider-gradient mx-auto mt-6 w-24" aria-hidden="true" />
      )}
      {description && (
        <p className="mt-5 text-lg leading-relaxed text-text-muted sm:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
