import React, { useContext } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import MyGroupComp from "../MyGroupComp/MyGroupComp";
import { userInfo } from "../../context/UserContext/UserContext";

const MyGroup = () => {
  const myGroupDetails = useContext(userInfo);
  const slice = myGroupDetails.slice(0, 4);
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto relative">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">My Groups</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {slice.map((items, idx) => (
          <MyGroupComp
            key={idx}
            image={items.image}
            name={items.name}
            message={items.message}
            time={items.time}
          />
        ))}
      </div>
    </div>
  );
};
export default MyGroup;
