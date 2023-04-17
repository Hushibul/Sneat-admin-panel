import { useState } from "react";
import { tabContets } from "../../assets/constants/constant";

const BasicPills = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="rounded-md shadow-md">
      <div className="flex gap-1 rounded-md flex-wrap overflow-hidden">
        <button
          onClick={() => setIndex(0)}
          className={`px-4 py-2 rounded-md  ${
            index === 0
              ? "bg-primary text-white"
              : "bg-transparent text-textMain"
          }`}
        >
          Home
        </button>
        <button
          onClick={() => setIndex(1)}
          className={`px-4 py-2 rounded-md ${
            index === 1
              ? "bg-primary text-white"
              : "bg-transparent text-textMain"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setIndex(2)}
          className={`px-4 py-2 rounded-md  ${
            index === 2
              ? "bg-primary text-white"
              : "bg-transparent text-textMain"
          }`}
        >
          Messages
        </button>
      </div>
      <div className="p-6 mt-4 bg-white">
        <p className="text-textMain">{tabContets[index][0]}</p>
        <p className="text-textMain mt-4">{tabContets[index][1]}</p>
      </div>
    </div>
  );
};

export default BasicPills;
