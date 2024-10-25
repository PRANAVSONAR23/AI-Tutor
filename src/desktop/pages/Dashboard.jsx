import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";



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

const subjects = [
  {
    sub: "All Subjects"
  },
  {
    sub: "Physics"
  },
  {
    sub: "Chemistry"
  },
  {
    sub: "Biology"
  }
]


const recentTests = [
  {
    title: "Full Mock Test 5",
    score: 78,
    tag: "All"
  },
  {
    title: "Biology Sectional Test 3",
    score: 85,
    tag: "Biology"
  },
  {
    title: "Chemistry Sectional Test 4",
    score: 72,
    tag: "Chemistry"
  },
  {
    title: "Physics Sectional Test 2",
    score: 68,
    tag: "Physics"
  },
  {
    title: "Full Mock Test 4",
    score: 75,
    tag: "All"
  },

]

const upcommingTest = [
  { name: "Advanced Pathology", description: "Strengthen your understanding of disease processes" },
  { name: "Clinical Pharmacology", description: "Improve your knowledge of drug interactions and therapeutics" },
  { name: "Diagnostic Radiology", description: "Enhance your skills in interpreting medical imaging" },
]


const Dashboard = () => {
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");


  const filteredTests = recentTests.filter(test =>
    selectedSubject === "All Subjects" || test.tag === selectedSubject
  );



  return (
    <div className="max-w-7xl w-full pb-7 pl-7 pr-7 mx-auto ">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mr-8 mt-10 ">


        {/* Total Tests Taken, Average Score, Study Time */}
        <div className="  flex md:flex-col gap-7 ml-4 sm:flex-row ">
          <div className=" p-4 rounded-lg shadow-sm  border ">
            <div className="flex justify-between font-stolzl text-base mb-1">
              <h6 className=" font-medium">Total Tests Taken</h6>
              <img src="/file.svg" />
            </div>
            <h4 className="text-2xl font-stolzl font-semibold mb-2">24</h4>
            <p className="text-gray-500 font-stolzl text-xs font-thin">+10% from last month</p>
          </div>
          <div className=" p-4 rounded-lg shadow-sm  border ">
            <div className="flex justify-between font-stolzl text-base mb-1">
              <h6 className=" font-medium">Average Score</h6>
              <img src="/graph.svg" />
            </div>
            <h4 className="text-2xl font-stolzl font-semibold mb-2">76%</h4>
            <p className="text-gray-500 font-stolzl text-xs font-thin">+5% from last month</p>
          </div>
          <div className=" p-4 rounded-lg shadow-sm  border ">
            <div className="flex justify-between font-stolzl text-base mb-1">
              <h6 className=" font-medium">Study Time</h6>
              <img src="/book2.svg" />
            </div>
            <h4 className="text-2xl font-stolzl font-semibold mb-2">32 Hrs</h4>
            <p className="text-gray-500 font-stolzl text-xs font-thin">+2 hrs from last week</p>
          </div>
        </div>

        {/* Upcoming Tests */}
        <div className=" p-3 rounded-lg shadow-sm  border ">
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

        {/* Recent Tests */}
        <div className="p-3 rounded-lg shadow-sm border">
          <h6 className="text-xl font-extrabold font-stolzl">Recent Tests</h6>
          <p className="text-gray-500 font-stolzl text-xs mt-2">Your performance in the last 5 tests</p>
          <div className="flex justify-between items-center gap-3 mt-4 mb-4 bg-[#F4F4F5] p-1 rounded-lg  ">
            {subjects.map((subject, index) => (
              <span
                key={index}
                className={`cursor-pointer rounded-lg px-2 py-1 ml-1 font-stolzl text-xs ${selectedSubject === subject.sub ? 'bg-[#fff] shadow-md' : ''}`}
                onClick={() => setSelectedSubject(subject.sub)}
              >
                {subject.sub}
              </span>
            ))}
          </div>
          <ul className="space-y-4">
            {filteredTests.map((test, index) => (
              <li key={index} className="flex justify-between items-center  pb-4 font-stolzl text-sm">
                <p className="font-medium">{test.title}</p>
                <p className="font-medium">{`Score: ${test.score}%`}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex item-center mt-8 gap-4">
        {/* Recommended Tests */}
        <div className="col-span-1 md:col-span-2  p-4 rounded-lg shadow-sm border w-4/5 font-stolzl">
          <h6 className="text-xl font-medium">Recommended tests</h6>
          <ul className="mt-4 space-y-4">
            {upcommingTest.map((test, index) => (
              <li
                key={index}
                className={`flex flex-col gap-2 items-start justify-center pb-4 mt-4 ${index !== upcommingTest.length - 1 ? 'border-b' : ''}`}
              >
                <div>
                  <p className="font-medium text-base leading-6">{test.name}</p>
                  <p className="t-medium text-sm leading-5 mt-2">{test.description}</p>
                </div>
                <button className="border px-4 py-2 rounded-lg font-medium font-stolzl text-sm hover:bg-black hover:text-white">
                  Start Test
                </button>
              </li>
            ))}
          </ul>
        </div>


        {/* Performance and Strengths & Weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-stolzl ">
          <div className=" px-4 py-3 rounded-lg shadow-sm border ">
            <h6 className="text-xl font-medium  ">Performance in previous tests</h6>
            <div className="h-52 flex justify-start items-center mt-4  -translate-x-2"> 
              <img src="/graph2.svg" alt="Performance Chart" />
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border font-stolzl">
            <h6 className="text-xl font-medium">Strengths & Weaknesses</h6>
            <div className="h-52 flex justify-center items-center mt-7 ">
              <img src="/graph3.svg" alt="Strengths & Weaknesses Chart" />
            </div>
            <p className="px-10 py-1 text-sm font-medium">Strengths: Cardiovascular, Nervous, Respiratory Systems</p>
            <p className="px-10 py-1 text-sm font-medium">Areas for Improvement: Reproductive, Musculoskeletal, Renal Systems</p>
          </div>
        </div>
      </div>
      {/* Test Modules */}
      <div className="w-full  mt-8 mb-8 ">
        <h5 className="font-stolzl font-bold text-2xl text-[#535756]">Test Modules</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mt-4">
          {[
            { title: "Complete test module", description: "Full-length mock exams covering all subjects" },
            { title: "Subject modules", description: "Focus on specific subjects or topics" },
            { title: "Review tests", description: "Revisit and reinforce previously learned concepts" },
          ].map((module, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border">
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
  );
};

export default Dashboard;
