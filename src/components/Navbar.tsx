import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import { LanguageToggle } from "./LanguageToggle";

function Navbar() {
  const { t } = useTranslation("navbar");
  const [isOpen, setOpen] = useState(false);
  const sections = [
    { name: t("home"), id: "home" },
    { name: t("about"), id: "about" },
    { name: t("projects"), id: "projects" },
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
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <ThemeToggle />
          <LanguageToggle />
          <Button
            variant="outline"
            className="lg:hidden hover:cursor-pointer"
            onClick={() => setOpen(!isOpen)}
          >
            <RxHamburgerMenu />
          </Button>
        </div>
        {/* Desktop layout */}
        <div className="hidden lg:flex gap-6 xl:gap-12 items-center">
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
          <div className="flex gap-4">
            <ThemeToggle />
            <LanguageToggle />
          </div>
          <Link to="contact" smooth duration={500}>
            <Button
              variant="default"
              className="p-6 text-lg rounded-4xl hover:cursor-pointer"
            >
              {t("contact")} ↓
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
              {t("contact")} ↓
            </Button>
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
