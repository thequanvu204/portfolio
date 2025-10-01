import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import translations from "./translations";

type Language = "en" | "vi" | "de";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en"); // default English

  const t = (path: string): string => {
    return path
      .split(".")
      .reduce((obj: any, key: string) => obj?.[key], translations[language]) || path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
