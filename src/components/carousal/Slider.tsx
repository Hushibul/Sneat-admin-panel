import { useState } from "react";

const Slider = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div>
      <button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "Show" : "Hide"} Content
      </button>
      {isCollapsed && (
        <div className="block p-4 bg-gray-100">
          <p>This is the collapsed content.</p>
        </div>
      )}
    </div>
  );
};

export default Slider;
