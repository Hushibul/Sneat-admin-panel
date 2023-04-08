import AvatarOne from "../../assets/img/avatars/1.png";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import BasicInputLabel from "../base/BasicInputLabel";
import {
  countryOptions,
  languageOptions,
  optionsTimezone,
  optionsCurrency,
} from "../../assets/constants/constant";
const AccountForm = () => {
  const [file, setFiles] = useState<string>("");
  function handleImageChange(event: any) {
    const file = event.target.files[0];
    setFiles(URL.createObjectURL(file));
  }
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      organization: "",
      phonenumber: "",
      address: "",
      state: "",
      zipcode: "",
      country: "",
      language: "",
      timezone: "",
      currency: "",
    },
    mode: "onBlur",
  });

  const formSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <form className="mt-4 bg-white p-6" onSubmit={handleSubmit(formSubmit)}>
        <h3 className="text-textMain font-bold">Profile Detail</h3>
        <div className="flex items-center mt-4 gap-8">
          <img
            className="h-24 w-24 rounded-md"
            src={file !== "" ? file : AvatarOne}
            alt="avatar"
          />

          <div>
            <label
              htmlFor="fileInput"
              className={
                "bg-primary cursor-pointer px-6 py-3 text-white rounded-md"
              }
            >
              Upload File
              <input
                className="hidden"
                type="file"
                id="fileInput"
                accept=".mp4, .mov, .png, .jpg"
                onChange={handleImageChange}
              />
            </label>
            <button className="px-6 py-3 bg-gray-600 ml-4 text-white rounded-md">
              Reset
            </button>
            <p className="text-gray-400 mt-4">
              Allowed JPG, GIF or PNG. Max size of 800K
            </p>
          </div>
        </div>
        <div className="border-t-2 py-4 border-t-gray-300 w-full mt-5 grid grid-cols-12">
          {/* FirstName  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <BasicInputLabel
              label="First Name"
              type="text"
              placeholder="Jhon"
              {...register("firstname", {
                required: { value: true, message: "Firstname is required" },
              })}
              register={{ ...register("firstname") }}
              error={errors.firstname?.message}
            />
          </div>

          {/* LastName  */}
          <div className="col-span-12 md:col-span-6">
            <BasicInputLabel
              label="Last Name"
              type="text"
              placeholder="Doee"
              {...register("lastname", {
                required: { value: true, message: "Lastname is required" },
              })}
              register={{ ...register("lastname") }}
              error={errors.lastname?.message}
            />
          </div>

          {/* Email  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <BasicInputLabel
              label="Email"
              type="email"
              placeholder="john.doe@example.com"
              {...register("email", {
                required: { value: true, message: "Email is required" },
              })}
              register={{ ...register("email") }}
              error={errors.email?.message}
            />
          </div>

          {/* Organization  */}
          <div className="col-span-12 md:col-span-6">
            <BasicInputLabel
              label="Organization"
              type="text"
              placeholder="ThemeOragnization"
              {...register("organization", {
                required: { value: true, message: "Organization is required" },
              })}
              register={{ ...register("organization") }}
              error={errors.organization?.message}
            />
          </div>

          {/* Phone Number  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <BasicInputLabel
              label="Phone Number"
              type="text"
              placeholder=""
              {...register("phonenumber", {
                required: { value: true, message: "Phone Number is required" },
              })}
              register={{ ...register("phonenumber") }}
              error={errors.phonenumber?.message}
            />
          </div>

          {/* Address  */}
          <div className="col-span-12 md:col-span-6">
            <BasicInputLabel
              label="Address"
              type="text"
              placeholder="ThemeOragnization"
              {...register("address", {
                required: { value: true, message: "Addressf is required" },
              })}
              register={{ ...register("address") }}
              error={errors.address?.message}
            />
          </div>

          {/* State  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <BasicInputLabel
              label="State"
              type="text"
              placeholder="California"
              {...register("state", {
                required: { value: true, message: "State is required" },
              })}
              register={{ ...register("state") }}
              error={errors.state?.message}
            />
          </div>

          {/* Zip Code  */}
          <div className="col-span-12 md:col-span-6">
            <BasicInputLabel
              label="Zip Code"
              type="text"
              placeholder="21923"
              {...register("zipcode", {
                required: { value: true, message: "zipcode is required" },
              })}
              register={{ ...register("zipcode") }}
              error={errors.zipcode?.message}
            />
          </div>

          {/* Country  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <label
              className="uppercase block text-textMain text-xs mb-2 font-semibold"
              htmlFor=""
            >
              Country
            </label>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="bg-inherit mb-3 rounded block px-4 w-full border-2 border-borderPrimary outline-textMain py-2 focus:outline-primary"
                >
                  {countryOptions.map((item) => (
                    <option value={item.value}>{item.name}</option>
                  ))}
                </select>
              )}
            />
          </div>

          {/* Language  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <label
              className="uppercase block text-textMain text-xs mb-2 font-semibold"
              htmlFor=""
            >
              Language
            </label>
            <Controller
              name="language"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="bg-inherit mb-3 rounded block px-4 w-full border-2 border-borderPrimary outline-textMain py-2 focus:outline-primary"
                >
                  {languageOptions.map((item) => (
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

          {/* Timezone  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <label
              className="uppercase block text-textMain text-xs mb-2 font-semibold"
              htmlFor=""
            >
              Language
            </label>
            <Controller
              name="timezone"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="bg-inherit mb-3 rounded block px-4 w-full border-2 border-borderPrimary outline-textMain py-2 focus:outline-primary"
                >
                  {optionsTimezone.map((item) => (
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

          {/* Currency  */}
          <div className="col-span-12 md:pr-4 md:col-span-6">
            <label
              className="uppercase block text-textMain text-xs mb-2 font-semibold"
              htmlFor=""
            >
              Language
            </label>
            <Controller
              name="currency"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  defaultValue={"Enter your country"}
                  {...field}
                  className="bg-inherit mb-3 rounded block px-4 w-full border-2 border-borderPrimary outline-textMain py-2 focus:outline-primary"
                >
                  {optionsCurrency.map((item) => (
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

          <div className="col-span-12 flex gap-3 mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-primary rounded-lg text-white hover:translate-y-[-1px] duration-300"
            >
              Save Change
            </button>
            <button className="px-6 py-2 bg-transparent text-textMain rounded-lg border border-textMain hover:bg-textMain hover:text-white duration-300">
              Cancel
            </button>
          </div>
        </div>
      </form>

      <div className="mt-4 bg-white px-6 py-4">
        <h3 className="text-textMain font-bold">Profile Detail</h3>

        <div className="bg-red-100 p-4 rounded-md mt-5">
          <p className="text-yellow-600 font-bold">
            Are you sure you want to delete your account?
          </p>
          <p className="text-yellow-600 mt-2">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <input className="w-4 h-4 bg-primary" type="checkbox" />{" "}
          <span className="text-slate-800">
            I confirm my account deactivation
          </span>
        </div>
        <button className="block mt-5 px-6 py-2 mb-3 bg-danger rounded-lg text-white hover:translate-y-[-1px] duration-300">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default AccountForm;
