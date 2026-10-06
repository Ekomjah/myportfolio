import { getBlogBySlug } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";
import { notFound } from "next/navigation";
import CodeBlock from "@/app/ui/code-block";
import { CalendarDays } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}
const WORDS_PER_MINUTE = 220;

function readingTime(content: string) {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-page mx-auto w-full px-4 py-10 md:px-8 md:py-16">
      <header className="max-w-[42rem]">
        <h1
          className={`${lusitana.className} mt-4 text-[34px] leading-[1.1] tracking-tight text-balance md:text-[44px]`}
        >
          {post.title}
        </h1>

        <p className="text-muted-foreground mt-4 text-lg leading-relaxed text-pretty">
          {post.description}
        </p>

        <div className="text-muted-foreground mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 shrink-0" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime(post.content)} min read</span>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <li
              key={tag}
              className="bg-secondary text-muted-foreground rounded-[5px] px-2 py-0.5 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {post.cover && (
        <div className="relative mt-10 aspect-[3/2] w-full overflow-hidden rounded-2xl border">
          <Image
            src={post.cover}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="text-foreground/90 [&_a:hover]:text-foreground [&_blockquote]:border-foreground/20 [&_blockquote]:text-muted-foreground [&_code]:bg-muted [&_hr]:border-foreground/15 [&_pre]:bg-muted [&_strong]:text-foreground [&_td]:border-foreground/10 [&_th]:border-foreground/20 mt-12 max-w-[42rem] text-[17px] leading-[1.75] [&_a]:underline [&_a]:underline-offset-2 [&_blockquote]:mt-6 [&_blockquote]:border-l-2 [&_blockquote]:pl-5 [&_blockquote]:italic [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.85em] [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-balance [&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_hr]:my-10 [&_img]:my-8 [&_img]:rounded-xl [&_img]:border [&_li]:my-1.5 [&_li]:pl-1 [&_ol]:my-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-5 [&_p:first-of-type]:mt-0 [&_pre]:my-7 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:font-mono [&_pre]:text-[13px] [&_pre]:leading-relaxed [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-[inherit] [&_strong]:font-semibold [&_table]:my-7 [&_table]:w-full [&_table]:text-left [&_table]:text-[15px] [&_td]:border-b [&_td]:py-2.5 [&_td]:pr-4 [&_td]:align-top [&_th]:border-b [&_th]:py-2.5 [&_th]:pr-4 [&_th]:font-medium [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
