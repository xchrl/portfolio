import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { IoLanguageOutline } from "react-icons/io5";

export function LanguageToggle() {
  const { t, i18n } = useTranslation("languageToggle");

  const languages = [
    { code: "en", label: t("english") },
    { code: "pl", label: t("polish") },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <IoLanguageOutline />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map(({ code, label }, index) => (
          <DropdownMenuItem
            key={index}
            onClick={() => i18n.changeLanguage(code)}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
