import { Link } from "react-router-dom";
import Logo from "./Logo";

const footerLinks = [
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/disclaimer", label: "Disclaimer" },
  { to: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/10xwealthcreators",
    label: "Instagram",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://www.youtube.com/@10XWealthCreators",
    label: "YouTube",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/10XWC",
    label: "X",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-8 border-t border-border/60 bg-surface">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="section-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size="lg" />
              <p className="text-xl font-bold tracking-tight text-text">
                Wealth <span className="text-primary">Creators</span>
              </p>
            </div>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
              Educational coaching for mindset, purpose, and practical business growth.
              We help you build clarity and skills — not financial guarantees.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Hyderabad, India &middot; Coaching &amp; education only — not financial,
              legal, or investment advice.
            </p>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-text">Navigate</p>
            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-base text-text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-text">Connect</p>
            <ul className="mt-5 space-y-3 text-base text-text-muted">
              <li>
                <a href="mailto:10xwealthcreators@gmail.com" className="hover:text-primary">
                  10xwealthcreators@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919441415563" className="hover:text-primary">
                  +91 94414 15563
                </a>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-surface-elevated/50 text-text-muted backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:text-primary hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} 10X Wealth Creators. All rights reserved.</p>
          <p>Results vary. No income or success guarantees.</p>
        </div>
      </div>
    </footer>
  );
}
