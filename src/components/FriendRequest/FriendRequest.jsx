import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import friendlist1 from "../../assets/friend-list1.png";
import friendlist2 from "../../assets/friend-list2.png";
import friendlist3 from "../../assets/friend-list3.png";
import friendlist4 from "../../assets/friend-list4.png";
import FriendRequestComp from "../FriendRequestComp/FriendRequestComp";

const FriendRequest = () => {
  const requestDetails = [
    {
      image: `${friendlist1}`,
      name: "Raghav",
      message: "Dinner?",
    },
    {
      image: `${friendlist2}`,
      name: "Swathi",
      message: "Sure!",
    },
    {
      image: `${friendlist3}`,
      name: "Kiran",
      message: "Hi.....",
    },
    {
      image: `${friendlist4}`,
      name: "Tejeshwini C",
      message: "I will call him today.",
    },
  ];
  return (
    <div className="p-5 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto">
      <div className="flex justify-between mb-6">
        <h3 className="font-poppins font-semibold text-xl">Friend Request</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {requestDetails.map((items) => (
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
