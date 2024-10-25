import React from 'react';
import { BookOpen, Brain, ChevronRight } from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import ExpandableImageGallery from '../components/ExpandableImageGallery';
import CourseCard from '../components/CourseCard';
import Properties from '../components/Properties';
import Footer from '../components/Footer';



const Home = () => {

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
    <>
    <div className="w-full max-w-7xl mx-auto p-3 relative ">
      <header className="flex justify-between items-center mb-8 sticky top-0 z-20 h-[10vh] bg-white">
        <Logo/>
        <nav className="flex items-start gap-12">
          <Link to="/" className="text-[#484848] font-stolzl text-base font-medium">Home</Link>
          <Link to="/" className="text-[#484848] font-stolzl text-base font-medium">Courses</Link>
          <Link to="/" className="text-[#484848] font-stolzl text-base font-medium">Tests</Link>
          <Link to="/" className="text-[#484848] font-stolzl text-base font-medium">AI-Discuss</Link>
          <Link to="/login" className="text-[#484848] font-stolzl text-base font-medium">Sign in</Link>
        </nav>
      </header>

      <main>
        <div className='w-full   flex item-center justify-between mb-12 '>
         <div className='flex-col items-start relative  mt-[15vh] ml-10 '>
         <div className='flex flex-col gap-4 justify-end items-start font-medium  self-stretch font-stolzl text-7xl mt-4'>
            <h1>Aim.</h1>
            <h1>Learn.</h1>
            <h1>Grow.</h1>
        </div>
          <div className='flex bg-white absolute z-10  mt-4  ' >
            <div className='w-80 h-[89px]    text-[#8A8A8A] font-stolzl flex shadow-sm justify-center items-center '>
                <input placeholder='Search Tests' className='p-4 w-full h-full  px-12 text-xl text-[#8A8A8A] font-medium'/>
            </div>
            <div className=' flex  w-[86px] justify-center bg-[#387975] text-white font-stolzl text-3xl items-center'>
                <button>Go</button>
            </div>
        </div>

         </div>
         <div className=' bg-[#FAF9F8]'>
          <ExpandableImageGallery/>
         </div>
        </div>
        <div className='mt-32'>
          <div>
            <h1 className='text-[#09090B] text-center font-stolzl font-medium text-5xl leading-10'>Our Courses</h1>
          </div>
          <div className='flex justify-center items-center mt-16 bg-[#FFF]  w-full h-7 pl-14 pr-14 rounded-lg shadow-md shadow-gray-400/10 border-gray-300 border-2'>
            <h3 className='text-[#09090B] font-stolzl text-base font-medium leading-5'>Neet PG</h3>
          </div>
          <div className='mt-6 flex  w-full items-center gap-6'>
          {
             courses.map((course)=>(
               <div key={course.id} className='w-1/3'>
                <CourseCard courses={course} />
               </div>
             ))
            }
          </div>
        </div>
        <div className='pt-32 pb-32 flex items-center justify-center'>
          <div>
          <div>
              <h1 className='w-full font-medium  text-[#09090B] font-stolzl text-5xl  '>AI-powered discussion</h1>
          </div>
          <div className='mt-4 text-[#71717A] font-stolzl leading-9 w-4/5'>
              <p>Engage with our advanced AI to discuss complex topics, get in-depth explanations, and receive personalised guidance on your NEET preparation journey.</p>
          </div>
          <div className='mt-5  font-medium font-stolzl flex flex-col gap-2'>
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
         <div className='mt-10  flex justify-start items-center '>
            <button className='pt-[10px] pb-[10px] pl-[16px] pr-[16px] rounded-md bg-[#18181B]  font-stolzl text-[#FAFAFA] text-base'>Try AI Discussion</button>
         </div>
          </div>
          <div className='brdr'>
            <div className='w-[600px] h-[410px]'>
              img
            </div>
          </div>
        </div>
       
      </main>
       
    </div>
    <div className='bg-[#F4F4F5] pt-16 pb-20 flex flex-col items-center '>
        <div className='text-4xl font-stolzl flex justify-center items-center font-medium leading-3'>
            <p>Why Choose MED Minds?</p>
        </div>
        <div className='max-w-7xl flex  items-center gap-6'> 
            {
             properties.map((prop)=>(
               <div key={prop.id} className='w-1/4 bg-[#fff] mt-10 rounded-[8px]'>
                <Properties properties={prop} />
               </div>
             ))
            }
        </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;