import { useState } from "react";
import { tabContets } from "../../assets/constants/constant";

const BasicTab = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="rounded-md shadow-md">
      <div className="flex gap-1 rounded-md overflow-hidden">
        <button
          onClick={() => setIndex(0)}
          className={`px-4 py-2 text-textMain ${
            index === 0 ? "bg-white" : "bg-gray-300"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setIndex(1)}
          className={`px-4 py-2 text-textMain ${
            index === 1 ? "bg-white" : "bg-gray-300"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setIndex(2)}
          className={`px-4 py-2 text-textMain ${
            index === 2 ? "bg-white" : "bg-gray-300"
          }`}
        >
          Messages
        </button>
      </div>
      <div className="p-6 bg-white">
        <p className="text-textMain">{tabContets[index][0]}</p>
        <p className="text-textMain mt-4">{tabContets[index][1]}</p>
      </div>
    </div>
  );
};

export default BasicTab;
