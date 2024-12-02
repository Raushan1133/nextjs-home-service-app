"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const CategorySidebar = () => {
  const params = usePathname();
  const[selectedCategory,setSelectedCategory] = useState("");
  const[categories,setCategories] = useState([])
  const getCategoryList = async()=>{
      const resp = await GlobalApi.getCategory();
          setCategories(resp.categories)
  }
  useEffect(()=>{
      getCategoryList();
  },[])

  useEffect(()=>{
    params && setSelectedCategory(params.split('/')[2]);
  },[params])
  return (
    <div>
      <h2 className='text-orange-500 font-semibold mt-10 text-xl'>Categories</h2>
      <div className='flex flex-col gap-3 mt-3'>
      {
        categories.map((item,index)=>(
          <Link href={item.name}  key={index}  className={`flex gap-2 p-4 border rounded-lg  cursor-pointer  hover:text-orange-500 hover:shadow-md hover:shadow-orange-500 transition-all ease-in-out ${selectedCategory == item.name && 'border-orange-500 shadow-orange-500 shadow-md text-orange-500 bg-orange-50'}`}>
            <h2>{item.name}</h2>
            <Image src={item.icon.url} alt='icon' height={30} width={30}></Image>
          </Link>
        ))
      }
      </div>
    </div>
  )
}

export default CategorySidebar
