import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const basePath = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const sitemapURL = new URL(`${basePath}sitemap-index.xml`, site);
  return new Response(getRobotsTxt(sitemapURL));
};
