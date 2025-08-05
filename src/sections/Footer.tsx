import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className="border-t-1 border-t-gray-200 py-4 text-muted-foreground text-sm md:text-lg text-center">
      <p>&copy; 2025 Michał Bronicki. {t("all rights reserved")}</p>
    </footer>
  );
}

export default Footer;
