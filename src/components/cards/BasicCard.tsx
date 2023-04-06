import OrangeCard from "../../assets/img/elements/2.jpg";
import ShoeCard from "../../assets/img/elements/4.jpg";
import DounutCard from "../../assets/img/elements/13.jpg";

const BasicCard = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12 shadow-md rounded-md overflow-hidden md:col-span-6 lg:col-span-4">
        <img src={OrangeCard} alt="OrangerCard" />

        <div className="p-6">
          <h3 className="text-textMain text-lg font-bold">Card Title</h3>

          <p className="text-textMain my-3">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <button className="px-4 py-2 rounded-md  border text-primary border-primary">
            Go somewhere
          </button>
        </div>
      </div>
      <div className="col-span-12 shadow-md md:ml-4 lg:ml-8 rounded-md overflow-hidden md:col-span-6 lg:col-span-4">
        <div className="p-6">
          <h3 className="text-textMain text-lg font-bold">Card Title</h3>

          <p className="text-gray-400 my-1 font-bold">Support and Subtitle</p>
        </div>

        <img src={DounutCard} alt="DounutCard" />

        <p className="px-6 py-3 text-textMain">
          Bear claw sesame snaps gummies chocolate.
        </p>
        <div className="flex gap-3 items-center px-6">
          <button className="py-2 font-semibold  text-primary">
            Card Link
          </button>
          <button className="py-2 font-semibold  text-primary">
            Another Link
          </button>
        </div>
      </div>
      <div className="col-span-12 shadow-md md:mt-4 lg:ml-8 rounded-md overflow-hidden md:col-span-6 lg:col-span-4">
        <div className="p-6">
          <h3 className="text-textMain text-lg font-bold">Card Title</h3>

          <p className="text-gray-400 my-1 font-bold">Support and Subtitle</p>
        </div>

        <div className="mx-4">
          <img src={ShoeCard} alt="DounutCard" />
        </div>

        <p className="ml-4 text-textMain my-3">
          Bear claw sesame snaps gummies chocolate.
        </p>
        <div className="flex gap-3 items-center px-4">
          <button className=" py-2 font-semibold  text-primary">
            Card Link
          </button>
          <button className=" py-2 font-semibold  text-primary">
            Another Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicCard;
