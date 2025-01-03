import React from 'react'
import profile_pic from "../../assets/profile-pic.png";

const FriendRequestComp = ({
  image,
  name,
  message,
  items,
  handleFriend,
  handleCancelRequest,
}) => {
  return (
    <div className="pe-3 pb-4 mb-4 border-b-[1px] border-gray-400 border-opacity-80 flex gap-4 items-center last:border-none">
      <div className="rounded-full overflow-hidden w-[55px]">
        <img src={image ? image : profile_pic} alt="" />
      </div>
      <div className="flex w-full justify-between">
        <div>
          <h4 className="font-poppins text-[18px] font-semibold">{name}</h4>
          <h5 className="text-[14px] font-poppins font-medium text-[#4D4D4DBF]">
            {message}
          </h5>
        </div>
        <div className="text-center flex gap-2">
          <p
            onClick={() => handleFriend(items)}
            className="text-[16px] font-poppins font-semibold text-white cursor-pointer bg-violet px-4 py-1 rounded-[5px] active:scale-[0.95]"
          >
            Accept
          </p>
          <p
            onClick={() => handleCancelRequest(items)}
            className="text-[16px] font-poppins font-semibold text-white cursor-pointer bg-orange px-4 py-1 rounded-[5px] active:scale-[0.95]"
          >
            Reject
          </p>
        </div>
      </div>
    </div>
  );
};

export default FriendRequestComp