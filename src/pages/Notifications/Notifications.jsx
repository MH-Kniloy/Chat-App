import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Notifications = () => {
   const reduxData = useSelector((state) => state.userDetails.userCredentials);
    const navigate = useNavigate();
    useEffect(() => {
      if (!reduxData) {
        navigate("/Login");
      }
    },[]);
  return (
    <Container>
      <section className="mt-14 md:mt-0">
        <div className="flex justify-center md:justify-start">
          <SidebarMenu />
          <div className="flex flex-col items-center w-full">

          <div className="text-5xl text-violet font-bold font-nunito text-center w-[90%] mb-10">
            Notifications
          </div>
          <h3 className="w-full rounded-[15px] bg-slate-200 py-6 text-2xl text-darkBlueOne font-opnesans font-semibold text-center">You have no Notifications</h3>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Notifications;
