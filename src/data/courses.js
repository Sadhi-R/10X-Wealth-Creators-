// DRAFT — course copy pending final review

export const courses = [
  {
    slug: "emotional-cleansing-session",
    title: "Emotional Cleansing Session",
    shortDescription:
      "Release emotional blocks and reset your mindset for growth.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900&h=560&fit=crop&q=80",
    description:
      "This session helps you identify and release emotional patterns that hold you back from showing up fully in your work and life. Through guided reflection and practical exercises, you'll create space for clearer thinking, stronger habits, and a mindset oriented toward growth — on your terms, at your pace.",
    mentor: "10X Wealth Creators Team",
    learnings: [
      "Recognize common emotional blocks that limit confidence and follow-through",
      "Use simple daily practices to reset your mindset after stress or setbacks",
      "Build a personal framework for emotional clarity before making business decisions",
    ],
  },
  {
    slug: "business-abundance",
    title: "Business Abundance",
    shortDescription:
      "Build an abundance mindset to grow your business and income.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=560&fit=crop&q=80",
    description:
      "Business Abundance focuses on the inner shifts that support sustainable growth — moving from scarcity thinking to a mindset of possibility, responsibility, and consistent action. You'll explore how beliefs about money, value, and opportunity shape the decisions you make every day as you build or grow a business.",
    mentor: "10X Wealth Creators Team",
    learnings: [
      "Understand how scarcity vs. abundance thinking affects business decisions",
      "Apply mindset practices that support consistent action and resilience",
      "Align your goals with practical steps for growing income through effort and skill",
    ],
  },
  {
    slug: "self-discovery",
    title: "Self Discovery",
    shortDescription:
      "Understand yourself deeply to unlock your true potential.",
    image:
      "https://images.unsplash.com/photo-1499203537755-e2fade93b32f?w=900&h=560&fit=crop&q=80",
    description:
      "Self Discovery is a guided journey inward — clarifying your values, strengths, and direction so your next steps feel intentional rather than reactive. This course blends reflective exercises with practical planning so you can move from uncertainty toward a clearer sense of purpose and potential.",
    mentor: "10X Wealth Creators Team",
    learnings: [
      "Clarify your core values and how they inform your career and business choices",
      "Identify strengths and blind spots through structured self-assessment",
      "Create a personal vision statement to guide your growth journey",
    ],
  },
  {
    slug: "ai-tools-for-growth",
    title: "AI Tools for Growth",
    shortDescription:
      "Learn practical AI tools to grow your income and skills.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=560&fit=crop&q=80",
    description:
      "AI Tools for Growth introduces practical, accessible ways to use modern AI tools in your work — whether you're building a side project, coaching others, or streamlining everyday tasks. No technical background required: the focus is on real-world application, learning by doing, and building skills that support your goals.",
    mentor: "10X Wealth Creators Team",
    learnings: [
      "Navigate essential AI tools for content, planning, and productivity",
      "Apply AI thoughtfully to mentoring, coaching, or client-facing work",
      "Develop a learning habit so you stay current as tools evolve",
    ],
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}
