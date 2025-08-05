import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiVite,
  SiShadcnui,
  SiMongodb,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { TbBrandMysql, TbBrandNextjs } from "react-icons/tb";
import type { IconType } from "react-icons/lib";

function TechStacks() {
  type Cards = { Icon: IconType; text: string };
  const cardsLeft: Cards[] = [
    {
      Icon: FaHtml5,
      text: "HTML",
    },
    {
      Icon: FaCss3Alt,
      text: "CSS",
    },
    {
      Icon: FaSass,
      text: "Sass",
    },
    {
      Icon: RiTailwindCssFill,
      text: "Tailwind",
    },
    {
      Icon: FaBootstrap,
      text: "Bootstrap",
    },
    {
      Icon: SiTypescript,
      text: "TypeScript",
    },
    {
      Icon: FaReact,
      text: "React",
    },
    {
      Icon: SiVite,
      text: "Vite",
    },
    {
      Icon: SiShadcnui,
      text: "ShadCN/ui",
    },
    {
      Icon: FaFigma,
      text: "Figma",
    },
  ];

  const cardsRight: Cards[] = [
    {
      Icon: FaGitAlt,
      text: "Git",
    },
    {
      Icon: FaGithub,
      text: "GitHub",
    },
    {
      Icon: FaNodeJs,
      text: "NodeJS",
    },
    {
      Icon: TbBrandMysql,
      text: "MySQL",
    },
    {
      Icon: SiMongodb,
      text: "MongoDB",
    },
    {
      Icon: SiVercel,
      text: "Vercel",
    },
    {
      Icon: SiNetlify,
      text: "Netlify",
    },
    {
      Icon: TbBrandNextjs,
      text: "NextJS",
    },
  ];

  // Old Card-like design
  // return (
  //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-4 sm:flex-grow">
  //     {cards.map(({ Icon, text, description }, i) => (
  //       <Card
  //         className="w-full shadow-lg shadow-accent-foreground/30 hover:scale-110 duration-150 group h-full flex justify-center lg:nth-10:col-span-3 xl:nth-10:col-span-1"
  //         key={i}
  //       >
  //         <CardContent className="sm:text-xl font-semibold flex flex-row justify-around items-center gap-4 text-center">
  //           <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-16 xl:h-16" />
  //           <div className="flex flex-col items-center justify-center select-none sm:select-auto">
  //             <p className="font-bold">{text}</p>
  //             <p className="lg:group-hover:block text-xs sm:text-sm text-muted-foreground">
  //               {description}
  //             </p>
  //           </div>
  //         </CardContent>
  //       </Card>
  //     ))}
  //     <p className="text-2xl sm:text-3xl sm:col-span-2 lg:col-span-3 xl:col-span-5 xl:place-self-end my-4 text-center">
  //       {t("and countless more")}
  //     </p>
  //   </div>
  // );

  // New scroll-like design
  return (
    <div className="w-full overflow-hidden py-4 space-y-4 sm:text-lg md:text-xl text-foreground/75">
      <div className="whitespace-nowrap">
        <div className="inline-block animate-leftToRight w-max">
          {[...cardsLeft, ...cardsLeft].map(({ Icon, text }) => (
            <span className="inline-flex items-center mx-4 lg:mx-8 gap-3 w-fit">
              <Icon className="size-6 sm:size-8" /> {text}
            </span>
          ))}
        </div>
      </div>

      <div className="whitespace-nowrap">
        <div className="inline-block animate-rightToLeft w-fit">
          {[...cardsRight, ...cardsRight].map(({ Icon, text }) => (
            <span className="inline-flex items-center mx-4 lg:mx-8 gap-3 w-fit">
              <Icon className="size-6 sm:size-8" /> {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStacks;
