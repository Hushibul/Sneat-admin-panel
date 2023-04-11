import BasicInputLabel from "../base/BasicInputLabel";
import { useForm } from "react-hook-form";

const ModalDefaultForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      dob: "",
    },
  });

  const formSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-xl text-textMain font-semibold mb-6">Modal Title</h2>
      <form onSubmit={handleSubmit(formSubmit)}>
        <BasicInputLabel
          type="text"
          label="Name"
          placeholder="Enter Name"
          register={{
            ...register("name", {
              required: { value: true, message: "Name is required" },
            }),
          }}
          error={errors.name?.message}
        />
        <div className="grid grid-cols-12 space-x-2">
          <div className="col-span-6">
            {" "}
            <BasicInputLabel
              type="email"
              label="Email"
              placeholder="Enter Email"
              register={{
                ...register("email", {
                  required: { value: true, message: "Email is required" },
                }),
              }}
              error={errors.email?.message}
            />
          </div>
          <div className="col-span-6">
            <BasicInputLabel
              type="date"
              label="DOB"
              placeholder=""
              register={{
                ...register("dob", {
                  required: { value: true, message: "DOB is required" },
                }),
              }}
              error={errors.email?.message}
            />
          </div>
        </div>

        <button className="bg-transparent text-secondary ml-auto mr-4 rounded-md border border-gray-400 px-4 py-2 hover:bg-secondary hover:text-white">
          Close
        </button>
        <button
          type="submit"
          className="bg-primary px-4 py-2 text-white rounded-md hover:translate-y-[-1px]"
        >
          Save Change
        </button>
      </form>
    </div>
  );
};

export default ModalDefaultForm;
