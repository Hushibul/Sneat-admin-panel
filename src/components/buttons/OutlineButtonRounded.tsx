const OutlineButtonRounded = ({ color, name }: any) => {
  return (
    <button
      className={`px-4 py-2 rounded-3xl border text-${color} border-${color} hover:bg-${color} hover:shadow-md hover:text-white duration-300`}
    >
      {name}
    </button>
  );
};

export default OutlineButtonRounded;
