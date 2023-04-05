const BasicBadge = ({ color }: any) => {
  return (
    <span
      className={`px-2 py-1 uppercase text-white rounded text-xs mr-2 font-bold bg-${color}`}
    >
      {color}
    </span>
  );
};

export default BasicBadge;
