import React from "react";
import { motion } from "framer-motion";
import SmartCat from "@/assets/smart-cat-suits.svg?react";
import ThreeJSLogo from "@/assets/threejs-logo.png";
import GSAPLogo from "@/assets/gsap-logo.jpg";
import FramerMotionLogo from "@/assets/framer-motion-logo.avif";
import MattPocock from "@/assets/matt-pocock.png";
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
import { IconBrandGithub } from "@tabler/icons-react";

function IntroSection() {
  return (
    <SectionContainer id="intro-section">
      <div className="mx-auto my-auto flex h-fit flex-col items-center gap-4 md:flex-row">
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
          className="text-center md:text-left"
        >
          <h1 className="mb-2 text-3xl">Hi there, friends from KAYAC!</h1>
          <p className="font-thin">
            I'm <strong>Kent</strong>
          </p>
          <p className="font-thin">
            A software engineer specializing in Frontend development
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

function ExperienceSection() {
  return (
    <SectionContainer id="experience-section" className="pt-24">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-3xl">Experiences</h1>
        <p className="mb-12 text-lg font-thin">実務経験</p>
      </div>

      <div className="mb-24 grid max-w-screen-md gap-32 px-8 md:px-0">
        {experiences.map((experience, idx) => (
          <div key={idx}>
            <div className="mb-8 flex items-center gap-4">
              <img src={experience.image} className="h-12 w-12" />
              <div>
                <p className="text-lg font-bold md:text-2xl">
                  {experience.name}
                </p>
                <p className="text-sm font-thin md:text-lg">
                  {experience.title}
                </p>
                <p className="text-sm font-thin md:text-lg">
                  {experience.date}
                </p>
              </div>
            </div>
            <p className="mb-8 w-full text-justify text-sm font-thin leading-6 tracking-wider md:text-base">
              {experience.description.split("\n").map((v, index) => (
                <React.Fragment key={index}>
                  {v}
                  <br />
                </React.Fragment>
              ))}
            </p>
            <p className="mb-4 text-center">Key Products by me</p>
            <Carousel className="xs:max-w-[420px] mx-auto max-w-[300px] md:max-w-screen-sm lg:max-w-screen-md">
              <CarouselContent>
                {experience.products.map((product, idx) => (
                  <CarouselItem key={idx} className="basis-full">
                    <div className="grid gap-4">
                      <ZoomableImage src={product.image} />
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
                  <p className="mb-2 text-base md:text-lg">{v.name}</p>
                  <div className="flex flex-wrap gap-2 md:gap-6">
                    {v.items.map((v) => (
                      <div className="flex flex-col items-center">
                        <img src={v.logo} className="h-8 md:h-12" />
                        <Separator className="mb-2 mt-4 bg-neutral-400" />
                        <p className="text-xs md:text-sm">{v.name}</p>
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
    <SectionContainer id="interest-section" className="px-8 pt-24 md:px-0">
      <div className="mx-auto flex flex-col items-center">
        <h1 className="text-3xl">Current Interest</h1>
        <p className="mb-12 text-lg font-thin">現在の関心</p>
      </div>

      <div className="box-border grid max-w-screen-md gap-8">
        <p className="w-full text-justify text-sm font-thin leading-6 tracking-wider md:text-lg">
          I've always been leaning towards the engineering side of Frontend
          Development. But lately, I've grown some interest in the creative
          aspects, particularly web animation and 3D web. I believe the rise of
          AI makes creative coders highly valued.
        </p>
        <div className="mx-auto flex w-fit flex-col items-center gap-8">
          {interests.map((v, idx) => (
            <img src={v} key={idx} className="h-24 md:h-32" />
          ))}
        </div>

        <p className="w-full text-justify text-sm font-thin leading-6 tracking-wider md:text-lg">
          In addition to exploring the creative side of Frontend development, I
          still find joy in mastering TypeScript. As a language, TypeScript
          greatly improves the maintainability of a codebase, especially in
          larger teams. For learning resources, I highly recommend following
          Matt Pocock on Twitter!
        </p>
        <div className="mx-auto">
          <img src={MattPocock} className="h-32 md:h-48" />
        </div>
      </div>
    </SectionContainer>
  );
}

function ClosingSection() {
  return (
    <SectionContainer className="mb-0">
      <div className="mx-auto my-auto flex h-fit flex-col items-center gap-4 px-8 md:px-0">
        <div className="flex flex-col gap-2 md:flex-row">
          <p className="text-xl">Thank you so much for your time!</p>
          <p className="text-xl">時間をありがとうございました</p>
        </div>
        <div className="mt-8 flex flex-col items-center text-center">
          <p className="max-w-screen-sm font-thin">
            Click here to view the GitHub repository for this presentation.
          </p>
          <a href="https://github.com/kentnathaniel/kayac-presentation">
            <IconBrandGithub className="mx-auto h-24 w-24 cursor-pointer" />
          </a>
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
        className="fixed top-0 z-50 flex w-screen justify-center gap-8 px-12 py-8 md:justify-end"
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
      <ClosingSection />
    </div>
  );
}

export default App;
