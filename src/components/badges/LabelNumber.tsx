const LabelNumber = ({ background, textColor, id }: any) => {
  return (
    <span
      className={`px-2 py-1 mb-5 uppercase font-bold text-xs mr-3 bg-${background}-100 text-${textColor} rounded`}
    >
      {id}
    </span>
  );
};

export default LabelNumber;
