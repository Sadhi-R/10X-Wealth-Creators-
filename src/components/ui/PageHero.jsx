export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-hero-from to-hero-to hero-pattern">
      <div className="section-container section-padding">
        <div className="max-w-4xl">
          {eyebrow && <p className="badge mb-5">{eyebrow}</p>}
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl lg:leading-[1.1]">
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
