import BasicDrop from "../components/dropdown/BasicDrop";
import { buttons } from "../assets/constants/constant";
import { Fragment } from "react";
import OutlineDrop from "../components/dropdown/OutlineDrop";
import SplitDrop from "../components/dropdown/SplitDrop";
import VariantDrop from "../components/dropdown/VariantDrop";
import { FiMenu } from "react-icons/fi";
import { RiArrowDownSLine } from "react-icons/ri";
import { SlOptionsVertical } from "react-icons/sl";

const DropDown = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div className="rounded-md p-5 bg-white shadow-md border-b border-b-gray-300">
        <h2 className="text-xl text-textMain font-bold">Dropdowns</h2>
        <p className="text-gray-400 mt-6 text-sm">Basic</p>

        <div className="flex mt-4 gap-3 flex-wrap">
          {buttons.map((item) => (
            <Fragment key={item.id}>
              <BasicDrop name={item.name} color={item.color} />
            </Fragment>
          ))}
        </div>
        <p className="text-gray-400 mt-6 text-sm">Outline</p>

        <div className="flex mt-4 gap-3 flex-wrap">
          {buttons.map((item) => (
            <Fragment key={item.id}>
              <OutlineDrop name={item.name} color={item.color} />
            </Fragment>
          ))}
        </div>
        <p className="text-gray-400 mt-6 text-sm">Split</p>

        <div className="flex mt-4 gap-3 flex-wrap">
          {buttons.map((item) => (
            <Fragment key={item.id}>
              <SplitDrop name={item.name} color={item.color} />
            </Fragment>
          ))}
        </div>

        {/* Variant Button  */}
        <div className="flex space-x-20 mt-8">
          <div>
            <p className="text-gray-400 text-sm mb-4">Hidden Arrow</p>
            <VariantDrop>
              <span>Hidden arrow</span>
            </VariantDrop>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-4">With Icon</p>
            <VariantDrop>
              <div className="flex gap-2 items-center">
                <FiMenu /> <span>With Icon</span> <RiArrowDownSLine />
              </div>
            </VariantDrop>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-4">Icon Dropdown</p>
            <VariantDrop rounded={true}>
              <SlOptionsVertical />
            </VariantDrop>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
