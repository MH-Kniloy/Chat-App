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
        <div className="flex">
          <SidebarMenu />
          <div className="text-5xl text-violet font-bold font-nunito text-center w-[90%] ">
            Notifications
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Notifications;
