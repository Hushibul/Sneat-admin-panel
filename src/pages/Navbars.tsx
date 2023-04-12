import BasicNavbar from "../components/navbar/BasicNavbar";
import ButtonNav from "../components/navbar/ButtonNav";
import InputGroupNav from "../components/navbar/InputGroupNav";
import SupportNav from "../components/navbar/SupportNavbar";

const Navbars = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div>
        <h2 className="text-textMain my-3 font-semibold text-xl">Example</h2>
        <BasicNavbar />
      </div>

      <div className="mt-8">
        <h2 className="text-textMain  font-semibold text-xl">
          Supported Content
        </h2>
        <p className="text-gray-400 my-4">Text</p>

        <SupportNav />
      </div>
      <div>
        <p className="text-gray-400 my-4">Input Group</p>

        <InputGroupNav />
      </div>
      <div>
        <p className="text-gray-400 my-4">Input Group</p>

        <ButtonNav />
      </div>
    </div>
  );
};

export default Navbars;
