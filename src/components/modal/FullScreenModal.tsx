import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";

import { modalContents } from "../../assets/constants/constant";

const FullScreenModal = ({
  openFullScreenModal,
  setOpenFullScreenModal,
}: any) => {
  const closeModal = () => {
    setOpenFullScreenModal(false);
  };
  return (
    <>
      <AnimatePresence>
        {openFullScreenModal && (
          <motion.div
            initial={{
              translateY: "-400px",
              opacity: 0,
            }}
            animate={{
              translateY: 0,
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
            className={`absolute top-0 left-0 z-40 w-full h-auto px-6 py-4 shadow-md rounded-md bg-white duration-300`}
          >
            <h2 className="text-textMain text-xl mb-6 font-semibold">
              Modal Title
            </h2>
            <div className="overflow-y-scroll overflow-x-hidden">
              {modalContents.map((para, index) => (
                <p key={index} className="text-textMain mb-3">
                  {para}
                </p>
              ))}
            </div>

            <div className="float-right">
              <button
                onClick={() => setOpenFullScreenModal(false)}
                className="bg-transparent text-secondary cursor-pointer ml-auto mr-4 rounded-md border border-gray-400 px-4 py-2 hover:bg-secondary hover:text-white"
              >
                Close
              </button>
              <button
                type="submit"
                className="bg-primary px-4 py-2 text-white rounded-md hover:translate-y-[-1px]"
              >
                Save Change
              </button>
            </div>
            <div
              onClick={() => setOpenFullScreenModal(false)}
              className="absolute top-4 cursor-pointer right-4"
            >
              <HiOutlineXMark className="text-secondary text-2xl" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        onClick={closeModal}
        className={`absolute top-0 left-0 bottom-0 right-0 cursor-pointer opacity-25 bg-gray-400 ${
          openFullScreenModal ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default FullScreenModal;
