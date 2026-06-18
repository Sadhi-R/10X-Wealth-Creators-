import { useState } from "react";
import { siteImages } from "../data/siteImages";

const fallbackImage = siteImages.heroBackground;

export default function CourseImage({
  src,
  alt,
  className = "",
  framed = true,
  padding = "default",
}) {
  const [imgSrc, setImgSrc] = useState(src);

  const paddingClass =
    padding === "compact" ? "p-2 sm:p-3" : "p-4 sm:p-5";

  if (!framed) {
    return (
      <img
        src={imgSrc}
        alt={alt}
        onError={() => setImgSrc(fallbackImage)}
        className={`h-full w-full object-contain ${paddingClass} ${className}`}
        loading="lazy"
      />
    );
  }

  return (
    <div className={`course-image-frame ${className}`}>
      <img
        src={imgSrc}
        alt={alt}
        onError={() => setImgSrc(fallbackImage)}
        className={`course-image ${paddingClass}`}
        loading="lazy"
      />
    </div>
  );
}
