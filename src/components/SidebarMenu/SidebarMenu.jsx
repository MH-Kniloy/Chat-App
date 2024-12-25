import React, { createRef, useEffect, useState } from "react";
import profilePic from "../../assets/profile-pic.png";
import { SlCloudUpload } from "react-icons/sl";
import { GiCrossedSwords } from "react-icons/gi";
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
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

const SidebarMenu = () => {
  const user = useSelector(
    (user) => user.userDetails.userCredentials
  );
  const auth = getAuth();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleUpload = () => {
    setShow(true);
  };

  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();
  const onChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
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
      <nav className="md:flex md:flex-col items-center gap-[60px] md:static relative">
        <div
          onClick={handleUpload}
          className="md:mt-10 md:w-[100px] w-[70px] md:h-auto h-[80px] py-3 md:py-0 ps-3 md:ps-0 relative group cursor-pointer mb-[80px]"
        >
          {image ? (
            <div>
              <div className="img-preview w-[100px] h-[100px] rounded-full" />
            </div>
          ) : (
            <img
              className="rounded-full md:w-auto md:h-auto w-full h-full z-10"
              src={user.photoURL || profilePic}
              alt="dp"
            />
          )}
          {/* <img
            className="rounded-full md:w-auto md:h-auto w-full h-full z-10"
            src={photoURL || profilePic}
            alt="dp"
          />
          <div>
            <div className="img-preview w-[100px] h-[100px] rounded-full" />
          </div> */}
          <SlCloudUpload className="text-4xl font-bold opacity-0 group-hover:opacity-100 text-white absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute left-0 top-0 md:w-[100px] w-[70px] md:h-[100px] h-[80px] rounded-full z-10 group-hover:bg-black group-hover:opacity-50 "></div>
        </div>
        <p className="text-white w-[9.5%] text-[18px] font-bold font-opnesans absolute top-[185px] left-[30px] mb-[400px] text-center md:block hidden">
          {user.displayName}
        </p>
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

      {show ? (
        <div className="bg-darkBlueOne text-white font-nunito p-5 h-auto w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 transition-transform duration-500 ease-in-out rounded-md">
          <h3 className="text-5xl text-center mb-10">Upload Image</h3>
          <GiCrossedSwords
            onClick={() => setShow(false)}
            className="absolute top-[30px] right-[30px] cursor-pointer text-3xl text-white "
          />
          <div className="flex flex-col items-center justify-end h-auto">
            <div className="w-full pb-4">
              {image && (
                <Cropper
                  ref={cropperRef}
                  style={{ height: 400, width: "100%" }}
                  zoomTo={0.5}
                  initialAspectRatio={1}
                  preview=".img-preview"
                  src={image}
                  viewMode={1}
                  minCropBoxHeight={10}
                  minCropBoxWidth={10}
                  background={false}
                  responsive={true}
                  autoCropArea={1}
                  checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                  guides={true}
                />
              )}
              <input className="mt-6" type="file" onChange={onChange} />
            </div>
            <p className="text-xl px-3 py-2 bg-white text-darkBlueOne rounded-[4px] inline-block font-bold cursor-pointer active:scale-[0.98]">
              Upload
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-darkBlueOne h-auto w-[1000px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 transition-transform duration-500 ease-in-out">
          Upload
          <GiCrossedSwords
            onClick={() => setShow(false)}
            className="absolute top-[30px] right-[30px] cursor-pointer text-3xl text-white"
          />
        </div>
      )}
    </div>
  );
};

export default SidebarMenu;
