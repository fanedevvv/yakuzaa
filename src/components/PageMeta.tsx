import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles: Record<string, string> = {
  "/": "Yakuza | Home",
  "/commands": "Yakuza | Commands",
  "/fane": "Yakuza | FanE",
  "/kaos": "Yakuza | Kaos Dev.",
  "/kaos/rules": "Yakuza | Kaos Rules",
  "/features": "Yakuza | Features",
  "/partners": "Yakuza | Partners",
  "/news": "Yakuza | News",
  "/devs": "Yakuza | Devs",
  "/status": "Yakuza | Status",
  "/stats": "Yakuza | Stats",
  "/uptime": "Yakuza | Uptime",
  "/premium": "Yakuza | Premium",
  "/faq": "Yakuza | FAQ",
  "/docs": "Yakuza | Docs",
  "/privacy": "Yakuza | Privacy",
  "/terms": "Yakuza | Terms",
  "/admin": "Yakuza | Admin",
};

const SITE_DESC = "A powerful Discord bot that brings advanced features and seamless automation to your server.";

const getSiteUrl = (pathname: string) => `${window.location.origin}${pathname}`;

const getOgImageUrl = () => `${window.location.origin}/og-image.png`;

const updateMeta = (property: string, content: string) => {
  const selectors = [
    `meta[property="${property}"]`,
    `meta[name="${property}"]`,
  ];
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (el) {
      el.setAttribute("content", content);
      return;
    }
  }
  // Create if missing
  const meta = document.createElement("meta");
  if (property.startsWith("og:")) {
    meta.setAttribute("property", property);
  } else {
    meta.setAttribute("name", property);
  }
  meta.setAttribute("content", content);
  document.head.appendChild(meta);
};

const updateCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const PageMeta = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = routeTitles[pathname] || "Yakuza Bot";
    const pageUrl = getSiteUrl(pathname);
    const ogImageUrl = getOgImageUrl();

    document.title = title;

    updateMeta("og:title", title);
    updateMeta("twitter:title", title);
    updateMeta("og:description", SITE_DESC);
    updateMeta("twitter:description", SITE_DESC);
    updateMeta("og:image", ogImageUrl);
    updateMeta("twitter:image", ogImageUrl);
    updateMeta("og:url", pageUrl);
    updateCanonical(pageUrl);
  }, [pathname]);

  return null;
};

export default PageMeta;
