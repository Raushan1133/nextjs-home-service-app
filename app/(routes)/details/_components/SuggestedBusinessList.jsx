import GlobalApi from '@/app/_services/GlobalApi'
import { Button } from '@/components/ui/button'
import { NotebookPen } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import BookingSection from './BookingSection'


const SuggestedBusinessList = ({business}) => {
  const[businessList,setBusinessList] = useState([])
    const getBusiness = async()=>{
       const data = await  GlobalApi.getBusinessByCategory(business.category.name)
       setBusinessList(data.businessLists)
    }

    useEffect(()=>{
      console.log(2+2)
       business &&  getBusiness();
    },[business])
  return (
    <div>
      <BookingSection business={business}>
      <Button className="bg-orange-500 "><NotebookPen /> Book Service</Button>
      </BookingSection>
      <div>
      <div className='hidden md:block'>
      <h2 className='mt-5 font-bold text-lg'>Suggested Businesses</h2>
        {
          businessList && businessList.map((item,index)=>(
            <Link href={"/details/"+item.id} className='flex gap-3 mt-3 cursor-pointer shadow-md rounded-lg hover:shadow-orange-500'>
              <Image src={item?.images[0]?.url} alt={item.name} height={40} width={80} className='rounded-lg' />
              <div>
              <h2 className='font-bold'>{item?.name}</h2>
              <h2 className='text-orange-500'>{item?.contactPerson}</h2>
              <h2 className='text-gray-500'>{item?.address}</h2>
              </div>
            </Link>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default SuggestedBusinessList
