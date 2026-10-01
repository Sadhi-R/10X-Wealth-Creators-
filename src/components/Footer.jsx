import { Link } from "react-router-dom";
import Logo from "./Logo";
import { contact, enrollPath, mobileAppUrl } from "../data/siteContent";

const footerLinks = [
  { to: "/courses", label: "Programs" },
  { to: "/wealth-framework", label: "Wealth Framework" },
  { to: "/about", label: "About" },
  { to: "/community", label: "Community" },
  { to: "/testimonials", label: "Success Stories" },
  { to: "/faq", label: "FAQs" },
  { to: "/plans", label: "Membership Plans" },
  { to: "/contact", label: "Contact" },
];

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund Policy" },
  { to: "/disclaimer", label: "Disclaimer" },
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
    <footer className="relative mt-8 bg-transparent backdrop-blur-sm">
      <div className="section-container py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size="lg" />
              <p className="text-xl font-bold tracking-tight text-text">
                <span className="text-primary">10X</span> Wealth Creators
              </p>
            </div>
            <p className="mt-5 max-w-md text-base leading-relaxed text-text-muted">
              A mentorship-led education movement for mindset, purpose, and practical
              business growth. Join our community, explore our framework, and grow with
              expert guidance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Coaching &amp; education only — not financial, legal, or investment advice.
            </p>
            <Link
              to={enrollPath}
              className="mt-4 inline-flex text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-hover"
            >
              Membership Plans &rarr;
            </Link>
            <a
              href={mobileAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm font-semibold text-primary transition-colors duration-200 hover:text-primary-hover"
            >
              Download Mobile App &rarr;
            </a>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-text">Explore</p>
            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="cursor-pointer text-base text-text-muted transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
                <a href={`mailto:${contact.email}`} className="contact-break cursor-pointer transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {contact.email}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="cursor-pointer transition-colors duration-200 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  {contact.phone}
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
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-surface-elevated/50 text-text-muted backdrop-blur-sm transition-all duration-200 hover:border-primary/40 hover:text-primary hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <nav aria-label="Legal links" className="mt-8">
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-muted">
                {legalLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-sm text-text-muted">
          <p>&copy; {year} 10X Wealth Creators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
