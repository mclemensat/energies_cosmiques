import { useState, useEffect } from "react";

import BlogComponent from "../components/BlogComponent";
import { getPosts } from "@services/api";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getPosts();
      setPosts(result);
    };

    loadData();
  }, []);

  return (
    <div>
      {posts.map((post, id) => (
        <BlogComponent key={id} id={id} post={post} />
      ))}
    </div>
  );
}
