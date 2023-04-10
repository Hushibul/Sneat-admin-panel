const Modals = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div className="rounded-md p-5 bg-white shadow-md border-b border-b-gray-300">
        <h2 className="text-xl text-textMain">Modals</h2>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-4">Default</p>
            <button className="px-4 py-2 text-white bg-primary rounded shadow">
              Launch modal
            </button>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-4">Vertically Centered</p>
            <button className="px-4 py-2 text-white bg-primary rounded shadow">
              Launch modal
            </button>
          </div>
          <div className="mr-40">
            <p className="text-gray-400 text-sm mb-4">Slide from top</p>
            <button className="px-4 py-2 text-white bg-primary rounded shadow">
              Launch modal
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-4">Youtube Video</p>
            <button className="px-4 py-2 text-white bg-primary rounded shadow">
              Launch modal
            </button>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-4">Toggle between Modals</p>
            <button className="px-4 py-2 text-white bg-primary rounded shadow">
              Launch modal
            </button>
          </div>
          <div className="mr-40">
            <p className="text-gray-400 text-sm mb-4">Fullscreen</p>
            <button className="px-4 py-2 text-white bg-primary rounded shadow">
              Launch modal
            </button>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm mb-4">Sizes</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white bg-primary rounded shadow">
                Small
              </button>
              <button className="px-4 py-2 text-white bg-primary rounded shadow">
                Large
              </button>
              <button className="px-4 py-2 text-white bg-primary rounded shadow">
                Medium
              </button>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-4">Scrolling long content</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white bg-primary rounded shadow">
                Option 1
              </button>
              <button className="px-4 py-2 text-white bg-primary rounded shadow">
                Option 2
              </button>
            </div>
          </div>
          <div className="mr-40">
            <p className="text-gray-400 text-sm mb-4">Backdrop</p>
            <button className="px-4 py-2 text-white bg-primary rounded shadow">
              Launch modal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modals;
