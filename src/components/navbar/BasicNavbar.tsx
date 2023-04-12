import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const BasicNavbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="px-4 py-3 bg-slate-200 relative flex flex-col lg:flex-row">
      <h3 className="text-textMain mb-2 mr-4 lg:mb-0">Navbar</h3>

      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="absolute top-4 right-4 block md:hidden"
      >
        <HiOutlineBars3 className="text-textMain text-xl" />
      </div>
      <ul
        className={`flex overflow-hidden flex-col gap-3 mr-auto lg:flex-row lg:h-fit lg:opacity-100 transition-height duration-500 ${
          openMenu ? "h-fit opacity-100" : "h-0 opacity-0"
        }`}
      >
        <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
          <Link to="#">Home</Link>
        </li>
        <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
          <Link to="#">Link</Link>
        </li>
        <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
          <Link className="flex gap-3 items-center" to="#">
            Dropdown <IoIosArrowDown className="text-textMain" />
          </Link>
        </li>
        <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
          <button disabled>Disabled</button>
        </li>
      </ul>

      <div
        className={`gap-3 mt-2 lg:mt-0 lg:flex ${openMenu ? "flex" : "hidden"}`}
      >
        <input
          className="bg-white border border-gray-200 rounded w-40 md:w-full lg:w-60 focus-within:outline-info px-4 placeholder:text-gray-300"
          type="text"
          placeholder="Search"
        />
        <button className="border border-info hover:bg-info px-2 py-1 rounded text-info hover:text-white">
          Search
        </button>
      </div>
    </nav>
  );
};

export default BasicNavbar;
