"use client";

import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import { lusitana } from "@/app/ui/fonts";
import type { BlogPostMeta } from "@/lib/blog";

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPreview({
  posts,
  limit = 2,
}: {
  posts: BlogPostMeta[];
  limit?: number;
}) {
  const shown = posts.slice(0, limit);

  return (
    <section id="blog" className="w-full border-b border-foreground/10 pb-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="m-0 mt-8 text-xl font-bold">Blog</h2>
          <p className="text-foreground/60 text-sm">
            Notes on React, tooling, and the details behind them.
          </p>
        </div>
        <Link
          href="/blog"
          className="group flex shrink-0 items-center gap-2 text-sm font-medium"
        >
          <span className="group-hover:text-muted-foreground transition-colors duration-200">
            See everything
          </span>
          <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
        </Link>
      </div>

      <ul className="grid gap-4 md:grid-cols-2">
        {shown.map((post) => {
          const locked = post.draft === true;

          const body = (
            <div className="flex h-full flex-col">
              <div className="flex items-center gap-2">
                <time
                  dateTime={post.date}
                  className="text-muted-foreground font-mono text-[11px] tracking-[0.14em] uppercase"
                >
                  {formatDate(post.date)}
                </time>
                {locked && (
                  <span className="bg-muted text-muted-foreground inline-flex items-center gap-1 rounded-[5px] px-1.5 py-0.5 text-[10px] font-medium tracking-[0.08em] uppercase">
                    <Lock className="size-2.5" aria-hidden="true" />
                    Draft
                  </span>
                )}
              </div>

              <h3
                className={`${lusitana.className} mt-2 text-xl leading-tight tracking-tight ${
                  locked ? "text-muted-foreground" : ""
                }`}
              >
                {post.title}
              </h3>

              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {locked
                  ? "This note is still being written and is not readable yet."
                  : post.description}
              </p>

              <span className="group/link mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium">
                <span className="group-hover/link:text-muted-foreground transition-colors duration-200">
                  {locked ? "Not available" : "Read"}
                </span>
                {!locked && (
                  <ArrowRight className="size-4 shrink-0 transition-transform duration-200 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                )}
              </span>
            </div>
          );

          return (
            <li key={post.slug} className="h-full">
              {locked ? (
                <article className="bg-foreground/[0.02] flex h-full flex-col rounded-xl border border-dashed border-foreground/15 p-5">
                  {body}
                  <span className="sr-only">This note is not available yet.</span>
                </article>
              ) : (
                <article className="hover:bg-foreground/[0.02] flex h-full flex-col rounded-xl border p-5 transition-colors duration-200">
                  <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col">
                    {body}
                  </Link>
                </article>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}