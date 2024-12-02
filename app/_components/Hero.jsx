import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-3 '>
      <h1 className='text-[40px] font-bold text-center'>Find Any <span className='text-orange-500'>Shop/Services</span><br /> Near You</h1>
      <h2 className='text-xl  text-gray-400'>Explore Best And Trusted Shops Near You</h2>
      <div className='mt-4 flex gap-4 items-center'>
      <Input placeholder="Search" className="md:w-[350px] rounded-full" />
      <Button className="bg-orange-500 rounded-full h-[46px]">
        <Search className='h-4 w-4'  />
      </Button>
      </div>
    </div>
  )
}

export default Hero
