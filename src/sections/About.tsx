import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("about");

  function gitHubRedirect() {
    window.open("https://github.com/xchrl", "_blank")?.focus();
  }

  return (
    <section id="about">
      <main className="container px-4 mx-auto my-8 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="https://avatars.githubusercontent.com/u/79168650?v=4"
            className="rounded-full p-8"
          />
        </div>
        <div className="flex lg:w-1/2 flex-col gap-4 md:gap-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">{t("title")}</h3>
          <h3 className="text-lg sm:text-2xl md:text-3xl text-muted-foreground">
            {t("subtitle")}
          </h3>
          <p className="text-lg sm:text-xl">{t("description")}</p>
          <div className="flex flex-col items-center gap-2">
            <Button onClick={gitHubRedirect}>
              <FaGithub className="w-12 h-12 sm:w-16 sm:h-16 hover:cursor-pointer" />
              <p className="font-bold">{t("github")}</p>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
