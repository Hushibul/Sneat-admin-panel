import { useState } from "react";
import { tabContets } from "../../assets/constants/constant";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineChatBubbleLeft } from "react-icons/hi2";

const FilledPills = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="rounded-md shadow-md">
      <div className="grid grid-cols-12 gap-1 rounded-md overflow-hidden">
        <button
          onClick={() => setIndex(0)}
          className={`col-span-12 md:col-span-4 py-2 px-4 lg:px-16 flex items-center gap-2 rounded ${
            index === 0
              ? "bg-primary text-white"
              : "bg-transparent text-textMain"
          }`}
        >
          <IoHomeOutline />
          Home
        </button>
        <button
          onClick={() => setIndex(1)}
          className={`px-4 lg:px-16 col-span-12 md:col-span-4 py-2 flex items-center gap-2 rounded ${
            index === 1
              ? "bg-primary text-white"
              : "bg-transparent text-textMain"
          }`}
        >
          <HiOutlineUser /> Profile
        </button>
        <button
          onClick={() => setIndex(2)}
          className={`px-4 lg:px-16 col-span-12 md:col-span-4 py-2 flex items-center gap-2 rounded ${
            index === 2
              ? "bg-primary text-white"
              : "bg-transparent text-textMain"
          }`}
        >
          <HiOutlineChatBubbleLeft />
          Messages
        </button>
      </div>
      <div className="p-6 mt-4 rounded-md bg-white">
        <p className="text-textMain">{tabContets[index][0]}</p>
        <p className="text-textMain mt-4">{tabContets[index][1]}</p>
      </div>
    </div>
  );
};

export default FilledPills;
