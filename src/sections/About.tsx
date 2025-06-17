import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";

function About() {
  function gitHubRedirect() {
    window.open("https://github.com/xchrl", "_blank")?.focus();
  }

  return (
    <section className="mx-4 my-8" id="about">
      <main className="md:mx-[72px] flex flex-col items-center gap-8">
        <div>Photo placeholder</div>
        <div className="flex flex-col gap-4 md:gap-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">So, who am I?</h3>
          <p className="text-lg sm:text-xl">
            I am a young, open-minded front-end developer from Przemyśl, Poland.
            My programming journey started back when I had been a teenager
            attending primary school. Back then, I took a fierce interest in
            game development, starting with simple games in the Unity game
            engine, based on C#. That interest soon grew into a hobby, which led
            into choosing a programming-related secondary school as the main
            focus of my education. Soon enough, with the help of my teachers, I
            grew more and more, learning various tools utilized in the industry
            and today, I’m a full-fledged developer that hopes to make it big.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Button onClick={gitHubRedirect}>
              <FaGithub className="w-12 h-12 sm:w-16 sm:h-16 hover:cursor-pointer" />
              <p className="font-bold">My GitHub</p>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
}

export default About;
