export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container relative z-[1] section-padding">
        <div className="max-w-4xl">
          {eyebrow && <p className="badge mb-6">{eyebrow}</p>}
          <h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-tight text-text leading-[1.05]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-muted sm:text-xl">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
