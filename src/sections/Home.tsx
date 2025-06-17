import ScrollingFeats from "@/components/ScrollingFeats";
import TechStacks from "@/components/TechStacks";

function Home() {
  return (
    <section id="home">
      <main className="mx-8 flex flex-col gap-8 my-8">
        <div className="flex flex-col gap-4 sm:gap-4 md:gap-8 items-center text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            I'm Michał Bronicki.
          </h1>
          <h2 className="text-lg sm:text-2xl">
            A front-end developer with a passion for programming.
          </h2>
          <div className="flex items-center lg:self-end gap-4 bg-[#60B74F] rounded-3xl px-6 sm:px-8 py-1.5 sm:py-2">
            <p className="text-lg sm:text-xl">Open to work</p>
            <p className="text-2xl sm:text-3xl">✓</p>
          </div>
        </div>
        <div className="flex justify-center">
          <TechStacks />
        </div>
      </main>
      <ScrollingFeats />
    </section>
  );
}

export default Home;
