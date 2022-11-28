import { Link } from "react-router-dom";

export default function BlogComponent({
  post: { id, title, theme, body, imgUrl, date },
}) {
  return (
    <>
      <div className="mx-auto container">
        <div tabIndex="0" className="focus:outline-none mt-12 lg:mt-24">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            <div tabIndex="0" className="focus:outline-none" key={id}>
              <img
                tabIndex="0"
                className="focus:outline-none w-full rounded-t-xl"
                src={imgUrl}
                alt=""
              />
              <div className="py-4 px-8 w-full flex justify-between bg-slate-200">
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm font-semibold tracking-wide"
                >
                  {theme}
                </p>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-sm font-semibold tracking-wide"
                >
                  {/* {date} */}
                </p>
              </div>
              <div className="bg-slate-100 text-slate-700 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                <h4
                  tabIndex="0"
                  className="focus:outline-none text-2xl text-gray-900 font-semibold tracking-wide"
                >
                  {title}
                </h4>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-base lg:text-lg tracking-wide mt-6"
                >
                  {body}
                </p>
                
                <Link to={`/posts?id=${id}`}>
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
          </div>
        </div>
      </div>
    </>
  );
}
