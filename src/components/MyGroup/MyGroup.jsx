import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import friendlist1 from "../../assets/friend-list1.png";
import friendlist2 from "../../assets/friend-list2.png";
import friendlist3 from "../../assets/friend-list3.png";
import friendlist4 from "../../assets/friend-list4.png";
import MyGroupComp from '../MyGroupComp/MyGroupComp';

const MyGroup = () => {
  const myGroupDetails = [
    {
      image: `${friendlist1}`,
      name: "Raghav",
      message: "Dinner?",
      time: "Today, 8:56pm",
    },
    {
      image: `${friendlist2}`,
      name: "Swathi",
      message: "Sure!",
      time: "Today, 2:31pm",
    },
    {
      image: `${friendlist3}`,
      name: "Kiran",
      message: "Hi.....",
      time: "Yesterday, 6:22pm",
    },
    {
      image: `${friendlist4}`,
      name: "Tejeshwini C",
      message: "I will call him today.",
      time: "Today, 12:22pm",
    },
  ];
  return (
    <div className="p-5 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto">
      <div className="flex justify-between mb-9">
        <h3 className="font-poppins font-semibold text-xl">My Groups</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {myGroupDetails.map((items) => (
          <MyGroupComp
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
export default MyGroup