const BadgeNumberRounded = ({ color, id }: any) => {
  return (
    <span
      className={`px-2 py-1 uppercase text-white rounded-full text-xs mr-2 font-bold bg-${color}`}
    >
      {id}
    </span>
  );
};

export default BadgeNumberRounded;
