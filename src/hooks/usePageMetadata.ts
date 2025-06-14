import { useEffect } from "react";

export interface PageMetadata {
  title?: string;
  description?: string;
  canonical?: string;
}

const usePageMetadata = ({ title, description, canonical }: PageMetadata) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>(
        'meta[name="description"]'
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }

    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]'
      );
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }, [title, description, canonical]);
};

export default usePageMetadata;
