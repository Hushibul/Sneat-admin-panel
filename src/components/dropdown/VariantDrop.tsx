import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const VariantDrop = ({ children, rounded = false }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (event.target.closest(".dropdown") === null) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={` flex gap-2 items-center text-white bg-primary  hover:translate-y-[-1px] hover:shadow-md duration-300 ${
          rounded ? "rounded-full p-4" : "rounded px-6 py-2"
        }`}
      >
        {children}
      </button>

      <ul
        onBlur={() => setIsOpen(false)}
        className={`bg-white absolute w-48 top-14 z-30 left-0 rounded-md shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li className="text-gray-500 px-6 py-2 cursor-pointer hover:bg-gray-200">
          Action
        </li>
        <li className="text-gray-500 px-6 py-2 cursor-pointer hover:bg-gray-200">
          Another Action
        </li>
        <li className="text-gray-500 px-6 py-2 cursor-pointer hover:bg-gray-200">
          Something else here
        </li>
        <li className="text-gray-500 border-t cursor-pointer hover:bg-gray-200 border-gray-300 px-6 py-5">
          Separate Link
        </li>
      </ul>
    </div>
  );
};

export default VariantDrop;
