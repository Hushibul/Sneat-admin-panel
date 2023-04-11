import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";

const ExtraLargeModal = ({
  children,
  openExtraLargeModal,
  setOpenExtraLargeModal,
}: any) => {
  const closeModal = () => {
    setOpenExtraLargeModal(false);
  };
  return (
    <>
      <AnimatePresence>
        {openExtraLargeModal && (
          <motion.div
            initial={{
              translateY: "-400px",
              translateX: "-50%",
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
            className={`absolute top-4 left-[50%] translate-x-[-50%] z-40 h-auto w-full md:w-[550px] lg:w-[800px] xl:[1100px] px-6 py-4  shadow-md rounded-md bg-white duration-300`}
          >
            {children}

            <div
              onClick={() => setOpenExtraLargeModal(false)}
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
          openExtraLargeModal ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default ExtraLargeModal;
