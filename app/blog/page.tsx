// app/blog/page.tsx
import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog – My Site",
  description: "News, updates, and hosting tips.",
};

export default function BlogPage() {
  return (
    <main>
      {/* Page hero */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-slate-950 text-white py-20 px-6 text-center">
        <p className="text-brand font-semibold uppercase tracking-wide text-sm mb-3">
          Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          News &amp; Updates
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Tips, guides, and updates from our hosting experts.
        </p>
      </section>

      {/* Post list */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <div className="flex flex-col gap-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="border-b border-gray-200 pb-10 last:border-none"
            >
              <p className="text-sm text-gray-500 mb-2">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
                · By {post.author}
              </p>
              <h2 className="text-2xl font-semibold mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-brand transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-brand font-medium hover:underline"
              >
                Read More →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
