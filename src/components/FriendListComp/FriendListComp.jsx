import React from 'react'
import profile_pic from "../../assets/profile-pic.png";

const FriendListComp = ({ image, name, handleUnfriend, items, }) => {
  return (
    <div className="pe-3 pb-4 mb-4 border-b-[1px] border-gray-400 border-opacity-80 flex gap-4 items-center last:border-none">
      <div className="w-[55px] overflow-hidden rounded-full">
        <img src={image ? image : profile_pic} alt="" />
      </div>
      <div className="flex w-full justify-between">
        <div>
          <h4 className="font-poppins text-[18px] font-semibold">{name}</h4>
        </div>
        <div className="flex gap-2">
          <p className="text-[16px] font-poppins font-semibold text-white cursor-pointer bg-violet px-4 py-1 rounded-[5px] active:scale-[0.95]">
            Block
          </p>
          <p
            onClick={() => handleUnfriend(items)}
            className="text-[16px] font-poppins font-semibold text-white cursor-pointer bg-orange px-4 py-1 rounded-[5px] active:scale-[0.95]"
          >
            Unfriend
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendListComp