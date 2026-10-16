// app/blog/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";

// Tells Next.js which slugs exist at build time, so each post
// can be pre-rendered as a static page for speed.
export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// Sets the browser tab title dynamically per post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post ? `${post.title} – My Site` : "Post Not Found",
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  // If someone visits a slug that doesn't exist, show the 404 page
  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* Page hero */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-slate-950 text-white py-20 px-6 text-center">
        <p className="text-brand font-semibold uppercase tracking-wide text-sm mb-3">
          Blog
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-3xl mx-auto">
          {post.title}
        </h1>
        <p className="text-gray-300 text-sm">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · By {post.author}
        </p>
      </section>

      {/* Post content */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <div className="prose prose-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </div>

        <Link
          href="/blog"
          className="inline-block mt-10 text-brand font-medium hover:underline"
        >
          ← Back to Blog
        </Link>
      </section>
    </main>
  );
}