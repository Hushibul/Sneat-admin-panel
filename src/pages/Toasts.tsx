import { useForm, Controller } from "react-hook-form";
import BasicToast from "../components/toast/BasicToast";
import { useState } from "react";
import { toastColors, toastPlacements } from "../assets/constants/constant";

const Toasts = () => {
  const [value, setValue] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [closeToast, setCloseToast] = useState<boolean>(true);

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      color: "",
      placement: "",
    },
  });

  const formSubmit = (data: any) => {
    setValue(data.placement);
    setColor(data.color);
  };
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div className="p-6">
        <h2 className="text-xl text-textMain font-semibold">
          Bootstrap Toasts Example With Placement
        </h2>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex gap-3 items-center py-8"
        >
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <label
              className="uppercase block text-textMain text-sm mb-2"
              htmlFor=""
            >
              Type
            </label>
            <Controller
              name="color"
              control={control}
              defaultValue="primary"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="bg-inherit mb-3 text-textMain bg-white rounded block px-4 w-full md:w-60 border-2 border-borderPrimary outline-textMain py-2 focus-within:outline-primary"
                >
                  {toastColors.map((item) => (
                    <option
                      key={item.id}
                      className="text-textMain checked:text-textMain"
                      value={item.value}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div className="col-span-12 md:pr-4 md:col-span-6">
            <label
              className="uppercase block text-textMain text-sm mb-2"
              htmlFor=""
            >
              Placement
            </label>
            <Controller
              name="placement"
              control={control}
              defaultValue="topleft"
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="bg-inherit mb-3 text-textMain bg-white rounded block px-4 w-full md:w-60 border-2 border-borderPrimary outline-textMain py-2 focus-within:outline-primary"
                >
                  {toastPlacements.map((item) => (
                    <option
                      className="text-textMain checked:text-textMain"
                      value={item.value}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <button
            onClick={() => setCloseToast(true)}
            type="submit"
            className="px-4 py-2 bg-primary rounded-md mt-4 text-white"
          >
            Show Toast
          </button>
        </form>
      </div>

      <BasicToast
        value={value}
        color={color}
        closeToast={closeToast}
        setCloseToast={setCloseToast}
      />
    </div>
  );
};

export default Toasts;
