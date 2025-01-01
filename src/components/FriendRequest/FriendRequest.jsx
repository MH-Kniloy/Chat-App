import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import FriendRequestComp from "../FriendRequestComp/FriendRequestComp";
import { userInfo } from "../../context/UserContext/UserContext";
import { getDatabase, ref, onValue,} from "firebase/database";
import { getAuth } from "firebase/auth";

const FriendRequest = () => {
  const requestDetails = useContext(userInfo);
  const slice = requestDetails.slice(0, 4);

  const auth = getAuth();
  const db = getDatabase();
  const dataRef = ref(db, "friendRequest/");
  const [friendRequest, setFriendrequest] = useState([]);
  const [noRequest, setNoRequest] = useState(false);
  useEffect(() => {
      onValue(dataRef, (snapshot) => {
      let arr = []
      snapshot.forEach((request)=>{
        if(auth.currentUser.email===request.val().recieverEmail){
          arr.push(request.val())
          setNoRequest(true)
        }
      })
      setFriendrequest(arr)
      });

    
  }, []);

  const handleFriend = (item)=>{

  }
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto relative">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">Friend Request</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      {noRequest ? (
        <div>
          {friendRequest.map(
            (items, idx) =>
               (
                <FriendRequestComp
                  key={idx}
                  image={items.senderPhoto}
                  name={items.senderName}
                  items={items}
                  handleFriend={handleFriend}
                />
              )
          )}
        </div>
       ) : (
        <p className="font-opnesans text-2xl font-semibold text-center text-darkBlueOne">
          You have no friend request
        </p>
      )} 
    </div>
  );
};
export default FriendRequest;
