import { Button } from '@/components/ui/button'
import { Clock, Mail, MapPin, Share, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const BusinessInfo = ({business}) => {
  return  business?.name && (
    <div className='md:flex gap-4 items-center'>
      <Image src={ business?.images[0]?.url} alt={ business.name} height={200} width={150} className='rounded-full h-[150px]  object-cover' />
      <div className='flex justify-between flex-col lg:flex-row items w-full'>
      <div className='flex flex-col items-baseline gap-3 mt-4 md:mt-0'>
        <h2 className='text-orange-500 bg-orange-100 px-2 p-1 rounded-full text-lg'>{ business?.category?.name}</h2>
        <h2 className='font-bold text-[40px]'>{ business?.name}</h2>
        <h2 className='flex text-gray-500 gap-2 text-lg'><MapPin/> { business?.address}</h2>
        <h2 className='flex text-gray-500 gap-2 text-lg'><Mail/> { business?.email}</h2>
      </div>

      <div className='flex flex-col mt-3 lg:mt-0 items-baseline lg:items-end gap-3'>
        <Button className='bg-orange-500 '><Share/></Button>
        <h2 className='flex gap-2 text-xl text-orange-500'><User /> { business?.contactPerson} </h2>
        <h2 className='flex gap-2 text-xl text-gray-500'><Clock /> Available 8:00 AM to 6:00 PM </h2>
      </div>
      </div>
    </div>
  )
}

export default BusinessInfo
