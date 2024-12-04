import React from 'react'
import Container from "../../components/Container/Container";
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'

const Messages = () => {
  return (
    <Container>
      <section>
        <div className='flex'>
          <SidebarMenu />
          <div className='text-5xl text-violet font-bold font-nunito text-center w-[90%]'>Messages</div>
        </div>
      </section>
    </Container>
  );
}

export default Messages