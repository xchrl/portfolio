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
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons/lib";

function TechStacks() {
  const { t } = useTranslation("techStacks");

  type Cards = { Icon: IconType; text: string; description: string };
  const cards: Cards[] = [
    {
      Icon: FaHtml5,
      text: "HTML",
      description: t("html"),
    },
    {
      Icon: FaCss3Alt,
      text: "CSS",
      description: t("css"),
    },
    {
      Icon: FaSass,
      text: "Sass",
      description: t("sass"),
    },
    {
      Icon: RiTailwindCssFill,
      text: "Tailwind",
      description: t("tailwind"),
    },
    {
      Icon: SiTypescript,
      text: "TypeScript",
      description: t("typescript"),
    },
    {
      Icon: FaReact,
      text: "React",
      description: t("react"),
    },
    {
      Icon: SiVite,
      text: "Vite",
      description: t("vite"),
    },
    {
      Icon: FaGitAlt,
      text: "Git",
      description: t("git"),
    },
    {
      Icon: FaGithub,
      text: "GitHub",
      description: t("github"),
    },
    {
      Icon: FaFigma,
      text: "Figma",
      description: t("figma"),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 place-items-center gap-4 sm:flex-grow">
      {cards.map(({ Icon, text, description }, i) => (
        <Card
          className="w-full shadow-lg shadow-accent-foreground/30 hover:scale-110 transition-transform duration-150 group"
          key={i}
        >
          <CardContent className="sm:text-xl font-semibold flex flex-row justify-around items-center gap-4 text-center">
            <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 xl:w-16 xl:h-16" />
            <div className="flex flex-col items-center select-none sm:select-auto">
              <p>{text}</p>
              <p className="lg:hidden lg:group-hover:block text-xs sm:text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
      <p className="text-2xl sm:text-3xl sm:col-span-2 lg:col-span-3 xl:col-span-5 xl:place-self-end my-4 text-center">
        {t("and countless more")}
      </p>
    </div>
  );
}

export default TechStacks;
