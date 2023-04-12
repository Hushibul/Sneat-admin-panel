import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";

const InputGroupNav = () => {
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
          <Link to="#">About</Link>
        </li>
        <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
          <Link to="#">Contact</Link>
        </li>
      </ul>

      <div
        className={`mt-2 lg:mt-0 items-center  lg:flex ${
          openMenu ? "flex" : "hidden"
        }`}
      >
        <div className="bg-white px-4 py-3">
          <FiSearch className="text-textMain" />
        </div>
        <input
          className="bg-white border border-gray-200 rounded w-40 md:w-full lg:w-60 focus-within:outline-info px-4 py-2 placeholder:text-gray-300"
          type="text"
          placeholder="Search"
        />
      </div>
    </nav>
  );
};

export default InputGroupNav;
