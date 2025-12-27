import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa6";
import {
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiRedis,
  SiNextdotjs,
  SiCplusplus,
} from "react-icons/si";

function Skills() {
  const [activeTab, setActiveTab] = useState("fullstack");

  // --- Data Architecture ---
  const tabs = [
    {
      id: "fullstack",
      label: "Core Stack"
    },
    {
      id: "frontend",
      label: "Frontend UX"
    },
    {
      id: "backend",
      label: "Backend & Ops"
    },
  ];

  const skillData = {
    fullstack: [
      {
        name: "Next.js",
        tag: "Meta-Framework",
        Icon: SiNextdotjs,
        color: "text-white",
        border: "group-hover:border-white/40",
      },
      {
        name: "TypeScript",
        tag: "Type Safety",
        Icon: SiTypescript,
        color: "text-blue-400",
        border: "group-hover:border-blue-400/40",
      },
      {
        name: "Node.js",
        tag: "Runtime",
        Icon: FaNodeJs,
        color: "text-emerald-500",
        border: "group-hover:border-emerald-500/40",
      },
      {
        name: "Java",
        tag: "Object Oriented",
        Icon: FaJava,
        color: "text-orange-400",
        border: "group-hover:border-orange-400/40",
      },
      {
        name: "C++",
        tag: "System Logic",
        Icon: SiCplusplus,
        color: "text-blue-600",
        border: "group-hover:border-blue-600/40",
      },
      {
        name: "Git",
        tag: "Version Control",
        Icon: FaGitAlt,
        color: "text-red-500",
        border: "group-hover:border-red-500/40",
      },
    ],
    frontend: [
      {
        name: "React",
        tag: "UI Library",
        Icon: FaReact,
        color: "text-sky-400",
        border: "group-hover:border-sky-400/40",
      },
      {
        name: "Tailwind",
        tag: "Atomic CSS",
        Icon: SiTailwindcss,
        color: "text-cyan-400",
        border: "group-hover:border-cyan-400/40",
      },
      {
        name: "JavaScript",
        tag: "ES6+ Standards",
        Icon: SiJavascript,
        color: "text-yellow-400",
        border: "group-hover:border-yellow-400/40",
      },
      {
        name: "HTML5",
        tag: "Semantics",
        Icon: FaHtml5,
        color: "text-orange-500",
        border: "group-hover:border-orange-500/40",
      },
      {
        name: "Framer",
        tag: "Animations",
        Icon: FaReact,
        color: "text-violet-400",
        border: "group-hover:border-violet-400/40",
      }, 
    ],
    backend: [
      {
        name: "MongoDB",
        tag: "NoSQL Database",
        Icon: SiMongodb,
        color: "text-green-500",
        border: "group-hover:border-green-500/40",
      },
      {
        name: "Express",
        tag: "API Layer",
        Icon: SiExpress,
        color: "text-gray-300",
        border: "group-hover:border-gray-400/40",
      },
      {
        name: "Postman",
        tag: "API Testing",
        Icon: SiPostman,
        color: "text-orange-400",
        border: "group-hover:border-orange-400/40",
      },
      {
        name: "Redis",
        tag: "Caching",
        Icon: SiRedis,
        color: "text-red-500",
        border: "group-hover:border-red-500/40",
      },
      {
        name: "Docker",
        tag: "Containerization",
        Icon: FaDocker,
        color: "text-blue-500",
        border: "group-hover:border-blue-500/40",
      },
    ],
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-24 bg-[#050505] text-white overflow-hidden"
    >
      {/* --- Atmospheric Background --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Scanning Light Beam Effect */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-sky-500/20 to-transparent blur-[1px] opacity-20" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-linear-to-b from-transparent via-violet-500/20 to-transparent blur-[1px] opacity-20" />

        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-violet-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-6">
        {/* --- Header --- */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-sky-400 uppercase mb-4"
          >
            // System Capabilities
          </motion.h2>
          <motion.h3
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold"
          >
            Tech Stack <span className="text-slate-500">&</span> Arsenal
          </motion.h3>
        </div>

        {/* --- Interactive Tabs --- */}
        <div className="flex justify-center mb-16">
          <div className="flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md relative">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition-colors duration-300 z-10 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-linear-to-r from-sky-500/20 to-violet-500/20 rounded-full border border-white/10"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6
                    }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* --- Skills Grid (The HUD) --- */}
        <div className="min-h-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { staggerChildren: 0.1 },
                },
                exit: {
                  opacity: 0,
                  y: -20,
                  transition: { duration: 0.2 }
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {skillData[activeTab].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: {
                      opacity: 0,
                      scale: 0.95
                    },
                    visible: {
                      opacity: 1,
                      scale: 1
                    },
                  }}
                  className={`group relative p-6 rounded-2xl bg-white/5 border border-white/5 
                    hover:bg-white/10 transition-all duration-300 interactive
                    hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] ${skill.border}`}
                >
                  {/* Card Inner Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      {/* Icon Box */}
                      <div
                        className={`p-3 rounded-lg bg-black/40 border border-white/10 ${skill.color} text-3xl group-hover:scale-110 transition-transform duration-300`}
                      >
                        <skill.Icon />
                      </div>

                      {/* Details */}
                      <div>
                        <h4 className="text-lg font-semibold text-slate-100 group-hover:text-white transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs font-mono text-sky-400/80 uppercase tracking-wider mt-1">
                          {skill.tag}
                        </p>
                      </div>
                    </div>

                    {/* Decorative Corner Element */}
                    <div className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-sky-400 transition-colors duration-300" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Skills;
