import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="border-t-1 border-t-gray-200 h-16 flex items-center justify-center text-muted-foreground text-sm md:text-lg">
      <p>&copy; 2025 Michał Bronicki. {t("all rights reserved")}</p>
    </footer>
  );
}

export default Footer;
