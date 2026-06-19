import PlanCards from "./PlanCards";
import SectionHeader from "./ui/SectionHeader";
import { planCtaDefaults } from "../data/siteContent";

export default function PlanCTASection({
  eyebrow = planCtaDefaults.eyebrow,
  title = planCtaDefaults.title,
  description = planCtaDefaults.description,
  align = "center",
  variant = "full",
  showProgression = true,
  className = "",
  id = "membership-plans",
}) {
  return (
    <section id={id} className={`section-container section-padding ${className}`}>
      <SectionHeader
        eyebrow={eyebrow}
        title={title}
        description={description}
        align={align}
        className="mb-12"
      />
      <PlanCards variant={variant} showProgression={showProgression} />
    </section>
  );
}
