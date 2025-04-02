import matter from "gray-matter";
import { WorkData } from "../types/Work";
import { BlogPost } from "../types/Blog";

export const loadWorks = async (): Promise<WorkData[]> => {
  const works: WorkData[] = [];

  // Leemos el index con la lista de archivos .md
  const indexRes = await fetch("/markdown/works/index.json");
  const filenames: string[] = await indexRes.json();

  for (const name of filenames) {
    const raw = await fetch(`/markdown/works/${name}`).then((res) => res.text());
    const { data, content } = matter(raw);

    works.push({
      title: data.title,
      thumbnail: data.thumbnail,
      tags: data.tags,
      slug: data.slug,
      description: data.description,
      content,
    });
  }

  return works;
};

export const loadBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await fetch("/markdown/blog/index.json");
  const posts: BlogPost[] = await response.json();
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};
