import { FiSearch, FiMenu } from "react-icons/fi";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import {
  MdManageAccounts,
  MdOutlineKeyboardArrowRight,
  MdPowerSettingsNew,
} from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { BsCreditCard2Back, BsBoxSeam } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { HiOutlineCube } from "react-icons/hi";
import { FiUnlock } from "react-icons/fi";

import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AvatarOne from "../../assets/img/avatars/1.png";
import BrandLogo from "../../assets/img/icons/brands/logo.svg";

import {
  accountsetting,
  authentications,
  misc,
  userInterface,
} from "../../assets/constants/constant";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const [openAccount, setOpenAccount] = useState<boolean>(false);
  const [openAuth, setOpenAuth] = useState<boolean>(false);
  const [openMisc, setOpenMisc] = useState<boolean>(false);
  const [openUI, setOpenUI] = useState<boolean>(false);

  const { loginData } = useContext(AuthContext);

  return (
    <>
      <div className="bg-white px-6 rounded-lg py-4 mx-2 mt-4 flex justify-between items-center md:m-8">
        <div className="flex items-center gap-3">
          <FiMenu
            onClick={() => setOpenMenu(true)}
            className="block text-textMain text-2xl cursor-pointer xl:hidden"
          />
          <FiSearch className="text-textMain text-2xl" />
          <input
            type="text"
            className="bg-tranparent pl-3 w-full outline-0 focus:ouline-0"
            placeholder="Search"
          />
        </div>
        <img
          onClick={() => setOpenProfile(!openProfile)}
          className="w-10 h-10 rounded-full cursor-pointer translate-x-[-20px] md:translate-x-0"
          src={AvatarOne}
          alt="avatar"
        />

        <div
          className={`fixed top-24 right-8 w-52 bg-white rounded-md shadow-lg ${
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
            <NavLink
              className="py-3 flex items-center text-textMain gap-3"
              to={"#"}
            >
              <CgProfile />
              My Profile
            </NavLink>
            <NavLink
              className="py-3 flex items-center text-textMain gap-3"
              to={"#"}
            >
              <AiOutlineSetting />
              Settings
            </NavLink>
            <NavLink
              className="py-3 flex items-center text-textMain gap-3"
              to={"#"}
            >
              <BsCreditCard2Back />
              Billling
            </NavLink>
            <NavLink
              className="pb-3 pt-5 border-t border-t-gray-300 flex items-center text-textMain gap-3"
              to={"/login"}
            >
              <MdPowerSettingsNew />
              Log Out
            </NavLink>
          </div>
        </div>
      </div>

      {/* Navmenu  */}
      <div
        onBlur={() => setOpenMenu(false)}
        className={`bg-white w-64 fixed top-0 left-0 h-screen pl-8 z-30 overflow-y-scroll transition-all duration-150 shadow-lg translate-x-[-300px] xl:shadow-none xl:translate-x-0 ${
          openMenu ? "translate-x-[0px]" : "translate-x-[-300px]"
        }  `}
      >
        <div className="flex items-center my-8">
          <img className="w-6 h-10" src={BrandLogo} alt="BrandLogo" />
          <h2 className="text-2xl font-extrabold text-textMain">Sneat</h2>
          <div
            onClick={() => setOpenMenu(false)}
            className="bg-white rounded-full z-40 fixed top-6 right-0"
          >
            <IoIosArrowDropleftCircle
              className="text-primary cursor-pointer xl:hidden"
              size={35}
            />
          </div>
        </div>

        {/* DashBoard  */}
        <NavLink
          className="text-textMain flex items-center gap-3 font-bold"
          to="/dashboard"
        >
          <AiOutlineHome size={20} className="inline" /> Dashboard
        </NavLink>

        <div className="mt-4">
          <span className="text-textMain uppercase text-sm">Pages</span>

          {/* Account Settings  */}
          <div
            onClick={() => setOpenAccount(!openAccount)}
            className="text-textMain mt-4 flex items-center gap-3 font-bold group cursor-pointer"
          >
            <MdManageAccounts size={20} /> <span>Accounts Settings</span>{" "}
            <div className={openAccount ? "rotate-90" : "rotate-0"}>
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
          </div>
          <ul
            className={`bg-white list-disc rounded-md text-textMain pl-10 font-bold ${
              openAccount ? "block" : "hidden"
            }`}
          >
            {accountsetting.map((item) => (
              <li key={item.id} className="mt-4">
                <NavLink className="" to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Authentication  */}
          <div
            onClick={() => setOpenAuth(!openAuth)}
            className="text-textMain mt-4 flex items-center gap-3 font-bold group cursor-pointer"
          >
            <FiUnlock size={20} /> <span>Authentication</span>{" "}
            <div className="group-focus:rotate-90">
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
          </div>
          <ul
            className={`bg-white list-disc rounded-md text-textMain pl-10 font-bold ${
              openAuth ? "block" : "hidden"
            }`}
          >
            {authentications.map((item) => (
              <li key={item.id} className="mt-4">
                <NavLink className="" to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Misc  */}
        <div
          onClick={() => setOpenMisc(!openMisc)}
          className="text-textMain mt-4 flex items-center gap-3 font-bold group cursor-pointer"
        >
          <HiOutlineCube size={20} /> <span>Misc</span>{" "}
          <div className={openMisc ? "rotate-90" : "rotate-0"}>
            <MdOutlineKeyboardArrowRight size={20} />
          </div>
        </div>
        <ul
          className={`bg-white list-disc rounded-md text-textMain pl-10 font-bold ${
            openMisc ? "block" : "hidden"
          }`}
        >
          {misc.map((item) => (
            <li key={item.id} className="mt-4">
              <NavLink className="" to={item.path}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <span className="text-textMain uppercase text-sm">Components</span>

          {/* User Interface  */}
          <div
            onClick={() => setOpenUI(!openUI)}
            className="text-textMain mt-4 flex items-center gap-3 font-bold group cursor-pointer"
          >
            <BsBoxSeam size={20} /> <span>User Interface</span>{" "}
            <div className={openUI ? "rotate-90" : "rotate-0"}>
              <MdOutlineKeyboardArrowRight size={20} />
            </div>
          </div>
          <ul
            className={`bg-white list-disc rounded-md text-textMain pl-10 font-bold ${
              openUI ? "block" : "hidden"
            }`}
          >
            {userInterface.map((item) => (
              <li key={item.id} className="mt-4">
                <NavLink className="" to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        onClick={() => setOpenMenu(false)}
        className={`absolute top-0 left-0 bottom-0 right-0 z-20 cursor-pointer opacity-25 bg-gray-400 ${
          openMenu ? "block" : "hidden"
        }`}
      />
    </>
  );
};

export default Navbar;
