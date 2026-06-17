import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingContactButton from "./FloatingContactButton";

export default function Layout() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-[4.5rem]">
          <Outlet />
        </main>
        <Footer />
        <FloatingContactButton />
      </div>
    </ThemeProvider>
  );
}
