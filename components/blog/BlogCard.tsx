import Link from "next/link";
import type { BlogListItem } from "@/lib/server/blogApi";

export function BlogCard({ blog }: { blog: BlogListItem }) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-border/70 bg-white p-6 shadow-[0_8px_24px_-18px_rgba(22,20,19,0.28)] transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-[0_14px_32px_-18px_rgba(22,20,19,0.32)]"
    >
      {blog.category ? (
        <span className="inline-flex w-fit rounded-full bg-brand-soft px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-brand">
          {blog.category}
        </span>
      ) : null}

      <h2 className="mt-4 font-sans text-[1.15rem] font-semibold leading-snug tracking-[-0.02em] text-ink transition-colors group-hover:text-brand">
        {blog.title}
      </h2>

      {blog.excerpt ? (
        <p className="mt-3 line-clamp-3 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
          {blog.excerpt}
        </p>
      ) : (
        <div className="flex-1" />
      )}

      {blog.readingMinutes ? (
        <p className="mt-5 text-sm text-muted-foreground">· {blog.readingMinutes} min read</p>
      ) : null}
    </Link>
  );
}
