import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
  ];

  return (
    <div className="bg-background text-foreground px-[24px] py-[18px] md:px-[72px] md:py-[48px]">
      <div className="flex flex-col lg:flex-row text-center gap-4 md:gap-8 lg:justify-between lg:items-center">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-display">
            Michał Bronicki
          </h3>
          <Button
            variant="outline"
            className="md:hidden hover:cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </Button>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col lg:flex-row gap-4 lg:gap-24"
          >
            {sections.map(({ name, id }) => (
              <p className="hover:cursor-pointer hover:underline text-muted-foreground hover:text-foreground text-lg sm:text-xl md:text-3xl">
                <Link to={id} smooth duration={500}>
                  {name}
                </Link>
              </p>
            ))}
            <Button
              variant="default"
              className="md:px-12 md:py-8 text-md sm:text-lg md:text-xl rounded-4xl hover:cursor-pointer"
            >
              Contact ↓
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
