import { getPostData } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const postData = await getPostData(slug);

  return (
    <article className="mt-40">
      <h1>{postData.title}</h1>
      <p>{postData.date}</p>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {postData.content}
      </ReactMarkdown>

      {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
    </article>
  );
}
