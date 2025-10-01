import React, { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { FaGlobe } from "react-icons/fa";
import "../styles/language-switcher.css";

const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const changeLang = (lang: "en" | "vi" | "de") => {
    setLanguage(lang);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [open]);

  return (
    <div className="language-switcher" ref={wrapperRef}>
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        <FaGlobe size={20} />
      </button>
      {open && (
        <div className="lang-menu">
          <button onClick={() => changeLang("en")}>English</button>
          <button onClick={() => changeLang("de")}>Deutsch</button>
          <button onClick={() => changeLang("vi")}>Tiếng Việt</button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
