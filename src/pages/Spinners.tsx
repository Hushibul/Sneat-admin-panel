import { Fragment } from "react";
import { buttons } from "../assets/constants/constant";
import SpinBorder from "../components/spinner/SpinBorder";
import SpinGlow from "../components/spinner/SpinGlow";

const Spinners = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div className="p-6 bg-white rounded-md shadow-md">
        <h2 className="text-textMain font-semibold">Style</h2>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <p className="text-gray-400 font-bold my-6 text-sm">Border</p>
            <div className="flex gap-4 flex-wrap">
              {buttons.map((item) => (
                <Fragment key={item.id}>
                  <SpinBorder color={item.color} size="4xl" />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <p className="text-gray-400 my-6 text-sm">Glowing</p>

            <div className="flex gap-4 flex-wrap">
              {buttons.map((item) => (
                <Fragment key={item.id}>
                  <SpinGlow color={item.color} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 mt-10 bg-white rounded-md shadow-md">
        <h2 className="text-textMain font-semibold">Style</h2>
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-4">
            <p className="text-gray-400 font-bold my-6 text-sm">Large</p>
            <div className="flex gap-4 flex-wrap">
              <SpinBorder color="primary" size="5xl" />
              <SpinBorder color="secondary" size="5xl" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-gray-400 my-6 text-sm">Medium</p>

            <div className="flex gap-4 flex-wrap">
              <SpinBorder color="primary" size="3xl" />
              <SpinBorder color="secondary" size="3xl" />
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="text-gray-400 my-6 text-sm">Small</p>

            <div className="flex gap-4 flex-wrap">
              <SpinBorder color="primary" size="xl" />
              <SpinBorder color="secondary" size="xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinners;
