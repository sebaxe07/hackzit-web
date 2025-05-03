"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "../contexts/LanguageContext";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

// Translations for SEO
const translations = {
  en: {
    default: {
      title: "HackZit - Software Development Company",
      description:
        "Full-stack software development company specializing in custom applications, mobile solutions, enterprise software, and cutting-edge technologies.",
    },
    breadcrumb: {
      home: "Home",
    },
  },
  es: {
    default: {
      title: "HackZit - Empresa de Desarrollo de Software",
      description:
        "Empresa de desarrollo de software full-stack especializada en aplicaciones personalizadas, soluciones móviles, software empresarial y tecnologías de vanguardia.",
    },
    breadcrumb: {
      home: "Inicio",
    },
  },
};

const SEO = ({
  title,
  description,
  canonical,
  ogImage = "/HACKZIT_LOGO/3x/GroupLogo.png", // Use PNG image instead of SVG for better compatibility
}: SEOProps) => {
  const pathname = usePathname();
  const { language } = useLanguage();

  // Select the appropriate translation based on language
  const t = translations[language] || translations.en;

  // Use provided title/description or default from translations
  const pageTitle = title || t.default.title;
  const pageDescription = description || t.default.description;

  // Add structured JSON-LD data programmatically
  useEffect(() => {
    // Set up language attributes for better internationalization
    document.documentElement.lang = language;

    // Add structured breadcrumbs data for non-home pages
    if (pathname && pathname !== "/") {
      const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t.breadcrumb.home,
            item: "https://hackzit.dev",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: pageTitle,
            item: `https://hackzit.dev${pathname}`,
          },
        ],
      };

      // Check for existing script to prevent duplicates
      const existingScript = document.getElementById("breadcrumb-jsonld");
      if (existingScript) {
        existingScript.remove();
      }

      const breadcrumbScript = document.createElement("script");
      breadcrumbScript.id = "breadcrumb-jsonld";
      breadcrumbScript.type = "application/ld+json";
      breadcrumbScript.textContent = JSON.stringify(breadcrumbList);
      document.head.appendChild(breadcrumbScript);
    }

    // Add canonical URL if provided
    if (canonical) {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.remove();
      }

      const canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      canonicalLink.href = canonical;
      document.head.appendChild(canonicalLink);
    }

    // Update meta description if not present
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    ) as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", pageDescription);

    // Add language alternates
    const addOrUpdateLinkTag = (
      rel: string,
      hrefLang: string,
      href: string
    ) => {
      let linkTag = document.querySelector(
        `link[rel="${rel}"][hreflang="${hrefLang}"]`
      );
      if (!linkTag) {
        linkTag = document.createElement("link");
        linkTag.setAttribute("rel", rel);
        linkTag.setAttribute("hreflang", hrefLang);
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute("href", href);
    };

    // Set alternate language links
    const currentPath = pathname || "";
    if (currentPath.startsWith("/en") || currentPath === "/") {
      addOrUpdateLinkTag(
        "alternate",
        "es",
        `https://hackzit.dev/es${currentPath === "/" ? "" : currentPath}`
      );
    } else if (currentPath.startsWith("/es")) {
      addOrUpdateLinkTag(
        "alternate",
        "en",
        `https://hackzit.dev/en${currentPath.replace("/es", "")}`
      );
    }

    // Update Open Graph meta tags
    const updateOrCreateMetaTag = (property: string, content: string) => {
      let metaTag = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement("meta");
        metaTag.setAttribute("property", property);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute("content", content);
    };

    // Build full ogImage URL if it's a relative path
    const fullOgImageUrl = ogImage.startsWith("/")
      ? `https://hackzit.dev${ogImage}`
      : ogImage;

    // Set Open Graph tags
    updateOrCreateMetaTag("og:title", pageTitle);
    updateOrCreateMetaTag("og:description", pageDescription);
    updateOrCreateMetaTag("og:image", fullOgImageUrl);
    updateOrCreateMetaTag("og:url", `https://hackzit.dev${pathname || ""}`);
    updateOrCreateMetaTag("og:type", "website");
    updateOrCreateMetaTag("og:locale", language === "es" ? "es_ES" : "en_US");

    if (language === "es") {
      updateOrCreateMetaTag("og:locale:alternate", "en_US");
    } else {
      updateOrCreateMetaTag("og:locale:alternate", "es_ES");
    }

    // Set Twitter card tags
    updateOrCreateMetaTag("twitter:card", "summary_large_image");
    updateOrCreateMetaTag("twitter:title", pageTitle);
    updateOrCreateMetaTag("twitter:description", pageDescription);
    updateOrCreateMetaTag("twitter:image", fullOgImageUrl);

    // Accessibility improvements
    const improveAccessibility = () => {
      // Add appropriate ARIA roles to elements if missing
      document.querySelectorAll("a").forEach((link) => {
        if (
          !link.getAttribute("aria-label") &&
          link.textContent?.trim() === ""
        ) {
          const nearestImg = link.querySelector("img");
          if (nearestImg) {
            link.setAttribute(
              "aria-label",
              nearestImg.alt ||
                (language === "es" ? "Enlace de navegación" : "Navigation link")
            );
          } else {
            link.setAttribute(
              "aria-label",
              language === "es" ? "Enlace de navegación" : "Navigation link"
            );
          }
        }
      });

      // Ensure images have alt text
      document.querySelectorAll("img").forEach((img) => {
        if (!img.alt) {
          const parentElement = img.parentElement;
          const nearestText = parentElement?.textContent?.trim();
          img.alt = nearestText || "HackZit website image";
        }
      });
    };

    // Run once on component mount
    improveAccessibility();

    // Set up a mutation observer to catch dynamically added content
    const observer = new MutationObserver((mutations) => {
      let shouldImprove = false;
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          shouldImprove = true;
        }
      });

      if (shouldImprove) {
        improveAccessibility();
      }
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [
    pathname,
    pageTitle,
    pageDescription,
    canonical,
    ogImage,
    language,
    t.breadcrumb.home,
  ]);

  return null;
};

export default SEO;
