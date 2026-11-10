import css from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher({
  language,
  setLanguage,
}) {
  return (
    <div className={css.switcher}>
      <button
        type="button"
        className={language === "de" ? css.active : ""}
        onClick={() => setLanguage("de")}
      >
        DE
      </button>

      <span className={css.separator}>|</span>

      <button
        type="button"
        className={language === "tr" ? css.active : ""}
        onClick={() => setLanguage("tr")}
      >
        TR
      </button>
    </div>
  );
}