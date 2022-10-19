import React from 'react'

const ADSection = () => {
  return (
    <div className='relative w-full md:h-96 h-auto flex md:flex-row flex-col  body-font border shadow-sm  ' >
        <div className='w-full h-full '>
            <img src="/images/classroom.jpg" className='w-full h-full' alt="" />
        </div>
        <div className='z-50 w-full md:grow h-full flex flex-col justify-center box-border px-6 sm:px-12'>
            <h1 className='w-full text-4xl py-4'><span className='bg-clip-text text-transparent bg-primary font-bold'>Beautiful Study Environment </span></h1>
            <p className='mb-8 leading-relaxed text-gray-600 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iure ipsum dolorum pariatur ex sit sunt voluptatem, voluptate non molestias animi veniam voluptatibus obcaecati dolor enim possimus dignissimos vero beatae facere provident tempore consequatur!</p>
            <div className="flex justify-center mb-4">
             <button className="inline-flex text-white shadow-md shadow-gray-500 bg-primary hover:bg-primary-text transition-all duration-300 text-lg py-2 px-3 rounded-md">Know more about Teacher</button>
              </div>
        </div>
        <div className='absolute inset-0 bg-black bg-opacity-10'></div>
    </div>
  )
}

export default ADSection