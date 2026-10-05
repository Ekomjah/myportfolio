import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "contents", "blog");

type PostData = {
  slug: string;
  date: string;
  title: string;
};

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: PostData[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md/, "");

    const fileDirectory = path.join(postsDirectory, fileName);
    const fileContent = fs.readFileSync(fileDirectory, "utf-8");

    const matterResult = matter(fileContent);
    return {
      slug,
      ...matterResult.data,
    } as PostData;
  });

  return allPostsData.sort((a: PostData, b: PostData) => {
    if (a.date < b.date) return 1;
    else return -1;
  });
};

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

console.log(getAllPostIds())
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
  };
}
