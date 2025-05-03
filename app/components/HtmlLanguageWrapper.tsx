"use client";

import { ReactNode } from "react";
import { useLanguage } from "../contexts/LanguageContext";

interface HtmlLanguageWrapperProps {
  children: ReactNode;
}

const HtmlLanguageWrapper = ({ children }: HtmlLanguageWrapperProps) => {
  const { language } = useLanguage();

  return <html lang={language}>{children}</html>;
};

export default HtmlLanguageWrapper;
