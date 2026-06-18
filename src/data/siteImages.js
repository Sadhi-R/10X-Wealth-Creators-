const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const siteImages = {
  logo: withBase("/images/Logo.png"),
  favicon: withBase("/images/favicon.png"),
  heroBackground: withBase("/images/hero-background.png"),
  mentors: {
    sampath: withBase("/images/sampath-kumar.jpg"),
    ram: withBase("/images/ram-prasad.jpg"),
  },
  testimonials: {
    sadhi: withBase("/images/sadhi-thumbnail.jpg"),
    rajitha: withBase("/images/rajitha-thumbnail.png"),
    meditation: withBase("/images/Meditation.png"),
  },
  courses: {
    emotionalCleansing: withBase("/images/courses/Emotional Cleansing Session.png"),
    businessAbundance: withBase("/images/courses/Business Abundance.png"),
    selfDiscovery: withBase("/images/courses/Self Discovery.png"),
    aiTools: withBase("/images/courses/AI Tools For Growth.png"),
    person: withBase("/images/courses/person.png"),
  },
};
