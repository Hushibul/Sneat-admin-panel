import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useState } from "react";

type BasicInput = {
  label: string;
  placeholder: string;
  register: object;
  error: any;
};

const BasicPassword = ({ label, placeholder, register, error }: BasicInput) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="flex justify-between items-center">
        {" "}
        <label
          className="uppercase block text-textMain text-xs mb-2 font-semibold"
          htmlFor=""
        >
          {label}
        </label>
        <p className="text-primary text-sm">Forget Password?</p>
      </div>
      <div className="flex border-2 rounded mb-3 border-borderPrimary items-center focus:outline-primary">
        <input
          className="bg-inherit w-full focus:outline-none px-4 rounded py-2"
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
        />{" "}
        {showPassword ? (
          <AiOutlineEye
            className="text-textMain text-lg font-bold mr-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <AiOutlineEyeInvisible
            className="text-textMain text-lg font-bold mr-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </div>
      <p className="text-danger mb-2">{error}</p>
    </div>
  );
};

export default BasicPassword;
