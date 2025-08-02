import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import silhouette from "../assets/silhouette.png";

function About() {
  const { t } = useTranslation("about");

  function gitHubRedirect() {
    window.open("https://github.com/xchrl", "_blank")?.focus();
  }

  return (
    <section id="about">
      <main className="container px-4 lg:px-16 mx-auto my-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="size-50 lg:size-80 overflow-hidden rounded-full bg-foreground/5 p-4 flex justify-center border-2 border-muted-foreground">
            <img
              src={silhouette}
              alt="Silhouette"
              className="w-7/10 h-fit object-cover"
            />
          </div>
        </div>
        <div className="flex lg:w-1/2 flex-col gap-4 text-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl sm:text-3xl font-bold">{t("title")}</h3>
            <h3 className="text-lg sm:text-2xl text-muted-foreground">
              {t("subtitle")}
            </h3>
          </div>
          <p className="text-lg">{t("description")}</p>
          <div className="flex flex-col items-center gap-2">
            <Button className="w-full" onClick={gitHubRedirect}>
              <FaGithub className="w-12 h-12 sm:w-16 sm:h-16" />
              <p className="font-bold">{t("github")}</p>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
