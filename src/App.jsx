import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";

function App() {
  const [introDone, setIntroDone] = useState(false);
  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <AnimatePresence mode="wait">
        {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      </AnimatePresence>

      {introDone && (
        <div className="relative z-0">
          <div className="gradient">
            <CustomCursor />
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Testimonials />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
