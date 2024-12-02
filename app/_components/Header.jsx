"use client"
// import { SignUpOrInFlow } from '@descope/nextjs-sdk/'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { ModeToggle } from './Toggle'
import { useRouter } from 'next/navigation'
import { useDescope, useSession, useUser } from '@descope/nextjs-sdk/client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'



const Header = () => {
  const {user} = useUser()
  const sdk = useDescope();
  console.log(user)
  const router = useRouter()
  return (
    <>
        <div className='p-2 shadow-sm flex justify-between'>
        <div className='flex gap-8  items-center'>

        <Image onClick={()=>router.push("/")} src={'/logo.svg'} className='cursor-pointer' alt="logo" height={'100'} width={'100'} />

        <div className='md:flex gap-6 items-center hidden'>
            <h2 className='hover:text-orange-500 hover:scale-105 cursor-pointer'>Home</h2>
            <h2 className='hover:text-orange-500 hover:scale-105 cursor-pointer'>Services</h2>
            <h2 className='hover:text-orange-500 hover:scale-105 cursor-pointer'>About Us</h2>
        </div>
        </div>
        {/* <Toggle */}
        <div className='flex justify-center items-center gap-3'>
        <ModeToggle />
        {
          user?<DropdownMenu >
          <DropdownMenuTrigger className='cursor-pointer' asChild><Image src={user?.picture} alt='me' className='rounded-full ' height={40} width={40}></Image></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href={'/mybooking'} >My Booking</Link></DropdownMenuItem>
            <DropdownMenuItem onClick={()=>sdk.logout()}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
         : <Button onClick={()=>router.push("/register")}  className="bg-orange-500">Get Started</Button>
        }
        </div>
        </div>
    </>
  )
}

export default Header
