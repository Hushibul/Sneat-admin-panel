import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  const tabOptions = [
    { id: 1, name: "Account", path: "/account" },
    {
      id: 2,
      name: "Notification",
      path: "/notification",
    },
    {
      id: 3,
      name: "Connection",
      path: "/connection",
    },
  ];

  console.log(openTab);
  return (
    <div>
      <div className="container mx-auto">
        <div className="max-w-xl">
          <ul className="flex flex-col md:space-x-2 md:flex-row md:items-center">
            {tabOptions.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.path}
                  onClick={() => setOpenTab(item.id)}
                  className={`flex items-center gap-2 px-5 py-2 mt-3 text-textMain bg-white rounded shadow active:bg-primary active:text-white active:font-bold md:mt-0`}
                >
                  {item.id === 1 ? (
                    <IoMdContact />
                  ) : item.id === 2 ? (
                    <FaRegBell />
                  ) : (
                    <AiOutlineLink />
                  )}{" "}
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
