import React from 'react'
import Link from 'next/link';
import {Drop} from "../../../public/icons/icons"
import {Home} from "../../../public/icons/icons"
import {Bill} from "../../../public/icons/icons"
//import { IoIosMenu } from "react-icons/io";
import MobileMenu from '../Components/MobileMenu';



function Header() {
  return (
      <>
      <nav className=' lg:py-5 py-3'>
    <div className='px-4  md:px-8 lg:px-16 xl:px-32 xxl:px-64'>
      <div className='flex justify-between items-center'>

   <div className='flex items-center gap-x-20'>
     <div className='flex gap-1 justify-between'>
     <Home className="w-[93px] h-[33px]"/>
   <h1 className='text-black font-bold text-[24px]'> MAC</h1>
   {/* <MobileMenu className=""/> */}
   </div>
   {/* ?<IoIosMenu /> */}
   
   
        <ul className='lg:flex hidden items-center gap-x-5'>
            <li className='flex items-center'><Link href='' className=' font-semibold text-[14px] pr-2 text-black-600'>Service</Link> <Drop/></li>
            <li className='flex items-center'><Link href='' className='font-semibold text-[14px] pr-2 text-black-600'>Agency</Link><Drop/></li>
            <li className='flex items-center'><Link href='' className='font-semibold text-[14px] pr-2 text-black-600'>Casestudy</Link><Drop/></li>
            <li className='flex items-center' ><Link href='' className='font-semibold text-[14px] pr-2 text-black-600'>Resoues</Link><Drop/></li>
            <li className='flex items-center'><Link href='' className='font-semibold text-[14px] pr-2 text-black-600'>contact</Link><Drop/></li></ul>
   </div>
   <MobileMenu className=""/>
   <div className='lg:flex gap-2 hidden'>
   <button className='sm:mt-2 py-2 px-8 rounded-[50px] border-2 text-[16px] font-bold'>Get started</button>
   <Bill className="h-[50px] w-[50px]"/>
   </div>
  
        </div>
    
    
        {/* <button className='border py-4 px-6  rounded-[50px]'>Get started</button> */}
    </div>
    </nav>


  
    </>
  )
}

export default Header;