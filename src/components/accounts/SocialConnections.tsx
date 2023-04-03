import Google from "../../assets/img/icons/brands/google.png";
import Slack from "../../assets/img/icons/brands/slack.png";
import Github from "../../assets/img/icons/brands/github.png";
import Malichimp from "../../assets/img/icons/brands/mailchimp.png";
import Asana from "../../assets/img/icons/brands/asana.png";

import Facebook from "../../assets/img/icons/brands/facebook.png";
import Twitter from "../../assets/img/icons/brands/twitter.png";
import Instagram from "../../assets/img/icons/brands/instagram.png";
import Dribble from "../../assets/img/icons/brands/dribbble.png";
import Behance from "../../assets/img/icons/brands/behance.png";
import ToggleButton from "../base/ToggleButton";

import { AiFillDelete } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

const connectAccounts = [
  {
    id: 1,
    name: "Google",
    subtitle: "Calender and contacts",
    img: Google,
  },
  {
    id: 2,
    name: "Slack",
    subtitle: "Communication",
    img: Slack,
  },
  {
    id: 3,
    name: "Github",
    subtitle: "Manage your git repositories",
    img: Github,
  },
  {
    id: 4,
    name: "Malichimp",
    subtitle: "Email marketing service",
    img: Malichimp,
  },
  {
    id: 5,
    name: "Asana",
    subtitle: "Communication",
    img: Asana,
  },
];

const socialAccouts = [
  {
    id: 1,
    name: "Facebook",
    img: Facebook,
    isConnected: false,
  },
  {
    id: 2,
    name: "Twitter",
    img: Twitter,
    isConnected: true,
  },
  {
    id: 3,
    name: "Instagram",
    img: Instagram,
    isConnected: true,
  },
  {
    id: 4,
    name: "Dribble",
    img: Dribble,
    isConnected: false,
  },
  {
    id: 5,
    name: "Behance",
    img: Behance,
    isConnected: false,
  },
];

const SocialConnections = () => {
  return (
    <div className="mt-5 grid grid-cols-12 mb-8">
      <div className="col-span-12 bg-white text-textMain rounded-lg shadow-md p-6 md:col-span-6 md:mr-4">
        <h3 className="font-bold text-lg">Connected Accounts</h3>
        <p className="my-4">
          Display content from your connected accounts on your site
        </p>

        {connectAccounts.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-3">
            <div className="flex gap-3 items-center">
              <img
                className="inline-block w-8 h-8"
                src={item.img}
                alt="Google"
              />
              <div className="text-textMain">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.subtitle}</p>
              </div>
            </div>
            <ToggleButton />
          </div>
        ))}
      </div>
      <div className="col-span-12 mt-4 bg-white rounded-lg shadow-md text-textMain p-6 md:col-span-6  md:mt-0">
        <h3 className="font-bold text-lg">Social Accounts</h3>
        <p className="my-4">
          Display content from your connected accounts on your site
        </p>

        {socialAccouts.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-3">
            <div className="flex gap-3 items-center">
              <img
                className="inline-block w-8 h-8"
                src={item.img}
                alt="Items"
              />
              <div className="text-textMain">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-400">
                  {item.isConnected ? "@ThemeSelection" : "Not connected"}
                </p>
              </div>
            </div>
            {item.isConnected ? (
              <div className="p-2 border border-danger rounded">
                <AiFillDelete size={25} className="text-danger" />
              </div>
            ) : (
              <div className="p-2 border border-primary rounded">
                <BiLink className="text-primary" size={25} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialConnections;
