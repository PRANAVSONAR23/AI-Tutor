import React from 'react'

const CourseCard = ({courses}) => {
  return (
    <div className='flex flex-col items-center justify-center  rounded-lg shadow-lg h-44 '>
        <div className='mt-4'>
         <img src={courses.img} alt='img'/>
        </div>
        <div className='font-stolzl font-medium text-base mt-4 text-[#09090B] '>
            <h1>{courses.title}</h1>
        </div>
        <div className='text-center  text-[#71717A] font-stolzl p-2 font-medium w-full text-base '>
            <p className='ml-10 mr-10 '>{courses.content}</p>
        </div>
    </div>
  )
}

export default CourseCard