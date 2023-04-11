import BasicPills from "../components/tabs/BasicPills";
import BasicTab from "../components/tabs/BasicTab";
import FilledPills from "../components/tabs/FilledPills";
import FilledTab from "../components/tabs/FilledTab";

const Tabs = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <h2 className="text-xl text-textMain mb-8">Tabs</h2>
      <p className="text-gray-400">Basic</p>

      <div className="grid grid-cols-12 mt-3 md:space-x-6">
        <div className="col-span-12 md:col-span-6">
          <BasicTab />
        </div>
        <div className="col-span-12 md:col-span-6">
          <FilledTab />
        </div>
      </div>

      <h2 className="text-xl text-textMain mt-16 mb-8">Tabs</h2>
      <p className="text-gray-400">Pills</p>

      <div className="grid grid-cols-12 mt-3 md:space-x-6">
        <div className="col-span-12 md:col-span-6">
          <BasicPills />
        </div>
        <div className="col-span-12 md:col-span-6">
          <FilledPills />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
