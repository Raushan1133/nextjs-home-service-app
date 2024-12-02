"use client"
import React, { useEffect, useState } from 'react'
import GlobalApi from '../_services/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'

const CategoryList = ({category}) => {
    const[categories,setCategories] = useState([])
    const getCategoryList = async()=>{
        const resp = await GlobalApi.getCategory();
            setCategories(resp.categories)
    }
    useEffect(()=>{
        getCategoryList();
    },[])
  return (
    <div>
      <div className='mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10'>
        {
            categories.length > 0 ?categories.map((data,i)=>(
                <Link href={"/search/"+data?.name} key={i} className='flex flex-col gap-2 bg-purple-100  items-center justify-center rounded-lg cursor-pointer hover:scale-110 transition ease-in-out p-3'>
                <div>
                    <Image src={data?.icon?.url} height={35} width={35} alt='icon' />
                </div>
                <h2 className='text-orange-500 text-sm'>{data?.name}</h2>
                </Link>
            )) : [1,2,3,4,5,6].map((item,i)=>(
                <div key={i} className='h-[120px]   w-full bg-slate-200 animate-pulse rounded-lg'>

                </div>
            ))
        }
      </div>
    </div>
  )
}

export default CategoryList
