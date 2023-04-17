import { BiBell } from "react-icons/bi";
import { HiOutlineXMark } from "react-icons/hi2";

const BasicToast = ({ value, color, closeToast, setCloseToast }: any) => {
  return (
    <div className={`${closeToast ? "block" : "hidden"}`}>
      <div
        className={`px-6 py-4 w-full md:w-[350px] h-32 absolute rounded-md shadow bg-${color} ${
          value === "topleft"
            ? "top-4 left-4 xl:left-72"
            : value === "topcenter"
            ? "top-4 left-[50%] translate-x-[-50%]"
            : value === "topright"
            ? "top-4 right-4"
            : value === "middleleft"
            ? "top-[50%] left-4 translate-y-[-50%] xl:left-72"
            : value === "middlecenter"
            ? "top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            : value === "middleright"
            ? "top-[50%] right-4 translate-y-[-50%]"
            : value === "bottomleft"
            ? "bottom-4 left-4 xl:left-72"
            : value === "bottomcenter"
            ? "bottom-4 left-[50%] translate-x-[-50%]"
            : "bottom-4 right-4"
        }`}
      >
        <div className="flex justify-between">
          <h2 className="text-white font-bold">
            <BiBell /> Bootstrap Toast
          </h2>
          <p className="text-white">11 minutes ago.</p>
        </div>
        <p className="text-white">
          Fruitcake chocolate bar tootsie roll gummies gummies jelly beans cake.
        </p>

        <button
          onClick={() => setCloseToast(false)}
          className={`absolute bg-${color} top-[-8px] right-[-8px] p-1 shadow-3xl rounded-md`}
        >
          <HiOutlineXMark color="white" size={18} />
        </button>
      </div>
    </div>
  );
};

export default BasicToast;
