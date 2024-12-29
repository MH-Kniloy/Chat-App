import React, { useEffect, useState } from "react";
import Container from "../../components/Container/Container";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import profilePic from "../../assets/profile-pic.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getDatabase, onValue, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
const Notifications = () => {
   const reduxData = useSelector((state) => state.userDetails.userCredentials);
    const navigate = useNavigate();
      const auth = getAuth();
      const db = getDatabase();
      const [notifications, setNotifications]=useState([])
      const [absentNotifications, setAbsentNotifications]=useState(false)

    useEffect(() => {
      if (!reduxData) {
        navigate("/Login");
      }

      onValue(ref(db, "friendRequest/"), (snapshot) => {
            let arr = []
            snapshot.forEach((request)=>{
              if(auth.currentUser.email===request.val().recieverEmail){
                arr.push(request.val())
                setAbsentNotifications(true)
              }
            })
            setNotifications(arr)
            });
      
    },[]);
  return (
    <Container>
      <section className="mt-14 md:mt-0">
        <div className="flex justify-center md:justify-start">
          <SidebarMenu />
          <div className="flex flex-col items-center w-[90%]">
            <div className="text-5xl text-violet font-bold font-nunito text-center w-[90%] mb-10">
              Notifications
            </div>

            {absentNotifications ? (
              notifications.map((notification) => (
                <h3 className="flex justify-center items-center gap-3 w-[90%] rounded-[15px] bg-slate-200 py-6 text-2xl text-darkBlueOne font-opnesans font-semibold text-center mb-6">
                  You have received a friend request from
                  <img className="w-[55px] h-[55px] rounded-full" src={notification.senderPhoto || profilePic} alt="" />
                  <span className="text-orange">{notification.senderName}</span>
                </h3>
              ))
            ) : (
              <h3 className="w-[90%] rounded-[15px] bg-slate-200 py-6 text-2xl text-darkBlueOne font-opnesans font-semibold text-center">
                You have no Notifications
              </h3>
            )}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Notifications;
