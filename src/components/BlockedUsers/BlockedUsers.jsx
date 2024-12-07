import React, { useContext } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import BlockedUserComp from '../BlockedUserComp/BlockedUserComp';
import { userInfo } from '../../context/UserContext/UserContext';

const BlockedUsers = () => {
  const blockuserDetails = useContext(userInfo)
  const slice=blockuserDetails.slice(0, 5)
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto relative ">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl ">Blocked Users</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {slice.map((items) => (
          <BlockedUserComp
            image={items.image}
            name={items.name}
            time={items.time}
          />
        ))}
      </div>
    </div>
  );
}

export default BlockedUsers