import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { MdManageAccounts, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

import AvatarOne from "../../assets/img/avatars/1.png";
import BrandLogo from "../../assets/img/icons/brands/logo.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  // const [openAccounts, setOpenAccounts] = useState(false);

  return (
    <>
      <div className="bg-white px-6 rounded-lg py-4 m-8 mt-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FiMenu
            onClick={() => setOpenMenu(true)}
            className="block text-textMain text-2xl xl:hidden"
          />
          <FiSearch className="text-textMain text-2xl" />
          <input type="py-6 bg-transparent w-full" placeholder="Search..." />
        </div>
        <img className="w-10 h-10 rounded-full" src={AvatarOne} alt="avatar" />
      </div>
      <div
        className={`${
          openMenu ? "translate-x-0" : "translate-x-[-300px]"
        }  bg-white w-64 absolute top-0 left-0 h-screen pl-8 overflow-y-scoll transition-all duration-150 translate-x-[-300px] xl:translate-x-0`}
      >
        <div className="flex items-center my-8">
          <img className="w-6 h-10" src={BrandLogo} alt="BrandLogo" />
          <h2 className="text-2xl font-extrabold text-textMain">Sneat</h2>
          <div
            onClick={() => setOpenMenu(false)}
            className="bg-white rounded-full absolute top-6 right-[-10px]"
          >
            <IoIosArrowDropleftCircle className="text-primary" size={35} />
          </div>
        </div>

        <Link
          className=" text-textMain flex items-center gap-3 font-bold"
          to="/dashboard"
        >
          <AiOutlineHome size={20} className="inline" /> Dashboard
        </Link>

        <div className="mt-4">
          <span className="text-textMain uppercase text-sm ">Pages</span>
          <div className="text-textMain mt-4 flex items-center gap-3 font-bold group cursor-pointer">
            <MdManageAccounts size={20} /> <span>Accounts Settings</span>{" "}
            <div className="group-focus:rotate-90">
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
          </div>
          <ul className="text-textMain font-bold pl-8">
            <li className="mt-4">
              <Link className="list-disc" to="/account-settings-account">
                Account
              </Link>
            </li>
            <li className="mt-4">
              <Link className="list-disc" to="/account-setting-notifications">
                Notifications
              </Link>
            </li>
            <li className="mt-4">
              <Link className="list-disc" to="/account-setting-connections">
                Connections
              </Link>
            </li>
          </ul>
        </div>

        <li className="text-textMain flex items-center gap-4 font-bold"></li>
      </div>
    </>
  );
};

export default Navbar;
