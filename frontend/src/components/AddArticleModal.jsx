import { useState } from "react";

import { addPost } from "@services/api";

export default function AddArticleModal({
  showAddArticleModal,
  setShowAddArticleModal,
}) {
  const [theme, setTheme] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCloseModal = () => {
    setShowAddArticleModal(!showAddArticleModal);
  };

  const createPost = async (e) => {
    try {
      await addPost({ theme, title, body });
      alert("Article ajouté");
      setShowAddArticleModal(!showAddArticleModal);
    } catch (err) {
      e.preventDefault();
      alert(err.message);
    }
  };

  return (
    <>
      <div
        className={`${
          showAddArticleModal ? "" : "hidden"
        } backdrop-blur-[3px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 justify-center items-center flex`}
      >
        <div className="relative bg-white border border-black rounded-lg shadow w-full max-w-2xl">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="add-article-modal"
            onClick={handleCloseModal}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="px-6 py-6 lg:px-8">
            <h3 className="text-center mb-4 text-2xl font-medium text-gray-900">
              Ajouter un article
            </h3>
            <form className="space-y-6 text-lg" action="#">
              <div>
                <label
                  htmlFor="theme"
                  className="block mb-2 font-medium text-gray-900"
                >
                  Thème
                </label>
                <input
                  type="text"
                  name="theme"
                  id="theme"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={theme}
                  onChange={({ target }) => setTheme(target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block mb-2 font-medium text-gray-900"
                >
                  Titre
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={title}
                  onChange={({ target }) => setTitle(target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="article"
                  className="block mb-2 font-medium text-gray-900"
                >
                  Article
                </label>
                <textarea
                  name="article"
                  id="article"
                  rows="5"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  value={body}
                  onChange={({ target }) => setBody(target.value)}
                  required
                />
              </div>
              <button
                onClick={createPost}
                type="submit"
                className="w-full py-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 text-xl text-center"
              >
                Poster un article
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
