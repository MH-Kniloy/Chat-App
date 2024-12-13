import React, { useEffect } from "react";
import Container from "../../components/Container/Container";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const reduxData = useSelector((state) => state.userDetails.userCredentials);
  const navigate = useNavigate();
  useEffect(() => {
    if (!reduxData) {
      navigate("/Login");
    }
  }, []);
  return (
    <Container>
      <section>
        <div className="flex">
          <SidebarMenu />
          <div className="text-5xl text-violet font-bold font-nunito text-center w-[90%]">
            Settings
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Settings;
