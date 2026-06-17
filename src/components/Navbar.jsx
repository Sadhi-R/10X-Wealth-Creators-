import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";
import Logo from "./Logo";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

function linkClass({ isActive }) {
  return [
    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
    isActive
      ? "btn-primary shadow-none"
      : "text-text-muted hover:bg-surface-elevated/80 hover:text-text",
  ].join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        className="glass-strong section-container flex h-16 items-center justify-between rounded-2xl px-4 sm:px-6 lg:rounded-full"
        style={{ boxShadow: "var(--shadow-nav), var(--shadow-card)" }}
        aria-label="Main navigation"
      >
        <Link to="/" className="group flex cursor-pointer items-center gap-3">
          <Logo size="md" showGlow />
          <span className="hidden text-base font-bold tracking-tight text-text sm:block">
            <span className="text-primary">10X</span> Wealth Creators
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button to="/courses" size="sm" className="hidden sm:inline-flex">
            Explore Courses
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-border/80 bg-surface/50 text-text backdrop-blur-sm transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
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
          className="glass-strong section-container mt-2 rounded-2xl px-4 py-4 lg:hidden"
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
            <Button to="/courses" className="mt-3 w-full" onClick={() => setMenuOpen(false)}>
              Explore Courses
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
