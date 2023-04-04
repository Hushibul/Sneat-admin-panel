import { Link } from "react-router-dom";
import Undermaintainance from "../assets/img/illustrations/girl-doing-yoga-light.png";

const UnderMaintainance = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5 text-center">
      <h2 className="text-textMain mt-3 font-bold text-4xl">
        Under Maintenance!
      </h2>
      <p className="text-textMain my-4">
        Sorry for the inconvenience but we're performing some maintenance at the
        moment
      </p>
      <Link
        className="px-4 py-2 bg-primary rounded-md text-white"
        to="/dashboard"
      >
        Back to home
      </Link>
      <img
        className="lg:w-[600px] lg:h-[370px] mx-auto mt-4 mb-6"
        src={Undermaintainance}
        alt="Not found"
      />
    </div>
  );
};

export default UnderMaintainance;
