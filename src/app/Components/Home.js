import React from 'react'
import Image from 'next/image'
import blog from '../../../public/images/Blog3.png'
import maze from '../../../public/images/maze.png'
import after from '../../../public/images/after.png'
import base from '../../../public/images/Basecamp.png'


import rectangle from '../../../public/images/rectangle.png'
import arrow from '../../../public/images/arrow-up.png'
import { Arrow } from '../../../public/icons/icons'
import aboutimg from '../../../public/images/aboutimg.png'
import { IoMdCall } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";





function Home() {
  return (
      <>
     <div className='px-4  md:px-8 lg:px-16 xl:px-32 xxl:px-64 lg:py-24 py-10'>
     <div className='flex justify-between lg:flex-nowrap flex-wrap lg:text-start text-center'>
       <div className=''>
       <p className='lg:text-[30px] md:text-[20px] font-bold'>Stay ahead of the<br/> 
       curve with our<br/> forward-thinking </p>
       <p className='font-semibold'>An award-winning SEO agency with disciplines in digital marketing,<br/>
               design, and website development. focused on understanding you.</p>
               <div className='flex items-center lg:py-24 gap-6' >
                 <div className='flex gap-2 items-center border-2 text-white rounded-full bg-black py-2 lg:px-3'>
                 <button className=''>Schedule Call</button>
                 <FaArrowRight/>
                 </div>
                 <p className='font-bold underline'>ViewCase study</p>
                 </div>
                 <div className='flex gap-3 lg:flex-nowrap flex-wrap'>
                  <p className='font-bold'>Trusted by the world biggest brands</p>
                  <p><Image src={base} className="bg-white w-14 h-33 mt-2"/></p>
                  <p><Image src={after} className="bg-white w-14 h-33 mt-2"/></p>
                  <p><Image src={maze} className="bg-white w-14 h-33 mt-1"/></p>
                   
                </div>
       </div>
       {/* Right */}
       <div className=''>
       <div className='flex gap-3 mt-3 lg:flex-nowrap flex-wrap'>
       <div className="relative">
       <Image 
  src={rectangle} 
  className="h-[275px] w-[300px] relative" 
  alt="Rectangle Image" 
/>

{/* Circle background with arrow image inside */}
<div className='w-20 h-20 bg-black rounded-full absolute top-[-2%] right-3 left-16 transform flex items-center justify-center'>
  <Image 
    src={arrow} 
    className='w-8 h-8'  // Adjust the size of the arrow inside the circle
    alt="Arrow Image"
  />
</div>






</div> 
       <div className='border-2 bg-gray-200  w-[300px] h-[270px] rounded-2xl'>
            <p className='lg:h-[140px] lg:w-[100px] border bg-gray-200 px-12  text-[84px]'>230+</p>
            <p className='font-semibold lg:px-6 text-[16px] font-semibold'>some big companies that we work with, and trust us very much</p>
          </div>
          </div>
          <div className=' bg-hero-about mt-4 lg:w-[588px] lg:h-[218px] bg-black rounded-2xl px-6 py-4 lg:mx-6 '>
          <span className='text-white text-[14px] items-center px-3 '>_____Drive More Traffic Solid</span>
          <div className='flex lg:flex-nowrap flex-wrap items-center justify-between'>
          <p className='text-white font-bold lg:text-[26px] text-[14px] px-8'>Drive more traffic<br/> and product sales </p>
          {/* <HiChartBar className='text-green-300 w-[200px] flex justify-end items-end h-[150px] mt-12'/> */}
          <div className='flex gap-x-[10px] items-end justify-end'>
          <div className='w-[69px] h-[95px] bg-[#BAE289]'></div>
          <div className='w-[69px] h-[136px] bg-[#99CF63]'></div>
          <div className='w-[69px] h-[166px] bg-[#77B248]'></div>
          </div>
          </div>


          </div>
      
       </div>
       
       
     </div>
     </div>
            
      
          
      
    </>
  )
}

export default Home;