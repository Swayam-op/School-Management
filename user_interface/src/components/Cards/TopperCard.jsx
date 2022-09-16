import React from 'react';
import {ImQuotesLeft} from 'react-icons/im';
const TopperCard = ({Image,Name,Rank,Quote}) => {
  return (
    <div className='group w-full border bg-white hover:bg-gradient-to-bl from-stone-500 to-stone-700 cursor-pointer rounded-lg shadow-blue-100 shadow-md bg-contain ' >
      <div className='w-full p-8  grid grid-cols-1 place-items-center'>
          <div className='w-24 h-24 rounded-full overflow-hidden'>
            <img src={Image} className='w-full h-full  scale-125' alt="" />
          </div>
          <h1 className='text-lg text-blue-lg text-center font-bold mt-4 group-hover:text-white '><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700 group-hover:text-white'>{Name}</span></h1>
          <h1 className='text-gray-600 font-bold text-center mb-2 group-hover:text-white '>AIR - {Rank}</h1>
          <div className='w-full flex flex-col items-center'>
          <ImQuotesLeft className='text-sm text-gray-400 mb-1' />
          <p className='text-sm text-gray-500 group-hover:text-white text-center px-6 '> {Quote} </p>
  
          </div>
      </div>
    </div>
  )
}

export default TopperCard