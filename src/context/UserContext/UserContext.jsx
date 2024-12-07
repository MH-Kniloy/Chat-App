import React, { createContext } from 'react'
import friendlist1 from "../../assets/friend-list1.png";
import friendlist2 from "../../assets/friend-list2.png";
import friendlist3 from "../../assets/friend-list3.png";
import friendlist4 from "../../assets/friend-list4.png";
import friendlist5 from "../../assets/friend-list5.png";

const userInfo = createContext()

const UserContext = ({children}) => {
      const userDetails = [
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
        {
          image: `${friendlist5}`,
          name: "Marvin McKinney",
          message: "Hi.....",
          time: "Today, 8:56pm",
        },
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
        {
          image: `${friendlist5}`,
          name: "Marvin McKinney",
          message: "Hi.....",
          time: "Today, 8:56pm",
        },
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
        {
          image: `${friendlist5}`,
          name: "Marvin McKinney",
          message: "Hi.....",
          time: "Today, 8:56pm",
        },
      ];
  return (
    <>
     
     <userInfo.Provider value={userDetails}>
        {children}
     </userInfo.Provider>
    
    </>
  )
}

export  {UserContext, userInfo}