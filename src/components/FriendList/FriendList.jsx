import React, { useContext } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import FriendListComp from '../FriendListComp/FriendListComp';
import { userInfo } from '../../context/UserContext/UserContext';

const FriendList = () => {
  const friendDetails =useContext(userInfo)

  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom h-[450px] overflow-auto relative">
      

      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">Friends</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>
    

      <div>
        {friendDetails.map((items, index) => (
          <FriendListComp
          key={index}
            image={items.image}
            name={items.name}
            message={items.message}
            time={items.time}
          />
        ))}
      </div>
    </div>
  );
}

export default FriendList