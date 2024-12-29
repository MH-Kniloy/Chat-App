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
} from "firebase/database";
import { getAuth } from "firebase/auth";
const UserList = () => {
  // const userDetails = useContext(userInfo);
  const auth = getAuth();
  const db = getDatabase();
  const [userLists, setuserLists] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFreindRequest = (items) => {
    let requestExists = false

    get(ref(db, "friendRequest/"))
    .then((snapshot)=>{
      snapshot.forEach((request) => {
        if (items.email === request.val().recieverEmail) {
          let requestKey = request.key;
          requestExists = true;
          remove(ref(db, `friendRequest/${requestKey}`));
        }
      });

      if (!requestExists) {
          set(push(ref(db, "friendRequest/")), {
          senderName: auth.currentUser.displayName,
          senderEmail: auth.currentUser.email,
          senderPhoto: auth.currentUser.photoURL,
          recieverName: items.username,
          recieverEmail: items.email,
          recieverPhoto: items.profile_picture,
        });
      }
    })
    
  };

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

    // onValue(ref(db, "users/"), (snapshot) => {
    //   const data = snapshot.val();
    //   const dataArr = Object.values(data);
    //   const filteredArr = dataArr.filter(
    //     (filter) => filter.email !== auth.currentUser.email
    //   );

    //   setData(filteredArr);
    //   setLoading(false);
    // });
  }, []);

  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom h-[450px] overflow-auto relative ">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl ">User List</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
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
                friendRequest={handleFreindRequest}
                items={items}
                btn={"+"}
              />
            ))
          )}
        </div>
      }
    </div>
  );
};

export default UserList;
