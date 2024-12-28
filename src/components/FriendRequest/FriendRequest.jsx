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
  const [data, setData] = useState([]);
  const [noRequest, setNoRequest] = useState(false);
  useEffect(() => {
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArr = Object.values(data);
      const filteredArr = dataArr.filter(
        (filter) => filter.senderEmail !== auth.currentUser.email
      );

      setData(filteredArr);
     const recieverEmail = filteredArr.some(item => item.recieverEmail === auth.currentUser.email)
     if(recieverEmail){
      setNoRequest(true);
     }
    
    });
  }, []);
  console.log(data)
  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto relative">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl">Friend Request</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>

      {noRequest ? (
        <div>
          {data.map(
            (items, idx) =>
              items.recieverEmail == auth.currentUser.email && (
                <FriendRequestComp
                  key={idx}
                  image={items.senderPhoto}
                  name={items.senderName}
                />
              )
          )}
        </div>
      ) : (
        <p className="font-opnesans text-2xl font-semibold text-center text-darkBlueOne">You have no friend request</p>
      )}
    </div>
  );
};
export default FriendRequest;
