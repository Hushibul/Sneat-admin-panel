import CardTwelve from "../../assets/img/elements/12.jpg";
import CardSeventeen from "../../assets/img/elements/17.jpg";

const HorizontalCard = () => {
  return (
    <div className="my-5">
      <h2 className="text-secondary text-lg font-bold my-5">Horizontal</h2>

      <div className="grid grid-cols-12">
        <div className="col-span-12 bg-white rounded-md shadow-md overflow-hidden md:mr-6 lg:mr-8 md:col-span-6">
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <img className="h-auto" src={CardTwelve} alt="Card Twelve" />
            </div>
            <div className="col-span-8 p-6">
              <h2 className="text-textMain text-lg font-bold">Card Title</h2>
              <p className="text-textMain my-2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-400 text-sm">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>

        <div className="col-span-12 bg-white rounded-md shadow-md overflow-hidden md:mr-6 lg:mr-8 md:col-span-6">
          <div className="grid grid-cols-12">
            <div className="col-span-8 p-6">
              <h2 className="text-textMain text-lg font-bold">Card Title</h2>
              <p className="text-textMain my-2">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="text-gray-400 text-sm">Last updated 3 mins ago</p>
            </div>
            <div className="col-span-4">
              <img className="h-auto" src={CardSeventeen} alt="Card Twelve" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;
