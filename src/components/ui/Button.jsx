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
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  type = "button",
  ...props
}) {
  const classes = [
    "inline-flex cursor-pointer items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
    variants[variant],
    sizes[size],
    className,
  ].join(" ");

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

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
