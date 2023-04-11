import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";
import { Fragment, useState } from "react";

const ToggleModal = ({ openToggleModal, setOpenToggleModal }: any) => {
  const [index, setIndex] = useState<number>(0);
  const closeModal = () => {
    setOpenToggleModal(false);
  };

  const toggleElements = [
    {
      id: 1,
      heading: "Modal 1",
      content: "Show a second modal and hide this one with the button below.",
    },
    {
      id: 2,
      heading: "Modal 2",
      content: "Hide this modal and show the first with the button below.",
    },
  ];
  return (
    <>
      <AnimatePresence>
        {openToggleModal && (
          <motion.div
            initial={{
              translateY: "-400px",
              translateX: "-50%",
              opacity: 0,
            }}
            animate={{
              translateY: "-50%",
              opacity: 1,
              transition: {
                transform: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                  delay: 0.15,
                },
              },
            }}
            exit={{
              translateY: "-400px",
              opacity: 0,
              transition: {
                transform: {
                  duration: 0.4,
                },
                opacity: {
                  duration: 0.25,
                },
              },
            }}
            className={`absolute top-[50%] left-[50%] z-40 h-auto w-full md:w-[500px] px-6 py-4  shadow-md rounded-md bg-white duration-300`}
          >
            {/* {toggleElements.map()} */}

            <Fragment>
              <h2 className="text-textMain font-semibold">
                {toggleElements[index].heading}
              </h2>
              <p className="text-gray-400 py-6">
                {toggleElements[index].content}
              </p>
              <button className="bg-primary text-white px-4 float-right py-2 rounded-md shadow-md">
                {index === 0 ? (
                  <span onClick={() => setIndex(1)}>Open Second Modal</span>
                ) : (
                  <span onClick={() => setIndex(0)}>Back to first</span>
                )}
              </button>
            </Fragment>

            <div
              onClick={() => setOpenToggleModal(false)}
              className="bg-gray-100 p-1 absolute top-[-8px] cursor-pointer right-[-8px] rounded-lg shadow-md"
            >
              <HiOutlineXMark className="text-secondary text-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={closeModal}
        className={`absolute top-0 left-0 bottom-0 right-0 cursor-pointer opacity-25 bg-gray-400 ${
          openToggleModal ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default ToggleModal;
