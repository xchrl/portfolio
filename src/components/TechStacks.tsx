import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite } from "react-icons/si";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TechStacks() {
  const cards = [
    { Icon: FaHtml5, text: "HTML" },
    { Icon: FaCss3Alt, text: "CSS" },
    { Icon: FaSass, text: "Sass" },
    { Icon: RiTailwindCssFill, text: "Tailwind" },
    { Icon: SiTypescript, text: "TypeScript" },
    { Icon: FaReact, text: "React" },
    { Icon: SiVite, text: "Vite" },
    { Icon: FaGitAlt, text: "Git" },
    { Icon: FaGithub, text: "GitHub" },
    { Icon: FaFigma, text: "Figma" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 xl:grid-rows-2 place-items-center gap-4 sm:flex-grow">
      {cards.map(({ Icon, text }, i) => (
        <Card className="w-full shadow-lg shadow-[#FF9F1C]/50" key={i}>
          <CardContent className="sm:text-xl font-semibold flex flex-row justify-around items-center gap-4">
            <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-36 xl:h-36" />
            <p>{text}</p>
          </CardContent>
        </Card>
      ))}
      <p className="text-2xl sm:text-3xl sm:col-span-2 my-4 text-center">
        ... and countless more!
      </p>
    </div>
  );
}

export default TechStacks;
