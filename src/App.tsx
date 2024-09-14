import React, { useRef } from "react";
import SmartCat from "./assets/smart-cat-suits.svg?react";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "./lib/utils";

function SectionContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50%" });

  return (
    <motion.div
      className="flex justify-center w-screen h-screen bg-black"
      ref={containerRef}
    >
      <AnimatePresence>
        {isInView && (
          <motion.div
            className="h-fit my-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function IntroSection() {
  return (
    <SectionContainer>
      <div className="flex h-fit gap-4 items-center mx-auto my-auto">
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SmartCat className="w-72 h-72" />
        </motion.div>
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="text-3xl text-left">Hi there, KAYAC friends!</h1>
          <p className="font-thin">
            I'm Kent. Frontend Developer with 3 years experience
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

function ExperienceSection() {
  return (
    <SectionContainer>
      <h1 className="text-3xl">Experience</h1>
      <p className="font-thin">実務経験</p>
    </SectionContainer>
  );
}

function InterestSection() {
  return (
    <SectionContainer>
      <h1 className="text-3xl">Interest</h1>
      <p className="font-thin ml-8">興味</p>
    </SectionContainer>
  );
}

function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="flex w-screen fixed top-0 gap-8 px-12 py-8 justify-end z-50"
      >
        <a className="cursor-pointer">Intro</a>
        <a className="cursor-pointer">Experiences</a>
        <a className="cursor-pointer">Interest</a>
      </motion.nav>
      <IntroSection />
      <ExperienceSection />
      <InterestSection />
    </div>
  );
}

export default App;
