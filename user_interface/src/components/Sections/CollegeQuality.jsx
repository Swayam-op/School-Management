import React from 'react'
import { Link } from 'react-router-dom'

const CollegeQuality = () => {
  return (
    <div className=''>
<section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-stone-700 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"> <span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-800 to-stone-800'>BEST THINGS OF SCHOOL</span> </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700'>Shooting Stars</span> </h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <Link to='/' className="overflow-hidden text-amber-700  group relative inline-flex  items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          <span className=" bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-16 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span>

        </Link>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700'>The Catalyzer</span></h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <Link to='/' className="overflow-hidden group relative  text-amber-700  inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          <span className=" bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-16 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span>
        </Link>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700'>Neptune</span></h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <Link to='/' className="overflow-hidden group  relative  text-amber-700 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          <span className=" bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-16 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span>
        </Link>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2"><span className='bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-stone-700'>Melanchole</span></h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <Link to='/' className="overflow-hidden group relative text-amber-700  inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
          <span className=" bg-blue-600 h-0.5 w-full invisible  absolute bottom-0 right-0 -translate-x-16 transition-transform duration-500 group-hover:translate-x-0 group-hover:visible "></span>
        </Link>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-gradient-to-r from-amber-700 to-stone-700 border-0 py-2 px-8 focus:outline-none  rounded text-lg hover:bg-gradient-l hover:from-stone-700 hover:to-stone-800">Explore More</button>
  </div>
</section>

    </div>
  )
}

export default CollegeQuality
