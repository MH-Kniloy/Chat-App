import React, { useContext, useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import FriendListComp from '../FriendListComp/FriendListComp';
import { userInfo } from '../../context/UserContext/UserContext';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

const FriendList = () => {
  const friendDetails =useContext(userInfo)
   const auth = getAuth();
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  // for friendList 
   useEffect(() => {
          onValue(ref(db, "friends/"), (snapshot) => {
          let arr = []
          snapshot.forEach((friend)=>{
            
            arr.push(friend.val())
          })
          setFriendList(arr)
          });
    
        
      }, []);

  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom h-[450px] overflow-auto relative">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">Friends</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      <div>
        {friendList.map((items, index) => (
          <FriendListComp
            key={index}
            image={
              auth.currentUser.email === items.senderEmail
                ? items.recieverPhoto
                : items.senderPhoto
            }
            name={
              auth.currentUser.email === items.senderEmail
                ? items.recieverName
                : items.senderName
            }
          />
        ))}
      </div>
    </div>
  );
}

export default FriendList