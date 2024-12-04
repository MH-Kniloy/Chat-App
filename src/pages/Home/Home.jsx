import React from 'react'
import Container from '../../components/Container/Container'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import SearchBar from '../../components/SearchBar/SearchBar'

const Home = () => {
  return (
    <>
    <Container>

         <section className='flex'>
          
            <SidebarMenu />
          
          <div className='w-[90%]'>

             <div>
              <SearchBar />
             </div>

          </div>
         </section>

    </Container>

    </>
  )
}

export default Home