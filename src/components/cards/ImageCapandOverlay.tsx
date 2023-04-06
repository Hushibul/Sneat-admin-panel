import CardEighteen from "../../assets/img/elements/18.jpg";
import CardNineteen from "../../assets/img/elements/1.jpg";

const ImageCapandOverlay = () => {
  return (
    <div className="my-6">
      <h2 className="text-secondary text-lg font-bold my-5">
        Image Cap and Overlay
      </h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 mb-4 bg-white h-fit overflow-hidden rounded-md shadow-md md:mr-6 md:col-span-6 lg:mr-8 lg:col-span-4">
          <img src={CardEighteen} alt="Card Eighteen" />
          <div className="p-6">
            <h2 className="text-textMain text-lg font-bold">Card Title</h2>
            <p className="text-textMain my-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-gray-400 text-sm">Last updated 3 mins ago</p>
          </div>
        </div>

        <div className="col-span-12 bg-white md:mr-6 h-fit overflow-hidden rounded-md shadow-md mb-4 md:col-span-6 lg:mr-8 lg:col-span-4">
          <div className="p-6">
            <h2 className="text-textMain text-lg font-bold">Card Title</h2>
            <p className="text-textMain my-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-gray-400 text-sm">Last updated 3 mins ago</p>
          </div>
          <img src={CardNineteen} alt="Card Nineteen" />
        </div>

        <div className="col-span-12 cardBg h-96  md:mr-6 overflow-hidden rounded-md shadow-md mb-4 md:col-span-6 lg:mr-8 lg:col-span-4">
          <div className="p-6">
            <h2 className="text-textMain text-lg font-bold">Card Title</h2>
            <p className="text-white my-4">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-white text-sm">Last updated 3 mins ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCapandOverlay;
