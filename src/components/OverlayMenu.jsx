import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiArrowRight } from "react-icons/fi";

const menuItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
];

function OverlayMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* 1. Backdrop: Deep Space Blur (Allows faint particles to show through) */}
          <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

          {/* 2. Ambient Gradient Orbs (Matches ParticlesBackground Colors) */}
          <div className="absolute top-[-20%] right-[-10%] w-150 h-150 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-125 h-125 bg-sky-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* 3. Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 text-white/50 hover:text-white text-4xl z-50 transition-all duration-300 interactive hover:rotate-90 hover:scale-110"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          {/* 4. Menu Items */}
          <motion.ul
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="relative z-10 flex flex-col items-center space-y-6 md:space-y-8"
          >
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                variants={{
                  hidden: { y: 40, opacity: 0, filter: "blur(10px)" },
                  visible: { y: 0, opacity: 1, filter: "blur(0px)" },
                }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={onClose}
                  className="group relative flex items-center gap-4 text-5xl md:text-7xl font-bold text-slate-300 hover:text-white hover:bg-clip-text hover:bg-linear-to-r hover:from-sky-300 hover:to-violet-400 transition-all duration-300 interactive"
                >
                  {/* group relative flex items-center gap-4 text-5xl md:text-7xl font-bold 
                    text-slate-300 hover:text-white
                    transition-all duration-300 interactive */}
                  {/* The Arrow (Only visible on hover) */}
                  <motion.span className="opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-sky-400 text-4xl md:text-6xl">
                    <FiArrowRight />
                  </motion.span>

                  {/* The Text */}
                  <span className="relative z-10 tracking-tight group-hover:tracking-wide transition-all duration-300">
                    {item.name}
                  </span>

                  {/* Subtle Background Blur Glow on Hover */}
                  <span className="absolute inset-0 bg-violet-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default OverlayMenu;
