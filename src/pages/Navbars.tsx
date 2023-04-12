import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";

const Navbars = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <h2 className="text-textMain  font-semibold text-xl">Example</h2>

      <nav className="px-4 py-3 bg-slate-200 relative flex flex-col lg:flex-row">
        <h3 className="text-textMain mr-4">Navbar</h3>

        <div className="absolute bg-red-50 top-0 right-0 block md:hidden">
          <HiOutlineBars3 />
        </div>
        <ul className="flex flex-col gap-3 mr-auto lg:flex-row">
          <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
            <Link to="#">Home</Link>
          </li>
          <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
            <Link to="#">Link</Link>
          </li>
          <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
            <Link to="#">Dropdown</Link>
          </li>
          <li className="text-gray-400 focus-within:text-textMain hover:text-textMain">
            <button disabled>Disabled</button>
          </li>
        </ul>

        <div className="flex gap-3">
          <input
            className="bg-white border border-gray-200 rounded focus-within:outline-info px-4 placeholder:text-gray-300"
            type="text"
            placeholder="Search"
          />
          <button className="border border-info hover:bg-info px-2 py-1 rounded text-info hover:text-white">
            Search
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbars;
