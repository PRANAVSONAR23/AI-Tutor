import React from 'react'
import Logo from '../components/Logo'
import CourseCard from '../components/CourseCard'
import Footer from '../components/Footer'
import Properties from '../components/Properties'
import ExpandableImageGallery from '../components/ExpandableImageGallery'

const HomeMobile = () => {

    const courses=[
        {
            id:1,
            img:"/question.svg",
            title:"Complete Test Series",
            content:"Full-length mock tests simulating the actual NEET UG exam"
        },
        {
            id:2,
            img:"/book.svg",
            title:"Subject Modules",
            content:"In-depth coverage of Physics, Chemistry, and Biology"
        },
        {
            id:3,
            img:"/brain2.svg",
            title:"Review Tests",
            content:"Targeted tests to reinforce your learning and identify weak areas"
        }
    ]

    const properties=[
        {
            id:1,
            icon:"🎯",
            title:"Targeted Practice",
            content:"Customized tests based on your performance"
        },
        {
            id:2,
            icon:"📊",
            title:"In-depth Analytics",
            content:"Detailed insights into your strengths and weaknesses"
        },
        {
            id:3,
            icon:"💬",
            title:"AI Discussions",
            content:"Engage with our bot to clarify doubts"
        },
        {
            id:4,
            icon:"📈",
            title:"Progress Tracking",
            content:"Monitor your improvement over time"
        }
    ]
  return (
    <div>
        <nav className='flex items-center justify-between mt-5  pl-6 pr-6  '>
            <Logo/>
            <div className='h-8 w-9 flex justify-center items-center'>
              <img src='/toggle.svg'/>
            </div>
        </nav>
        <div className='flex flex-col gap-3 justify-end items-start pl-6 mt-[76px] font-medium  self-stretch font-stolzl text-5xl'>
            <h1>Aim.</h1>
            <h1>Learn.</h1>
            <h1>Grow.</h1>
        </div>
        <div className=' ml-6 overflow-hidden mt-6  '>
            <ExpandableImageGallery/>
        </div>
        <div className='ml-5 mt-6  flex bg-white ' >
            <div className='w-[296px]  h-[89px]   mt-2 text-[#8A8A8A] font-stolzl flex shadow-sm justify-center items-center '>
                <input placeholder='Search Tests' className='p-4 w-full h-full  ml-16 text-xl text-[#8A8A8A] font-medium'/>
            </div>
            <div className=' flex mt-2 w-[86px] justify-center bg-[#387975] text-white font-stolzl text-3xl'>
                <button>Go</button>
            </div>
        </div>
        <div className='ml-5 mt-5  text-center text-[#93A7A5] font-stolzl font-[400] text-base'>
            <h1>NEET PG</h1>
        </div>
        <div className='ml-5 text-center font-medium text-4xl mt-[3px] text-[#09090B] font-stolzl '>
            <h1>Our courses</h1>
        </div>
        <div className='mt-6'>
            {
             courses.map((course)=>(
               <div key={course.id}>
                <CourseCard courses={course} />
               </div>
             ))
            }
        </div>
        <div className='ml-7 mr-8  mt-12'>
            <div>
                <h1 className='w-full font-medium  text-[#09090B] font-stolzl text-4xl  '>AI-powered<br/>discussion</h1>
            </div>
            <div className='mt-4 text-[#71717A] font-stolzl leading-9'>
                <p>Engage with our advanced AI to discuss complex topics, get in-depth explanations, and receive personalised guidance on your NEET preparation journey.</p>
            </div>
        </div>
        <div className=' ml-8 mr-7 h-72 mt-6 rounded-lg shadow-lg flex justify-center items-center'>
            <img src='/' alt='img' />
        </div>
        <div className='mt-5 ml-7 font-medium font-stolzl flex flex-col gap-2'>
            <div className='flex gap-2 justify-start items-center'>
                <img src='/chat.svg' alt='img'/>
                <h2>Real-time doubt clearing</h2>
            </div>
            <div className='flex gap-2 justify-start items-center'>
                <img src='/brain3.svg' alt='img'/>
                <h2>Conceptual explanations</h2>
            </div>
            <div className='flex gap-2 justify-start items-center'>
                <img src='/search.svg' alt='img'/>
                <h2>Personalized study recommendations</h2>
            </div>
        </div>

        <div className='mt-10 ml-5 flex justify-center items-center '>
            <button className='pt-[10px] pb-[10px] pl-[16px] pr-[16px] rounded-md bg-[#387975]  font-stolzl text-[#FAFAFA] text-base'>Try AI Discussion</button>
        </div>
        <div className='mt-12 ml-14 mr-14  text-4xl font-stolzl font-normal  flex justify-center items-center '>
            <p>Why Choose us?</p>
        </div>

        <div>
            {
             properties.map((prop)=>(
               <div key={prop.id}>
                <Properties properties={prop} />
               </div>
             ))
            }
        </div>
        <Footer/>
    </div>
  )
}

export default HomeMobile