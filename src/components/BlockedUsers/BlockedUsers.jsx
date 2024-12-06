import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friendlist1 from "../../assets/friend-list1.png";
import friendlist2 from "../../assets/friend-list2.png";
import friendlist3 from "../../assets/friend-list3.png";
import friendlist4 from "../../assets/friend-list4.png";
import friendlist5 from "../../assets/friend-list5.png";
import BlockedUserComp from '../BlockedUserComp/BlockedUserComp';

const BlockedUsers = () => {
  const blockuserDetails = [
    {
      image: `${friendlist1}`,
      name: "Raghav",
      time: "Today, 8:56pm",
    },
    {
      image: `${friendlist2}`,
      name: "Swathi",
      time: "Today, 2:31pm",
    },
    {
      image: `${friendlist3}`,
      name: "Kiran",
      time: "Yesterday, 6:22pm",
    },
    {
      image: `${friendlist4}`,
      name: "Tejeshwini C",
      time: "Today, 12:22pm",
    },
    {
      image: `${friendlist5}`,
      name: "Marvin McKinney",
      time: "Today, 8:56pm",
    },
  ];
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto relative ">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl ">Blocked Users</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {blockuserDetails.map((items) => (
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