import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
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

function desktopLinkClass({ isActive }) {
  return [
    "rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap",
    isActive
      ? "bg-primary text-primary-fg shadow-[var(--shadow-glow)]"
      : "text-text-muted hover:bg-surface-elevated hover:text-text",
  ].join(" ");
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`px-3 transition-all duration-300 sm:px-5 ${
          scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-4"
        }`}
      >
        <nav
          className={`site-nav mx-auto flex max-w-7xl items-center justify-between gap-2 border border-border/70 bg-white/90 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "h-13 rounded-2xl px-3 shadow-[0_10px_40px_rgba(9,9,11,0.08)] sm:h-14 sm:px-4 lg:rounded-full"
              : "h-14 rounded-2xl px-3 shadow-[var(--shadow-nav),var(--shadow-card)] sm:h-16 sm:px-5 lg:rounded-full lg:px-6"
          }`}
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="group flex min-w-0 cursor-pointer items-center gap-2 sm:gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <Logo size="md" />
            <span className="min-w-0 truncate text-[0.92rem] font-bold tracking-tight text-text sm:text-base">
              <span className="text-primary">10X</span> Wealth Creators
            </span>
          </Link>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.end} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <Button
              href={contact.whatsappGroup}
              size="sm"
              className="hidden md:inline-flex"
            >
              Join Community
            </Button>

            <button
              type="button"
              className={`nav-burger inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden ${
                menuOpen
                  ? "border-primary/30 bg-primary text-primary-fg shadow-[var(--shadow-glow)]"
                  : "border-border/80 bg-surface/90 text-text hover:bg-surface-elevated"
              }`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="relative block h-4 w-5" aria-hidden="true">
                <span
                  className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "top-1.5 rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "opacity-0 translate-x-2" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-3 block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                    menuOpen ? "top-1.5 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className={`fixed inset-0 z-40 bg-[#09090b]/45 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu overlay"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />

        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`mobile-drawer fixed inset-x-3 z-50 overflow-hidden rounded-3xl border border-border/70 bg-white shadow-[0_24px_64px_rgba(9,9,11,0.18)] transition-all duration-300 ease-out sm:inset-x-5 ${
            menuOpen
              ? "top-[4.75rem] translate-y-0 opacity-100 sm:top-[5.25rem]"
              : "top-[4.75rem] -translate-y-3 opacity-0 sm:top-[5.25rem]"
          }`}
        >
          <div className="max-h-[min(34rem,calc(100dvh-6.5rem))] overflow-y-auto overscroll-contain p-3 sm:p-4">
            <div className="mb-3 flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#fff8e8] to-white px-4 py-3 ring-1 ring-primary/15">
              <div className="flex min-w-0 items-center gap-3">
                <Logo size="sm" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-text">
                    <span className="text-primary">10X</span> Wealth Creators
                  </p>
                  <p className="truncate text-xs text-text-muted">Mindset · Skills · Wealth</p>
                </div>
              </div>
            </div>

            <nav className="flex flex-col gap-1.5" aria-label="Mobile links">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: menuOpen ? `${80 + index * 35}ms` : "0ms" }}
                  className={({ isActive }) =>
                    [
                      "mobile-nav-link flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition-all duration-300",
                      menuOpen ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0",
                      isActive
                        ? "bg-primary text-primary-fg shadow-[var(--shadow-glow)]"
                        : "bg-surface-elevated/60 text-text hover:bg-accent-soft hover:text-primary",
                    ].join(" ")
                  }
                >
                  <span>{link.label}</span>
                  <svg className="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 grid gap-2 border-t border-border/70 pt-4">
              <Button href={contact.whatsappGroup} className="w-full" onClick={() => setMenuOpen(false)}>
                Join Community
              </Button>
              <Button
                to="/contact"
                variant="secondary"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Book a Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
