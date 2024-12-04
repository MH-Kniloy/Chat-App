import React from 'react'
import Container from '../../components/Container/Container'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import SearchBar from '../../components/SearchBar/SearchBar'
import GroupList from '../../components/GroupList/GroupList'

const Home = () => {
  return (
    <>
    <Container>

         <section className='flex'>
          <div className='w-[10%] me-[50px]'>
            
            <SidebarMenu />
          </div>
          
          <div className='w-[90%] flex gap-4'>

             <div className='w-[33%] '>
              <SearchBar />
              <GroupList />
             </div>
             <div className='w-[33%]'>
              <SearchBar />
             </div>
             <div className='w-[33%]'>
              <SearchBar />
             </div>

          </div>
         </section>

    </Container>

    </>
  )
}

export default Home