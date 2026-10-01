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
    "rounded-full px-3 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap",
    isActive
      ? "bg-white/15 text-white shadow-none"
      : "text-white/80 hover:bg-white/10 hover:text-white",
  ].join(" ");
}

function mobileLinkClass({ isActive }) {
  return [
    "block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200",
    isActive
      ? "bg-white/15 text-white"
      : "text-white/85 hover:bg-white/10 hover:text-white",
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <nav
        className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-3 rounded-2xl border border-white/15 bg-[#001848]/92 px-3 shadow-[0_12px_40px_rgba(0,24,72,0.35)] backdrop-blur-xl sm:h-16 sm:px-5 lg:rounded-full lg:px-6"
        aria-label="Main navigation"
      >
        <Link to="/" className="group flex min-w-0 cursor-pointer items-center gap-2.5 sm:gap-3">
          <Logo size="md" variant="white" />
          <span className="hidden min-w-0 truncate text-base font-bold tracking-tight text-white sm:block">
            <span className="text-[#FFA800]">10X</span> Wealth Creators
          </span>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.end} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <div className="hidden sm:block [&_button]:border-white/20 [&_button]:bg-white/10 [&_button]:text-white [&_button:hover]:bg-white/20">
            <ThemeToggle />
          </div>
          <Button
            href={contact.whatsappGroup}
            size="sm"
            className="hidden md:inline-flex"
          >
            Join Community
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFA800] lg:hidden"
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
          className="mx-auto mt-2 max-h-[min(28rem,calc(100dvh-5.5rem))] max-w-7xl overflow-y-auto overscroll-contain rounded-2xl border border-white/15 bg-[#001848]/96 px-3 py-3 shadow-[0_16px_48px_rgba(0,24,72,0.45)] backdrop-blur-xl sm:px-4 sm:py-4 lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={mobileLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-white/10 px-2 pt-3 sm:hidden">
              <span className="text-sm text-white/70">Theme</span>
              <div className="[&_button]:border-white/20 [&_button]:bg-white/10 [&_button]:text-white">
                <ThemeToggle />
              </div>
            </div>
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
