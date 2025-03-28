import { useState } from "preact/hooks";
import { useTranslation } from "react-i18next";

export const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
    setLanguage(selectedLanguage);
    localStorage.setItem("i18nextLng", selectedLanguage);
  };

  return (
    <label className="flex items-center gap-2 mb-2">
      <span className="cursor-pointer">{t("chooseLanguage")}:</span>

      <select
        name="lang"
        id="lang"
        className="border border-solid border-gray-400 p-1 cursor-pointer rounded"
        value={language}
        onChange={handleLanguageChange}
      >
        <option value="en">English</option>
        <option value="ru">Русский</option>
        <option value="uk">Українська</option>
        <option value="es">Español</option>
      </select>
    </label>
  );
};
