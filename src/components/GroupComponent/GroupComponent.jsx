import React from 'react'

const GroupComponent = ({image, name, message}) => {
  return (
    <div className="pe-3 pb-4 mb-4 border-b-[1px] border-gray-400 border-opacity-80 flex gap-4 items-center last:border-none">
      <div>
        <img src={image} alt="" />
      </div>
      <div className='flex w-full justify-between'>
        <div>

        <h4 className="font-poppins text-[18px] font-semibold">
          {name}
        </h4>
        <h5 className="text-[14px] font-poppins font-medium text-[#4D4D4DBF]">
          {message}
        </h5>
        </div>
        <div className='text-center'>
            <p className='text-xl font-poppins font-semibold text-white cursor-pointer bg-violet px-5 py-1 rounded-[5px]'>Join</p>
        </div>
      </div>
    </div>
  );
}

export default GroupComponent