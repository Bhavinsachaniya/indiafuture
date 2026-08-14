import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchBlog, fetchBlogs } from "@/lib/server/blogApi";
import { BlogArticle } from "@/components/blog/BlogArticle";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  try {
    const blogs = await fetchBlogs();
    return blogs.map((blog) => ({ slug: blog.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  try {
    const blog = await fetchBlog(slug);
    if (!blog) return { title: "Post not found" };

    return {
      title: blog.title,
      description: blog.excerpt || undefined,
      openGraph: {
        title: blog.title,
        description: blog.excerpt || undefined,
        type: "article",
        images: blog.thumbnail ? [{ url: blog.thumbnail }] : undefined,
      },
    };
  } catch {
    return { title: "Blog" };
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  if (!blog) notFound();

  return (
    <div className="min-h-screen grain-bg">
      <main className="container-x mx-auto pb-24 pt-28 md:pt-36">
        <BlogArticle blog={blog} />
      </main>
    </div>
  );
}
