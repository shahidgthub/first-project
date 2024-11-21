import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import Drop from '../../../public/icons/icons'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {Bill} from "../../../public/icons/icons"

const MobileMenu = () => {
  return (
    <Sheet>
  <SheetTrigger><IoIosMenu className="lg:hidden"/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
      <SheetDescription>
      <ul className='flex flex-col gap-y-5 items-center gap-x-5'>
            <Link href='/' className=' font-semibold text-[14px] pr-2 text-black-600'>Service</Link>
            <Link href='/' className=' font-semibold text-[14px] pr-2 text-black-600'>Agency</Link>
            <Link href='/' className=' font-semibold text-[14px] pr-2 text-black-600'>Casestudy</Link>
            <Link href='/' className=' font-semibold text-[14px] pr-2 text-black-600'>Resoues</Link>
            <Link href='/' className=' font-semibold text-[14px] pr-2 text-black-600'>Contact</Link>
            {/* <li className='flex items-center'><Link href='/' className='font-semibold text-[14px] pr-2 text-black-600'>Agency</Link><Drop/></li>
            <li className='flex items-center'><Link href='/' className='font-semibold text-[14px] pr-2 text-black-600'>Casestudy</Link><Drop/></li>
            <li className='flex items-center' ><Link href='/' className='font-semibold text-[14px] pr-2 text-black-600'>Resoues</Link><Drop/></li>
            <li className='flex items-center'><Link href='/' className='font-semibold text-[14px] pr-2 text-black-600'>contact</Link><Drop/></li> */}
            </ul>
            <div className='flex gap-2 py-4 px-6 items-center '>
   <button className='py-1 px-2 rounded-[50px] border-2 font-bold'>Get started</button>
   <Bill/>
   </div>
   
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  )
}

export default MobileMenu;