import React, { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import FriendRequestComp from "../FriendRequestComp/FriendRequestComp";
import { userInfo } from "../../context/UserContext/UserContext";

const FriendRequest = () => {
  const requestDetails = useContext(userInfo)
  const slice=requestDetails.slice(0, 4)
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto relative">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">Friend Request</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {slice.map((items) => (
          <FriendRequestComp
            image={items.image}
            name={items.name}
            message={items.message}
          />
        ))}
      </div>
    </div>
  );
};
export default FriendRequest;
