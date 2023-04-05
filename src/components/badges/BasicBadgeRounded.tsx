const BasicBadgeRounded = ({ color }: any) => {
  return (
    <span
      className={`px-2 py-1 uppercase text-white rounded-2xl text-xs mr-2 font-bold bg-${color}`}
    >
      {color}
    </span>
  );
};

export default BasicBadgeRounded;
