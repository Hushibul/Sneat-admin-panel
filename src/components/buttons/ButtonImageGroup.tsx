import { CiClock2 } from "react-icons/ci";
import { AiOutlineBell } from "react-icons/ai";
const ButtonImageGroup = () => {
  return (
    <div className="mt-6 px-6 rounded-lg shadow-md bg-white pt-5">
      <h3 className="text-lg text-textMain">Buttons with icons</h3>
      <div className="grid grid-cols-12 border-b border-secondary pb-5">
        <div className="col-span-12 md:col-span-6">
          <p className="text-secondary font-bold text-sm opacity-80 pt-6">
            Basic
          </p>
          <div className="flex items-center mt-4 gap-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded text-white bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300`}
            >
              <CiClock2 />
              Primary
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded text-white bg-secondary hover:translate-y-[-1px] hover:shadow-md duration-300`}
            >
              <AiOutlineBell />
              Secondary
            </button>
          </div>
          <div className="flex items-center mt-4 gap-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-3xl text-white bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300`}
            >
              <CiClock2 />
              Primary
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-3xl text-white bg-secondary hover:translate-y-[-1px] hover:shadow-md duration-300`}
            >
              <AiOutlineBell />
              Secondary
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6">
          <p className="text-secondary font-bold text-sm opacity-80 pt-6">
            Outline
          </p>
          <div className="flex items-center mt-4 gap-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded text-primary hover:text-white border border-primary hover:bg-primary hover:shadow-md duration-300`}
            >
              <CiClock2 />
              Primary
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded text-secondary hover:text-white border border-secondary hover:bg-secondary hover:translate-y-[-1px] hover:shadow-md duration-300`}
            >
              <AiOutlineBell />
              Secondary
            </button>
          </div>
          <div className="flex items-center mt-4 gap-4">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-3xl text-primary hover:text-white border border-primary hover:bg-primary hover:translate-y-[-1px] hover:shadow-md duration-300`}
            >
              <CiClock2 />
              Primary
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-3xl text-secondary hover:text-white border border-secondary hover:bg-secondary hover:translate-y-[-1px] hover:shadow-md duration-300`}
            >
              <AiOutlineBell />
              Secondary
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 pb-5">
        <div className="col-span-12 md:col-span-6 ">
          <p className="text-secondary font-bold text-sm opacity-80 pt-6">
            Basic
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <button className="p-2 bg-primary rounded hover:translate-y-[-1px] duration-300">
              <CiClock2 color="white" size={25} />
            </button>
            <button className="p-2 bg-secondary rounded hover:translate-y-[-1px] duration-300">
              <AiOutlineBell color="white" size={25} />
            </button>
            <button className="p-2 bg-primary rounded-full hover:translate-y-[-1px] duration-300">
              <CiClock2 color="white" size={25} />
            </button>
            <button className="p-2 bg-secondary rounded-full hover:translate-y-[-1px] duration-300">
              <AiOutlineBell color="white" size={25} />
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 ">
          <p className="text-secondary font-bold text-sm opacity-80 pt-6">
            Outline
          </p>
          <div className="flex gap-2 mt-5 items-center">
            <button className="p-2 bg-primary rounded">
              <CiClock2 color="white" size={25} />
            </button>
            <button className="p-2 bg-secondary rounded">
              <AiOutlineBell color="white" size={25} />
            </button>
            <button className="p-2 bg-primary rounded-full">
              <CiClock2 color="white" size={25} />
            </button>
            <button className="p-2 bg-secondary rounded-full">
              <AiOutlineBell color="white" size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonImageGroup;
