const GridCard = ({ image, title, content }: any) => {
  return (
    <div className="overflow-hidden rounded-md shadow-md">
      <img src={image} alt={title} />

      <div className="p-6">
        <h3 className="text-lg text-textMain font-bold my-3">{title}</h3>
        <p className="text-textMain pb-3">{content}</p>
      </div>
    </div>
  );
};

export default GridCard;
