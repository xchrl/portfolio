import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 bg-background z-1">
      <div
        className={`container mx-auto p-4 ${
          isScrolled ? "py-2 lg:py-4" : "lg:py-8"
        } flex justify-between transition-all duration-300`}
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-gradient">
          Michał Bronicki
        </h3>
        <div className="flex gap-4 lg:hidden">
          <ModeToggle />
          <Button
            variant="outline"
            className="lg:hidden hover:cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </Button>
        </div>
        {/* Desktop layout */}
        <div className="hidden lg:flex gap-12 items-center">
          {sections.map(({ name, id }, index) => (
            <p
              className="hover:cursor-pointer hover:underline text-muted-foreground hover:text-foreground text-xl"
              key={index}
            >
              <Link to={id} smooth duration={500}>
                {name}
              </Link>
            </p>
          ))}
          <ModeToggle />
          <Link to="contact" smooth duration={500}>
            <Button
              variant="default"
              className="p-6 text-lg rounded-4xl hover:cursor-pointer"
            >
              Contact ↓
            </Button>
          </Link>
        </div>
      </div>
      {/* Mobile layout */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="flex flex-col gap-4 md:gap-6 lg:gap-24 w-fit mx-auto text-center pb-4"
        >
          {sections.map(({ name, id }) => (
            <p className="hover:cursor-pointer hover:underline text-muted-foreground hover:text-foreground text-lg sm:text-xl">
              <Link to={id} smooth duration={500}>
                {name}
              </Link>
            </p>
          ))}
          <Link to="contact" smooth duration={500}>
            <Button
              variant="default"
              className="p-4 text-md sm:text-lg rounded-4xl hover:cursor-pointer"
            >
              Contact ↓
            </Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
