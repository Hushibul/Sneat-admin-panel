import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const DismissibleAlert = ({ textColor, background }: any) => {
  const [isClosed, setIsClosed] = useState(false);
  return (
    <div
      className={`px-4 mb-5 py-3 flex justify-between items-center bg-${background}-100 text-${textColor} rounded ${
        isClosed ? "hidden" : "flex"
      }`}
    >
      <span className="">This is a {textColor} alert — check it out!</span>{" "}
      <RxCross2
        onClick={() => setIsClosed(true)}
        className={`text-${textColor} cursor-pointer`}
      />
    </div>
  );
};

export default DismissibleAlert;
