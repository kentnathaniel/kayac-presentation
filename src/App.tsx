import { motion } from "framer-motion";
import SmartCat from "@/assets/smart-cat-suits.svg?react";
import ThreeJSLogo from "@/assets/threejs-logo.png";
import GSAPLogo from "@/assets/gsap-logo.jpg";
import FramerMotionLogo from "@/assets/framer-motion-logo.avif";
import { Separator } from "@/components/ui/separator";
import { SectionContainer } from "@/components/section-container";
import ZoomableImage from "@/components/zoomable-image";
import { experiences } from "@/data/experiences";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

function IntroSection() {
  return (
    <SectionContainer id="intro-section">
      <div className="mx-auto my-auto flex h-fit items-center gap-4">
        <motion.div
          initial={{ y: "25%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <SmartCat className="h-72 w-72" />
        </motion.div>
        <motion.div
          initial={{ x: "50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="mb-2 text-left text-3xl">Hi there, KAYAC friends!</h1>
          <p className="font-thin">
            I'm <strong>Kent</strong>
          </p>
          <p className="font-thin">
            A Frontend Developer with 3 years of experience
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

function ExperienceSection() {
  return (
    <SectionContainer id="experience-section">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-3xl">Experience</h1>
        <p className="mb-12 text-lg font-thin">実務経験</p>
      </div>

      <div className="mb-24 grid max-w-screen-md gap-32">
        {experiences.map((experience, idx) => (
          <div key={idx}>
            <div className="mb-8 flex items-center gap-4">
              <img src={experience.image} className="h-12 w-12" />
              <div>
                <p className="text-2xl font-bold">{experience.name}</p>
                <p className="text-lg font-thin">{experience.title}</p>
                <p className="text-lg font-thin">{experience.date}</p>
              </div>
            </div>
            <p className="mb-8 w-full text-justify font-thin leading-6 tracking-wider">
              {experience.description.split("\n").map((v, index) => (
                <React.Fragment key={index}>
                  {v}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className="mb-4 text-center">Key Products by me</p>
            <Carousel>
              <CarouselContent>
                {experience.products.map((product, idx) => (
                  <CarouselItem key={idx} className="w-full">
                    <div className="grid gap-4">
                      <ZoomableImage className="w-full" src={product.image} />
                      <p className="mx-auto">{product.name}</p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="mt-8 grid grid-cols-2 gap-8">
              {experience.stacks.map((v) => (
                <div>
                  <p className="mb-2 text-lg">{v.name}</p>
                  <div className="flex gap-6">
                    {v.items.map((v) => (
                      <div className="flex flex-col items-center">
                        <img src={v.logo} className="h-12" />
                        <Separator className="mb-2 mt-4 bg-neutral-400" />
                        <p className="text-sm">{v.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}

const interests = [FramerMotionLogo, GSAPLogo, ThreeJSLogo];

function InterestSection() {
  return (
    <SectionContainer id="interest-section">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-3xl">Current Interest</h1>
        <p className="mb-12 text-lg font-thin">現在の関心</p>
      </div>

      <div className="max-w-screen-md">
        <p className="mb-8 w-full text-justify font-thin leading-6 tracking-wider">
          I've always leaned towards the engineering side of Frontend
          Development, but lately, I've grown interested in the creative
          aspects, particularly web animation and 3D web. I believe the rise of
          AI makes creative coders highly valued.
        </p>

        <div className="mx-auto flex w-fit flex-col items-center gap-8">
          {interests.map((v, idx) => (
            <img src={v} key={idx} className="h-32" />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

function App() {
  return (
    <div className="grid h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed top-0 z-50 flex w-screen justify-end gap-8 px-12 py-8"
      >
        <a className="cursor-pointer" href="#intro-section">
          Intro
        </a>
        <a className="cursor-pointer" href="#experience-section">
          Experiences
        </a>
        <a className="cursor-pointer" href="#interest-section">
          Interest
        </a>
      </motion.nav>
      <IntroSection />
      <ExperienceSection />
      <InterestSection />
    </div>
  );
}

export default App;
