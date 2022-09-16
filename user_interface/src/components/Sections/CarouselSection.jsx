import React from 'react'

const CarouselSection = ({Image,Title,Content}) => {
  return (
    <div className='w-full h-128 relative '>
        <div style={{backgroundImage:Image}} className='absolute inset-0 bg-cover bg-center  '></div>
        <div className='absolute inset-0 bg-black  bg-opacity-40'></div>
        <div className='absolute w-full  bottom-10 flex  items-center flex-col'>
            <h1 className=' text-center font-bold text-white md:text-5xl text-3xl p-2 mb-4 '>{Title}</h1>
            <p className='  text-center text-sm text-white lg:px-32 md:px-24 px-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est porro atque ipsam ipsum repellat suscipit sequi eaque. Totam placeat sint itaque eum sequi, asperiores, enim modi eaque amet nihil blanditiis, quasi adipisci quis similique?</p>
        </div>
    </div>
  )
}

export default CarouselSection