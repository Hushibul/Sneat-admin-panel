import { gridCards } from "../assets/constants/constant";
import BasicCard from "../components/cards/BasicCard";
import GridCard from "../components/cards/GridCard";

const Cards = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <h2 className="text-textMain text-2xl mb-6 font-bold">Basic Card</h2>
      <BasicCard />

      <h2 className="text-textMain text-2xl my-6 font-bold">Grid Card</h2>
      <div className="grid grid-cols-12">
        {gridCards.map((item) => (
          <div className="col-span-12 mr-4 mb-4 md:col-span-6 lg:col-span-4">
            <GridCard
              image={item.image}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
