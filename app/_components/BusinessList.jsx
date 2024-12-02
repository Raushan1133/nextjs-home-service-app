"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BusinessList = ({isLoading,title,BusinessList}) => {
  return (

    <div>
      <h1 className="mt-10 font-bold text-4xl text-orange-500">{title}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6   mt-2">
      {
         isLoading ?  [1,2,3,4,5,6,7,8].map((item,idx)=>(
          <div key={idx} className="h-[300px] rounded-lg w-full bg-slate-300 animate-pulse"></div>
        )) :
         BusinessList.length > 0 ? BusinessList.map((item,index)=>(
          <Link href={"/details/"+item.id} key={index} className="flex flex-col shadow-md items-baseline rounded-lg hover:shadow-lg hover:shadow-orange-500 transition-all ease-in-out cursor-pointer hover:scale-10">
            <Image src={item.images[0].url} alt="Kanta bai" className="h-[150px] md:h-[200px] object-cover rounded" height={200} width={500}/>
            <div className="p-3 flex flex-col items-baseline gap-1">
            <h1 className="bg-cyan-400 p-1 px-2 mt-1 rounded-full">{item.category.name}</h1>
            <h2 className="font-semibold line-clamp-2 text-ellipsis md:text-lg">{item.name}</h2>
            <h2 className="text-orange-500 text-ellipsis line-clamp-1">{item.contactPerson}</h2>
            <h2 className="text-gray-500 text-ellipsis line-clamp-2">{item.address}</h2>
            <Button className="bg-orange-500">Book Now</Button>
            </div>
          </Link>
        )) : <div className="h-[60vh] w-full flex items-center ml-24 sm:ml-44 md:ml-48 lg:ml-80">
              <h1 className="text-center font-semibold text-red-500 text-2xl">Oops!, Currently we are not providing {title} services.</h1>
        </div>
         
      }
      </div>
    </div>
  )
}

export default BusinessList
