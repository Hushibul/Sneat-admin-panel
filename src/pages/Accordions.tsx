import Accordion from "../components/accordion/Accordion";

import { accordionItems } from "../assets/constants/constant";

const Accordions = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <h2 className="text-slate-700 text-xl font-bold">Accordion</h2>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 md:mr-6">
          <p className="my-3 text-textMain text-xs font-bold">
            Basic Accordion
          </p>
          <Accordion items={accordionItems} isIcon={true} />
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="col-span-6">
            <p className="my-3 text-textMain text-xs font-bold">
              Accordion without icons
            </p>
            <Accordion items={accordionItems} isIcon={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
