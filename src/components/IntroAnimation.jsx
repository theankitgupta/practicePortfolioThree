import { motion } from "framer-motion";
import React, { useEffect, useMemo, useState } from "react";

function IntroAnimation({ onFinish }) {
  const greetings = useMemo(
    () => [
      "Hello",
      "Bonjour",
      "Hola",
      "Olá",
      "Merhaba",
      "Ciao",
      "Здравствуйте",
      "प्रणाम",
      "নমস্কার",
      "નમস্কার",
      "నమస్కారం",
      "வணக்கம்",
      "നമസ്കാരം",
      "नमस्कारा",
      "वंदे मातरम्",
      "शुभम्",
      "नमो नमः",
      "जय जगन्नाथ",
      "जय माता दी",
      "जय श्री राम",
      "हर हर महादेव",
      "नमस्कार",
      "नमस्ते",
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < greetings.length - 1) {
      const progress = index / greetings.length;
      const delay = 100 + Math.pow(progress, 2) * 250;

      const t = setTimeout(() => {
        setIndex((i) => i + 1);
      }, delay);
      return () => clearTimeout(t);
    } else {
      // Trigger the exit animation
      const t = setTimeout(() => onFinish(), 800);
      return () => clearTimeout(t);
    }
  }, [index, greetings.length, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white overflow-hidden cursor-none"
      initial={{ y: 0 }}
      exit={{
        y: "-100%",
        transition: {
          duration: 1.0,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      {/* --- 1. Ambient Cosmic Glows --- */}
      <div className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-violet-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[35vw] h-[35vw] bg-sky-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* --- 2. The Greeting Text --- */}
      <div className="relative z-10 flex items-center justify-center min-h-50 md:min-h-75">
        <motion.h1
          key={index}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-center"
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <span className="inline-block text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400 leading-[1.4] py-4">
            <span className="text-sky-400 inline-block text-2xl md:text-4xl align-middle mr-3 mb-2 md:mb-4">
              ●
            </span>
            {greetings[index]}
          </span>
        </motion.h1>
      </div>

      {/* --- 3. Loading Progress Bar --- */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]"
          initial={{ width: "0%" }}
          animate={{ width: `${((index + 1) / greetings.length) * 100}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default IntroAnimation;
