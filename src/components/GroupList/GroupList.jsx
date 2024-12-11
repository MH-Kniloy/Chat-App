import React, { useContext } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import GroupComponent from '../GroupComponent/GroupComponent';
import { GroupInfo } from '../../context/GroupContext/GroupContext';

const GroupList = () => {
   const groupDetails = useContext(GroupInfo)
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[360px] overflow-auto relative">
      <div className="flex justify-between mb-1 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">Group List</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {groupDetails.map((items, idx) => (
          <GroupComponent
          key={idx}
            image={items.image}
            name={items.name}
            message={items.message}
          />
        ))}
      </div>
    </div>
  );
}

export default GroupList