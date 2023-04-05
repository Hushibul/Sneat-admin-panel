import { useState } from "react";
import { SlArrowUp } from "react-icons/sl";

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
          <div
            className={`${
              activeIndex === index
                ? "h-auto block"
                : "h-[300px] overflow-hidden hidden"
            } overflow-auto p-4 pb-6 duration-300 transition-[height] ease`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
