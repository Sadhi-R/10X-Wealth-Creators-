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
      <div className="relative z-10 flex min-h-screen flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-1 pt-24">
          <Outlet />
        </main>
        <Footer />
        <FloatingContactButton />
      </div>
    </ThemeProvider>
  );
}
