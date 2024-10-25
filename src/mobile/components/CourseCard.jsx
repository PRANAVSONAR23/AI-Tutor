import React from 'react'

const CourseCard = ({courses}) => {
  return (
    <div className='flex flex-col items-center  ml-7 mr-7 mt-4 p-2 rounded-lg shadow-lg '>
        <div className='mt-6'>
         <img src={courses.img} alt='img'/>
        </div>
        <div className='font-stolzl font-medium text-base mt-4'>
            <h1>{courses.title}</h1>
        </div>
        <div className='text-center ml-6 mr-6 text-[#71717A] font-stolzl  pl-6 pr-6 font-medium '>
            <p>{courses.content}</p>
        </div>
    </div>
  )
}

export default CourseCard