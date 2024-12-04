import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import GroupComponent from '../GroupComponent/GroupComponent';
import grouplist1 from '../../assets/group-list1.png'
import grouplist2 from '../../assets/group-list2.png'
import grouplist3 from '../../assets/group-list3.png'

const GroupList = () => {
    const groupDetails = [
      {
        image: `${grouplist1}`,
        name: "Friends Reunion",
        message: "Hi Guys, Wassup!",
      },
      {
        image: `${grouplist2}`,
        name: "Friends Forever",
        message: "Good to see you.",
      },
      {
        image: `${grouplist3}`,
        name: "Crazy Cousins",
        message: "What plans today?",
      },
    ];
  return (
    <div className="p-5 rounded-[20px] shadow-custom mt-10">
      <div className='flex justify-between mb-4'>
        <h3 className="font-poppins font-semibold text-xl">Group List</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {
            groupDetails.map((items)=>(

                <GroupComponent image={items.image} name={items.name} message={items.message} />
            ))
        }
       
      </div>
    </div>
  );
}

export default GroupList