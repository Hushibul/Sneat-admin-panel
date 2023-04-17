import { Fragment } from "react";
import { alertsItem, buttons } from "../assets/constants/constant";
import BadgeNumber from "../components/badges/BadgeNumber";
import BadgeNumberRounded from "../components/badges/BadgeNumberRounded";
import BasicBadge from "../components/badges/BasicBadge";
import BasicBadgeRounded from "../components/badges/BasicBadgeRounded";
import LabelBadgesRounded from "../components/badges/LabelBadegesRounded";
import LabelBadges from "../components/badges/LabelBadges";
import LabelNumber from "../components/badges/LabelNumber";
import LabelNumberRounded from "../components/badges/LabelNumberRounded";

const Badges = () => {
  return (
    <div className="mx-2 md:mx-6 xl:ml-5">
      <div className="grid grid-cols-12">
        <div className="col-span-12 px-5 rounded-md py-5 bg-white shadow md:col-span-6 md:mr-6">
          <h2 className="text-textMain  text-xl font-bold mb-5">
            Basic Badges
          </h2>
          <div className="border-b border-b-gray-400 pb-5">
            <p className="text-gray-400 text-sm mb-3 font-bold">Defaults</p>
            <div className="flex flex-wrap gap-2">
              {buttons.map((item) => (
                <Fragment key={item.id}>
                  <BasicBadge color={item.color} />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="pb-5">
            <p className="text-gray-400 text-sm my-3 font-bold">Pills</p>
            <div className="flex flex-wrap gap-2">
              {" "}
              {buttons.map((item) => (
                <Fragment key={item.id}>
                  <BasicBadgeRounded color={item.color} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-12 shadow h-fit  px-5 rounded-md py-5 bg-white md:col-span-6">
          <div className="col-span-6">
            <h2 className="text-textMain bg-white text-xl font-bold mb-5">
              Label Badges
            </h2>
            <div className="border-b border-b-gray-400 pb-5">
              <p className="text-gray-400 text-sm mb-3 font-bold">
                Label Defaults
              </p>
              <div className="flex flex-wrap gap-2">
                {alertsItem.map((item) => (
                  <Fragment key={item.id}>
                    <LabelBadges
                      textColor={item.textColor}
                      background={item.background}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="pb-5">
              <p className="text-gray-400 text-sm my-3 font-bold">
                Label Pills
              </p>
              <div className="flex flex-wrap gap-2">
                {alertsItem.map((item) => (
                  <Fragment key={item.id}>
                    <LabelBadgesRounded
                      textColor={item.textColor}
                      background={item.background}
                    />
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 bg-white mt-5 p-5">
        <div className="col-span-12 md:col-span-6">
          <h2 className="text-textMain  text-xl font-bold mb-5">
            Basic Badges
          </h2>

          <p className="text-gray-400 text-sm mb-3 font-bold">Defaults</p>
          <button className="bg-primary px-4 py-2 text-white rounded hover:translate-y-[-1px]">
            Text{" "}
            <span className="bg-white py-1 px-2 text-sm rounded text-primary">
              4
            </span>
          </button>

          <button className="bg-primary px-4 py-2 text-white rounded hover:translate-y-[-1px] ml-3">
            Text{" "}
            <span className="bg-secondary py-1 px-2 text-sm rounded-full text-white">
              4
            </span>
          </button>
        </div>
        <div className="col-span-12 md:col-span-6 pt-10">
          <p className="text-gray-400 text-sm mb-3 font-bold">Defaults</p>

          <button className="bg-transparent border border-primary px-4 py-2 text-primary rounded hover:bg-primary hover:text-white">
            Text{" "}
            <span className="bg-white py-1 px-2 text-sm rounded text-primary">
              4
            </span>
          </button>
          <button className="bg-transparent border border-primary px-4 py-2 text-primary rounded hover:bg-primary hover:text-white ml-3">
            Text{" "}
            <span className="bg-secondary py-1 px-2 text-sm rounded-full text-white">
              4
            </span>
          </button>
        </div>
        <div className="col-span-4"></div>
      </div>

      <div className="grid grid-cols-12 mt-5">
        <div className="col-span-12 px-5 rounded-md py-5 bg-white shadow md:col-span-6">
          <h2 className="text-textMain  text-xl  font-bold mb-5">
            Badge Circle & Square Style
          </h2>
          <h2 className="text-textMain font-bold mb-5">Basic</h2>
          <div className="mb-2">
            <p className="text-gray-400 text-sm mb-3 font-bold">Defaults</p>
            {buttons.map((item) => (
              <BadgeNumber color={item.color} id={item.id} />
            ))}
          </div>
          <div className="pb-5">
            {buttons.map((item) => (
              <BadgeNumberRounded color={item.color} id={item.id} />
            ))}
          </div>
        </div>
        <div className="col-span-12 shadow h-fit  px-5 rounded-md py-5 bg-white md:col-span-6">
          <div className="col-span-6">
            <h2 className="text-textMain bg-white md:pt-10 font-bold mb-5">
              Label
            </h2>
            <div className="border-b border-b-gray-400 pb-5">
              <p className="text-gray-400 text-sm mb-3 font-bold">Defaults</p>
              {alertsItem.map((item) => (
                <LabelNumber
                  id={item.id}
                  textColor={item.textColor}
                  background={item.background}
                />
              ))}
            </div>
            <div className="pb-8">
              {alertsItem.map((item) => (
                <LabelNumberRounded
                  id={item.id}
                  textColor={item.textColor}
                  background={item.background}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badges;
