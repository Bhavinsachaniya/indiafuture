import "server-only";

import type { BlogListItem, BlogPost } from "@/lib/blog";

export type { BlogListItem, BlogPost };

type BlogsResponse = { success?: boolean; blogs?: BlogListItem[] };
type BlogResponse = { success?: boolean; blog?: BlogPost };

const configured = () => Boolean(process.env.BLOG_API_URL && process.env.BLOG_API_KEY);

async function request<T>(path: string): Promise<T | null> {
  if (!configured()) {
    throw new Error("Blog API is not configured — set BLOG_API_URL and BLOG_API_KEY");
  }

  const base = process.env.BLOG_API_URL!.replace(/\/$/, "");
  const response = await fetch(`${base}${path}`, {
    headers: { "x-api-key": process.env.BLOG_API_KEY! },
    next: { revalidate: 60 },
  });

  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Blog API responded ${response.status}`);
  }

  return response.json() as Promise<T>;
}

/** Published posts, newest first. */
export async function fetchBlogs(): Promise<BlogListItem[]> {
  const data = await request<BlogsResponse>("/api/blogs/get-blogs");
  return data?.blogs ?? [];
}

/** One post with contentHtml + jsonLd. Returns null when missing/unpublished. */
export async function fetchBlog(slug: string): Promise<BlogPost | null> {
  const data = await request<BlogResponse>(`/api/blogs/get-blog/${encodeURIComponent(slug)}`);
  return data?.blog ?? null;
}
