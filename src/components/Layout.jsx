import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import SceneBackground from "./background/SceneBackground";
import MouseGlow from "./background/MouseGlow";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContactButton from "./FloatingContactButton";

export default function Layout() {
  return (
    <ThemeProvider>
      <SceneBackground />
      <MouseGlow />
      <div className="relative z-10 flex min-h-screen flex-col">
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
