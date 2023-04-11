import { BsFillCircleFill } from "react-icons/bs";

const SpinGlow = ({ color }: any) => {
  return (
    <div>
      <BsFillCircleFill
        className={`text-${color} text-4xl animate-waving-hand`}
      />
    </div>
  );
};

export default SpinGlow;
