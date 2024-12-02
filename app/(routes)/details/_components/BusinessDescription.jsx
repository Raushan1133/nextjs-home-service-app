import Image from 'next/image'
import React from 'react'

const BusinessDescription = ({business}) => {
  return (
    <div>
      <h2 className='font-bold text-[25px] mt-5 md:mt-0'>Description</h2>
      <p className='text-gray-600 mt- text-lg'>{business.about}</p>
      <h2 className='font-bold text-[25px] mt-5'>Gallery</h2>
      <div className='mt-5 gap-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {
          business?.images?.map((item,index)=>(
            <Image src={item?.url} height={200} width={700} alt='image' className='rounded-lg'/>
          ))
        }
      </div>
    </div>
  )
}

export default BusinessDescription
