import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";

const Offcanvas = () => {
  const [toggleStart, setToggleStart] = useState<boolean>(false);
  const [toggleEnd, setToggleEnd] = useState<boolean>(false);
  const [toggleTop, setToggleTop] = useState<boolean>(false);
  const [toggleBottom, setToggleBottom] = useState<boolean>(false);

  function turnOffCanvas() {
    setToggleStart(false);
    setToggleEnd(false);
    setToggleTop(false);
    setToggleBottom(false);
  }
  return (
    <div>
      <div className="mx-2 md:mx-6 xl:ml-5">
        {/* Placements Offcanvas  */}
        <div className="bg-white px-6">
          <h2 className="text-textMain font-semibold text-xl py-4">
            Placements
          </h2>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 font-bold text-sm">Start(Default)</p>
              <button
                onClick={() => setToggleStart(true)}
                className="px-4 py-2 bg-primary text-white my-6 rounded-md hover:translate-x-[1px] duration-200"
              >
                Toggle Start
              </button>
            </div>
            <div>
              <p className="text-gray-400 font-bold text-sm">End</p>
              <button
                onClick={() => setToggleEnd(true)}
                className="px-4 py-2 bg-primary text-white my-6 rounded-md hover:translate-x-[1px] duration-200"
              >
                Toggle End
              </button>
            </div>
            <div>
              <p className="text-gray-400 font-bold text-sm">Top</p>
              <button
                onClick={() => setToggleTop(true)}
                className="px-4 py-2 bg-primary text-white my-6 rounded-md hover:translate-x-[1px] duration-200"
              >
                Toggle Top
              </button>
            </div>
            <div className="mr-20">
              <p className="text-gray-400 font-bold text-sm">Bottom</p>
              <button
                onClick={() => setToggleBottom(true)}
                className="px-4 py-2 bg-primary text-white my-6 rounded-md hover:translate-x-[1px] duration-200"
              >
                Toggle Bottom
              </button>
            </div>
          </div>
        </div>

        {/* Toggle Start Offcanvas  */}
        <AnimatePresence>
          {toggleStart && (
            <motion.div
              initial={{
                translateX: "-400px",
                opacity: 0,
              }}
              animate={{
                translateX: 0,
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
                translateX: "-400px",
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
              className="absolute z-50 bg-white top-0 left-0 bottom-0 w-96"
            >
              <div className="flex items-center justify-between mt-6 mx-5">
                <h1 className="text-textMain  text-lg font-bold ">
                  Offcanvas Start
                </h1>
                <button onCanPlay={() => setToggleStart(false)}>
                  <RxCross2 size={22} />
                </button>
              </div>

              <p className="text-secondary leading-6 mx-5 text-center mt-36">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              <button className="py-2 bg-primary rounded-md shadow-md  text-white px-[140px] mt-5 mx-5">
                Continue
              </button>
              <button
                onClick={() => setToggleStart(false)}
                className="py-2 bg-transparent rounded-md shadow-md  text-dark border border-dark px-[150px] mt-5 mx-5"
              >
                Cancel
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle End Offcanvas */}
        <AnimatePresence>
          {toggleEnd && (
            <motion.div
              initial={{
                translateX: "-400px",
                opacity: 0,
              }}
              animate={{
                translateX: 0,
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
                translateX: "-400px",
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
              className="absolute z-50 bg-white top-0 right-0 bottom-0 w-96"
            >
              <div className="flex items-center justify-between mt-6 mx-5">
                <h1 className="text-textMain  text-lg font-bold ">
                  Offcanvas End
                </h1>
                <button onCanPlay={() => setToggleEnd(false)}>
                  <RxCross2 size={22} />
                </button>
              </div>

              <p className="text-secondary leading-6 mx-5 text-center mt-36">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              <button className="py-2 bg-primary rounded-md shadow-md  text-white px-[140px] mt-5 mx-5">
                Continue
              </button>
              <button
                onClick={() => setToggleEnd(false)}
                className="py-2 bg-transparent rounded-md shadow-md  text-dark border border-dark px-[150px] mt-5 mx-5"
              >
                Cancel
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Top Offcanvas  */}
        <AnimatePresence>
          {toggleTop && (
            <motion.div
              initial={{
                translateY: "-400px",
                opacity: 0,
              }}
              animate={{
                translateY: 0,
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
                translateY: "-400px",
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
              className="absolute z-50 bg-white top-0 right-0 left-0 h-60"
            >
              <div className="flex items-center justify-between mt-6 mx-5">
                <h1 className="text-textMain text-lg font-bold ">
                  Offcanvas Top
                </h1>
                <button onCanPlay={() => setToggleTop(false)}>
                  <RxCross2 size={22} />
                </button>
              </div>

              <p className="text-secondary leading-5 mx-5 text-center my-6">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              <button className="py-2 bg-primary rounded-md shadow-md text-white px-4 mx-5">
                Continue
              </button>
              <button
                onClick={() => setToggleTop(false)}
                className="py-2 bg-transparent rounded-md shadow-md  text-dark border border-dark px-4 mt-5 mx-5"
              >
                Cancel
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Bottom Offcanvas  */}
        <AnimatePresence>
          {toggleBottom && (
            <motion.div
              initial={{
                translateY: "-400px",
                opacity: 0,
              }}
              animate={{
                translateY: 0,
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
                translateY: "-400px",
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
              className="absolute z-50 bg-white right-0 left-0 bottom-0 h-60"
            >
              <div className="flex items-center justify-between mt-6 mx-5">
                <h1 className="text-textMain text-lg font-bold">
                  Offcanvas Top
                </h1>
                <button onCanPlay={() => setToggleBottom(false)}>
                  <RxCross2 size={22} />
                </button>
              </div>

              <p className="text-secondary leading-5 mx-5 text-center my-6">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                used in laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts of Cicero's De Finibus Bonorum
                et Malorum for use in a type specimen book.
              </p>
              <button className="py-2 bg-primary rounded-md shadow-md text-white px-4 mx-5">
                Continue
              </button>
              <button
                onClick={() => setToggleBottom(false)}
                className="py-2 bg-transparent rounded-md shadow-md text-dark border border-dark px-4 mt-5 mx-5"
              >
                Cancel
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <div
          className={`absolute z-50 bg-white top-0 left-0 bottom-0 w-96 ${
            isOpen ? "translate-x-0" : "translate-x-[-400px]"
          }`}
        >
          <h2 className="text-3xl text-red-600">Hellow world!</h2>
        </div> */}

        <div
          onClick={turnOffCanvas}
          className={`absolute top-0 left-0 bottom-0 right-0 z-40 cursor-pointer opacity-25 bg-gray-400 ${
            toggleStart || toggleEnd || toggleTop || toggleBottom
              ? "block"
              : "hidden"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Offcanvas;
