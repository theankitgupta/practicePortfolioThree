import React, { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4"
          >
            <div
              className="flex items-center justify-between w-full max-w-5xl px-6 py-3 
              backdrop-blur-md bg-black/40 border border-white/10 rounded-full 
              shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_25px_rgba(167,139,250,0.15)] 
              transition-shadow duration-500"
            >
              {/* Logo Area */}
              <a
                href="#home"
                className="flex items-center space-x-3 group interactive"
              >
                <div className="relative w-8 h-8">
                  <img
                    src={Logo}
                    alt="Logo"
                    className="w-full h-full object-contain relative z-10"
                  />
                  <div className="absolute inset-0 bg-violet-500 blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                <span className="text-lg font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-white to-slate-400 group-hover:to-sky-300 transition-all duration-300">
                  Ankit
                </span>
              </a>

              <div className="flex items-center space-x-6">
                {/* Desktop "Reach Out" Button */}
                <a
                  href="#contact"
                  className="hidden md:flex items-center justify-center px-6 py-2 rounded-full 
                    text-sm font-medium text-white transition-all duration-300
                    bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-400/50
                    hover:shadow-[0_0_20px_rgba(167,139,250,0.4)]
                    interactive group overflow-hidden relative"
                >
                  <span className="relative z-10">Reach Out</span>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12" />
                </a>

                {/* Mobile/Tablet Menu Trigger */}
                <button
                  onClick={() => setMenuOpen(true)}
                  className="relative text-white p-2 group interactive"
                  aria-label="Open Menu"
                >
                  <FiMenu className="text-2xl relative z-10 group-hover:text-sky-300 transition-colors" />
                  <span className="absolute inset-0 rounded-full bg-sky-500/20 scale-0 group-hover:scale-100 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar;
