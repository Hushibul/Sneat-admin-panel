import { Link } from "react-router-dom";
import NotFound from "../assets/img/illustrations/page-misc-error-light.png";

const Error = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5 text-center">
      <h2 className="text-textMain mt-3 font-bold text-4xl">
        Page Not Found :{"("}
      </h2>
      <p className="text-textMain my-4">
        Oops! 😖 The requested URL was not found on this server.
      </p>
      <Link
        className="px-4 py-2 bg-primary rounded-md text-white"
        to="/dashboard"
      >
        Back to home
      </Link>
      <img
        className="lg:w-[600px] lg:h-[370px] mx-auto mt-4 mb-6"
        src={NotFound}
        alt="Not found"
      />
    </div>
  );
};

export default Error;
