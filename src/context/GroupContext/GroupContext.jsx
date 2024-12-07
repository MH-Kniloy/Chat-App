import React, { createContext } from 'react'
import grouplist1 from "../../assets/group-list1.png";
import grouplist2 from "../../assets/group-list2.png";
import grouplist3 from "../../assets/group-list3.png";

const GroupInfo = createContext()

const GroupContext = ({children}) => {
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
    <>
    
    <GroupInfo.Provider value={groupDetails} >{children}</GroupInfo.Provider>
    
    </>
  )
}

export  {GroupContext, GroupInfo}