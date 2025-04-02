import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadBlogPosts } from "../utils/loadBlogPosts";
import { BlogPost } from "../types/Blog";

const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    loadBlogPosts().then((posts) => {
      const found = posts.find((p) => p.slug === slug);
      setPost(found || null);
    });
  }, [slug]);

  if (!post) return <p>Loading blog post...</p>;

  return (
    <div className="blog-post-detail">
      <img src={post.thumbnail} alt={post.title} />
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      <div className="tags">
        {post.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPostDetail;
