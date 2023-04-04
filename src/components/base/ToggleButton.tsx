import React from "react";

const ToggleButton = () => {
  return (
    <div className="mb-4">
      <input
        className="mt-[0.3rem] mr-2 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300
         before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full
          before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full 
          after:border-none after:bg-neutral-100 
          after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary 
          checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 
          checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary           
          checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer 
          focus:before:scale-100 focus:before:opacity-[0.12]  
          focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] 
          focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary
           checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100"
        type="checkbox"
        role="switch"
        id="flexSwitchCheckDefault01"
      />
    </div>
  );
};

export default ToggleButton;
