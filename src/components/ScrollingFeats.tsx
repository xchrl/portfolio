import { useTranslation } from "react-i18next";

function ScrollingFeats() {
  const { t } = useTranslation("scrollingFeats");

  return (
    <div className="flex bg-accent-foreground text-accent text-lg sm:text-xl md:text-2xl py-6 font-medium overflow-hidden whitespace-pre mt-auto">
      <div className="flex animate-text-scrolling">
        {/* prettier-ignore */}
        <p>{t("feats")}</p>
        {/* prettier-ignore */}
        <p>{t("feats")}</p>
      </div>
    </div>
  );
}

export default ScrollingFeats;
