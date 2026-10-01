import { siteImages } from "../data/siteImages";

const sizes = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

/** Gold lotus mark on a light plate — brand logo for the white theme. */
export default function Logo({ size = "md", className = "" }) {
  return (
    <span className={`relative inline-flex shrink-0 ${className}`}>
      <span
        className={`${sizes[size]} flex items-center justify-center overflow-hidden rounded-xl bg-white p-1 ring-2 ring-primary/25 transition-all duration-200 group-hover:ring-primary/50 group-hover:shadow-[0_0_18px_rgba(255,168,0,0.28)]`}
      >
        <img
          src={siteImages.logo}
          alt="10X Wealth Creators"
          className="h-full w-full object-contain"
        />
      </span>
    </span>
  );
}
