import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import Button from "./ui/Button";
import { siteImages } from "../data/siteImages";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/courses", label: "Courses" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function linkClass({ isActive }) {
  return [
    "rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
    isActive
      ? "bg-primary text-white"
      : "text-text-muted hover:bg-surface-elevated hover:text-text",
  ].join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-surface/90 backdrop-blur-md"
      style={{ boxShadow: "var(--shadow-nav)" }}
    >
      <nav
        className="section-container flex h-[4.5rem] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={siteImages.logo}
            alt="10X Wealth Creators"
            className="h-10 w-10 rounded-xl object-cover"
          />
          <span className="hidden text-base font-bold tracking-tight text-text sm:block">
            Wealth Creators
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
          <Button to="/courses" size="sm" className="hidden text-white sm:inline-flex">
            Explore Courses
          </Button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-text hover:bg-surface-elevated lg:hidden"
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
        <div id="mobile-menu" className="border-t border-border bg-surface px-4 py-4 lg:hidden">
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
            <Button to="/courses" className="mt-3 w-full text-white" onClick={() => setMenuOpen(false)}>
              Explore Courses
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
