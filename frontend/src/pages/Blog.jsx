import { useState, useEffect } from "react";

import BlogComponent from "../components/BlogComponent";
import { getPosts } from "@services/api";

export default function Blog({ handleResponseModal }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await getPosts();
      setPosts(result);
    };

    loadData();
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mb-20">
      {posts.map((post, id) => (
        <BlogComponent
          key={id}
          id={id}
          post={post}
          handleResponseModal={handleResponseModal}
        />
      ))}
    </div>
  );
}
