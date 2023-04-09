import { useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { AnimatePresence, motion } from "framer-motion";

export default function Accordion({ items, isIcon }: any) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="border rounded-md overflow-hidden">
      {items.map((item: any, index: any) => (
        <div
          key={index}
          className={`border-b my-2 text-textMain shadow-md ${
            activeIndex === index ? "bg-white" : "bg-white"
          }`}
        >
          <button
            className="flex justify-between items-center font-bold w-full p-4 focus:outline-none"
            onClick={() => handleClick(index)}
          >
            <span>{item.title}</span>
            {isIcon ? (
              <SlArrowUp
                className={`${
                  activeIndex === index ? "transform rotate-180" : ""
                } h-4 w-4 transition-transform duration-300`}
              />
            ) : (
              ""
            )}
          </button>
          <AnimatePresence>
            {activeIndex === index ? (
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "150px",
                  opacity: 1,
                  transition: {
                    height: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                      delay: 0.15,
                    },
                  },
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                  transition: {
                    height: {
                      duration: 0.4,
                    },
                    opacity: {
                      duration: 0.25,
                    },
                  },
                }}
                className="px-4 overflow-hidden"
              >
                {item.content}
              </motion.div>
            ) : (
              ""
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
