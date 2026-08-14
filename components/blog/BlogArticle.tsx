import Link from "next/link";
import { formatBlogDate, jsonLdToScript, type BlogPost } from "@/lib/blog";

export function BlogArticle({ blog }: { blog: BlogPost }) {
  const ld = jsonLdToScript(blog.jsonLd);

  return (
    <article>
      {ld ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ld }} /> : null}

      <header className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-ink-soft transition-colors hover:text-brand"
        >
          ← All posts
        </Link>

        {blog.category ? (
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
            {blog.category}
          </p>
        ) : null}

        <h1 className="mt-4 font-display text-[2.15rem] text-ink md:text-[3rem] md:leading-[1.08]">
          {blog.title}
        </h1>

        {blog.excerpt ? (
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{blog.excerpt}</p>
        ) : null}

        <p className="mt-6 text-sm text-muted-foreground">
          {blog.author ? <span>{blog.author}</span> : null}
          {blog.author && blog.publishedAt ? <span> · </span> : null}
          {blog.publishedAt ? (
            <time dateTime={new Date(blog.publishedAt * 1000).toISOString()}>
              {formatBlogDate(blog.publishedAt)}
            </time>
          ) : null}
          {blog.readingMinutes ? (
            <>
              <span> · </span>
              <span>{blog.readingMinutes} min read</span>
            </>
          ) : null}
        </p>
      </header>

      <div
        className="blog-prose mx-auto mt-12 max-w-3xl"
        dangerouslySetInnerHTML={{ __html: blog.contentHtml || "" }}
      />
    </article>
  );
}
