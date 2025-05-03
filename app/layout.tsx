import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import RippleEffect from "./components/RippleEffect";
import { LanguageProvider } from "./contexts/LanguageContext";
import HtmlLanguageWrapper from "./components/HtmlLanguageWrapper";

// Initialize the IBM Plex Sans Thai font
const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["400", "700"],
  subsets: ["latin", "thai"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HackZit - Software Development Company",
  description:
    "Full-stack software development company specializing in custom applications, mobile solutions, enterprise software, and cutting-edge technologies.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <HtmlLanguageWrapper>
        <body className={`${ibmPlexSansThai.className} antialiased`}>
          <CustomCursor />
          <RippleEffect />
          {children}
        </body>
      </HtmlLanguageWrapper>
    </LanguageProvider>
  );
}
