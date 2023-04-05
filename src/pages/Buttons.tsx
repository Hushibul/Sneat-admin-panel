import BasicButton from "../components/buttons/BasicButton";
import { buttons } from "../assets/constants/constant";
import BasicButtonRounded from "../components/buttons/BasicButtonRounded";
import OutlineButton from "../components/buttons/OutlineButton";
import OutlineButtonRounded from "../components/buttons/OutlineButtonRounded";
import ButtonImageGroup from "../components/buttons/ButtonImageGroup";

const Buttons = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      {/* Basic Button  */}
      <div className=" px-6 rounded-lg shadow-md bg-white pt-5">
        <h3 className="text-lg text-textMain">Basic Buttons</h3>
        <p className="text-secondary font-bold text-sm pt-6">Default</p>
        <div className="flex gap-3 items-center flex-wrap border-b py-6 border-b-secondary">
          {buttons.map((item) => (
            <BasicButton name={item.name} color={item.color} />
          ))}
        </div>
        <p className="text-secondary font-bold text-sm pt-6">Rounded</p>
        <div className="flex gap-3 items-center flex-wrap py-6">
          {buttons.map((item) => (
            <BasicButtonRounded
              key={item?.id}
              name={item?.name}
              color={item?.color}
            />
          ))}
        </div>
      </div>

      {/* Outline Buttons  */}
      <div className="mt-6 px-6 rounded-lg shadow-md bg-white pt-5">
        <h3 className="text-lg text-textMain">Outline Buttons</h3>
        <p className="text-secondary font-bold text-sm pt-6">Default</p>
        <div className="flex gap-3 items-center flex-wrap border-b py-6 border-b-secondary">
          {buttons.map((item) => (
            <OutlineButton name={item.name} color={item.color} />
          ))}
        </div>
        <p className="text-secondary font-bold text-sm pt-6">Rounded</p>
        <div className="flex gap-3 items-center flex-wrap py-6">
          {buttons.map((item) => (
            <OutlineButtonRounded name={item.name} color={item.color} />
          ))}
        </div>
      </div>

      {/* Button with icons  */}
      <ButtonImageGroup />
    </div>
  );
};

export default Buttons;
