import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="sticky top-0 bg-background text-foreground flex justify-between px-[72px] py-[48px]">
      <div className="flex justify-between items-center gap-28">
        <h2 className="text-5xl font-bold font-display">Michał Bronicki</h2>
        <p className="hover:cursor-pointer hover:underline text-muted-foreground hover:text-foreground text-3xl">
          Home
        </p>
        <p className="hover:cursor-pointer hover:underline text-muted-foreground hover:text-foreground text-3xl">
          About
        </p>
        <p className="hover:cursor-pointer hover:underline text-muted-foreground hover:text-foreground text-3xl">
          Projects
        </p>
      </div>
      <Button
        variant="default"
        className="px-12 py-8 text-xl rounded-4xl hover:cursor-pointer"
      >
        Contact ↓
      </Button>
    </div>
  );
}

export default Navbar;
