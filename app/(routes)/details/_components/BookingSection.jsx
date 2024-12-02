import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import GlobalApi from "@/app/_services/GlobalApi";
import { useUser } from "@descope/nextjs-sdk/client";
import { toast } from "sonner";
import moment from "moment";

const BookingSection = ({ children,business }) => {
    const[date,setDate] = useState(new Date())
    const[timeSlot,setTimeSlot] = useState([]);
    const[selectedTime,setSelectedTime] = useState();
    const user = useUser();
    const[bookedSlot,setBookedSlot] = useState([]);
    useEffect(()=>{
        getTime();
        setDate();
        setSelectedTime('');
    },[])

    const getTime = ()=>{
        const timeList = []
        for(let i=10; i<=12; i++){
            timeList.push({
                time: i + ':00 AM'
            })
            timeList.push({
                time: i + ':30 AM'
            })
        }
        for(let i=1; i<=6; i++){
            timeList.push({
                time: i + ':00 PM'
            })
            timeList.push({
                time: i + ':30 PM'
            })
        }
        setTimeSlot(timeList);
    }

    const saveBooking = ()=>{
        GlobalApi.createNewBooking(business.id,moment(date).format("DD-MMM-yyyy") ,selectedTime,user.user.email,user.user.name).then(resp=>{
            // console.log(resp)
            if(resp){
                console.log("booked")
                toast("Service Booked Successfully !")
            }
        },(e)=>{
            toast("Something went wrong !", e)
        })
    }

    useEffect(()=>{
      date && getBookedSlot();
    },[date])

    const getBookedSlot = ()=>{
      // console.log(date)
      console.log(business.id)
      GlobalApi.businessBookedSlot(business.id,moment(date).format("DD-MMM-yyyy")).then(resp=>{
        // console.log(resp)
        setBookedSlot(resp.bookings);
      });
    }

    const isBookedSlot = (time)=>{
     return bookedSlot.find(item=>item.time === time);
    }
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="overflow-auto">
          <SheetHeader>
            <SheetTitle>Book Service</SheetTitle>
            <SheetDescription>
              Select Date And Time Slot To Book A Service
              {/* Pick a date */}
                <h2 className="font-bold my-5">Select Date</h2>
              <div className="flex flex-col gap-5 items-baseline">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  
                />
              </div>

              {/* Select Time SLot */}
                <h2 className="font-bold my-5">Select Time Slot</h2>
              <div className="grid grid-cols-3 gap-3">
                {
                    timeSlot.map((item,index)=>(
                        <Button key={index} disabled={isBookedSlot(item.time)}   onClick={()=>setSelectedTime(item.time)} variant="outline" className={`border rounded-full p-2 px-3 hover:bg-primary hover:text-white ${selectedTime === item.time && 'bg-primary text-white'}`}>
                            {item.time}
                          
                        </Button>
                    ))
                }
              </div>
            </SheetDescription>
          </SheetHeader>
          <SheetFooter className={"mt-5"}>
            <SheetClose asChild>
                <div className="flex gap-5">
                    <Button variant="destructive" >Cancel</Button>
                    <Button disabled={!(selectedTime&&date)} onClick={()=>saveBooking()} className="bg-orange-500">Book</Button>
                </div>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default BookingSection;
