import { useEffect } from "react";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export type SeoOptions = {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  path?: string;
};

export function useSeo({ title, description, ogTitle, ogDescription, path }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", ogTitle ?? title);
    upsertMeta("property", "og:description", ogDescription ?? description);
    upsertMeta("name", "twitter:title", ogTitle ?? title);
    upsertMeta("name", "twitter:description", ogDescription ?? description);
    if (path) {
      upsertMeta("property", "og:url", path);
      upsertCanonical(path);
    }
  }, [title, description, ogTitle, ogDescription, path]);
}
