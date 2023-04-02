import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import {
  MdManageAccounts,
  MdOutlineKeyboardArrowRight,
  MdPowerSettingsNew,
} from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { BsCreditCard2Back } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import AvatarOne from "../../assets/img/avatars/1.png";
import BrandLogo from "../../assets/img/icons/brands/logo.svg";

import {
  accountsetting,
  authentications,
  misc,
} from "../../assets/constants/constant";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openAccount, setOpenAccount] = useState<boolean>(false);

  const { loginData } = useContext(AuthContext);

  // const [openAccounts, setOpenAccounts] = useState(false);

  return (
    <>
      <div className="bg-white px-6 rounded-lg py-4 m-8 mt-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <FiMenu
            onClick={() => setOpenMenu(true)}
            className="block text-textMain text-2xl cursor-pointer xl:hidden"
          />
          <FiSearch className="text-textMain text-2xl" />
          <input
            type="py-6 bg-transparent"
            onFocus={() => console.log("Focused")}
            onBlur={() => console.log("Blur")}
            placeholder="Search..."
          />
        </div>
        <img
          onClick={() => setOpenProfile(!openProfile)}
          className="w-10 h-10 rounded-full cursor-pointer"
          src={AvatarOne}
          alt="avatar"
        />

        <div
          onBlur={() => setOpenProfile(false)}
          className={`fixed top-20 right-8 w-52 bg-white rounded-md shadow-lg ${
            openProfile ? "block" : "hidden"
          }`}
        >
          <div className="flex items-center border-b border-b-gray-300 gap-4 py-4">
            <img
              className="w-10 ml-4 h-10 rounded-full"
              src={AvatarOne}
              alt="avatar"
            />
            <div>
              <h3 className="capitalize text-textMain font-bold">
                {loginData.name}
              </h3>
              <p className="text-textMain capitalize text-sm font-light py-1">
                {loginData.type}
              </p>
            </div>
          </div>
          <div className="pl-4">
            <Link
              className="py-3 flex items-center text-textMain gap-3"
              to={"#"}
            >
              <CgProfile />
              My Profile
            </Link>
            <Link
              className="py-3 flex items-center text-textMain gap-3"
              to={"#"}
            >
              <AiOutlineSetting />
              Settings
            </Link>
            <Link
              className="py-3 flex items-center text-textMain gap-3"
              to={"#"}
            >
              <BsCreditCard2Back />
              Billling
            </Link>
            <Link
              className="pb-3 pt-5 border-t border-t-gray-300 flex items-center text-textMain gap-3"
              to={"#"}
            >
              <MdPowerSettingsNew />
              Log Out
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`bg-white w-64 fixed top-0 left-0 h-screen pl-8 overflow-y-scoll transition-all duration-150 translate-x-[-300px] xl:translate-x-0 ${
          openMenu ? "translate-x-[0px]" : "translate-x-[-300px]"
        }  `}
      >
        <div className="flex items-center my-8">
          <img className="w-6 h-10" src={BrandLogo} alt="BrandLogo" />
          <h2 className="text-2xl font-extrabold text-textMain">Sneat</h2>
          <div
            onClick={() => setOpenMenu(false)}
            className="bg-white rounded-full absolute top-6 right-[-10px]"
          >
            <IoIosArrowDropleftCircle
              className="text-primary xl:hidden"
              size={35}
            />
          </div>
        </div>

        <Link
          className=" text-textMain flex items-center gap-3 font-bold"
          to="/dashboard"
        >
          <AiOutlineHome size={20} className="inline" /> Dashboard
        </Link>

        <div className="mt-4">
          <span className="text-textMain uppercase text-sm">Pages</span>
          <div
            onClick={() => setOpenAccount(!openAccount)}
            className="text-textMain mt-4 flex items-center gap-3 font-bold group cursor-pointer"
          >
            <MdManageAccounts size={20} /> <span>Accounts Settings</span>{" "}
            <div className="group-hover:rotate-90">
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
          </div>
          <ul
            className={` text-textMain font-bold pl-8 ${openAccount} ? "block": "hidden"`}
          >
            {accountsetting.map((item) => (
              <li key={item.id} className="mt-4">
                <Link className="list-disc" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-textMain mt-4 flex items-center gap-3 font-bold group cursor-pointer">
            <MdManageAccounts size={20} /> <span>Authentication</span>{" "}
            <div className="group-focus:rotate-90">
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
          </div>
          <ul className="text-textMain font-bold pl-8">
            {authentications.map((item) => (
              <li key={item.id} className="mt-4">
                <Link className="list-disc" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <li className="text-textMain flex items-center gap-4 font-bold"></li>
      </div>
    </>
  );
};

export default Navbar;
