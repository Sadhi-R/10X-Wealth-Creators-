export const classplusPlatformUrl = "https://classplusapp.com/w/10xwealthcreators";
export const mobileAppUrl = "https://clpdiy.page.link/hvkY";
export const enrollPath = "/plans";
/** @deprecated Use enrollPath or Link to="/plans" */
export const classplusUrl = enrollPath;

export const planProgression =
  "Silver = mindset + clarity → Gold = strategy + execution tools → Diamond = direct mentorship + lifetime community + certification.";

export const planCtaDefaults = {
  eyebrow: "Membership Plans",
  title: "Choose Silver, Gold, or Diamond",
  description:
    "Three clear tiers — start with mindset foundations, build your business, or go all-in with 1-on-1 mentorship from Sampath Kumar & Ram Prasad.",
};

export const enrollmentPlans = [
  {
    id: "silver",
    name: "Silver Plan",
    shortName: "Silver",
    tagline: "Start with clarity",
    tier: "Foundation",
    idealFor: "Best for getting clear on passion, purpose, and your first steps.",
    ctaLabel: "Enroll in Silver",
    description:
      "The entry point — build mindset and self-discovery foundations before taking business action. Get clear on who you are and what you want before building anything.",
    includesPrevious: null,
    features: [
      "Growth Mindset Foundation",
      "Discovering Your Passion & Purpose",
      "Niche Clarity & Business Ideation",
      "Weekly Group Coaching",
      "Community Access",
      "10X Life Goal Planner",
      "Guided Visualization & Affirmation Audios",
    ],
    paymentUrl: "https://rzp.io/rzp/JjJKAqa",
    highlighted: false,
    badge: null,
  },
  {
    id: "gold",
    name: "Gold Plan",
    shortName: "Gold",
    tagline: "Build your business",
    tier: "Build & Execute",
    idealFor: "Best for turning clarity into strategy, marketing, and consistent action.",
    ctaLabel: "Enroll in Gold",
    description:
      "Everything in Silver, plus the tools to turn clarity into a business — strategy, marketing, subconscious programming, and monthly accountability check-ins.",
    includesPrevious: "Everything in Silver",
    features: [
      "Productization & Monetization Strategies",
      "Marketing & Branding Blueprint",
      "Personal Roadmap to Financial Freedom",
      "Business Strategy Worksheets",
      "Subconscious Mind Programming",
      "Six Sigma Basics for Entrepreneurs",
      "Emotional & Stress Management Tools",
      "Monthly Progress Review Calls",
    ],
    paymentUrl: "https://rzp.io/rzp/rS3IZvP",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    id: "diamond",
    name: "Diamond Plan",
    shortName: "Diamond",
    tagline: "Go all-in with 1-on-1 mentorship",
    tier: "Premium",
    idealFor: "Best for direct mentorship, certification, and lifetime mastermind access.",
    ctaLabel: "Enroll in Diamond",
    description:
      "Everything in Gold, plus direct mentorship from Sampath Kumar & Ram Prasad, lifetime mastermind access, certification, and done-for-you business planning templates.",
    includesPrevious: "Everything in Gold",
    features: [
      "1-on-1 Mentorship from Sampath Kumar & Ram Prasad",
      "Business Blueprint & Launch Strategy",
      "Lifetime Access to Mastermind Sessions",
      "Diamond-Only Mastermind Group Access",
      "Advanced Financial Planning & Wealth Creation Systems",
      "Certification in Stress Management & Six Sigma Basics",
      "Done-for-You Business Planning Templates",
      "Mind-Body Alignment Practices for Peak Performance",
    ],
    paymentUrl: "https://rzp.io/rzp/Ld9D3bPg",
    highlighted: false,
    badge: "Premium",
  },
];

export const brand = {
  name: "10X Wealth Creators",
  tagline: "Mindset. Skills. Community. Wealth.",
  missionGoal: "10 Million People",
  missionStatement:
    "Transforming lives by helping people find their passion and purpose — and build sustainable, profitable income through purpose-driven entrepreneurship.",
  heroHeadline: "Build wealth with clarity, confidence, and community",
  heroSubheadline:
    "10X Wealth Creators is a mentorship-led education movement helping professionals discover their purpose, master mindset and modern skills, and build sustainable income — with honesty, structure, and support.",
};

export const visionMission = {
  vision:
    "A world where 10 million people live with financial confidence, purpose, and the skills to create lasting wealth — starting from the inside out.",
  mission:
    "We empower individuals through mindset coaching, practical business education, expert mentorship, and a supportive community — so they can transform their lives at their own pace, with clarity and integrity.",
  movement:
    "This is more than a coaching program. It is a movement for professionals, engineers, entrepreneurs, and visionaries who refuse to settle for a single paycheck and a life without purpose.",
};

export const founderStory = {
  headline: "Why we built 10X Wealth Creators",
  intro:
    "Sampath Kumar and Ram Prasad saw the same pattern again and again: brilliant professionals trapped not by lack of talent, but by limiting beliefs, unclear direction, and no practical roadmap.",
  extended:
    "Sampath brought 15+ years of psychology-backed mindset coaching. Ram brought engineers-focused business strategy, digital marketing, and AI automation. Together, they created 10X Wealth Creators — a structured path from inner clarity to outer action, with a community that ensures no one builds alone.",
  quote:
    "We started this because wealth without purpose is empty — and purpose without practical skills cannot sustain a life. Both are essential.",
};

export const problemsWeSolve = [
  {
    title: "Stuck in a paycheck cycle",
    description:
      "You earn, you spend, you repeat — with little clarity on how to build something beyond your salary.",
  },
  {
    title: "Lack of direction",
    description:
      "You know you want more, but you're unsure what path fits your strengths, values, and life stage.",
  },
  {
    title: "Fear of starting",
    description:
      "Self-doubt, overwhelm, or past failures make it hard to take the first step toward a side business or new skill.",
  },
  {
    title: "Building alone",
    description:
      "Without mentorship and community, motivation fades and progress stalls when challenges appear.",
  },
];

export const impactStats = [
  { value: "20+", label: "Courses and learning experiences" },
  { value: "15+", label: "Years of combined mentor experience" },
  { value: "1,000+", label: "Community members guided on their journey" },
];

export const visionStat = {
  value: "10M+",
  label: "Lives we aim to transform worldwide",
};

export const communityContent = {
  headline: "You don't have to figure this out alone",
  description:
    "Join a growing community of learners, professionals, and entrepreneurs who support each other through mindset shifts, business building, and long-term growth.",
  highlights: [
    "Weekly group coaching and live sessions",
    "WhatsApp community for daily support and updates",
    "Mobile app for learning on the go",
    "Mastermind access for Diamond members",
  ],
};

export const learningResources = [
  {
    title: "YouTube teachings",
    description: "Free video content on mindset, business, and wealth creation from our mentors.",
    href: "https://www.youtube.com/@10XWealthCreators",
    external: true,
    cta: "Watch on YouTube",
  },
  {
    title: "Explore the Wealth Framework",
    description: "Understand our five-pillar approach before you enroll in any program.",
    href: "/wealth-framework",
    external: false,
    cta: "View Framework",
  },
  {
    title: "Book a discovery call",
    description: "Not sure where to start? Talk to our team and find the right path for your goals.",
    href: "/contact",
    external: false,
    cta: "Get in Touch",
  },
];

export const faqs = [
  {
    question: "Is 10X Wealth Creators financial or investment advice?",
    answer:
      "No. We provide educational content and coaching only. We do not offer professional financial, legal, or investment advice, and we do not guarantee any specific income or financial outcome.",
  },
  {
    question: "Who is this for?",
    answer:
      "Students, employees, professionals, engineers, entrepreneurs, and anyone ready to invest in mindset, practical skills, and purpose-driven growth — whether you're starting from scratch or scaling an existing path.",
  },
  {
    question: "Do I need business experience to join?",
    answer:
      "No prior business or coaching experience is required. Our programs start with mindset and self-discovery, then build toward practical skills at your pace.",
  },
  {
    question: "What's the difference between Silver, Gold, and Diamond?",
    answer:
      "Silver builds mindset and clarity foundations. Gold adds business strategy, marketing, and execution tools. Diamond includes everything in Gold plus 1-on-1 mentorship, lifetime mastermind access, and certification. See our Plans page for full details.",
  },
  {
    question: "Can I build a business without quitting my job?",
    answer:
      "Yes — that's a core focus of our approach. Ram Prasad specializes in helping professionals and engineers build side projects and multiple income streams alongside a full-time career.",
  },
  {
    question: "How do I access courses after enrolling?",
    answer:
      "After secure payment via Razorpay, you access course materials, recordings, and worksheets on our ClassPlus learning platform. You can also download our Android app for mobile learning.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. Please review our Refund Policy page for eligibility, timelines, and how to request a refund before enrolling.",
  },
  {
    question: "How do I join the community?",
    answer:
      "Members get access to our WhatsApp community and group coaching. You can also join our public WhatsApp group from the Community page to connect and get updates.",
  },
];

export const pageMeta = {
  home: {
    title: "Mindset & Business Coaching for Financial Freedom",
    description:
      "Learn mindset, business skills, and wealth creation strategies with expert mentors Sampath Kumar and Ram Prasad. Community-led education in Hyderabad and online.",
  },
  about: {
    title: "About Us — Our Story & Mentors",
    description:
      "Meet the founders and mentors behind 10X Wealth Creators. Psychology-backed mindset coaching meets practical business strategy.",
  },
  wealthFramework: {
    title: "The 10X Wealth Framework",
    description:
      "Our five-pillar framework integrates purpose, mindset, financial education, multiple income strategies, and entrepreneurship — inner clarity plus outer execution.",
  },
  courses: {
    title: "Programs & Courses",
    description:
      "Explore courses on emotional clarity, abundance mindset, self-discovery, and AI tools for business growth — included in our membership programs.",
  },
  community: {
    title: "Join Our Community",
    description:
      "Connect with learners, professionals, and entrepreneurs in the 10X Wealth Creators community. WhatsApp, app, and live sessions.",
  },
  testimonials: {
    title: "Success Stories",
    description:
      "Real stories from students and professionals who transformed their mindset and growth journey with 10X Wealth Creators.",
  },
  faq: {
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about our programs, membership plans, community, and educational coaching services.",
  },
  contact: {
    title: "Contact Us",
    description:
      "Get in touch with 10X Wealth Creators. Book a discovery call, join our community, or ask about programs and membership.",
  },
  plans: {
    title: "Membership Plans",
    description:
      "Choose Silver, Gold, or Diamond membership. Start with mindset foundations, build your business, or go all-in with 1-on-1 mentorship.",
  },
};

export const contact = {
  email: "10xwealthcreators@gmail.com",
  phone: "+91 79810 88978",
  phoneAlt: "+91 94414 15563",
  phoneHref: "tel:+917981088978",
  phoneAltHref: "tel:+919441415563",
  address: {
    line1: "ECIL",
    line2: "Hyderabad",
    city: "Telangana 500062",
    country: "India",
  },
  whatsappGroup: "https://chat.whatsapp.com/Im4AqA2MjsgAK4very2D6L",
  mobileAppUrl,
  social: {
    instagram: "https://www.instagram.com/10xwealthcreators",
    youtube: "https://www.youtube.com/@10XWealthCreators",
    x: "https://x.com/10XWC",
  },
};

export const stats = [
  { value: "20+", label: "Courses and learning experiences" },
  { value: "15+", label: "Years of combined mentor experience" },
  { value: "1,000+", label: "Community members on their journey" },
];

export const transformationSteps = [
  {
    step: "01",
    title: "Clarify & Reflect",
    text: "Start with self-discovery and emotional clarity. Understand where you are, what you want, and what's holding you back.",
  },
  {
    step: "02",
    title: "Build Mindset",
    text: "Strengthen abundance thinking, confidence, and daily habits that support consistent effort — the real driver of progress.",
  },
  {
    step: "03",
    title: "Learn Skills",
    text: "Gain practical knowledge in business planning, AI tools, automation, and modern growth strategies through guided programs.",
  },
  {
    step: "04",
    title: "Take Action",
    text: "Move from learning to doing with community support, mentorship, and accountability — at your own pace.",
  },
];

export const whyUs = [
  {
    step: "01",
    title: "Find Your Purpose",
    description:
      "Uncover your true potential and align your skills with your passion. Gain clarity on your life's mission and transform it into meaningful work. Purpose-driven growth leads to long-term fulfillment.",
  },
  {
    step: "02",
    title: "Growth Mindset",
    description:
      "Adopt the mindset that fuels success and resilience. Learn how successful entrepreneurs think, take action, and turn obstacles into opportunities. Develop habits that keep you moving forward.",
  },
  {
    step: "03",
    title: "Financial Freedom",
    description:
      "Break free from limiting beliefs around money and build skills for long-term wealth creation. Explore smart strategies and income approaches through education — not guaranteed outcomes.",
  },
  {
    step: "04",
    title: "Multiple Income Streams",
    description:
      "Relying on a single income source is risky. Learn how to explore multiple income streams using AI, automation, and digital business models — with practical, step-by-step guidance.",
  },
  {
    step: "05",
    title: "Entrepreneurship",
    description:
      "Turn your skills into a business without quitting your job. Learn how professionals and engineers can build side projects, automate processes, and create value with low upfront investment.",
  },
];

export const corePrograms = [
  {
    title: "Discover Your Passion & Purpose",
    description:
      "Learn how to identify what you truly love and monetize it. Build a passion-driven path that aligns with your strengths and long-term vision.",
  },
  {
    title: "Growth Mindset & Success Strategies",
    description:
      "Shift your mindset to support exponential personal growth. Master confidence-building techniques and high-performance habits for consistent action.",
  },
  {
    title: "Business Planning & Wealth Creation",
    description:
      "Get step-by-step guidance on starting and growing a business with proven marketing, planning, and automation strategies.",
  },
  {
    title: "Multiple Income Streams",
    description:
      "Explore diverse income approaches including digital products, consulting, and passive income models — as educational frameworks, not promises.",
  },
];

/** @deprecated Use corePrograms */
export const elitePrograms = corePrograms;

export const mentors = [
  {
    name: "Sampath Kumar",
    role: "Growth Mindset Mentor",
    credentials: "Psychologist · B.A., B.Sc. · 15+ years' experience",
    imageKey: "sampath",
    bio: "Sampath Kumar helps individuals break free from limiting beliefs and build a success-oriented mindset. He specializes in subconscious reprogramming, confidence-building, emotional resilience, goal-setting, and high-performance habits that support long-term personal and professional growth.",
    focus: [
      "Mindset transformation",
      "Subconscious reprogramming",
      "Confidence & habits",
      "Emotional clarity",
    ],
  },
  {
    name: "Ram Prasad",
    role: "Engineers Business Mentor",
    credentials: "Business strategy · Digital marketing · AI automation",
    imageKey: "ram",
    bio: "Ram Prasad guides professionals, engineers, and entrepreneurs to start, structure, and scale businesses with practical strategy. His expertise includes digital marketing, business automation, AI-enabled workflows, and building multiple income streams alongside a full-time career.",
    focus: [
      "Business strategy",
      "Engineer side hustles",
      "Automation systems",
      "AI for business growth",
    ],
  },
];

export const aboutStory = {
  headline: "Empowering people to build wealth and health",
  subheadline: "From single income to multiple streams — a movement to transform lives",
  intro:
    "At 10X Wealth Creators, we believe true success starts with the right mindset. Our mission is to help individuals discover their true potential, build practical skills, and explore multiple income streams through expert mentorship, proven strategies, and a powerful community.",
  extended:
    "Led by Sampath Kumar (Growth Mindset Mentor) and Ram Prasad (Engineers Business Mentor), we empower students, employees, professionals, entrepreneurs, and visionaries to take control of their future — with clarity, consistency, and purpose-driven action.",
  values: [
    "Mindset-first coaching before tactics and tools",
    "Purpose-driven entrepreneurship integrated with personal growth",
    "Practical AI, automation, and modern skill-building",
    "Community support — you are not building alone",
    "Honest education — no guaranteed income or financial outcomes",
  ],
};
