import type { Metadata } from "next";
import { fetchBlogs } from "@/lib/server/blogApi";
import { BlogList } from "@/components/blog/BlogList";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical writing on AI learning, building, and implementation from IndiaFutureAI.",
};

export default async function BlogPage() {
  let blogs: Awaited<ReturnType<typeof fetchBlogs>> = [];
  let errorMessage = "";

  try {
    blogs = await fetchBlogs();
  } catch (error) {
    console.error("Failed to load blogs:", error instanceof Error ? error.message : error);
    errorMessage = "Could not load posts right now. Please try again later.";
  }

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <main className="container-x mx-auto pb-24 pt-28 md:pt-36">
        <header className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Blog</p>
          <h1 className="mt-4 font-display text-4xl text-ink md:text-5xl">
            Ideas for builders learning AI
          </h1>
          <p className="mt-4 text-lg text-ink-soft">
            Practical notes on AI learning, tools, and shipping real work.
          </p>
        </header>

        <section className="mt-12 md:mt-14">
          {errorMessage ? (
            <p className="rounded-2xl border border-border bg-white/70 px-5 py-4 text-ink-soft">
              {errorMessage}
            </p>
          ) : blogs.length === 0 ? (
            <p className="text-ink-soft">No posts published yet. Check back soon.</p>
          ) : (
            <BlogList blogs={blogs} />
          )}
        </section>
      </main>
    </div>
  );
}
