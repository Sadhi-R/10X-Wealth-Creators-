export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden border-b border-border/80">
      <div className="glow-orb -left-32 top-0 h-64 w-64 opacity-60" aria-hidden="true" />
      <div className="glow-orb -right-24 top-12 h-48 w-48 opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-hero-from via-bg/50 to-bg hero-pattern"
        aria-hidden="true"
      />
      <div className="section-container relative section-padding">
        <div className="max-w-4xl">
          {eyebrow && <p className="badge mb-6">{eyebrow}</p>}
          <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl lg:text-6xl lg:leading-[1.08]">
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
