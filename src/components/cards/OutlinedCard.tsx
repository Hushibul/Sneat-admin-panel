const OutlinedCard = ({ color, name }: any) => {
  return (
    <div className={`p-6 rounded-md shadow border border-${color}`}>
      <h2 className="text-textMain text-lg my-4 font-bold">
        {name} Card Title
      </h2>
      <p className="text-textMain">
        Some quick example text to build on the card title and make up.
      </p>
    </div>
  );
};

export default OutlinedCard;
