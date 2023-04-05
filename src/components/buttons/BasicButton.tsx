const BasicButton = ({ color, name }: any) => {
  console.log(color);
  return (
    <button
      className={`px-4 py-2 rounded text-white bg-${color} hover:translate-y-[-1px] hover:shadow-md duration-300`}
    >
      {name}
    </button>
  );
};

export default BasicButton;
