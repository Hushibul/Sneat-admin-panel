const BasicButtonRounded = ({ color, name }: any) => {
  return (
    <button
      className={`px-5 py-2 rounded-3xl text-white bg-${color} hover:translate-y-[-1px] hover:shadow-md duration-300`}
    >
      {name}
    </button>
  );
};

export default BasicButtonRounded;
