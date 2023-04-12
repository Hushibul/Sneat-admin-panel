import { useForm } from "react-hook-form";

const ToastExm = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl text-textMain font-semibold">
        Bootstrap Toasts Example With Placement
      </h2>

      <form className="flex gap-3 items-center py-8">
        <div>
          <p className="text-sm text-textMain uppercase">Type</p>
          <select
            className="w-60 h-10 rounded-md px-4 text-textMain focus-within:outline-primary mt-4"
            name=""
            id=""
          >
            <option
              className="text-textMain checked:outline-primary"
              value="One"
            >
              One
            </option>
            <option value="One">OnTwo</option>
          </select>
        </div>
        <div>
          <p className="text-sm text-textMain uppercase">Type</p>
          <select
            className="w-60 h-10 rounded-md px-4 text-textMain focus-within:outline-primary mt-4"
            name=""
            id=""
          >
            <option value="One">One</option>
            <option value="One">OnTwo</option>
          </select>
        </div>
        <button className="px-4 py-2 bg-primary rounded-md mt-8 text-white">
          Show Toast
        </button>
      </form>
    </div>
  );
};

export default ToastExm;
