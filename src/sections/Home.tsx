import Navbar from "@/components/Navbar";
import ScrollingFeats from "@/components/ScrollingFeats";
import TechStacks from "@/components/TechStacks";

function Home() {
  return (
    <div className="h-svh flex flex-col">
      <Navbar />
      <main className="px-[72px] flex grow items-center gap-12 my-24">
        <div className="flex w-[50%] flex-col gap-24 ">
          <h1 className="text-9xl font-bold leading-[155px]">
            I'm Michał Bronicki.
          </h1>
          <h3 className="text-7xl leading-[77px]">
            A front-end developer with a passion for programming.
          </h3>
          <div className="flex flex-row items-center self-end gap-4 bg-[#60B74F] rounded-4xl w-fit text-3xl px-6 py-1.5">
            <p className="text-2xl">Open to work</p>
            <p className="text-5xl">✓</p>
          </div>
        </div>
        <div className="flex w-[50%] flex-row items-center justify-center">
          <TechStacks />
        </div>
      </main>
      <ScrollingFeats />
    </div>
  );
}

export default Home;
