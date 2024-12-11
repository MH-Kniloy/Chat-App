import React, { useContext } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import UserListComp from '../UserListComp/UserListComp';
import { userInfo } from '../../context/UserContext/UserContext';
const UserList = () => {
  const userDetails = useContext(userInfo)
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom h-[450px] overflow-auto relative">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl ">User List</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {userDetails.map((items, idx) => (
          <UserListComp
            key={idx}
            image={items.image}
            name={items.name}
            time={items.time}
          />
        ))}
      </div>
    </div>
  );
}


export default UserList