export default function GlossyBackground() {
  return (
    <div className="glossy-background pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="glossy-background__base" />
      <div className="glossy-background__orb glossy-background__orb--primary" />
      <div className="glossy-background__orb glossy-background__orb--accent" />
      <div className="glossy-background__sheen" />
    </div>
  );
}
