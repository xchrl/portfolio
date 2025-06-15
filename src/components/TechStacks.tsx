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
  return (
    <div className="grid grid-cols-5 grid-rows-2 gap-4">
      <FaHtml5 className="w-36 h-36" />
      <FaCss3Alt className="w-36 h-36" />
      <FaSass className="w-36 h-36" />
      <RiTailwindCssFill className="w-36 h-36" />
      <SiTypescript className="w-36 h-36" />
      <FaReact className="w-36 h-36" />
      <SiVite className="w-36 h-36" />
      <FaGitAlt className="w-36 h-36" />
      <FaGithub className="w-36 h-36" />
      <FaFigma className="w-36 h-36" />
      <p className="text-4xl col-span-5 place-self-end my-4">
        ... and countless more!
      </p>
    </div>
  );
}

export default TechStacks;
