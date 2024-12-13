import React, { useEffect } from 'react'
import Container from '../../components/Container/Container'
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu'
import SearchBar from '../../components/SearchBar/SearchBar'
import GroupList from '../../components/GroupList/GroupList'
import FriendList from '../../components/FriendList/FriendList'
import UserList from '../../components/UserList/UserList'
import FriendRequest from '../../components/FriendRequest/FriendRequest'
import MyGroup from '../../components/MyGroup/MyGroup'
import BlockedUsers from '../../components/BlockedUsers/BlockedUsers'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const reduxData = useSelector(state=> state.userDetails.userCredentials)
  const navigate= useNavigate()
  useEffect(()=>{

    if(!reduxData){
         navigate("/Login")
    }
  })
  return (
    <>
    <Container>

         <section className='flex'>
            
            <SidebarMenu />
          
          
          <div className='w-[90%] flex gap-5 flex-wrap'>

             <div className='w-[32%] '>
              <SearchBar />
              <GroupList />
             </div>
             <div className='w-[32%]'>
              
              <FriendList />
             </div>
             <div className='w-[32%]'>
              <UserList />
             </div>
             <div className='w-[32%] '>
              <FriendRequest />
             </div>
             <div className='w-[32%]'>
              
              <MyGroup />
             </div>
             <div className='w-[32%]'>
              <BlockedUsers />
             </div>

          </div>
         
         </section>

    </Container>

    </>
  )
}

export default Home