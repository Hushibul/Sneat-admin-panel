const LabelBadgesRounded = ({ background, textColor }: any) => {
  return (
    <span
      className={`px-2 py-1 uppercase font-bold text-xs mr-3 bg-${background}-100 text-${textColor} rounded-2xl`}
    >
      {textColor}
    </span>
  );
};

export default LabelBadgesRounded;
