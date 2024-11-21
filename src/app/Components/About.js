import React from 'react'
import Image from 'next/image'
import aboutimg from '../../../public/images/aboutimg.png'
import aboutrect from '../../../public/images/aboutrect.png'
import { FaRegCircle } from "react-icons/fa";
import  circle from "../../../public/images/circleabout.png"
import { GiPlayButton } from "react-icons/gi";

function About() {
  return (
  <>
        <div className='px-4  md:px-8 lg:px-16 xl:px-32 xxl:px-64'>
          <div className='lg:flex gap-x-10 '>
            
              <p className='font-bold lg:w-1/2 w-full lg:text-[40px] px-6'>Provide the best service with out of the box ideas</p>
              
          
              <p className='font-semi-bold lg:w-1/2 w-full lg:text-[20px]'>we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed
               in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</p>
            </div>

          
  


<div className=' px-6 flex gap-6 justify-between lg:flex-nowrap flex-wrap'>
  <div className='bg-hero-about mt-4 w-[338px] h-[382px] bg-black rounded-3xl'>
                <div className='flex px-8 py-3 text-white text-[56px]'>
                <p className='px-'>920</p>
                <p className='text-green-400'>+</p>
                </div>
                <p className='text-white px-4'>Project finish with superbly</p>
                <div className='flex items-center h-[420px] px-5 gap-x-1'>
                <FaRegCircle className='text-gray-300 text-[32px] bg-gray-300 rounded-full' />
                <FaRegCircle className='text-gray-300 text-[32px] bg-gray-300 rounded-full' />
                <FaRegCircle className='text-gray-300 text-[32px] bg-gray-300 rounded-full' />
                <FaRegCircle className='text-gray-300 text-[32px] bg-gray-300 rounded-full' />
                <p className=' text-green-300 text-[35px]'>+</p>
                </div>
                </div>

                <div className="bg-hero-rectangle mt-4 w-[810px] h-[372px] bg-gray-300 rounded-3xl flex flex-col justify-center items-center relative">
  
  <p className="text-[30px] font-bold text-white lg:text-[48px]">How we work</p>

  {/* This div uses absolute positioning to place the image towards the bottom-right corner */}
  <div className="absolute bottom-0 -right-2 -mb-4 flex justify-center items-center">
  <div className="relative flex justify-center items-center">
    <Image src={circle} alt="Circle" width={90} height={80} />
    <p className="absolute flex justify-center items-center">
      <GiPlayButton size={40} color="black" />
    </p>
  </div>
</div>

</div>

        
              </div>
              </div>
              
   
    
                    
                  </>
  )
}

export default About