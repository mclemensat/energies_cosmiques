import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getPostById } from "@services/api";

export default function BlogArticle() {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate(-1);
  };

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
    <div>
      <br></br>
      <button onClick={() => handleBackButton()}>
        <span className="ml-12 text-2xl">
          <i className="fa-solid fa-arrow-left-long"></i> Retour
        </span>
      </button>
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
