import weatherAppPreview from "../assets/weather-app-preview.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Projects() {
  const projects = [
    {
      preview: weatherAppPreview,
      alt: "Weather app",
      name: "Weather app",
      description:
        "A simple website displaying weather data for a selected city, using OpenWeatherMap API.",
    },
  ];

  return (
    <section className="bg-foreground text-background" id="projects">
      <div className="m-4 p-4 flex flex-col justify-center items-center gap-4 text-center">
        <header>
          <h3 className="text-3xl sm:text-4xl font-bold">Projects</h3>
          <p className="text-lg sm:text-xl md:my-2">
            A list of websites/applications that have been built from the
            ground-up.
          </p>
        </header>
        <main className="px-10">
          <Carousel>
            <CarouselContent>
              {projects.map(({ preview, alt, name, description }, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col justify-center items-center h-full gap-2 md:gap-4 my-4 text-center">
                    <img src={preview} alt={alt} />
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-bold">{name}</h4>
                      <p className="text-lg sm:text-xl">{description}</p>
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
