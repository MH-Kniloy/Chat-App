import React from 'react'
import Container from "../../components/Container/Container";
import SidebarMenu from "../../components/SidebarMenu/SidebarMenu";
const Settings = () => {
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
}

export default Settings