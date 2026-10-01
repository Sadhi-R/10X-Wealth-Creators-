import { siteImages } from "../data/siteImages";

const sizes = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

/**
 * @param {"white" | "gold"} [variant]
 * white — for navy / dark surfaces
 * gold — for light surfaces
 */
export default function Logo({ size = "md", className = "", variant = "white" }) {
  const src = variant === "gold" ? siteImages.logo : siteImages.logoWhite;
  const plate =
    variant === "white"
      ? "bg-[#001848] ring-white/25 group-hover:ring-white/45"
      : "bg-gradient-to-br from-[#fff8e8] to-[#ffe9b8] ring-primary/30 group-hover:ring-primary/55 group-hover:shadow-[0_0_18px_rgba(255,168,0,0.35)]";

  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <span
        className={`${sizes[size]} flex items-center justify-center overflow-hidden rounded-xl p-1.5 ring-2 transition-all duration-200 ${plate}`}
      >
        <img
          src={src}
          alt="10X Wealth Creators"
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  );
}
