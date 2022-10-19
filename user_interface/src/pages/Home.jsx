import React from 'react'
import Courosol from '../components/Tools/Courosol'
import AchievementSection from '../components/Sections/AchievementSection'
import ToppersSection from '../components/Sections/ToppersSection'
import QualityEducation from '../components/Sections/QualityEducation'
import CollegeQuality from '../components/Sections/CollegeQuality'
import ADSection from '../components/Sections/ADSection'
import Testimonial from '../components/Sections/Testimonial'
import ADSection2 from '../components/Sections/ADSection2';
import Footer from '../components/Tools/Footer'
const Home = () => {
  return (
    <>
    <div className='w-full relative bg-stone-50' >
   
    <Courosol/>
    <div className='sections w-full'>
    <AchievementSection/>
    <ADSection/>
    <ToppersSection/>
    <QualityEducation/>
    <CollegeQuality/>
    <div className='px-28 py-4 bg-white shadow-md'><Testimonial/></div>
    <ADSection2/>
    </div>
    <Footer/>
    </div>
    
    
    </>
  )
}

export default Home