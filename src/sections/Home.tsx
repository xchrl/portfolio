import ScrollingFeats from "@/components/ScrollingFeats";
import TechStacks from "@/components/TechStacks";
import arcadePixel from "../assets/arcade-pixel.png";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation("home");

  return (
    <section id="home">
      <main className="container px-4 mx-auto my-8 flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 items-center justify-center text-center lg:w-1/2 lg:items-start lg:text-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">
            Michał Bronicki.
          </h1>
          <h2 className="text-lg sm:text-2xl lg:text-4xl text-muted-foreground">
            {t("subtitle")}
          </h2>
          <div className="flex items-center lg:self-end gap-4 bg-[#60B74F] rounded-3xl px-6 sm:px-8 py-1.5 sm:py-2">
            <p className="text-lg sm:text-xl">{t("badge")}</p>
            <p className="text-2xl sm:text-3xl">✓</p>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src={arcadePixel}
            alt="Arcade pixel art"
            className="h-48 lg:h-72 object-contain"
          />
        </div>
      </main>
      <div className="flex justify-center container mx-auto px-4">
        <TechStacks />
      </div>
      <ScrollingFeats />
    </section>
  );
}

export default Home;
