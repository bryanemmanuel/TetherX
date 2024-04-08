
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, SignedOut, UserButton, auth } from '@clerk/nextjs'
import Meeting from '@/app/(root)/meeting/[id]/page'
const Navbar = () => {

// const {userId} = auth();

  return (
    <nav className='flex-between fixed z-50 w-full
    bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href="/dashmain" className='flex items-center gap-1'>
      <Image src="/icons/tether.png" width={132} height={132} alt={"TetherX"} />
      <p className='text-[26px] font-extrabold
      text-white max-sm:hidden'></p>
      </Link>



    


<div className='flex-between gap-5'>

      


<SignedIn>
 
   <UserButton afterSignOutUrl='/'/>
 </SignedIn>
 





<MobileNav/>






</div>
      
<SignedOut>
 <div className='flex gap-5 text-sm text-white'>
         <Link href='/sign-up'className='bg-blue-500 shadow-lg shadow-blue-500/50 p-3 rounded-md '>Sign-Up</Link>
          <Link href='/sign-in' className='bg-blue-500 shadow-lg shadow-blue-500/50 p-3 rounded-md '>Sign-In</Link>
     </div>
 </SignedOut>


     

   



      </nav>
  )
}

export default  Navbar


