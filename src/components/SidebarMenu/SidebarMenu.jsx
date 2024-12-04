import React from "react";
import profilePic from "../../assets/profile-pic.png";
import { VscHome } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";


const SidebarMenu = () => {
  return (
    <div className="w-[10%] bg-violet h-[93vh] rounded-[20px] flex justify-center me-[45px] fixed">
      <nav className="flex flex-col items-center gap-[100px]">
        <div>
          <img className=" pt-10" src={profilePic} alt="" />
        </div>

        <ul className="flex flex-col">
          <li className="flex justify-center py-5 mb-7">
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet p-5 rounded-full"
                  : "text-white "
              }
            >
              <VscHome className=" text-[50px]  cursor-pointer " />
            </NavLink>
          </li>
          <li className="flex justify-center p-5 mb-7">
            <NavLink
              to="/Messages"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet p-5 rounded-full"
                  : "text-white "
              }
            >
              <AiOutlineMessage className="  text-[50px]  cursor-pointer" />
            </NavLink>
          </li>
          <li className="flex justify-center p-5 mb-7">
            <NavLink
              to="/Notifications"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet p-5 rounded-full"
                  : "text-white "
              }
            >
              <IoIosNotificationsOutline className="  text-[60px]  cursor-pointer" />
            </NavLink>
          </li>
          <li className="flex justify-center p-5 mb-7">
            <NavLink
              to="/Settings"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet p-5 rounded-full"
                  : "text-white "
              }
            >
              <IoSettingsOutline className=" text-[50px]  cursor-pointer" />
            </NavLink>
          </li>
        </ul>
        <div className="mt-0">
          <Link to="/Login">
            <FiLogOut className=" text-white text-[50px]  cursor-pointer" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu;
