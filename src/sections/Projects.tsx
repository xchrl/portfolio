import weatherAppPreview from "../assets/weather-app-preview.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@uidotdev/usehooks";

function Projects() {
  const { t } = useTranslation("projects");
  const projects = [
    {
      preview: weatherAppPreview,
      alt: t("Weather app.alt"),
      name: t("Weather app.name"),
      description: t("Weather app.description"),
    },
  ];

  // 640px - sm
  const isMobile = useMediaQuery("(max-width: 640px)");
  const orientation = isMobile ? "vertical" : "horizontal";
  const orientationClasses =
    orientation == "vertical" ? "py-12 my-8" : "px-12 mx-12";

  return (
    <section className="bg-foreground text-background" id="projects">
      <div className="container px-4 mx-auto py-8 my-8 flex flex-col items-center gap-4 text-center">
        <header className="flex flex-col gap-4">
          <h3 className="text-3xl sm:text-4xl font-bold">{t("projects")}</h3>
          <h3 className="text-lg sm:text-2xl md:text-3xl text-muted-foreground">
            {t("list")}
          </h3>
        </header>
        <main className={orientationClasses}>
          <Carousel orientation={orientation}>
            <CarouselContent>
              {projects.map(({ preview, alt, name, description }, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col justify-center items-center h-full gap-2 md:gap-8 my-4 mx-16 text-center">
                    <img src={preview} alt={alt} />
                    <div className="flex flex-col gap-4">
                      <h4 className="text-3xl sm:text-4xl font-bold">{name}</h4>
                      <p className="text-lg sm:text-xl text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant="secondary" />
            <CarouselNext variant="secondary" />
          </Carousel>
        </main>
      </div>
    </section>
  );
}

export default Projects;
