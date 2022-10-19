import React from 'react'

const CategoryCard = ({teacherName,classNo}) => {
  return (
    <div className='w-full group cursor-pointer  shadow-md shadow-gray-500 rounded-sm flex bg-primary bg-opacity-95 '>
        <div className='basis-1/3 overflow-hidden'>
            <div className='group-hover:scale-125 transition-transform ease-in duration-200 w-full  h-full bg-cover bg-center' style={{backgroundImage: "url('/images/classPic.jpg')"}} ></div>
        </div>
        <div className='basis-2/3 pl-4 pr-1  py-5 text-amber-50'>
          <h1 className='text-xl font-bold mb-3'>Class {classNo}</h1>
          <h1 className='text-xs font-medium'>Students : 24</h1>
          <h1 className='text-xs font-medium'><span className='inline'>C.T : </span> <span className='inline'>{teacherName}</span> </h1>
        </div>
    </div>
  )
}

export default CategoryCard