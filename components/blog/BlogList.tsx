"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import type { BlogListItem } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";

type Props = {
  blogs: BlogListItem[];
};

export function BlogList({ blogs }: Props) {
  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const blog of blogs) {
      const name = blog.category?.trim();
      if (!name) continue;
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [blogs]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return blogs.filter((blog) => {
      if (category !== "all" && blog.category !== category) return false;
      if (!q) return true;

      const haystack = [blog.title, blog.excerpt, blog.category, ...(blog.tags ?? [])]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });
  }, [blogs, category, query]);

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < max - 4);
    setScrollProgress(max > 0 ? el.scrollLeft / max : 0);
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateScrollState();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [categoryCounts.length]);

  const scrollByAmount = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * Math.min(280, el.clientWidth * 0.6), behavior: "smooth" });
  };

  const heading = category === "all" ? "All posts" : category;
  const showScrollControls = canScrollLeft || canScrollRight;

  return (
    <div>
      <label className="relative block">
        <span className="sr-only">Search posts by title, description or tag</span>
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search posts by title, description or tag"
          className="w-full rounded-2xl border border-border bg-white py-3.5 pl-11 pr-4 text-[0.95rem] text-ink outline-none placeholder:text-muted-foreground focus:border-brand/40"
        />
      </label>

      <div className="mt-5">
        <div className="flex items-center gap-2">
          {showScrollControls ? (
            <button
              type="button"
              aria-label="Scroll categories left"
              disabled={!canScrollLeft}
              onClick={() => scrollByAmount(-1)}
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand transition-opacity disabled:opacity-30 sm:inline-flex"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          ) : null}

          <div
            ref={scrollerRef}
            className="flex min-w-0 flex-1 gap-2.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <button
              type="button"
              onClick={() => setCategory("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                category === "all"
                  ? "bg-brand text-white"
                  : "border border-border bg-white text-ink hover:border-brand/30"
              }`}
            >
              All {blogs.length}
            </button>
            {categoryCounts.map(({ name, count }) => {
              const active = category === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setCategory(name)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-brand text-white"
                      : "border border-border bg-white text-ink hover:border-brand/30"
                  }`}
                >
                  {name} {count}
                </button>
              );
            })}
          </div>

          {showScrollControls ? (
            <button
              type="button"
              aria-label="Scroll categories right"
              disabled={!canScrollRight}
              onClick={() => scrollByAmount(1)}
              className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full text-brand transition-opacity disabled:opacity-30 sm:inline-flex"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : null}
        </div>

        {showScrollControls ? (
          <div className="mx-auto mt-3 h-[3px] w-full max-w-xs overflow-hidden rounded-full bg-brand/15 sm:max-w-sm">
            <div
              className="h-full rounded-full bg-brand transition-[margin,width] duration-200"
              style={{
                width: "34%",
                marginLeft: `${scrollProgress * 66}%`,
              }}
            />
          </div>
        ) : null}
      </div>

      <div className="mt-10 flex items-end justify-between gap-4">
        <h2 className="font-sans text-2xl font-semibold tracking-[-0.02em] text-ink md:text-[1.75rem]">
          {heading}
        </h2>
        <p className="shrink-0 text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        </p>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-ink-soft">No posts match these filters.</p>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((blog) => (
            <BlogCard key={blog.id || blog.slug} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
