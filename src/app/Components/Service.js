import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";



const Service = () => {
  return (
      <>
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 xxl:px-64'>
<div className='grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:pt-32'>
    <div className='lg:mt-8'>
        <h1 className='font-bold lg:text-[36px]'>Digital Marketing FAQs</h1>
        <p className='font-semibold'>As a leading digital marketing agency, we are dedicated to providing<br/>
             comprehensive educational resources and answering frequently<br/>
             asked questions to help our clients.</p>
             <div className='flex gap-12 mt-12 items-center'>
                 <button className=' border-2 py-2 lg:px-12 px-2 rounded-full items-center font-bold'>More Question</button>
                 <p className='font-semibold items-center underline'>Contact us</p>
             </div>
             
    </div>
    <div className='mt-12'>
    <div className='flex  border-t-2 justify-between'>
    <h1 className='font-bold lg:text-[24px]'>Why is digital marketing important for my business?</h1>
    <p className='font-bold text-[36px]'>_</p>
    </div>
    <div>
        <p>Digital marketing allows businesses to reach and engage with a wider<br/>
         audience, generate leads, drive website traffic, and increase brand visibility<br/>
          It provides measurable results, allows for targeted marketing efforts, and<br/>
           enables businesses to adapt and optimize their strategiesbased on data and insights.</p>
    </div>
    <div className='flex justify-between border-t-2 mt-4'>
    <h1 className='font-bold lg:text-[24px]'>How can digital marketing help improve my website's visibility?</h1>
    <p className='font-bold text-[36px]'>+</p>
</div>
    <div className='flex justify-between border-t-2 mt-4'>
    <h1 className='font-bold lg:text-[24px]'>How long does it take to see results from digital marketing efforts?</h1>
    <p className='font-bold text-[36px]'>+</p>
</div>
<div className='flex justify-between border-y-2 mt-4'>
    <h1 className='font-bold lg:text-[24px]'>How do you measure the success of digital marketing campaigns?</h1>
    <p className='font-bold text-[36px]'>+</p>
</div>

    </div>
    </div>
    {/* digitatMarketing */}
    
    <div className='bg-gray-100 mt-6 lg:flex-nowrap flex-wrap'>
        <div className='flex py-12 lg:flex-nowrap flex-wrap'>
            <p className='font-bold lg:text-[40px] px-3'>Digital Marketing & SEO ServicesThat Grow Traffic & Increase Revenue</p>
            <div>
            <p className='lg:font-bold px-3'>We are the top digital marketing agency for  branding corp. We offer a full
                 range of services to help clients improve their search engine rankings and
                  drive more traffic to their websites.</p>
                  <p className='py-6 px-6'>
                  <button className="px-5 py-1  border-2 rounded-full">See more</button>
                  </p></div>

                  </div>
                  
                  <div className='flex lg:flex-nowrap flex-wrap'>
    <div className='bg-white h-[310px] w-[480px] rounded-2xl mx-5'>
        <div className='flex justify-between'>
        <p className=' px-4 py-3 text-blue-300 w-[14px] h-[14px] '><GoDotFill /></p>
        <p className='font-semibold px-4 py-3'>5 min read</p>
        </div>
        <h1 className='font-bold px-4 py-2'>How a Digital Marketing Agency Can Boost Your Business</h1>
        <div className='flex justify-between px-2 lg:py-12 gap-4  lg:flex-nowrap flex-wrap'>
            < p className='font-semiboldtext-[14px] text-center'> We are the top digital marketing agency for  branding corp. We offer a full rang  engine </p>
            <button className='border lg:h-[34px] lg:w-[100px] h:[34px] w-[50px] px-4 rounded-full text-white items-center bg-black mt-6'><FaArrowRight/> </button>

        </div>
    </div>
    <div className='bg-white h-[310px] w-[480px] rounded-2xl mx-5'>
    <div className='flex justify-between'>
        <p className=' px-4 py-3 text-orange-300 w-[14px] h-[14px] '><GoDotFill /></p>
        <p className='font-semibold px-4 py-3'>5 min read</p>
        </div>
        <h1 className='font-bold px-4 py-2'>The Latest Trends and Strategies with a Digital Marketing Agency</h1>
        <div className='flex justify-between px-2 lg:py-12 gap-4 lg:flex-nowrap flex-wrap'>
            < p className='font-semibold text-[14px] text-center'> Working with this digital marketing agency has been a true partnership. They have taken the time to understand our business and industry </p>
            <button className='border lg:h-[34px] lg:w-[100px] h:[34px] w-[50px] px-4 rounded-full  items-center mt-6'><FaArrowRight/> </button>

        </div>
    </div>
    <div className='bg-white h-[310px] w-[480px] rounded-2xl mx-5'>
    <div className='flex justify-between'>
        <p className=' px-4 py-3 text-green-300 w-[14px] h-[14px] '><GoDotFill /></p>
        <p className='font-semibold px-4 py-3'>5 min read</p>
        </div>
        <h1 className='font-bold px-4 py-2'>Maximizing ROI with the Expertise of a Digital Marketing Agency</h1>
        <div className='flex justify-between px-2 lg:py-12 gap-4  lg:flex-nowrap flex-wrap'>
            < p className='font-semibold text-[14px] text-center'>What sets this digital marketing agency apart is their commitment to transparency and collaboration. They keep us informed every step of the way,</p>
            <button className='border lg:h-[34px] lg:w-[100px] h:[34px] w-[50px] px-4 rounded-full  items-center mt-6'><FaArrowRight/> </button>

        </div>
    </div>
    </div>

    </div>
    </div>
    </>
    


  )
}

export default Service;