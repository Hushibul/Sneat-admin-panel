import BasicInputLabel from "../base/BasicInputLabel";
import BrandLogo from "../../assets/img/icons/brands/logo.svg";
import BasicPassword from "../inputs/BasicPassword";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginData, setLoginData } = useContext(AuthContext);

  const API_URL = "http://localhost:3500/user";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    mode: "onBlur",
  });

  // const [userData, setUserData] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      await axios.get(API_URL).then((res) => setLoginData(res.data[0]));
      console.log(loginData);
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formSubmit = (data: any) => {
    data.email === loginData?.name && data.password === loginData?.password
      ? navigate("/dashboard")
      : alert("Username or Password Incorrect");
    console.log(data);
  };

  return (
    <div className="mx-3 mt-20 pt-6 w-full px-6 md:w-[400px] bg-white md:mx-auto rounded">
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
          label="Email or Username"
          type="text"
          placeholder="Enter your email or username"
          {...register("email", {
            required: { value: true, message: "Email or Username is required" },
          })}
          register={{ ...register("email") }}
          error={errors.email?.message}
        />
        <BasicPassword
          label="Password"
          placeholder="........."
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
          register={{ ...register("password") }}
          error={errors.password?.message}
        />
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            className="w-4 h-4 border accent-primary border-textMain focus:outline-none focus:bg-primary"
            {...register("rememberMe")}
          />
          <span className="text-textMain">Remember Me</span>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded mt-6 hover:translate-y-[-1px] transition-all duration-150"
        >
          Sign In
        </button>
        <p className="text-textMain pt-4 pb-6 text-center">
          New on our platform?
          <Link className="text-primary ml-1" to="/register">
            Create an account
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
