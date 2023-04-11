import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineXMark } from "react-icons/hi2";

const ModalBody = ({
  children,
  type,
  openDefaultModal,
  setOpenDefaultModal,
}: any) => {
  console.log(openDefaultModal);
  const closeModal = () => {
    setOpenDefaultModal(false);
  };
  return (
    <>
      <div
        className={`absolute top-4 left-[50%] translate-x-[-50%] z-40 h-auto w-[500px] px-6 py-4 shadow-md rounded-md bg-white ${
          openDefaultModal ? "block" : "hidden"
        }`}
      >
        {children}

        <div
          onClick={() => setOpenDefaultModal(false)}
          className="bg-gray-100 p-1 absolute top-[-8px] right-[-8px] rounded-lg shadow-md"
        >
          <HiOutlineXMark className="text-secondary text-2xl" />
        </div>
      </div>

      <div
        onClick={closeModal}
        className={`absolute top-0 left-0 bottom-0 right-0 cursor-pointer opacity-25 bg-gray-400 ${
          openDefaultModal ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
};

export default ModalBody;
