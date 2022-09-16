import React from 'react'
import CategoryCard from '../components/Cards/CategoryCard'

const Database = () => {
  return (
    <div className='bg-stone-50 md:px-16 px-2 py-10 '>
        <h1 className='text-center text-4xl font-bold mt-5 mb-8'><span className='bg-clip-text text-transparent bg-gradient-to-tr from-amber-700 to-stone-700'>DATABASES</span></h1>
        <div className='grid grid-cols-4 gap-5'>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
           <CategoryCard/>
        </div>
    </div>
  )
}

export default Database