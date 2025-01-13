import React from 'react'
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
const SearchBar = ({handleSearch,}) => {
  return (
    <div className="w-full">
        <div className='relative'>

      <FiSearch className="text-[24px] cursor-pointer absolute top-[20px] left-[20px]" />
      <BsThreeDotsVertical className="text-2xl text-violet cursor-pointer absolute top-[20px] right-[20px]" />
      <input
        onChange={handleSearch}
        className="text-black font-poppins outline-none py-[16px] ps-[75px] pe-[50px] rounded-[20px] w-full shadow-custom"
        placeholder="Search"
        type="search"
      />
        </div>
    </div>
  );
}

export default SearchBar