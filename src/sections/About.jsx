import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa6";
import AnkitGupta from "../assets/AnkitGupta.jpg";

function About() {
  // --- Content Data ---
  const cards = [
    {
      icon: FaCode,
      title: "Full Stack Core",
      desc: "MERN, EJS, MVC & Next.js",
      color: "text-sky-400",
    },
    {
      icon: FaServer,
      title: "Backend Focus",
      desc: "Scalable Logic & APIs",
      color: "text-violet-400",
    },
    {
      icon: FaLayerGroup,
      title: "Language Roots",
      desc: "Java, C++, TypeScript",
      color: "text-emerald-400",
    },
  ];

  // --- Animation Variants ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-20 lg:py-32 bg-[#050505] text-white overflow-hidden"
    >
      {/* --- Ambient Background Glows --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-120 h-120 bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-160 h-160 bg-sky-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* --- Left Column: The Narrative --- */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3
            }}
          >
            {/* Header */}
            <motion.h2
              variants={itemVariants}
              className="text-sm font-bold tracking-widest text-sky-400 uppercase mb-3"
            >
              // Who I Am
            </motion.h2>

            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6"
            >
              Architecting robust systems with{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-sky-400">
                precision and logic.
              </span>
            </motion.h3>

            {/* Bio Paragraphs - Optimized for Crispness */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-slate-400 text-base md:text-lg leading-relaxed"
            >
              <p>
                I am a <strong>Full Stack Developer</strong> focusing on logic
                and architecture. While I build across the web spectrum, my
                expertise shines in the <strong>Backend</strong>—designing
                scalable schemas, optimizing APIs, and ensuring performance.
              </p>
              <p>
                My stack is anchored in{" "}
                <strong>MERN, Next.js, and TypeScript</strong>, structured on{" "}
                <strong>MVC principles</strong>. I also leverage deep roots in
                <strong> Java and C++</strong> to write efficient,
                algorithmically sound code.
              </p>
              <p className="border-l-4 border-violet-500/50 pl-4 italic text-slate-300 bg-white/5 py-2 pr-2 rounded-r-lg">
                "I am a <strong>Design-Faithful Developer</strong>. I translate
                creative visions into pixel-perfect, functional reality."
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 md:mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-6 md:px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300 interactive"
              >
                See My Code
              </a>
              <a
                href="#contact"
                className="px-6 md:px-8 py-3 rounded-full text-slate-300 font-medium hover:text-white transition-colors interactive flex items-center gap-2 group"
              >
                Let's Talk{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* --- Right Column: Visuals & Highlights --- */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            viewport={{ once: true }}
          >
            {/* 1. The Image Card */}
            <div className="hidden lg:block relative group w-full max-w-md mx-auto lg:ml-auto">
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 bg-linear-to-tr from-sky-400 via-violet-500 to-sky-400 rounded-2xl blur-[2px] opacity-70 group-hover:opacity-100 group-hover:blur-[5px] transition-all duration-500" />

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 aspect-square">
                <img
                  src={AnkitGupta}
                  alt="Ankit Gupta"
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-semibold tracking-wide text-sky-300 mb-2">
                    1+ Years Development Journey
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Highlights Grid (Visible on all screens) */}
            <div className="grid grid-cols-1 gap-3 md:gap-4 mt-6 lg:mt-0">
              {cards.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 group interactive"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg bg-white/5 ${card.color} text-2xl group-hover:scale-110 transition-transform`}
                    >
                      <card.icon />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-base md:text-lg">
                        {card.title}
                      </h4>
                      <p className="text-slate-400 text-sm">{card.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {/* Section Transition Fog */}
      <div className="pointer-events-none absolute -bottom-40 left-0 w-full h-80 bg-linear-to-b from-transparent via-[#050505]/60 to-transparent blur-[120px]" />
    </section>
  );
}

export default About;
