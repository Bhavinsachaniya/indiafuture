export type BlogListItem = {
  id: string;
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  thumbnail: string;
  category: string;
  tags: string[];
  site?: string;
  author: string;
  publishedAt: number;
  updatedAt?: number;
  readingMinutes: number;
};

export type BlogPost = BlogListItem & {
  contentHtml: string;
  jsonLd?: Record<string, unknown> | string;
};

const dateFormatter = new Intl.DateTimeFormat("en-IN", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

/** Blog API returns unix seconds. */
export function formatBlogDate(unixSeconds: number) {
  if (!unixSeconds) return "";
  return dateFormatter.format(new Date(unixSeconds * 1000));
}

export function jsonLdToScript(jsonLd: Record<string, unknown> | string | undefined) {
  if (!jsonLd) return null;
  const raw = typeof jsonLd === "string" ? jsonLd : JSON.stringify(jsonLd);
  return raw;
}
