import BasicInputLabel from "../base/BasicInputLabel";
import BrandLogo from "../../assets/img/icons/brands/logo.svg";
import BasicPassword from "../inputs/BasicPassword";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onBlur",
  });

  const formSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="mx-3 mt-12 pt-6 w-full px-6 md:w-[400px] bg-white md:mx-auto rounded">
      <div className="flex items-center gap-2 justify-center mb-10">
        <img className="w-6 h-10" src={BrandLogo} alt="BrandLogo" />
        <h2 className="text-2xl font-bold text-textMain">Sneat</h2>
      </div>
      <h3 className="text-2xl text-textMain font-semibold">
        Welcome to Sneat! 👋
      </h3>
      <p className="text-textMain mb-4 mt-2">
        Please sign-in to your account and start the adventure
      </p>
      <form onSubmit={handleSubmit(formSubmit)}>
        <BasicInputLabel
          label="Username"
          type="text"
          placeholder="Enter your username"
          register={{
            ...register("username", {
              required: { value: true, message: "Username is required" },
            }),
          }}
          error={errors.username?.message}
        />

        <BasicInputLabel
          label="Email"
          type="email"
          placeholder="Enter your email "
          register={{
            ...register("email", {
              required: { value: true, message: "Email is required" },
            }),
          }}
          error={errors.email?.message}
        />

        <BasicPassword
          label="Password"
          placeholder="........."
          register={{
            ...register("password", {
              required: { value: true, message: "Password is required" },
            }),
          }}
          error={errors.password?.message}
        />
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="w-4 h-4 border accent-primary border-textMain focus:outline-none focus:bg-primary"
          />
          <p className="text-textMain">
            I agree to{" "}
            <span className="text-primary">privacy policy & terms</span>
          </p>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded mt-6 hover:translate-y-[-1px] transition-all duration-150"
        >
          Sign In
        </button>
        <p className="text-textMain pt-4 pb-6 text-center">
          Already have an accout?
          <Link className="text-primary ml-1" to="/login">
            Sign in instead
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
