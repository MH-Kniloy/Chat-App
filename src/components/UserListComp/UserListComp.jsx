import React from "react";
import profile_pic from "../../assets/profile-pic.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getAuth } from "firebase/auth";

const UserListComp = ({
  image,
  name,
  handleFriendRequest,
  friendRequestArr,
  friendListArr,
  blockListArr,
  items,
  handleCancelRequest,
}) => {
  const auth = getAuth();
  
  return (
    <div className="pe-3 pb-4 mb-4 border-b-[1px] border-gray-400 border-opacity-80 flex gap-4 items-center last:border-none">
      <div className="rounded-full overflow-hidden w-[55px]">
        <img src={image ? image : profile_pic} alt="" />
      </div>
      <div className="flex w-full justify-between">
        <div>
          <h4 className="font-poppins text-[18px] font-semibold">{name}</h4>
          <h5 className="text-[14px] font-poppins font-medium text-[#4D4D4DBF]">
            Today, 8:56pm
          </h5>
        </div>
        <div className="text-center">
          {blockListArr.includes(auth.currentUser.email + items.email) ||
          blockListArr.includes(items.email + auth.currentUser.email) ? (
            <p className="text-white text-[20px] font-poppins font-medium bg-violet px-3 py-1 rounded-[5px]">
              Blocked
            </p>
          ) : friendListArr.includes(auth.currentUser.email + items.email) ||
            friendListArr.includes(items.email + auth.currentUser.email) ? (
            <p className="text-white text-[20px] font-poppins font-medium bg-violet px-3 py-1 rounded-[5px]">
              Friends
            </p>
          ) : friendRequestArr.includes(
              items.email + auth.currentUser.email
            ) ? (
            <p
              onClick={() => handleCancelRequest(items)}
              className="text-white text-[18px] font-poppins font-medium bg-orange px-3 py-1 cursor-pointer active:scale-[0.95] rounded-[5px]"
            >
              Cancel request
            </p>
          ) : friendRequestArr.includes(
              auth.currentUser.email + items.email
            ) ? (
            <p className="text-white text-[18px] font-poppins font-medium bg-violet px-3 py-1 rounded-[5px]">
              Request received
            </p>
          ) : (
            <p
              onClick={() => handleFriendRequest(items)}
              className="text-white text-[24px] font-poppins font-semibold bg-violet px-3 py-1 cursor-pointer active:scale-[0.95] rounded-[5px]"
            >
              +
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserListComp;
