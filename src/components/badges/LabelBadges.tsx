import React from "react";

const LabelBadges = ({ background, textColor }: any) => {
  return (
    <span
      className={`px-2 py-1 uppercase font-bold text-xs mr-3 bg-${background}-100 text-${textColor} rounded`}
    >
      {textColor}
    </span>
  );
};

export default LabelBadges;
