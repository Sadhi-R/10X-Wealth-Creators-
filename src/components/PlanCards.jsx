import { Link } from "react-router-dom";
import Button from "./ui/Button";
import CheckIcon from "./ui/CheckIcon";
import { enrollmentPlans, enrollPath, planProgression } from "../data/siteContent";

const COMPACT_FEATURE_COUNT = 4;

export default function PlanCards({
  variant = "full",
  showProgression = true,
  className = "",
}) {
  const compact = variant === "compact";

  return (
    <div className={className}>
      {showProgression && (
        <div className="card glossy-panel mb-10 border-primary/15 p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            How the plans work
          </p>
          <p className="mt-3 text-base leading-relaxed text-text-muted sm:text-lg">
            {planProgression}
          </p>
        </div>
      )}

      <div className="grid gap-8 xl:grid-cols-3">
        {enrollmentPlans.map((plan) => {
          const visibleFeatures = compact
            ? plan.features.slice(0, COMPACT_FEATURE_COUNT)
            : plan.features;
          const hiddenCount = compact ? plan.features.length - COMPACT_FEATURE_COUNT : 0;

          return (
            <article
              key={plan.id}
              id={`plan-${plan.id}`}
              className={`plan-card plan-card--${plan.id} card card-hover relative flex flex-col ${
                plan.highlighted ? "plan-card--highlighted" : ""
              } ${compact ? "p-6 sm:p-8" : "p-8 sm:p-10"}`}
            >
              {plan.badge && (
                <span className="plan-card__badge absolute -top-3 left-1/2 max-w-[calc(100%-1.5rem)] -translate-x-1/2">
                  {plan.badge}
                </span>
              )}

              <div className="plan-card__header">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="plan-card__name text-sm font-bold uppercase tracking-wider">
                    {plan.shortName}
                  </p>
                  <span className="plan-card__tier rounded-full px-2.5 py-0.5 text-xs font-medium">
                    {plan.tier}
                  </span>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-text">{plan.tagline}</h3>
                <p className="mt-2 text-sm font-medium text-text-muted">{plan.idealFor}</p>
              </div>

              {!compact && (
                <p className="mt-4 text-base leading-relaxed text-text-muted">{plan.description}</p>
              )}

              {plan.includesPrevious && (
                <p className="plan-card__includes mt-5 rounded-2xl px-4 py-3 text-sm font-semibold">
                  {plan.includesPrevious}
                </p>
              )}

              <div className="mt-6 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  {plan.includesPrevious ? "Also includes" : "What's included"}
                </p>
                <ul className="mt-4 space-y-3">
                  {visibleFeatures.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm leading-relaxed text-text-muted">
                      <span className="check-badge mt-0.5 shrink-0">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {hiddenCount > 0 && (
                  <p className="mt-3 text-xs text-text-muted">
                    + {hiddenCount} more included —{" "}
                    <Link to={`${enrollPath}#plan-${plan.id}`} className="font-semibold text-primary hover:text-primary-hover">
                      see full details
                    </Link>
                  </p>
                )}
              </div>

              <Button href={plan.paymentUrl} size="lg" className={`plan-cta plan-cta--${plan.id} mt-8 w-full`}>
                {plan.ctaLabel}
              </Button>
              <p className="mt-3 text-center text-xs text-text-muted">Secure checkout via Razorpay</p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
