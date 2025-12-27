import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaLayerGroup } from "react-icons/fa6";
import AnkitGupta from "../assets/AnkitGupta.jpg"; // Ensure this path is correct

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full py-20 lg:py-32 bg-[#050505] text-white overflow-hidden"
    >
      {/* --- Ambient Background Glows --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-120 h-120 bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-160 h-160 bg-sky-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* --- Left Column: The Narrative (Span 7) --- */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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

            {/* Bio Paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 text-slate-400 text-lg leading-relaxed"
            >
              <p>
                I am a <strong>Full Stack Developer</strong> with over 1+ years
                of active development experience. While I am fluent in the
                entire web spectrum, my true passion lies in the{" "}
                <strong>Backend</strong>—structuring databases, optimizing
                server logic, and solving complex architectural challenges.
              </p>
              <p>
                I specialize in the{" "}
                <strong>MERN Stack (MongoDB, Express, React, Node.js)</strong>{" "}
                and the <strong>MVC pattern</strong>, often leveraging{" "}
                <strong>Next.js</strong> and <strong>TypeScript</strong> for
                production-grade applications. Beyond the web, I possess strong
                foundational knowledge in <strong>Java and C++</strong>, giving
                me a deeper understanding of memory management and algorithms.
              </p>
              <p className="border-l-4 border-violet-500/50 pl-4 italic text-slate-300 bg-white/5 py-2 pr-2 rounded-r-lg">
                "I may not be a graphic designer, but I am a{" "}
                <strong>Design-Faithful Developer</strong>. I take a design and
                turn it into pixel-perfect, functional code."
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-sky-400/50 transition-all duration-300 interactive"
              >
                See My Code
              </a>
              <a
                href="#contact"
                className="px-8 py-3 rounded-full text-slate-300 font-medium hover:text-white transition-colors interactive flex items-center gap-2 group"
              >
                Let's Talk{" "}
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* --- Right Column: Visuals & Highlights (Span 5) --- */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* 1. The Image Card */}
            <div className="relative group w-full max-w-md mx-auto lg:ml-auto">
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

            {/* 2. Highlights Grid */}
            <div className="grid grid-cols-1 gap-4">
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
                      <h4 className="text-white font-semibold text-lg">
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
    </section>
  );
}

export default About;
