import { ImSpinner8 } from "react-icons/im";

const SpinBorder = ({ color, size }: any) => {
  return (
    <div>
      <ImSpinner8 className={`text-${color} text-${size} animate-spin`} />
    </div>
  );
};

export default SpinBorder;
