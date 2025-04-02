import React, { useEffect, useState } from "react";
import { BlogPost } from "../types/Blog";
import { loadBlogPosts } from "../utils/loadBlogPosts";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    loadBlogPosts().then(setPosts);
  }, []);

  return (
    <section className="blog-section">
      <h2>Blog</h2>
      {posts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
          <img src={post.thumbnail} alt={post.title} />
          <div>
            <h3>{post.title}</h3>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <div>
              {post.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Blog;
