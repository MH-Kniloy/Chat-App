import React from "react";
import profilePic from "../../assets/profile-pic.png";
import { VscHome } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";


const SidebarMenu = () => {
  const navigate = useNavigate()
  return (
    <div className="w-[10%] bg-violet h-[960px] rounded-[20px] flex justify-center me-[45px]">
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
          <Link to="/Login"></Link>
          <Popup
            trigger={
              <button className="button">
                <FiLogOut className=" text-white text-[50px]  cursor-pointer" />
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal bg-white shadow-custom bg-opacity-70 p-12 rounded-[10px]">
                <div className="header font-poppins font-bold ">
                  <p className="text-2xl">

                  Logout
                  </p>
                </div>
                <div className="content">
                  <p className="font-poppins font-medium text-xl">
                    Are you sure you want to logout?
                  </p>
                </div>
                <div className="actions">
                  <button
                    className="button bg-violet px-5 py-2 rounded-[10px] text-xl font-semibold font-poppins text-white me-4"
                    onClick={() => {
                      navigate("/Login");
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="button bg-violet px-5 py-2 rounded-[10px] text-xl font-semibold font-poppins text-white"
                    onClick={() => {
                      console.log("modal closed ");
                      close();
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </nav>
    </div>
  );
};

export default SidebarMenu;
