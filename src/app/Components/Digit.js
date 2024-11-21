import React from 'react'
import Image from 'next/image'
import aboutrect from '../../../public/images/aboutrect.png'
import { LuCircle } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";





const Digit = () => {
  return (
    <>
    <div className=' md:px-8 lg:px-16 xl:px-32 xxl:px-64 lg:py-24 py-10'>
         <div className=' mt-4 bg-hero-about lg:h-[900px] lg:w-[1180px] rounded-2xl bg-black'>
         <h1 className=' px-6 py-6 lg:text-[48px] font-bold text-white items-center'>Real-world examples of how we have helped 
         companies achieve their marketing objectives.</h1>
         <div className='mx-6 lg:mx-24 flex flex-wrap gap-6 justify-center lg:justify-start lg:flex-nowrap'>
    <button className='border-2 px-6 py-1 text-white rounded-xl'>
        All work[20]
    </button>
    <button className='border-2 px-6 py-1 font-bold rounded-xl bg-green-400'>
        UI/UX Design[10]
    </button>
    <button className='border-2 px-6 py-1 text-white rounded-xl'>
        Digital Marketing[5]
    </button>
    <button className='border-2 px-6 py-1 text-white rounded-xl'>
        Branding [5]
    </button>
</div>


        {/* image 3 */}
        <div className='py-6 px-6 gap-5 flex lg:flex-nowrap flex-wrap'>
   {/* 1st Image Section */}
<div className="bg-hero-circle flex-shrink-0 lg:h-[440px] md:h-[300px] h-[200px] lg:w-[440px] md:w-[300px] w-[200px] relative rounded-full flex items-center justify-center">
  {/* Circle Icon Component */}
  <LuCircle className="lg:h-[100px] flex-shrink-0 lg:w-[100px] h-[50px] w-[50px] bg-green-400 rounded-full text-transparent absolute" />
  
  {/* Text Inside Circle */}
  <p className="text-black flex-shrink-0 text-center lg:text-[20px] text-[10px] font-semibold z-10">
    See Detail
  </p>
</div>



{/* 2nd Image Section */}
<div className="bg-hero-dribble bg-cover bg-center lg:h-[400px] md:h-[350px] h-[250px] w-full text-white relative mb-0">
  <p className="font-bold lg:px-12 lg:py-12 px-6 py-6 absolute top-6 left-6">
    ___All corporates 2024
  </p>
  <p className="font-bold lg:px-12 lg:py-12 sm:py-12 py-12 absolute bottom-6 left-6">
    Ai Wave - Ai Chatbot Mobile App
  </p>
</div>

{/* 3rd Image Section */}
<div className="bg-hero-dribble bg-cover bg-center lg:h-[400px] md:h-[350px] h-[250px] w-full text-white relative mt-0">
  <p className="font-bold px-6 py-6 absolute top-6 left-6">
    ___Lancer Corporation. 2023
  </p>
  <p className="font-bold lg:px-12 lg:py-12 sm:py-12 py-12 absolute bottom-6 left-6">
    App Lancer - Freelance Mobile App
  </p>
</div>

</div>

   {/* */}
   <div className='bg-gray-100'>
  <p className='font-bold lg:text-[30px] py-12 px-6'>“ They thoroughly analyze our industry and target audience, allowing them to 
  develop customized campaigns that effectively reach and engage our
   customers.Their creative ideas and cutting-edge techniques have helped us stay ahead of the competition.”</p>

   <div className='flex justify-between px-6 py-6 lg:flex-wrap flex-wrap'>
<div className='flex gap-2 '>
<LuCircle className='text-gray-200 h-[50px] w-[50px] bg-gray-200 rounded-full' />
<p className='font-bold'>Michael Kaizer <br/>CEO of Basecamp Corp</p>
   </div>
   <div className='flex items-center gap-2  font-bold mt-2'>
     
     <button className='border-2 px-3 py-1 text-black rounded-2xl '><FaArrowLeft /></button>
     <p className='font-bold'>01/05</p>
     <button className='border-2 px-3 py-1 text-white rounded-2xl bg-black '><FaArrowRight/> </button>

   </div>
</div>
   </div>

           </div>
           </div>

    
    
    </>
  )
}

export default Digit