import React, { useContext, useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import FriendListComp from '../FriendListComp/FriendListComp';
import { userInfo } from '../../context/UserContext/UserContext';
import { getAuth } from 'firebase/auth';
import { get, getDatabase, onValue, push, ref, remove, set } from 'firebase/database';

const FriendList = () => {
  // const friendDetails =useContext(userInfo)
   const auth = getAuth();
  const db = getDatabase();
  const [friendList, setFriendList] = useState([]);
  const [noFriend, setNoFriend] = useState(false);
  // for friendList 
   useEffect(() => {
          onValue(ref(db, "friends/"), (snapshot) => {
          let arr = []
          
          snapshot.forEach((friend) => {
           if (
             friend.val().senderEmail === auth.currentUser.email ||
             friend.val().recieverEmail === auth.currentUser.email
           ){

             arr.push({...friend.val(), key:friend.key});
             setNoFriend(true)
           }
          });
          setFriendList(arr)
          });
    
        
      }, []);

       // for Unfriending friends 

        const handleUnfriend = (items)=>{
              let key = ""
             get(ref(db, "friends/"))
               .then((snapshot) => {
                 snapshot.forEach((request) => {
                   if (items.recieverEmail === request.val().recieverEmail) {
                     
                     key = request.key;
                   }
                 });
               })
               .then(() => {
                 remove(ref(db, `friends/${key}`));
               });
           
        }

        // for blocking friends 

        const handleBlock = (items)=>{
          console.log(items)
          if(auth.currentUser.email===items.recieverEmail){
            set(push(ref(db, "block/")),{
              blockedEmail:items.senderEmail,
              blockedName:items.senderName,
              blockedPhoto:items.senderPhoto?items.senderPhoto:"",
              blockedByEmail:items.recieverEmail,
              blockedByName:items.recieverName,
              blockedByPhoto:items.recieverPhoto?items.recieverPhoto:"",
              
            })
            .then(()=>{
              remove(ref(db, `friends/${items.key}`))
              
            })
          }else{
              set(push(ref(db, "block/")), {
                blockedEmail: items.recieverEmail,
                blockedName: items.recieverName,
                blockedPhoto: items.recieverPhoto ? items.recieverPhoto : "",
                blockedByEmail: items.senderEmail,
                blockedByName: items.senderName,
                blockedByPhoto: items.senderPhoto ? items.senderPhoto : "",
              })
              .then(() => {
                remove(ref(db, `friends/${items.key}`));
              });
          }
        }

  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom h-[450px] overflow-auto relative">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">Friends</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>
      {noFriend ? (
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
              handleUnfriend={handleUnfriend}
              items={items}
              handleBlock={handleBlock}
            />
          ))}
        </div>
      ) : (
        <p className="font-opnesans text-2xl font-semibold text-center text-darkBlueOne">
          You have no friends
        </p>
      )}
    </div>
  );
}

export default FriendList