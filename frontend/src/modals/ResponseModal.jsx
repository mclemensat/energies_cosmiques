export default function ResponseModal({
  showResponseModal,
  setShowResponseModal,
  onDelete,
  post,
}) {
    
  const handleDeletePost = () => {
    onDelete(post);
    setShowResponseModal(!showResponseModal);
  };

  return (
    <>
      <main
        className={`${
          showResponseModal ? "" : "hidden"
        } backdrop-blur-[3px] overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 justify-center items-center flex`}
      >
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className="bg-white rounded-lg border-2 border-black md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div className="md:flex items-center">
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="font-bold">Article supprimé</p>
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end">
              <button
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1 hover:bg-gray-400"
                onClick={handleDeletePost}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
