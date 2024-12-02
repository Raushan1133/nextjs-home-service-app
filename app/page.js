'use client';
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import BusinessList from "./_components/BusinessList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import { Page } from "./sign-in";
export default function Home() {

  const [allBusinessList, setBusinessList] = useState([]);
  const[isLoading,setIsLoaing] = useState(true);
  const getAllBusinessList = async()=>{
    setIsLoaing(true);
      const data = await GlobalApi.getAllBusinessList();
      setBusinessList(data.businessLists);
      setIsLoaing(false);
  }
  useEffect(()=>{
      getAllBusinessList();
  },[])

  return (
   <>
   <Hero />
   <CategoryList />
   <BusinessList isLoading={isLoading} title={"Popular Services"} BusinessList={allBusinessList} />   
   </>
  );
}
