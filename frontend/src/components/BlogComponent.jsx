import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import Confirmationmodal from "../modals/ConfirmationModal";

import { LoginContext } from "@contexts/LoginContextProvider";
import { deletePost } from "@services/api";

export default function BlogComponent({ post }) {
  const { currentUser } = useContext(LoginContext);

  const [showConfirmationModal, setShowConformationModal] = useState(false);

  const onDelete = async (post) => {
    await deletePost(post.id);
    setShowConformationModal(!showConfirmationModal);
    window.location.reload(false);
  };

  const handleShowConfirmationModal = () => {
    setShowConformationModal(!showConfirmationModal);
  };

  return (
    <>
      <div className="mx-auto container">
        <div tabIndex="0" className="focus:outline-none mt-12 lg:mt-18">
          {/* <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8"> */}
          <div tabIndex="0" className="focus:outline-none" key={post.id}>
            <div>
              {currentUser ? (
                <div>
                  <button
                    type="button"
                    onClick={handleShowConfirmationModal}
                    className="absolute m-2 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  <Confirmationmodal
                    showConfirmationModal={showConfirmationModal}
                    setShowConformationModal={setShowConformationModal}
                    onDelete={onDelete}
                    post={post}
                  />
                </div>
              ) : (
                " "
              )}
            </div>
            <img
              tabIndex="0"
              className="focus:outline-none w-full rounded-t-xl"
              src={post.imgUrl}
              alt=""
            />
            <div className="py-4 px-8 w-full flex justify-between bg-slate-200">
              <p
                tabIndex="0"
                className="focus:outline-none text-sm font-semibold tracking-wide"
              >
                {post.theme}
              </p>
              <p
                tabIndex="0"
                className="focus:outline-none text-sm font-semibold tracking-wide"
              >
                {/* {post.date} */}
              </p>
            </div>
            <div className="bg-slate-100 text-slate-700 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
              <h4
                tabIndex="0"
                className="focus:outline-none text-2xl text-gray-900 font-semibold tracking-wide"
              >
                {post.title}
              </h4>
              <p
                tabIndex="0"
                className="focus:outline-none text-base lg:text-lg tracking-wide mt-6"
              >
                {post.body}
              </p>

              <Link to={`/posts?id=${post.id}`}>
                <div className="w-full flex justify-end">
                  <button className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer">
                    <span className="text-base tracking-wide hover:underline">
                      Lire la suite
                    </span>
                  </button>
                </div>
              </Link>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
