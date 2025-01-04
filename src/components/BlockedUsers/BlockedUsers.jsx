import React, { useContext, useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import BlockedUserComp from '../BlockedUserComp/BlockedUserComp';
import { userInfo } from '../../context/UserContext/UserContext';
import { getAuth } from 'firebase/auth';
import { getDatabase, onValue, ref } from 'firebase/database';

const BlockedUsers = () => {
  const blockuserDetails = useContext(userInfo)
  const slice=blockuserDetails.slice(0, 5)

    const auth = getAuth();
    const db = getDatabase();
    const [blockList, setBlockList] = useState([]);
    const [noBlock, setNoBlock] = useState(false);

    // for blockList 

     useEffect(() => {
            onValue(ref(db, "block/"), (snapshot) => {
            let arr = []
            
            snapshot.forEach((block) => {
             if (
               auth.currentUser.email===block.val().blockedByEmail
             ){
  
               arr.push(block.val());
               setNoBlock(true);
             }
            });
            setBlockList(arr);
            });
      
          
        }, []);

  return (
    <div className="p-5 pt-0 rounded-[20px] shadow-custom mt-9 h-[445px] overflow-auto relative ">
      <div className="flex justify-between mb-3 pt-5 bg-white sticky top-[0px] left-0 h-[70px] w-full">
        <h3 className="font-poppins font-semibold text-xl ">Blocked Users</h3>
        <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer " />
      </div>
      {noBlock ? (
        <div>
          {
          blockList.map((items, idx) => (
            // console.log(items)
            <BlockedUserComp key={idx} items={items} blockedName={items.blockedName} blockedPhoto={items.blockedPhoto} />
          ))
        }

        </div>
      ) : (
        <p className="font-opnesans text-2xl font-semibold text-center text-darkBlueOne">
          You haven't blocked anyone
        </p>
      )}
      <div></div>
    </div>
  );
}

export default BlockedUsers