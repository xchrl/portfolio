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

function TechStacks() {
  const icons = [
    FaHtml5,
    FaCss3Alt,
    FaSass,
    RiTailwindCssFill,
    SiTypescript,
    FaReact,
    SiVite,
    FaGitAlt,
    FaGithub,
    FaFigma,
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-5 xl:grid-cols-5 xl:grid-rows-2 place-items-center gap-4">
      {icons.map((Icon, i) => (
        <Icon
          key={i}
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24 xl:w-36 xl:h-36"
        />
      ))}
      <p className="text-2xl sm:text-3xl md:text-5xl col-span-2 place-self-end my-4">
        ... and countless more!
      </p>
    </div>
  );
}

export default TechStacks;
