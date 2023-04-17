import { alertsItem } from "../assets/constants/constant";
import BasicAlert from "../components/alert/BasicAlert";
import DismissibleAlert from "../components/alert/DisassambleAlert";
import { Fragment } from "react";

const Alerts = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div className="grid grid-cols-12">
        <div className="col-span-12 px-5 rounded-md py-5 bg-white shadow md:col-span-6 md:mr-6">
          <h2 className="text-textMain  text-xl font-bold mb-5">
            Basic Alerts
          </h2>
          {alertsItem.map((item) => (
            <Fragment key={item.id}>
              <BasicAlert
                textColor={item.textColor}
                background={item.background}
              />
            </Fragment>
          ))}
        </div>
        <div className="col-span-12 shadow h-fit  px-5 rounded-md py-5 bg-white md:col-span-6">
          <div className="col-span-6">
            <h2 className="text-textMain bg-white text-xl font-bold mb-5">
              Dismissible Alerts
            </h2>

            {alertsItem.map((item) => (
              <Fragment>
                <DismissibleAlert
                  textColor={item.textColor}
                  background={item.background}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
