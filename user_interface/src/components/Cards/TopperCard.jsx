import React from 'react';
import {ImQuotesLeft} from 'react-icons/im';
const TopperCard = ({Image,Name,Rank,Quote}) => {
  return (
    // <div className='group w-full border bg-white hover:bg-gradient-to-bl from-stone-500 to-stone-700 cursor-pointer rounded-lg shadow-blue-100 shadow-md bg-contain ' >
    //   <div className='w-full p-8  grid grid-cols-1 place-items-center'>
    //       <div className='w-24 h-24 rounded-full overflow-hidden'>
    //         <img src={Image} className='w-full h-full  scale-125' alt="" />
    //       </div>
    //       <h1 className='text-lg text-blue-lg text-center font-bold mt-4 group-hover:text-white '><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700 group-hover:text-white'>{Name}</span></h1>
    //       <h1 className='text-gray-600 font-bold text-center mb-2 group-hover:text-white '>AIR - {Rank}</h1>
    //       <div className='w-full flex flex-col items-center'>
    //       <ImQuotesLeft className='text-sm text-gray-400 mb-1' />
    //       <p className='text-sm text-gray-500 group-hover:text-white text-center px-6 '> {Quote} </p>
  
    //       </div>
    //   </div>
    // </div>
    // style={{"background-color: #9d789b;"}}
    <div>
      <div class="block text-center rounded-lg shadow-lg bg-white">
        <div class="overflow-hidden rounded-t-lg h-28 bg-card-1"></div>
        <div class="w-24 h-24 -mt-12 overflow-hidden border  border-white rounded-full mx-auto bg-white">
          <img className='w-full h-full' src={"https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"} />
        </div>
        <div class="p-6">
          <h4 class="text-2xl font-semibold mb-2">{Name}</h4>
          <h4 class="text-lg font-semibold mb-2 ">Rank - {Rank}</h4>
          <hr />
          <p class="mt-4">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" class="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
            </svg>
            {Quote}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopperCard