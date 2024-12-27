import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UserListComp from "../UserListComp/UserListComp";
import { userInfo } from "../../context/UserContext/UserContext";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
const UserList = () => {
  // const userDetails = useContext(userInfo);
  const auth = getAuth()
  const db = getDatabase();
  const dataRef = ref(db, "users/");
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const handleFreindRequest = ()=>{
    console.log("nice");
    
  }
  useEffect(()=>{
    setLoading(true)
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      const dataArr = Object.values(data);
      const filteredArr = dataArr.filter(filter => filter.email !== auth.currentUser.email)

      setData(filteredArr);
      setLoading(false)
    })
  },[])

  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom h-[450px] overflow-auto relative ">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl ">User List</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>
      <div>
        {/* {userDetails.map((items, idx) => (
          <UserListComp
            key={idx}
            image={items.image}
            name={items.name}
            time={items.time}
          />
        ))} */}
        {/* {
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val()
          const dataArr = Object.values(data)
          console.log(dataArr)
          
          
        })
        } */}

        {loading ? (
          <Skeleton
            count={10} 
          />
        ) : (
          data.map((items, idx) => (
            <UserListComp
              key={idx}
              image={items.profile_picture}
              name={items.username}
              friendRequest={handleFreindRequest}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UserList;
