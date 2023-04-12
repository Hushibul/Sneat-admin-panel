import { useState } from "react";

const Popover = () => {
  const [top, setTop] = useState(false);
  const [right, setRight] = useState(false);
  const [bottom, setBottom] = useState(false);
  const [left, setLeft] = useState(false);
  return (
    <div className="p-6 my-8 bg-white rounded-md shadow-md">
      <h2 className="text-xl text-textMain font-semibold">Popovers</h2>
      <p className="text-gray-400 mt-6 mb-4">Direactons</p>

      <div className="grid grid-cols-12">
        <div className="col-span-6 md:col-span-3 relative">
          <button
            onClick={() => setRight(!right)}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Right
          </button>
          <div
            className={`absolute top-[2px] shadow-md left-[75px] p-5 z-20 w-72 bg-white rounded-md text-white ${
              right ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl text-textMain font-semibold">
              Popover Title
            </h2>
            <p className="text-gray-400 my-3">
              This is a very beautiful popover, show some love.
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setRight(false)}
                className="text-sm rounded-md border px-2 py-1 border-gray-500 text-gray-400 hover:bg-secondary hover:text-white"
              >
                Skip
              </button>
              <button className="text-sm rounded-md bg-primary px-2 py-1 text-white hover:translate-y-[-1px] duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-6 md:col-span-3 relative">
          <button
            onClick={() => setTop(!top)}
            className="bg-primary text-white px-4 py-2 rounded-md"
          >
            Top
          </button>
          <div
            className={`absolute top-[-180px] shadow-md left-[-75px] p-5 z-20 w-72 bg-white rounded-md text-white ${
              top ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl text-textMain font-semibold">
              Popover Title
            </h2>
            <p className="text-gray-400 my-3">
              This is a very beautiful popover, show some love.
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setTop(false)}
                className="text-sm rounded-md border px-2 py-1 border-gray-500 text-gray-400 hover:bg-secondary hover:text-white"
              >
                Skip
              </button>
              <button className="text-sm rounded-md bg-primary px-2 py-1 text-white hover:translate-y-[-1px] duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 relative">
          <button
            onClick={() => setBottom(!bottom)}
            className="bg-primary text-white px-4 py-2 rounded-md group group-hover:"
          >
            Bottom
          </button>
          <div
            className={`absolute top-[40px] left-[-75px] shadow-md p-5 z-20 w-72 bg-white rounded-md text-white ${
              bottom ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl text-textMain font-semibold">
              Popover Title
            </h2>
            <p className="text-gray-400 my-3">
              This is a very beautiful popover, show some love.
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setBottom(false)}
                className="text-sm rounded-md border px-2 py-1 border-gray-500 text-gray-400 hover:bg-secondary hover:text-white"
              >
                Skip
              </button>
              <button className="text-sm rounded-md bg-primary px-2 py-1 text-white hover:translate-y-[-1px] duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 relative">
          <button
            onClick={() => setLeft(!left)}
            className="bg-primary text-white px-4 py-2 rounded-md group group-hover:"
          >
            Left
          </button>
          <div
            className={`absolute top-[2px] left-[-300px] p-5 z-20 w-72 shadow-md bg-white rounded-md text-white ${
              left ? "block" : "hidden"
            }`}
          >
            <h2 className="text-xl text-textMain font-semibold">
              Popover Title
            </h2>
            <p className="text-gray-400 my-3">
              This is a very beautiful popover, show some love.
            </p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setLeft(false)}
                className="text-sm rounded-md border px-2 py-1 border-gray-500 text-gray-400 hover:bg-secondary hover:text-white"
              >
                Skip
              </button>
              <button className="text-sm rounded-md bg-primary px-2 py-1 text-white hover:translate-y-[-1px] duration-300">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
