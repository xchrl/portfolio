import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const loadLocale = async (lang: "en" | "pl") => {
  const modules = import.meta.glob("./{en,pl}/*.json", { eager: true });
  const resources: Record<string, string | object> = {};

  for (const path in modules) {
    if (!path.includes(`/${lang}/`)) continue;

    const key = path.split("/").pop()?.replace(".json", "") || "";
    // @ts-ignore
    resources[key] = modules[path].default;
  }

  return resources;
};

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

const initI18n = async () => {
  const [enResources, plResources] = await Promise.all([
    loadLocale("en"),
    loadLocale("pl"),
  ]);

  await i18n.use(initReactI18next).init({
    resources: {
      en: enResources,
      pl: plResources,
    },
    lng: "pl",
    defaultNS: "common",
    ns: Object.keys(enResources), // get all namespace keys
    interpolation: {
      escapeValue: false,
    },
  });
};

initI18n();

export default i18n;
