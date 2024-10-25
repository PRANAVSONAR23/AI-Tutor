import React from 'react'

const Properties = ({properties}) => {
  return (
    <div className='flex flex-col items-center  ml-14 mr-14 mt-6 p-2 rounded-lg shadow-lg '>
        <div className='mt-6 text-5xl'>
        <p>{properties.icon}</p>
        </div>
        <div className='font-stolzl font-medium mt-4 text-[#1F2937] text-2xl'>
            <h1>{properties.title}</h1>
        </div>
        <div className='text-center text-[#4B5563] font-s   tolzl  pl-3 pr-3 font-medium text-base  mt-3 mb-6 leading-6'>
            <p>{properties.content}</p>
        </div>
    </div>
  )
}

export default Properties