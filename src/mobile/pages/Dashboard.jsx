import React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@/components/ui/button'
import { Accordian } from '../components/Accordian'



const upcomingTests = [
    {
      title: "Pathology Mock Exam",
      time: "Scheduled for: Tomorrow, 10:00 AM"
    },
    {
      title: "Pathology Mock Exam",
      time: "Scheduled for: Tomorrow, 10:00 AM"
    },
    {
      title: "Pathology Mock Exam",
      time: "Scheduled for: Tomorrow, 10:00 AM"
    }
  ]

const Dashboard = () => {
  return (
    <div className=' mx-auto  max-w-sm ' >
     <div>
        <Navbar/>
     </div>
     <div className="  flex  gap-7  flex-row ">
          <div className=" px-4 rounded-lg shadow-sm  border h-fit ">
            <div className="flex justify-between font-stolzl text-xs mb-1  items-center relative mt-4">
              <h6 className=" font-medium mr-3">Total Tests Taken</h6>
              <img src="/file.svg" className='top-0 right-0 absolute mt-2'/>
            </div>
            <h4 className="text-xs font-stolzl font-medium mt-4">24</h4>
            <p className="text-gray-500 font-stolzl text-xs font-thin mt-4 mb-4">+10% from last month</p>
          </div>
          <div className=" px-4 rounded-lg shadow-sm  border h-fit ">
            <div className="flex justify-between font-stolzl text-xs mb-1  items-center relative mt-4">
              <h6 className=" font-medium mr-2">Average Score</h6>
              <img src="/graph.svg" className='top-0 right-0 absolute mt-2'/>
            </div>
            <h4 className="text-xs font-stolzl font-medium mt-8">76%</h4>
            <p className="text-gray-500 font-stolzl text-xs font-thin mt-4 mb-4">+5% from last month</p>
          </div>
          <div className=" px-4 rounded-lg shadow-sm  border h-fit ">
            <div className="flex justify-between font-stolzl text-xs mb-1  items-center relative mt-4">
              <h6 className=" font-medium mr-2">Study Time</h6>
              <img src="/book2.svg" className='top-0 right-0 absolute mt-2'/>
            </div>
            <h4 className="text-xs font-stolzl font-medium mt-8">32 hrs</h4>
            <p className="text-gray-500 font-stolzl text-xs font-thin mt-4 mb-4">+2 hrs from last week</p>
          </div>
        </div>

        {/* upcoming tests */}
        <div className=" p-3 rounded-lg shadow-sm  border mt-6">
          <h6 className="text-xl font-extrabold font-stolzl ">Upcoming Tests</h6>
          <ul className="mt-4 space-y-4 ">
            {upcomingTests.map((test, index) => (
              <li key={index} className="flex justify-between items-center py-3">
                <div>
                  <p className="font-medium font-stolzl text-base">{test.title}</p>
                  <p className="text-gray-500 font-stolzl text-xs">{test.time}</p>
                </div>
                <Button className='bg-[#387975] font-stolzl'>Start Test</Button>
              </li>
            ))}
          </ul>
        </div>

        {/* accordian */}
       <Accordian/>
       <div className="w-full  mt-6 mb-8 ">
        <h5 className="font-stolzl font-bold text-base text-[#09090B]">Test Modules</h5>
        <div className="grid grid-cols-1  gap-4  mt-4">
          {[
            { title: "Complete test module", description: "Full-length mock exams covering all subjects" },
            { title: "Subject modules", description: "Focus on specific subjects or topics" },
            { title: "Review tests", description: "Revisit and reinforce previously learned concepts" },
          ].map((module, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border ">
              <div className="flex justify-between">
                <div>
                  <h6 className="font-stolzl font-medium text-base leading-6">{module.title}</h6>
                  <p className="font-stolzl font-light text-xs leading-4">{module.description}</p>
                </div>
                <button className="text-gray-500">
                  <img src="/arrow.svg"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
     
    </div>
  )
}

export default Dashboard