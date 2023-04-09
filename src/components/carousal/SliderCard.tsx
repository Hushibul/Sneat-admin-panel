const SliderCard = ({ image, title, content, dark = false }: any) => {
  return (
    <div className="relative">
      <img src={image} alt="CardImage" />

      <div className="absolute bottom-20 left-[25%]">
        <h3
          className={`text-2xl text-center ${
            dark ? "text-dark" : "text-white"
          }`}
        >
          {title}
        </h3>
        <p className={`text-center ${dark ? "text-dark" : "text-white"}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default SliderCard;
