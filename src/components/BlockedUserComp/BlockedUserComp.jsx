import React from 'react'
import profile_pic from "../../assets/profile-pic.png";

const BlockedUserComp = ({ items, blockedName, blockedPhoto, }) => {
  
  return (
    <div className="pe-3 pb-4 mb-4 border-b-[1px] border-gray-400 border-opacity-80 flex gap-4 items-center last:border-none">
      <div className="rounded-full overflow-hidden w-[55px]">
        <img src={blockedPhoto ? blockedPhoto : profile_pic} alt="" />
      </div>
      <div className="flex w-full justify-between">
        <div>
          <h4 className="font-poppins text-[18px] font-semibold">
            {blockedName}
          </h4>
          
        </div>
        <div className="text-center">
          <p className="md:text-xl text-base font-poppins font-semibold text-white cursor-pointer bg-violet px-5 py-1 rounded-[5px] active:scale-[0.95]">
            Unblock
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockedUserComp