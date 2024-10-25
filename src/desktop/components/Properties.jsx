import React from 'react'

const Properties = ({properties}) => {
  return (
    <div className='flex flex-col items-center   mt-4 rounded-[8px] shadow-md h-52 '>
        <div className='mt-4 text-5xl'>
        <p>{properties.icon}</p>
        </div>
        <div className='font-stolzl font-medium mt-4 text-[#1F2937] text-2xl w-full flex item-center justify-center'>
            <h1>{properties.title}</h1>
        </div>
        <div className='text-center text-[#4B5563]    tolzl  pl-4 pr-4 font-medium text-base  mt-3 leading-6'>
            <p className=''>{properties.content}</p>
        </div>
    </div>
  )
}

export default Properties