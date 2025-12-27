import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import avatar from "../assets/avator.png";

function Home() {
  const socials = [
    {
      Icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/theankitgupta/",
    },
    {
      Icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/theankitgupta24/",
    },
    {
      Icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/theankitguptaaa/",
    },
  ];

  // --- Typewriter Logic ---
  const roles = useMemo(() => ["Web Developer", "Software Engineer"], []);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < current.length) setSubIndex((i) => i + 1);
        else if (!deleting && subIndex === current.length)
          setTimeout(() => setDeleting(true), 1500); // Pause at end
        else if (deleting && subIndex > 0) setSubIndex((i) => i - 1);
        else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % roles.length);
        }
      },
      deleting ? 50 : 100 // Slower typing speeds for elegance
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles]);

  // --- Animations ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
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
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-32 md:pt-0"
    >
      <ParticlesBackground />

      {/* Ambient Cosmic Glows (Replaces harsh blobs) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-violet-600/20 rounded-full blur-[150px] opacity-60" />
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-sky-500/20 rounded-full blur-[150px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center h-full">
        {/* --- Left Content --- */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1 lg:pl-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Typewriter Intro */}
          <motion.div
            variants={itemVariants}
            className="mb-4 text-xl sm:text-2xl md:text-3xl font-medium text-sky-300/80 tracking-wide flex items-center justify-center lg:justify-start min-h-[1.6em]"
          >
            <span>Wait, I am a </span>
            <span className="ml-2 text-slate-100 font-semibold">
              {roles[index].substring(0, subIndex)}
            </span>
            <span className="ml-1 w-0.5 h-6 bg-sky-400 animate-pulse"></span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-violet-400 to-sky-300 animate-gradient-xy pb-2 inline-block">
              Ankit Gupta
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            I craft high-performance digital experiences that merge intricate
            design with robust engineering. Building scalable applications that
            make an impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5"
          >
            {/* Primary Cosmic Button */}
            <a
              href="#projects"
              className="group relative px-8 py-3 rounded-full font-semibold text-white overflow-hidden interactive"
            >
              {/* Glass Background & Border */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10 group-hover:border-violet-500/50 transition-all duration-500 rounded-full" />
              {/* Hover Gradient shimmer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-linear-to-r from-sky-500 to-violet-500 transition-opacity duration-500 rounded-full blur-md" />
              <span className="relative z-10 flex items-center gap-2 group-hover:gap-4 transition-all">
                View My Work <span>→</span>
              </span>
            </a>

            {/* Secondary Glass Button */}
            <a
              href="/Resume.pdf"
              download
              className="group relative px-8 py-3 rounded-full font-medium text-slate-300 hover:text-white overflow-hidden interactive transition-all"
            >
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/5 group-hover:border-sky-400/30 transition-all duration-500 rounded-full" />
              <span className="relative z-10">My Resume</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex items-center justify-center lg:justify-start gap-6"
          >
            {socials.map(({ Icon, label, href }) => (
              <a
                href={href}
                key={label}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative p-3 interactive"
              >
                {/* Icon */}
                <Icon className="text-2xl text-slate-400 group-hover:text-sky-300 transition-colors duration-300 relative z-10" />
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-lg opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* --- Right Content (Avatar) --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1, type: "spring" }}
          className="relative hidden lg:flex justify-end items-center order-1 lg:order-2"
        >
          {/* Soft glow behind avatar */}
          <div className="absolute w-[35vw] h-[35vw] max-w-125 max-h-125 bg-linear-to-tr from-sky-500/30 to-violet-600/30 rounded-full blur-[100px] pointer-events-none" />

          {/* Floating Avatar Image */}
          <motion.img
            src={avatar}
            alt="Alien Image"
            className="relative z-10 w-full max-w-112.5 object-contain pointer-events-none drop-shadow-[0_0_50px_rgba(167,139,250,0.2)]"
            animate={{
              y: [0, -15, 0], // Floating effect
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
