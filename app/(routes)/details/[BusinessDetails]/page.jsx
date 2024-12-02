"use client"
import React, { useEffect, useState } from 'react'
import { useDescope, useSession, useUser } from '@descope/nextjs-sdk/client';
import Link from 'next/link';
import GlobalApi from '@/app/_services/GlobalApi';
import BusinessInfo from '../_components/BusinessInfo';
import BusinessDescription from '../_components/BusinessDescription';
import SuggestedBusinessList from '../_components/SuggestedBusinessList';



const BusinessDetails = ({params}) => {
  console.log(params)
  const { isAuthenticated, isSessionLoading,isUserLoading, sessionToken } = useSession();
  const getAuthorized = ()=>{
  if (isSessionLoading || isUserLoading) {
		return <p>Loading...</p>;
	}

  if(!isAuthenticated){
    return (
      <>
      <div className='container flex'>
        <div className='flex flex-col items-center justify-center gap-5 h-[80vh] w-full'>
        <h1 className='text-center'>You are not logged in</h1>
        <Link href={"/register"} className='bg-orange-500 px-2 p-2 rounded'>Login Now</Link>
        </div>
      </div>
      </>
    );
  }
  }

  useEffect(()=>{
    getAuthorized();
  },[])

  useEffect(()=>{
   params && getBusinessDetails();
 },[params])

 const getBusinessDetails = async()=>{
  const data = await GlobalApi.getBusinessById(params.BusinessDetails);
  setBusinessDetails(data.businessList);
  console.log("data",data.businessList)
}

  const[businessDetails,setBusinessDetails] = useState();

  if(isAuthenticated && businessDetails){
    return (  
      <div className='py-8 md:py-20 px-10 lg:px-36'>
        <BusinessInfo business={businessDetails}  />

        <div className='grid grid-cols-4 mt-16'>

          <div className='md:col-span-3 col-span-4 order-2 md:order-1'>
            <BusinessDescription business={businessDetails} />
          </div>

          <div className='col-span-1 order-1 md:order-2'>
            <SuggestedBusinessList business={businessDetails} />
          </div>
        </div>
      </div>
    )
  }
}

export default BusinessDetails
