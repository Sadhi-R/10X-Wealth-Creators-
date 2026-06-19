import { Link } from "react-router-dom";
import { enrollmentPlans, enrollPath } from "../data/siteContent";

export default function PlanTierStrip({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {enrollmentPlans.map((plan) => (
        <Link
          key={plan.id}
          to={`${enrollPath}#plan-${plan.id}`}
          className={`plan-tier-pill plan-tier-pill--${plan.id} inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200`}
        >
          <span className="plan-tier-pill__dot h-2 w-2 rounded-full" aria-hidden="true" />
          {plan.shortName} Plan
        </Link>
      ))}
    </div>
  );
}
