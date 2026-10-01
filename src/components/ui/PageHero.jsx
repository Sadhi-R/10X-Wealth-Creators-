export default function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="hero-orb left-[-3rem] top-10 h-40 w-40 bg-primary/15" />
        <div className="hero-orb anim-float-delayed right-[-2rem] top-24 h-48 w-48 bg-[#ffe08a]/25" />
      </div>
      <div className="section-container relative z-[1] section-padding !pb-10 !pt-8 sm:!pb-14 sm:!pt-10">
        <div className="reveal is-visible max-w-4xl">
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

