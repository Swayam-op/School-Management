import React from 'react'
const AchievementCard = ({Image,Title,Content,Date}) => {
  return (
    <div className='group relative bg-white w-full shadow-md border shadow-blue-100 rounded-md cursor-pointer overflow-hidden'>
    <div className='w-full h-48 overflow-hidden p-1 '>
    <img src={Image} className='w-full h-full rounded-md transition-transform duration-150 ease-in group-hover:scale-105 ' alt="" />
    </div>
    <div className='w-full px-3 py-2 '>
       <h1 className='py-1  text-lg font-bold '><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700'>{Title}</span></h1>
       <p className='text-xs text-gray-700 py-2'>{Content}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus non exercitationem quidem incidunt.
       </p>
       <div className='w-full flex justify-between py-2'>
        <h3 className='text-xs font-semibold '>{Date}Date - 04/11/2022</h3>
       </div>
       <span>
      
       
       </span>
    </div>
    
       <div className='absolute inset-0  group-hover:bg-gradient-to-bl from-stone-600 to-stone-700 bg-opacity-100 shadow-lg shadow-stone-500 py-8 flex flex-col items-center transition-all  duration-300 ease-out translate-y-full group-hover:translate-y-48  invisible  group-hover:visible'>
        <button className='block  rounded-sm  py-2.5 px-5'> <span className='text-2xl font-bold  text-white'>Read More</span> </button>
       </div>
    </div>
  )
}

export default AchievementCard;

