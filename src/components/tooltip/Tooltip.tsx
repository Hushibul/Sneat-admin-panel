import React from "react";

const Tooltip = () => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl text-textMain font-semibold">Tooltips</h2>
      <p className="text-gray-400 mt-6 mb-4">Direactons</p>

      <div className="grid grid-cols-12">
        <div className="col-span-6 md:col-span-3 relative">
          <button className="bg-primary text-white px-4 py-2 rounded-md group">
            Right
            <div className="absolute top-[2px] left-[75px] px-2 py-1 z-20 bg-slate-800 rounded-md text-white hidden group-hover:block">
              Tooltip on right
            </div>
          </button>
        </div>
        <div className="col-span-6 md:col-span-3 relative">
          <button className="bg-primary text-white px-4 py-2 rounded-md group group-hover:">
            Top
            <div className="absolute top-[-35px] left-[-10%] px-2 py-1 z-20 bg-slate-800 rounded-md text-white hidden group-hover:block">
              Tooltip on top
            </div>
          </button>
        </div>
        <div className="col-span-6 md:col-span-3 relative">
          <button className="bg-primary text-white px-4 py-2 rounded-md group group-hover:">
            Bottom
            <div className="absolute top-[45px] left-[-10%] px-2 py-1 z-20 bg-slate-800 rounded-md text-white hidden group-hover:block">
              Tooltip on bottom
            </div>
          </button>
        </div>
        <div className="col-span-6 md:col-span-3 relative">
          <button className="bg-primary text-white px-4 py-2 rounded-md group group-hover:">
            Left
            <div className="absolute top-[2px] left-[-130px] px-2 py-1 z-20 bg-slate-800 rounded-md text-white hidden group-hover:block">
              Tooltip on right
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
