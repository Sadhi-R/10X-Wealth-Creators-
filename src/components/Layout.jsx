import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import GlossyBackground from "./background/GlossyBackground";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import FloatingContactButton from "./FloatingContactButton";

export default function Layout() {
  return (
    <ThemeProvider>
      <GlossyBackground />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-fg"
      >
        Skip to main content
      </a>
      <div className="relative z-10 flex min-h-screen flex-col">
        <ScrollToTop />
        <Navbar />
        <main id="main-content" className="main-with-fab flex-1 pt-[4.75rem] sm:pt-24">
          <Outlet />
        </main>
        <Footer />
        <FloatingContactButton />
      </div>
    </ThemeProvider>
  );
}
