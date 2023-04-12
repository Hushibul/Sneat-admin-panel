import Popover from "../components/tooltip/Popover";
import Tooltip from "../components/tooltip/Tooltip";

const ToolTips = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <Tooltip />
      <Popover />
    </div>
  );
};

export default ToolTips;
