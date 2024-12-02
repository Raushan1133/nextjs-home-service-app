import { Calendar, Clock, MapPin, User } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React from "react";

const BookingHistory = ({ bookingHistory }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
      {bookingHistory.map((item, index) => (
        <div key={index} className="flex gap-4 rounded-lg p-4 mb-5 border">
          {item?.businessList?.name && (
            <Image
              src={item?.businessList?.images[0].url}
              height={80}
              width={80}
              alt="image"
              className="rounded-lg"
            />
          )}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold">{item.businessList.name}</h2>
            <h2 className="flex gap-2 text-primary"><User/>{item.businessList.contactPerson}</h2>
            <h2 className="flex gap-2 text-gray-500"><MapPin className="text-primary"/>{item.businessList.address}</h2>
            <h2 className="flex gap-2 "><Calendar className="text-primary"/> <span className="text-gray-500">Service On :</span> <span className="">{moment(item.date).format("DD-MMM-yyyy")}</span></h2>
            <h2 className="flex gap-2 "><Clock className="text-primary"/> <span className="text-gray-500">Service On :</span> <span className="">{item.time}</span></h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;
