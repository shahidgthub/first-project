import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import {Home} from "../../../public/icons/icons"
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { MdCameraAlt } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FaLocationPin } from "react-icons/fa6";









const Footer = () => {
  return (
      <>
    <div className='px-4  md:px-8 lg:px-16 xl:px-32 xxl:px-64'>
<div className='bg-gray-100 py-6'>

    <div className=' mx-6 bg-hero-about lg:w-[1100px] lg:h-[235px] bg-black rounded-3xl mt-12'>
        <div className='flex justify-between py-12 px-6 lg:flex-nowrap flex-wrap '>
        <p className='font-bold lg:text-[60px] text-white'>Ready to work with us ?</p>
        <div className='text-black flex mx-3 py-5  '>
            <div className='flex border items-center px-6 py-1 rounded-3xl gap-2 bg-white'>
        <button className=' '>Get started </button>
        <FaArrowRight/></div>
        </div>

</div>
    </div>
{/* left */}
    <div className='bg-gray-100 py-6  '>
        <div className='flex justify-between gap-4 lg:flex-nowrap flex-wrap'>
<div>
    <div className='flex mx-3 py-3'>
    <Home/>
    <h1 className='font-bold text-[32px]'>MAC</h1>
    </div>
    <p className='py-12 px-3 py-2'>We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence.
         From SEO and social media marketing to content creation and PPC advertising,
         they have the expertise and resources to handle our diverse marketing needs.</p>
         <div className=' py-2 flex gap-2 px-12'>
         <RiFacebookFill />
         <FaTwitterSquare />
         <TiSocialLinkedin />
         <MdCameraAlt />

         </div>
</div>
{/* right */}
<div className='flex gap-24 py-3 lg:flex-nowrap flex-wrap'>
<div>
    <h1 className='font-bold'>Navigation</h1>
    <p className='lg:py-3'>Service</p>
    <p className='lg:py-3'>Agency</p>
    <p className='lg:py-3'>casestudy</p>
    <p className='lg:py-3'>Resourse</p>
    <p className='lg:py-3'>Contact</p>
</div>

<div>    
    <h1 className='font-bold'>Licence</h1>
<p className='lg:py-3'>Contact</p>
<p className='lg:py-3'>CopyRight</p>
<p className='lg:py-3'>EmailAddress</p>
</div>
<div className='px-12'>     
    <h1 className='font-bold'>Contact</h1>
<div className='flex lg:py-3 gap-1'>
<IoIosCall className='mt-1'/>

<p className=''>(406) 555-0120</p>
</div>
<div className='flex lg:py-3 gap-1'>
<HiOutlineMail className='mt-1'/>

<p className=''>Hey@boostim.com

</p>
</div>
<div className='flex lg:py-3 gap-2'>
<FaLocationPin 
 className=' text-[30px]'/>

<p className=''>2972 Westheimer Rd. Santa Ana, Illinois 85486



</p>
</div>





</div>



    </div> 
</div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Footer