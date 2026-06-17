import { siteImages } from "../data/siteImages";

const sizes = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

export default function Logo({ size = "md", showGlow = false, className = "" }) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <span
        className={`${sizes[size]} flex items-center justify-center overflow-hidden rounded-xl bg-[#0c0c10] p-1.5 ring-2 ring-primary/25 transition-all duration-300 group-hover:ring-primary/50`}
      >
        <img
          src={siteImages.logo}
          alt="10X Wealth Creators"
          className="h-full w-full object-contain"
        />
      </span>
      {showGlow && (
        <span
          className="absolute -inset-1 -z-10 rounded-xl bg-primary/25 blur-md opacity-0 transition-opacity group-hover:opacity-100"
          aria-hidden="true"
        />
      )}
    </span>
  );
}
