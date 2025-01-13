import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UserListComp from "../UserListComp/UserListComp";
import { userInfo } from "../../context/UserContext/UserContext";
import {
  getDatabase,
  ref,
  onValue,
  push,
  set,
  remove,
  get,
  off,
} from "firebase/database";
import { getAuth } from "firebase/auth";
import SearchBar from './../SearchBar/SearchBar';
const UserList = () => {
  // const userDetails = useContext(userInfo);
  const auth = getAuth();
  const db = getDatabase();
  const [userLists, setuserLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [friendRequest, setFriendrequest] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [blockList, setBlockList] = useState([]);
  
  // for sending friend request 
  const handleFreindRequest = (items) => {

    set(push(ref(db, "friendRequest/")), {
      senderName: auth.currentUser.displayName,
      senderEmail: auth.currentUser.email,
      senderPhoto: auth.currentUser.photoURL,
      recieverName: items.username,
      recieverEmail: items.email,
      recieverPhoto: items.profile_picture,
    })
    
  };

  // for cancelling sent friend request 
  const handleCancelRequest = (items)=>{
        let key = ""
       get(ref(db, "friendRequest/"))
         .then((snapshot) => {
           snapshot.forEach((request) => {
             if (items.email === request.val().recieverEmail) {
               // key.push(request.key)
               key = request.key;
             }
           });
         })
         .then(() => {
           remove(ref(db, `friendRequest/${key}`));
         });
     
  }

  // for userlist 
  useEffect(() => {
    setLoading(true);

    onValue(ref(db, "users/"), (snapshot) => {
      let arr = [];
      snapshot.forEach((user) => {
        if (auth.currentUser.email !== user.val().email) {
          arr.push(user.val());
        }
      });
      setuserLists(arr);
      setLoading(false);
    });

  }, []);

  // for concating sender receiver email and determining what happens after that 
    useEffect(() => {
        onValue(ref(db, "friendRequest/"), (snapshot) => {
        let arr = []
        snapshot.forEach((request)=>{
          
          arr.push(request.val().recieverEmail+request.val().senderEmail)
        })
        setFriendrequest(arr)
        });
  
      
    }, []);

    // for friendList 

    useEffect(() => {
        onValue(ref(db, "friends/"), (snapshot) => {
        let arr = []
        snapshot.forEach((friend)=>{
          
          arr.push(friend.val().recieverEmail+friend.val().senderEmail)
        })
        setFriendList(arr)
        });
  
      
    }, []);

      // for blockList 
    
         useEffect(() => {
                onValue(ref(db, "block/"), (snapshot) => {
                let arr = []
                
                snapshot.forEach((block) => {
                 arr.push(block.val().blockedEmail+block.val().blockedByEmail)
                });
                setBlockList(arr);
              });
          
              
            }, []);

  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom h-[450px] overflow-auto relative ">
      

      <div className="flex flex-col justify-between mb-5 pt-5 pb-4 bg-white sticky top-[0px] left-0 h-[130px] w-full">
        <div className="flex justify-between"> 

        <h3 className="font-poppins font-semibold text-xl ">User List</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
        </div>
      <SearchBar/>
      </div>
      
      {
        <div>
          {loading ? (
            <Skeleton count={10} />
          ) : (
            userLists.map((items, idx) => (
              <UserListComp
                key={idx}
                image={items.profile_picture}
                name={items.username}
                handleFriendRequest={handleFreindRequest}
                handleCancelRequest={handleCancelRequest}
                friendRequestArr={friendRequest}
                items={items}
                friendListArr={friendList}
                blockListArr={blockList}
              />
            ))
          )}
        </div>
      }
    </div>
  );
};

export default UserList;
