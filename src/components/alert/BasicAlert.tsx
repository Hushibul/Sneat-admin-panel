const BasicAlert = ({ textColor, background }: any) => {
  return (
    <div
      className={`px-4 mb-5 py-3 bg-${background}-100 text-${textColor} rounded`}
    >
      <span>This is a {textColor} alert — check it out!</span>
    </div>
  );
};

export default BasicAlert;
