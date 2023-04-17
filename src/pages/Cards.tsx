import { cardsColor, gridCards } from "../assets/constants/constant";
import BasicCard from "../components/cards/BasicCard";
import ColorCard from "../components/cards/ColorCard";
import ContentTypeCard from "../components/cards/ContentTypeCard";
import GridCard from "../components/cards/GridCard";
import HeaderandFooterCard from "../components/cards/HeaderandFooterCard";
import HorizontalCard from "../components/cards/HorizontalCard";
import ImageCapandOverlay from "../components/cards/ImageCapandOverlay";
import OutlinedCard from "../components/cards/OutlinedCard";

const Cards = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <h2 className="text-textMain text-2xl mb-6 font-bold">Basic Card</h2>
      <BasicCard />

      <ContentTypeCard />

      <HeaderandFooterCard />

      <ImageCapandOverlay />

      <HorizontalCard />

      <h2 className="text-secondary my-6 text-lg font-bold">Styled Variant</h2>
      <div className="grid grid-cols-12">
        {cardsColor.map((item) => (
          <div
            key={item.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 mb-6 md:mr-6"
          >
            <ColorCard color={item.color} name={item.name} />
          </div>
        ))}
        {cardsColor.map((item) => (
          <div
            key={item.id}
            className="col-span-12 md:col-span-6 lg:col-span-4 mb-6 md:mr-6"
          >
            <OutlinedCard color={item.color} name={item.name} />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-12">
        {gridCards.map((item) => (
          <div className="col-span-12 md:mb-6 md:mr-6 md:col-span-6 lg:mr-8 lg:col-span-4">
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
