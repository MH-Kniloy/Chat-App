import React from "react";
import profilePic from "../../assets/profile-pic.png";
import { VscHome } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Popup from "reactjs-popup";
import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";


const SidebarMenu = () => {
  // const photoURL = useSelector((state)=> state.userDetails.userCredentials.photoURL)
  const photoURL = false
  const auth = getAuth();
  const navigate = useNavigate()
  return (
    <div className="md:w-[10%] w-full bg-violet md:h-[960px] h-[80px] md:rounded-[20px] md:flex justify-center md:me-[45px] md:static fixed top-0 left-0 z-10">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Flip
      />
      <nav className="md:flex md:flex-col items-center gap-[100px] md:static relative">
        <div className="md:mt-10 md:w-[100px] w-[70px] md:h-auto h-[80px] py-3 md:py-0 ps-3 md:ps-0">
          <img
            className="rounded-full md:w-auto md:h-auto w-full h-full "
            src={photoURL ? photoURL : profilePic}
            alt="dp"
          />
        </div>

        <ul className="flex md:flex-col md:static absolute top-[20px] left-[70px]">
          <li className="flex justify-center md:items-start items-center md:py-5 md:mb-0  mx-4 md:mx-0">
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet md:p-5 p-2 rounded-full"
                  : "text-white md:p-5 p-2 rounded-full "
              }
            >
              <VscHome className=" md:text-[50px] text-2xl  cursor-pointer " />
            </NavLink>
          </li>
          <li className="flex justify-center md:items-start items-center md:p-5 md:mb-0  mx-2 md:mx-0">
            <NavLink
              to="/Messages"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet md:p-5 p-2 rounded-full"
                  : "text-white md:p-5 p-2 rounded-full"
              }
            >
              <AiOutlineMessage className="  md:text-[50px] text-2xl  cursor-pointer" />
            </NavLink>
          </li>
          <li className="flex justify-center md:items-start items-center md:p-5 md:mb-0  mx-2 md:mx-0">
            <NavLink
              to="/Notifications"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet md:p-5 p-2 rounded-full"
                  : "text-white md:p-5 p-2 rounded-full"
              }
            >
              <IoIosNotificationsOutline className="  md:text-[60px] text-[30px]  cursor-pointer" />
            </NavLink>
          </li>
          <li className="flex justify-center md:items-start items-center md:p-5 md:mb-0 mx-2 md:mx-0">
            <NavLink
              to="/Settings"
              className={({ isActive }) =>
                isActive
                  ? "bg-white text-violet md:p-5 p-2 rounded-full"
                  : "text-white md:p-5 p-2 rounded-full"
              }
            >
              <IoSettingsOutline className=" md:text-[50px] text-2xl  cursor-pointer" />
            </NavLink>
          </li>
        </ul>
        <div className="mt-0">
          <Link to="/Login"></Link>
          <Popup
            trigger={
              <button className="button md:static absolute md:top-0 md:right-0 top-[27px] right-4">
                <FiLogOut className=" text-white md:text-[50px] text-2xl  cursor-pointer" />
              </button>
            }
            modal
            nested
          >
            {(close) => (
              <div className="modal bg-white shadow-custom bg-opacity-70 p-12 rounded-[10px]">
                <div className="header font-poppins font-bold ">
                  <p className="text-2xl">Logout</p>
                </div>
                <div className="content">
                  <p className="font-poppins font-medium text-xl">
                    Are you sure you want to logout?
                  </p>
                </div>
                <div className="actions">
                  <button
                    className="button bg-violet px-5 py-2 rounded-[10px] text-xl font-semibold font-poppins cursor-pointer text-white me-4"
                    onClick={() => {
                      signOut(auth)
                        .then(() => {
                          localStorage.clear();
                          toast.success("Loguot Successfull");
                          setTimeout(() => {
                            navigate("/Login");
                          }, 4000);
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                    }}
                  >
                    Yes
                  </button>
                  <button
                    className="button bg-violet px-5 py-2 rounded-[10px] text-xl font-semibold font-poppins cursor-pointer text-white"
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
