import { siteImages } from "./siteImages";

// DRAFT — review descriptions before final launch

export const courses = [
  {
    slug: "emotional-cleansing-session",
    title: "Emotional Cleansing Session",
    shortDescription:
      "Release emotional blocks, reset your mindset, and create space for clearer decisions and consistent growth.",
    image: siteImages.courses.emotionalCleansing,
    description:
      "The Emotional Cleansing Session is a guided coaching experience designed to help you identify, understand, and release emotional patterns that quietly limit your confidence, focus, and follow-through. Many people carry stress, self-doubt, or unresolved experiences into their work and relationships without realizing how much those patterns shape daily decisions.\n\nIn this session, you will move through structured reflection and practical exercises that help you pause reactive thinking and return to a calmer, more grounded state. The goal is not to ignore emotions, but to work with them wisely — so you can show up with greater clarity in your personal life, career, and business journey.\n\nThis program is educational and coaching-based. It does not provide therapy, medical advice, or guaranteed outcomes. Your progress depends on your openness, consistency, and personal effort.",
    mentor: "Sampath Kumar — Growth Mindset Mentor",
    learnings: [
      "Identify recurring emotional triggers that affect confidence, productivity, and decision-making",
      "Use simple reset practices to recover mental clarity after stress, conflict, or setbacks",
      "Build a personal emotional-awareness routine you can apply before important conversations or business decisions",
      "Replace self-criticism with constructive reflection that supports long-term growth",
    ],
  },
  {
    slug: "business-abundance",
    title: "Business Abundance",
    shortDescription:
      "Shift from scarcity to abundance thinking and build habits that support sustainable business growth.",
    image: siteImages.courses.businessAbundance,
    description:
      "Business Abundance is a mindset-and-strategy program for entrepreneurs, professionals, and aspiring business builders who want to grow with intention rather than fear. Before tactics can work, your beliefs about money, value, opportunity, and self-worth must support consistent action.\n\nThis course helps you examine scarcity patterns — such as underpricing, hesitation, comparison, or fear of failure — and replace them with an abundance-oriented approach rooted in responsibility, learning, and steady effort. You will explore how your inner dialogue influences the way you plan, sell, lead, and persist when results take time.\n\nYou will also connect mindset work to practical business behavior: setting goals, prioritizing high-value actions, and building systems that support progress over the long term. This is coaching and education only — not financial or investment advice, and not a promise of income.",
    mentor: "Ram Prasad — Business Mentor",
    learnings: [
      "Understand how scarcity vs. abundance thinking influences pricing, offers, and opportunity evaluation",
      "Develop daily mindset practices that improve consistency, resilience, and decision quality",
      "Create a practical growth plan aligned with your skills, effort level, and current stage of business",
      "Learn to measure progress through learning and action — not unrealistic overnight expectations",
    ],
  },
  {
    slug: "self-discovery",
    title: "Self Discovery",
    shortDescription:
      "Gain deep clarity about your values, strengths, and direction so your next steps feel intentional.",
    image: siteImages.courses.selfDiscovery,
    description:
      "Self Discovery is a structured inner-journey program for anyone who feels pulled in different directions — or knows they want more, but is unsure what “more” should look like. Instead of rushing into the next opportunity, this course helps you slow down, reflect honestly, and understand who you are becoming.\n\nThrough guided exercises, you will explore your values, motivations, natural strengths, and recurring blind spots. You will examine what energizes you, what drains you, and what kind of work or business model aligns with your personality and long-term vision. The outcome is not a fixed life plan, but a clearer internal compass you can use when making career, business, and personal decisions.\n\nThis course blends reflection with practical planning. By the end, you will have stronger self-awareness and a written direction statement you can refine over time. Results vary based on your level of reflection, honesty, and follow-through.",
    mentor: "Sampath Kumar — Growth Mindset Mentor",
    learnings: [
      "Clarify your core values and use them as a filter for career and business choices",
      "Identify strengths, patterns, and growth areas through guided self-assessment",
      "Define a personal vision statement that connects purpose with practical next steps",
      "Build confidence in your direction by reducing confusion, comparison, and reactive decision-making",
    ],
  },
  {
    slug: "ai-tools-for-growth",
    title: "AI Tools for Growth",
    shortDescription:
      "Learn practical AI tools to improve productivity, communication, and income-related skills.",
    image: siteImages.courses.aiTools,
    description:
      "AI Tools for Growth is a hands-on learning program for coaches, professionals, creators, and entrepreneurs who want to use modern AI responsibly and effectively. You do not need a technical background — the focus is on real-world application, not complex coding.\n\nYou will learn how to use AI tools for tasks such as planning, content creation, research, client communication, workflow organization, and skill development. The course emphasizes judgment and ethics: when to use AI, how to verify outputs, and how to keep your voice authentic while benefiting from speed and support.\n\nWhether you are building a side project, improving your professional output, or mentoring others, this program helps you develop a repeatable AI workflow that saves time and strengthens your capabilities. AI is a tool — not a guarantee of income. Your results depend on how consistently you learn, apply, and adapt as technology evolves.",
    mentor: "Ram Prasad — Business Mentor",
    learnings: [
      "Navigate essential AI tools for writing, planning, productivity, and idea development",
      "Apply AI to coaching, mentoring, or client-facing work while maintaining authenticity and quality",
      "Build simple workflows that reduce repetitive work and improve consistency",
      "Develop a learning habit to stay current as AI tools and best practices continue to evolve",
    ],
  },
];

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug);
}
