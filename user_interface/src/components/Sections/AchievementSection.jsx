import React from 'react'
import AchievementCard from '../Cards/Achievement_Card'
import {DiSwift} from 'react-icons/di'; 
const AchievementSection = () => {
  return (
    <div className='w-full pt-16 pb-10  md:px-28 px-2 '>
        <h1 className='md:text-4xl text-3xl font-bold text-center lg:mb-12 mb-8'><span className='text-primary '>ACHIEVEMENTS</span> </h1>
        
        <div className='w-full grid md:grid-cols-3 grid-cols-1 gap-8 '>
        <AchievementCard Image={"/images/achievements/success.jpg"} Title={"100% Successful Result"}/>
        <AchievementCard Image={"/images/achievements/projectachievment.jpg"} Title={"International Project By Students"}/>
        <AchievementCard Image={"/images/achievements/bestschool.jpg"} Title={"Best School Award"}/>
        </div>
    </div>
    
  )
}

export default AchievementSection