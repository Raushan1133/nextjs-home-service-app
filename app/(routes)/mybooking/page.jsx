"use client"
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistory from "./_components/BookingHistory";
import GlobalApi from "@/app/_services/GlobalApi";
import { useUser } from "@descope/nextjs-sdk/client";


const page = () => {
  const user = useUser();
  const [bookingHistory, setBookingHistory] = useState([]);

  const getUserBookingHistory = ()=>{
    GlobalApi.getUserBookingHistory(user?.user?.email).then(resp=>{console.log(resp),setBookingHistory(resp.bookings)});
  }

  useEffect(()=>{
   user.user && getUserBookingHistory(); 
  },[user.user]);

  const filterData = (type)=>{
    const result = bookingHistory.filter((item)=> type === "booked" ? new Date(item.date) >= new Date() : new Date(item.date) <= new Date());
    
    console.log(new Date());
    return result;
  }

  return (
    <div className="my-10 mx-5 md:mx-36">
      <h2 className="font-bold text-xl my-2">My Bookings</h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
         <BookingHistory bookingHistory={filterData("booked")} />
        </TabsContent>
        <TabsContent value="completed">
          <BookingHistory bookingHistory={filterData('completed')} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
