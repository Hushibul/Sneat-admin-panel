import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const Offcanvas = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <div className="mx-2 md:mx-6 xl:ml-5">
        <div
          className={`absolute z-50 bg-white top-0 left-0 bottom-0 w-96 ${
            isOpen ? "translate-x-0" : "translate-x-[-400px]"
          }`}
        >
          <h2 className="text-3xl text-red-600">Hellow world!</h2>
        </div>

        <div
          onClick={() => setIsOpen(false)}
          className={`absolute top-0 left-0 bottom-0 right-0 z-40 cursor-pointer opacity-25 bg-gray-400 ${
            isOpen ? "block" : "hidden"
          }`}
        ></div>

        <button className="ml-60 z-50" onClick={() => setIsOpen(!isOpen)}>
          Opne
        </button>
      </div>
    </div>
  );
};

export default Offcanvas;
