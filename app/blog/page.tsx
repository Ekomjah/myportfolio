import Link from "next/link";
import { getAllBlogs } from "@/lib/blog";
import { lusitana } from "@/app/ui/fonts";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog",
  description:
    "Notes on React, TypeScript and the small details of building software that people actually enjoy using.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllBlogs();

  return (
    <div className="max-w-page mx-auto w-full px-4 py-10 md:px-8 md:py-16">
      <div className="max-w-[42rem]">
        <h1
          className={`${lusitana.className} mt-4 text-[34px] leading-[1.1] tracking-tight md:text-[44px]`}
        >
          Notes
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          On React, TypeScript, Node and Python, and the details nobody is meant to notice.
        </p>
      </div>

      {posts.length === 0 ? (
        <p className="text-muted-foreground mt-12 text-lg">
          No posts yet. Check back soon.
        </p>
      ) : (
        <ul className="mt-12 space-y-10">
          {posts.map((post) => (
            <li key={post.slug}>
              <article>
                <time
                  dateTime={post.date}
                  className="text-muted-foreground font-mono text-xs tracking-[0.14em] uppercase"
                >
                  {post.date}
                </time>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mt-2 leading-relaxed">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group mt-3 inline-flex items-center gap-1 text-sm font-medium"
                >
                  <span className="group-hover:text-muted-foreground transition-colors duration-200">
                    Read
                  </span>
                  <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
