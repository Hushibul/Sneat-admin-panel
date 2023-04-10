import { useState, useEffect } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const SplitDrop = ({ name, color }: any) => {
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
        className={`flex gap-2 items-center rounded text-white bg-${color}  hover:translate-y-[-1px] hover:shadow-md duration-300`}
      >
        <div className="py-2 px-4 hover:translate-y-[-3px] hover:shadow-md duration-300">
          {name}
        </div>{" "}
        <div className={`bg-${color} px-2`}>
          <RiArrowDownSLine color="white" />
        </div>
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

export default SplitDrop;
