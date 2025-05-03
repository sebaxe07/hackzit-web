"use client";

import { ReactNode } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface LanguageWrapperProps {
  children: ReactNode;
}

const LanguageWrapper = ({ children }: LanguageWrapperProps) => {
  const { language } = useLanguage();

  return <html lang={language}>{children}</html>;
};

export default LanguageWrapper;
