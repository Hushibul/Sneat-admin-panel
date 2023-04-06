import CardFive from "../../assets/img/elements/5.jpg";
import CardSeven from "../../assets/img/elements/7.jpg";

const ContentTypeCard = () => {
  return (
    <div className="my-6">
      <h2 className="text-secondary text-lg font-bold">Content Type</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 mb-4 md:mr-6 md:col-span-6 lg:mr-8 lg:col-span-4">
          <p className="text-gray-400 font-bold mb-5 mt-8">Body</p>
          <div className="bg-white p-6 rounded-md shadow-md">
            <span className="text-secondary">
              This is some text within a card body. Jelly lemon drops tiramisu
              chocolate cake cotton candy soufflé oat cake sweet roll. Sugar
              plum marzipan dragée topping cheesecake chocolate bar. Danish
              muffin icing donut.
            </span>
          </div>
          <p className="text-gray-400 font-bold my-5">
            Titles, text, and links
          </p>
          <div className="p-6 bg-white rounded-md shadow-md">
            <h2 className="text-lg text-textMain font-bold">Card Title</h2>
            <p className="text-gray-400 my-3">Card Subtitle</p>
            <p className="text-secondary my-5">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="text-primary">Card Link</button>
            <button className="text-primary ml-6">Another Link</button>
          </div>
          <p className="text-gray-400 font-bold my-5">List groups</p>
          <ul className="bg-white rounded-md shadow-md">
            <li className="px-6 py-3 border-b text-textMain border-b-gray-300">
              Cras justo odio
            </li>
            <li className="px-6 py-3 border-b text-textMain border-b-gray-300">
              Dapibus ac facilisis in
            </li>
            <li className="px-6 py-3 text-textMain">Vestibulum at eros</li>
          </ul>
        </div>

        <div className="col-span-12 md:mr-6 mb-4 md:col-span-6 lg:mr-8 lg:col-span-4">
          <p className="text-gray-400 font-bold mb-5 mt-8">Images</p>

          <div className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={CardFive} alt="Card Five" />
            <span className="text-textMain px-6 py-4 block">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </span>
            <span className="text-textMain px-6 pb-5 block">
              Cookie topping caramels jujubes gingerbread. Lollipop apple pie
              cupcake candy canes cookie ice cream. Wafer chocolate bar carrot
              cake jelly-o.
            </span>
          </div>
        </div>

        <div className="col-span-12 mb-4 md:col-span-6 lg:col-span-4">
          <p className="text-gray-400 font-bold mb-5 mt-8">Kitchen Sinks</p>

          <div className="bg-white overflow-hidden rounded-md shadow-md">
            <img src={CardSeven} alt="Card Seven" />
            <div className="p-6">
              <h2 className="text-lg text-textMain font-bold">Card Title</h2>
              <p className="text-textMain my-4">
                Some quick example text to build on the card title.
              </p>

              <button className="text-primary">Card Link</button>
              <button className="text-primary ml-6">Another Link</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentTypeCard;
