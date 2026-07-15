export const categories = [
  {
    slug: "tech-ai",
    name: "Tech & AI",
    description:
      "Platform changes, AI tools, and device updates explained without hype.",
  },
  {
    slug: "money-consumer-changes",
    name: "Money & Consumer Changes",
    description:
      "Fees, subscriptions, shopping changes, and policy shifts that affect regular households.",
  },
  {
    slug: "online-safety",
    name: "Online Safety",
    description:
      "Security and privacy changes translated into practical checks.",
  },
  {
    slug: "streaming-entertainment",
    name: "Streaming & Entertainment",
    description:
      "Streaming, apps, culture, and media changes with the noise turned down.",
  },
  {
    slug: "korea-global-culture",
    name: "Korea & Global Culture",
    description:
      "Korean and global culture shifts explained for curious international readers.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

export const categoryBySlug = new Map(
  categories.map(category => [category.slug, category])
);

export function getCategory(slug: string) {
  return categoryBySlug.get(slug as CategorySlug);
}
