import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { getPostById } from "@services/api";

export default function BlogArticle() {
  const [queryString] = useSearchParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    const loadData = async () => {
      const id = queryString.get("id");
      const result = await getPostById(id);

      setPost(result);
    };

    loadData();
  }, []);

  return (
    <div className="bg-[url(@assets/contact-bg.jpg)] bg-cover min-h-screen w-screen">
      <br></br>
      <div className="bg-slate-100 mt-12 m-[20%] rounded-b-xl">
        <img src={post.imgUrl} alt="" />
        <p className="py-6 pl-8 text-lg bg-slate-200">{post.theme}</p>
        <p>{/* {post.date} */}</p>
        <h4 className="text-3xl text-center my-12">{post.title}</h4>
        <p className="text-xl m-12">{post.body}</p>
        <br></br>
      </div>
    </div>
  );
}
