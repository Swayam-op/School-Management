import React from 'react'
import CategoryCard from '../components/Cards/CategoryCard'
import classList from '../DataApi/classApi'
import { Link } from 'react-router-dom'
const Database = () => {
  return (
    <div className='bg-stone-50 md:px-16 px-2 py-10 '>
        <h1 className='text-center text-4xl font-bold mt-5 mb-8'><span className='text-primary font-bold'>DATABASES</span></h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-5'>
          {
            classList.map((curElem,index)=>{
              return (
                <Link to={'/databases/'+ curElem.classId}><div key = {index}>
                <CategoryCard teacherName={curElem.teacheName} classNo={curElem.classId}/>
                </div>
                </Link>
              )
            })
          }
           {/* <CategoryCard teacherName={"Shradha patel"} classNo={"1"}/> */}
        </div>
    </div>
  )
}

export default Database