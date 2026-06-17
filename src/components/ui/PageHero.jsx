export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="hero-3d-layer relative overflow-hidden border-b border-border/80">
      <div className="depth-orb -left-20 top-8 h-56 w-56 opacity-50" aria-hidden="true" />
      <div className="depth-orb -right-16 top-20 h-40 w-40 opacity-35" style={{ animationDelay: "2s" }} aria-hidden="true" />
      <div className="glow-orb -left-32 top-0 h-64 w-64 opacity-60" aria-hidden="true" />
      <div className="glow-orb -right-24 top-12 h-48 w-48 opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-hero-from/25 via-transparent to-transparent hero-pattern"
        aria-hidden="true"
      />
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
