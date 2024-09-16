import BrandrevLogo from "@/assets/brandrev-logo.png";
import RakaminLogo from "@/assets/rakamin-logo.png";
import BrandrevExpMainPage from "@/assets/brandrev-exp-dashboard-main-page.png";
import BrandrevExpConversationPage from "@/assets/brandrev-exp-conversation-page.png";
import BrandrevExpPromptTemplatePage from "@/assets/brandrev-exp-prompt-template-page.png";
import RakaminExpVixLandingPage from "@/assets/rakamin-exp-vix-landing-page.png";
import RakaminExpVixExplore from "@/assets/rakamin-exp-vix-explore.png";
import RakaminExpVixProgram from "@/assets/rakamin-exp-vix-program.png";
import RakaminExp1VixDashboard from "@/assets/rakamin-exp-vix-dashboard.png";
import RakaminExp1VixDashboard2 from "@/assets/rakamin-exp-vix-builder.png";
import RakaminExpMyClass from "@/assets/rakamin-exp-my-class-dashboard.png";
import RakaminExpPaymentPage from "@/assets/rakamin-exp-payment-page.png";
import RakaminExpHomeworkPage from "@/assets/rakamin-exp-homework-page.png";
import ReactViteLogo from "@/assets/react-with-vite-logo.png";
import StyleComponentsLogo from "@/assets/styled-components-logo.png";
import ReactQueryLogo from "@/assets/react-query-logo.png";
import PlaywrightLogo from "@/assets/playwright-logo.png";
import ZodLogo from "@/assets/zod-logo.png";
import RHFLogo from "@/assets/react-hook-form-logo.png";
import JotaiLogo from "@/assets/jotai-logo.png";
import ReactContextLogo from "@/assets/react-context-logo.png";
import NextJSLogo from "@/assets/next-js-logo.jpg";
import RadixLogo from "@/assets/radix-logo.png";
import ShadcnLogo from "@/assets/shadcn-logo.png";
import ZustandLogo from "@/assets/zustand-logo.png";

export const experiences = [
  {
    image: RakaminLogo,
    name: "Rakamin Academy",
    title: "Full Time (Remote) · Jakarta, Indonesia",
    date: "May 2021 - April 2024",
    description:
      "Rakamin is a startup in the career development field. Its products range from B2C services, such as Career Bootcamp, Project-Based Internships, and Career Counseling, to B2B services, including Talent Scouting, Employee Training & Recruitment, and Headhunting. The ecosystem grew significantly during my time there; when I first joined, the development team consisted of only around seven people (2 of them, including me were Frontend). By the time I left, the team had nearly 20 members (4 of them were FE dev). \n\nDuring my 1st and 2nd year, my main responsibility was focused on product development, primarily handling the B2C side. In my 3rd year, my role shifted towards ensuring code scalability and promoting best practices among developers. This included tasks such as migrating JavaScript to TypeScript, integrating an E2E testing framework, migrating from CRA to Vite, and refactoring legacy code to follow a more structured approach. Occasionally, I still contributed to the development process when a feature needs to be released quickly.",
    products: [
      {
        name: "Project Based Internship Landing Page",
        image: RakaminExpVixLandingPage,
      },
      {
        name: "Project Based Internship Explore Program",
        image: RakaminExpVixExplore,
      },
      {
        name: "Project Based Internship Program Page",
        image: RakaminExpVixProgram,
      },
      {
        name: "Project Based Internship Dashboard - Program List",
        image: RakaminExp1VixDashboard,
      },
      {
        name: "Project Based Internship Dashboard - Builder",
        image: RakaminExp1VixDashboard2,
      },
      {
        name: "My Class Dashboard",
        image: RakaminExpMyClass,
      },
      {
        name: "Assigment Dashboard",
        image: RakaminExpHomeworkPage,
      },
      {
        name: "Payment Dashboard",
        image: RakaminExpPaymentPage,
      },
    ],
    stacks: [
      {
        name: "Framework",
        items: [
          {
            name: "React with Vite",
            logo: ReactViteLogo,
          },
        ],
      },
      {
        name: "UI/Styling",
        items: [
          {
            name: "Styled Components",
            logo: StyleComponentsLogo,
          },
        ],
      },
      {
        name: "State Management",
        items: [
          {
            name: "React-query",
            logo: ReactQueryLogo,
          },
          {
            name: "Jotai",
            logo: JotaiLogo,
          },
          {
            name: "ContextAPI",
            logo: ReactContextLogo,
          },
        ],
      },
      {
        name: "Form",
        items: [
          {
            name: "React-hook-form",
            logo: RHFLogo,
          },
          {
            name: "Zod (Validation)",
            logo: ZodLogo,
          },
        ],
      },
      {
        name: "E2E Test",
        items: [
          {
            name: "Playwright",
            logo: PlaywrightLogo,
          },
        ],
      },
    ],
  },
  {
    image: BrandrevLogo,
    name: "Brandrev AI",
    title: "Freelance (Remote) · Singapore",
    date: "Aug 2024 - present",
    description:
      "Brandrev is a startup engaged in tailor-made AI solution for businesses. Currently it is still in development and the dev team consists of 3 members, the frontend part is handle by myself while the backend part is handled by my manager and coworker.",
    products: [
      {
        name: "Dashboard Main Page",
        image: BrandrevExpMainPage,
      },
      {
        name: "Conversation Page",
        image: BrandrevExpConversationPage,
      },
      {
        name: "Prompt Template Page",
        image: BrandrevExpPromptTemplatePage,
      },
    ],
    stacks: [
      {
        name: "Framework",
        items: [
          {
            name: "NextJS",
            logo: NextJSLogo,
          },
        ],
      },
      {
        name: "UI/Styling",
        items: [
          {
            name: "Radix",
            logo: RadixLogo,
          },
          {
            name: "Shadcn/ui",
            logo: ShadcnLogo,
          },
        ],
      },
      {
        name: "State Management",
        items: [
          {
            name: "React-query",
            logo: ReactQueryLogo,
          },
          {
            name: "Zustand",
            logo: ZustandLogo,
          },
        ],
      },
      {
        name: "Form",
        items: [
          {
            name: "React-hook-form",
            logo: RHFLogo,
          },
          {
            name: "Zod (Validation)",
            logo: ZodLogo,
          },
        ],
      },
    ],
  },
];
