import React from 'react'
import { DiSwift } from 'react-icons/di';
import TopperCard from '../Cards/TopperCard';
const ToppersSection = () => {
  return (
    <div className='relative w-full py-16  md:px-28 px-2 bg-cover bg-repeat '>
        <h1 className='md:text-4xl text-3xl font-bold text-center lg:mb-12 mb-6'><span className='text-primary'>OUR TOPPERS</span> </h1>
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