import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";

const ButtonNav = () => {
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
        className={`gap-3 mt-2 lg:mt-0 lg:flex ${openMenu ? "flex" : "hidden"}`}
      >
        <button className="border border-info hover:bg-info px-2 py-1 rounded text-info hover:text-white">
          Buy Now
        </button>
      </div>
    </nav>
  );
};

export default ButtonNav;
