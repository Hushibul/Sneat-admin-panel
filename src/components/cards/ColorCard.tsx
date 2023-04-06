const ColorCard = ({ color, name }: any) => {
  return (
    <div className={`p-6 rounded-md shadow bg-${color}`}>
      <p className="text-white">Header</p>
      <h2 className="text-white my-4 text-lg font-bold">{name} Card Title</h2>
      <p className="text-white">
        Some quick example text to build on the card title and make up.
      </p>
    </div>
  );
};

export default ColorCard;
