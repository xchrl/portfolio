import weatherAppPreview from "../assets/weather-app-preview.png";
import noexistencenQuotedlePreview from "../assets/noexistencen-quotedle-preview.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Projects() {
  const { t } = useTranslation("projects");

  function projectRedirect(link: string) {
    window.open(link, "_blank")?.focus();
  }

  const projects = [
    {
      preview: weatherAppPreview,
      name: t("weatherApp.name"),
      alt: t("weatherApp.alt"),
      description: t("weatherApp.description"),
      link: "https://michalbronicki-weatherapp.netlify.app/",
    },
    {
      preview: noexistencenQuotedlePreview,
      name: "NOexistenceN-quotedle",
      alt: "NOexistenceN-quotedle",
      description: t("noexistencenQuotedle.description"),
      link: "https://noexistencendle.vercel.app/",
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
              {projects.map(
                ({ preview, alt, name, description, link }, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col justify-center items-center h-full gap-2 md:gap-6 my-4 mx-48 text-center">
                      <Dialog>
                        <DialogTrigger>
                          <img src={preview} alt={alt} className="" />
                          <p className="text-muted-foreground italic mt-2">
                            {t("enlarge")}
                          </p>
                        </DialogTrigger>
                        <DialogContent className="md:max-w-7xl p-0">
                          <DialogTitle className="sr-only">
                            Enlarged image
                          </DialogTitle>
                          <img src={preview} alt={alt} className="w-full" />
                        </DialogContent>
                      </Dialog>
                      <div className="flex flex-col gap-2 md:gap-4">
                        <h4 className="text-3xl sm:text-4xl font-bold">
                          {name}
                        </h4>
                        <p className="text-lg sm:text-xl text-muted-foreground">
                          {description}
                        </p>
                        <Button
                          variant="secondary"
                          onClick={() => projectRedirect(link)}
                        >
                          {t("check")}
                        </Button>
                      </div>
                    </div>
                  </CarouselItem>
                )
              )}
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
