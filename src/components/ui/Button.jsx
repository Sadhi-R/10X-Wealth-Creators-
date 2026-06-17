import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-sm",
  secondary:
    "border border-border bg-surface text-text hover:border-primary/40 hover:bg-surface-elevated",
  ghost: "text-primary hover:bg-accent-soft",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  to,
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...props
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
