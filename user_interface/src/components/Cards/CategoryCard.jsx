import React from 'react'

const CategoryCard = () => {
  return (
    <div className='w-full group cursor-pointer bg-white shadow-md rounded-sm flex bg-gradient-to-tr from-stone-700 to-stone-800 '>
        <div className='basis-1/3 overflow-hidden'>
            <div className='group-hover:scale-125 transition-transform ease-in duration-200 w-full  h-full bg-cover bg-center' style={{backgroundImage: "url('/images/classPic.jpg')"}} ></div>
        </div>
        <div className='basis-1/2 pl-4 pr-2  py-5 text-amber-50'>
          <h1 className='text-xl font-bold mb-3'>Class 1</h1>
          <h1 className='text-xs font-medium'>Students : 24</h1>
          <h1 className='text-xs font-medium'><span className='inline'>C.T : </span> <span className='inline'>Shradha Mam</span> </h1>
        </div>
    </div>
  )
}

export default CategoryCard