import CenteredModal from "../components/modal/CenteredModal";
import DefaultModal from "../components/modal/DefaultModal";
import ModalDefaultForm from "../components/modal/ModalDefaultForm";
import { useState } from "react";
import SlideTopModal from "../components/modal/SlideTopModal";
import YoutubeModal from "../components/modal/YoutubeModal";
import ToggleModal from "../components/modal/ToggleModal";
import FullScreenModal from "../components/modal/FullScreenModal";
import SmallModal from "../components/modal/SmallModal";
import LargeModal from "../components/modal/LargeModal";
import ExtraLargeModal from "../components/modal/ExtraLargeModal";

const Modals = () => {
  const [openDefaultModal, setOpenDefaultModal] = useState(false);
  const [openCenteredModal, setOpenCenteredModal] = useState(false);
  const [openSlideTop, setOpenSlideTop] = useState(false);
  const [openYoutubeModal, setOpenYoutubeModal] = useState(false);
  const [openToggleModal, setOpenToggleModal] = useState(false);
  const [openFullScreenModal, setOpenFullScreenModal] = useState(false);
  const [openSmallModal, setOpenSmallModal] = useState(false);
  const [openLargeModal, setOpenLargeModal] = useState(false);
  const [openExtraLargeModal, setOpenExtraLargeModal] = useState(false);

  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div className="rounded-md p-5 bg-white shadow-md border-b border-b-gray-300">
        <h2 className="text-xl text-textMain">Modals</h2>

        {/* Modal Toggle  */}
        <div className="mt-5 grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-gray-400 text-sm mb-4">Default</p>
            <button
              onClick={() => setOpenDefaultModal(true)}
              className="px-4 py-2 text-white bg-primary rounded shadow"
            >
              Launch modal
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 mt-3 md:mt-0 lg:col-span-4">
            <p className="text-gray-400 text-sm mb-4">Vertically Centered</p>
            <button
              onClick={() => setOpenCenteredModal(true)}
              className="px-4 py-2 text-white bg-primary rounded shadow"
            >
              Launch modal
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-6 lg:mr-40 lg:mt-0">
            <p className="text-gray-400 text-sm mb-4">Slide from top</p>
            <button
              onClick={() => setOpenSlideTop(true)}
              className="px-4 py-2 text-white bg-primary rounded shadow"
            >
              Launch modal
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-gray-400 text-sm mb-4">Youtube Video</p>
            <button
              onClick={() => setOpenYoutubeModal(true)}
              className="px-4 py-2 text-white bg-primary rounded shadow"
            >
              Launch modal
            </button>
          </div>
          <div className="col-span-12 mt-3 md:mt-0 md:col-span-6 lg:col-span-4">
            <p className="text-gray-400 text-sm mb-4">Toggle between Modals</p>
            <button
              onClick={() => setOpenToggleModal(true)}
              className="px-4 py-2 text-white bg-primary rounded shadow"
            >
              Launch modal
            </button>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-6 lg:mr-40 lg:mt-0">
            <p className="text-gray-400 text-sm mb-4">Fullscreen</p>
            <button
              onClick={() => setOpenFullScreenModal(true)}
              className="px-4 py-2 text-white bg-primary rounded shadow"
            >
              Launch modal
            </button>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <p className="text-gray-400 text-sm mb-4">Sizes</p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setOpenSmallModal(true)}
                className="px-4 py-2 text-white bg-primary rounded shadow"
              >
                Small
              </button>
              <button
                onClick={() => setOpenLargeModal(true)}
                className="px-4 py-2 text-white bg-primary rounded shadow"
              >
                Large
              </button>
              <button
                onClick={() => setOpenExtraLargeModal(true)}
                className="px-4 py-2 text-white bg-primary rounded shadow"
              >
                Extra Large
              </button>
            </div>
          </div>
          <div className="col-span-12 mt-3 md:mt-0 md:col-span-6 lg:col-span-4">
            <p className="text-gray-400 text-sm mb-4">Scrolling long content</p>
            <div className="flex gap-3">
              <button className="px-4 py-2 text-white bg-primary rounded shadow">
                Option 1
              </button>
              <button className="px-4 py-2 text-white bg-primary rounded shadow">
                Option 2
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-6 lg:mr-40 lg:mt-0">
            <p className="text-gray-400 text-sm mb-4">Backdrop</p>
            <button
              onClick={() => setOpenDefaultModal(true)}
              className="px-4 py-2 text-white bg-primary rounded shadow"
            >
              Launch modal
            </button>
          </div>
        </div>
      </div>

      {/* Modals  */}
      <DefaultModal
        openDefaultModal={openDefaultModal}
        setOpenDefaultModal={setOpenDefaultModal}
      >
        <ModalDefaultForm />
      </DefaultModal>

      <CenteredModal
        openCenteredModal={openCenteredModal}
        setOpenCenteredModal={setOpenCenteredModal}
      >
        <ModalDefaultForm />
      </CenteredModal>

      <SlideTopModal
        openSlideTop={openSlideTop}
        setOpenSlideTop={setOpenSlideTop}
      >
        <ModalDefaultForm />
      </SlideTopModal>

      <YoutubeModal
        openYoutubeModal={openYoutubeModal}
        setOpenYoutubeModal={setOpenYoutubeModal}
      />

      <ToggleModal
        openToggleModal={openToggleModal}
        setOpenToggleModal={setOpenToggleModal}
      />

      <FullScreenModal
        openFullScreenModal={openFullScreenModal}
        setOpenFullScreenModal={setOpenFullScreenModal}
      />

      <SmallModal
        openSmallModal={openSmallModal}
        setOpenSmallModal={setOpenSmallModal}
      >
        <ModalDefaultForm />
      </SmallModal>

      <LargeModal
        openLargeModal={openLargeModal}
        setOpenLargeModal={setOpenLargeModal}
      >
        <ModalDefaultForm />
      </LargeModal>

      <ExtraLargeModal
        openExtraLargeModal={openExtraLargeModal}
        setOpenExtraLargeModal={setOpenExtraLargeModal}
      >
        <ModalDefaultForm />
      </ExtraLargeModal>
    </div>
  );
};

export default Modals;
