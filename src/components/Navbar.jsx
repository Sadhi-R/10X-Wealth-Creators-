import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";
import Logo from "./Logo";
import { contact } from "../data/siteContent";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/courses", label: "Programs" },
  { to: "/wealth-framework", label: "Framework" },
  { to: "/testimonials", label: "Stories" },
  { to: "/about", label: "About" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
];

function linkClass({ isActive }) {
  return [
    "block rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200",
    isActive
      ? "btn-primary shadow-none"
      : "text-text-muted hover:bg-surface-elevated/80 hover:text-text",
  ].join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        className="glass-strong mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 rounded-2xl px-3 sm:h-16 sm:px-5 lg:rounded-full lg:px-6"
        style={{ boxShadow: "var(--shadow-nav), var(--shadow-card)" }}
        aria-label="Main navigation"
      >
        <Link to="/" className="group flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3">
          <Logo size="md" />
          <span className="hidden min-w-0 truncate text-base font-bold tracking-tight text-text sm:block">
            <span className="text-primary">10X</span> Wealth Creators
          </span>
        </Link>

        <div className="hidden min-w-0 items-center gap-0.5 xl:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <ThemeToggle />
          <Button
            href={contact.whatsappGroup}
            size="sm"
            className="hidden md:inline-flex"
          >
            Join Community
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-surface/50 text-text backdrop-blur-sm transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="glass-strong mx-auto mt-2 max-h-[min(28rem,calc(100dvh-5.5rem))] max-w-7xl overflow-y-auto overscroll-contain rounded-2xl px-3 py-3 sm:px-4 sm:py-4 xl:hidden"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button
              href={contact.whatsappGroup}
              className="mt-3 w-full"
              onClick={() => setMenuOpen(false)}
            >
              Join Community
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
