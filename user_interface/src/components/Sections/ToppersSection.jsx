import React from 'react'
import { DiSwift } from 'react-icons/di';
import TopperCard from '../Cards/TopperCard';
const ToppersSection = () => {
  return (
    <div className='w-full py-16  md:px-28 px-2 bg-cover bg-repeat '>
        <h1 className='md:text-4xl text-3xl font-bold text-center mb-5'><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700'>OUR TOPPERS</span> </h1>
        <div className='flex justify-center items-center mb-4'>
          <div className='bg-gradient-to-r from-amber-700 to-stone-700 flex-grow h-small'></div>
          <DiSwift className='text-amber-700'/>
          <div className='bg-gradient-to-l from-amber-700 to-stone-700 flex-grow h-small'></div>
        </div>
        <div className='w-full grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 '>
          <TopperCard 
          Image={"/images/toppers/topper1.jpg"}
          Name={"Sanjib Mishra"}
          Rank={"001"}
          Quote={"In the End We Only Regret the Chances We Didn’t Take"}
          />
          <TopperCard
          Image={"/images/toppers/Topper2.jpg"}
          Name={"Arijit Singh"}
          Rank={"002"}
          Quote={" Success isn’t Always about Greatness. It’s about Consistency"}
          />
          <TopperCard
          Image={"/images/toppers/Topper3.jpg"}
          Name={"Shreya Ghosal"}
          Rank={"004"}
          Quote={" Success is Not Final, Failure is Not Fatal: it is the Courage to Continue that Counts"}
          />
       <TopperCard
          Image={"/images/toppers/Topper2.jpg"}
          Name={"Arijit Singh"}
          Rank={"007"}
          Quote={" Success isn’t Always about Greatness. It’s about Consistency"}
          />
           <TopperCard
          Image={"/images/toppers/Topper3.jpg"}
          Name={"Shreya Ghosal"}
          Rank={"010"}
          Quote={" Success isn’t Always about Greatness. It’s about Consistency"}
          />
          <TopperCard 
          Image={"/images/toppers/topper1.jpg"}
          Name={"Sanjib Mishra"}
          Rank={"011"}
          Quote={"In the End We Only Regret the Chances We Didn’t Take"}
          />
        </div>
    </div>
  )
}

export default ToppersSection