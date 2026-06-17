import { Link } from "react-router-dom";

const variants = {
  primary: "btn-primary",
  secondary:
    "border border-border/80 bg-surface/80 text-text shadow-sm backdrop-blur-sm hover:border-primary/30 hover:bg-surface-elevated hover:shadow-md",
  ghost: "text-primary hover:bg-accent-soft/80",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm rounded-full",
  md: "px-7 py-3 text-sm rounded-full",
  lg: "px-8 py-4 text-base rounded-full",
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
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
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
