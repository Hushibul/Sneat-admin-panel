import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CardImage from "../assets/img/elements/17.jpg";
import CardImageTwo from "../assets/img/elements/13.jpg";

const Collapse = () => {
  const [openBasic, setOpenBasic] = useState(false);
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  function toggleBoth() {
    setOpenFirst(!openFirst);
    setOpenSecond(!openSecond);
  }
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <h2 className="text-textMain text-xl my-4 font-bold">Carousal Light</h2>

      {/* Basic Collapse  */}
      <div className="bg-white p-4">
        <h2 className="text-textMain text-xl my-4 font-bold">Basic</h2>
        <p className="text-textMain my-6">
          Toggle the visibility of content across your project with a few
          classes and our JavaScript plugins.
        </p>

        <button
          onClick={() => setOpenBasic(!openBasic)}
          className={`px-4 py-2 rounded text-white bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300 mr-3`}
        >
          Link with href
        </button>
        <button
          onClick={() => setOpenBasic(!openBasic)}
          className={`px-4 py-2 rounded text-white mb-3 bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300`}
        >
          Button with data-bs-target
        </button>

        <AnimatePresence>
          {openBasic && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
                padding: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
                padding: "15px",
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
                padding: 0,
                transition: {
                  height: {
                    duration: 0.4,
                  },
                  opacity: {
                    duration: 0.25,
                  },
                },
              }}
              className="grid grid-cols-12 border border-gray-300"
            >
              <div className="col-span-12 mr-6 md:col-span-2">
                <img src={CardImage} alt="Card One" />
              </div>
              <div className="col-span-12 text-textMain md:col-span-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters.
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mutiple Collapse  */}
      <div className="bg-white p-4">
        <h2 className="text-textMain text-xl my-4 font-bold">
          Multiple targets
        </h2>
        <p className="text-textMain my-6">
          Show and hide multiple elements by referencing them with a selector.
        </p>

        <button
          onClick={() => setOpenFirst(!openFirst)}
          className={`px-4 py-2 rounded text-white bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300 mr-3`}
        >
          Toggle first element
        </button>
        <button
          onClick={() => setOpenSecond(!openSecond)}
          className={`px-4 py-2 rounded text-white mb-3 bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300 mr-3`}
        >
          Toggle second element
        </button>
        <button
          onClick={toggleBoth}
          className={`px-4 py-2 rounded text-white mb-3 bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300`}
        >
          Toggle both element
        </button>

        <AnimatePresence>
          <div className="grid grid-cols-12">
            <div className="col-span-12 mr-6 md:col-span-6">
              {openFirst && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                    padding: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    padding: "15px",
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
                    padding: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  className="grid grid-cols-12 border border-gray-300"
                >
                  <div className="col-span-12 mr-6 md:col-span-2">
                    <img src={CardImage} alt="Card One" />
                  </div>
                  <div className="col-span-12 text-textMain md:col-span-10">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </div>
                </motion.div>
              )}
            </div>
            <div className="col-span-12 md:col-span-6">
              {openSecond && (
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0,
                    padding: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                    padding: "15px",
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
                    padding: 0,
                    transition: {
                      height: {
                        duration: 0.4,
                      },
                      opacity: {
                        duration: 0.25,
                      },
                    },
                  }}
                  className="grid grid-cols-12 border border-gray-300"
                >
                  <div className="col-span-12 mr-6 md:col-span-2">
                    <img src={CardImageTwo} alt="Card One" />
                  </div>
                  <div className="col-span-12 text-textMain md:col-span-10">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum.
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Collapse;
