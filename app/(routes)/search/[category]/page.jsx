"use client"
import BusinessList from '@/app/_components/BusinessList'
import GlobalApi from '@/app/_services/GlobalApi'
import React, { useEffect, useState } from 'react'

const BusinessByCategory = ({params}) => {
    const [isLoading,setIsLoading] = useState(true);
    const[businessList,setBusinessList] = useState([])
    const getBusiness = async()=>{
      setIsLoading(true);
       const data = await  GlobalApi.getBusinessByCategory(params.category)
       setBusinessList(data.businessLists)
       setIsLoading(false);
    }

    useEffect(()=>{
       params &&  getBusiness();
    },[params])

  return (
    <div>
      <BusinessList isLoading={isLoading} title={params.category} BusinessList={businessList} />
    </div>
  )
}

export default BusinessByCategory
