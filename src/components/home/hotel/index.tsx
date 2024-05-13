"use client";
import React, { useState } from "react";
import bookingRoom from "../../../bookingRoom.json";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from "@/redux/features/hotelSlice";

const HotelPage = () => {
  // console.log(bookingRoom)
  const booking = useSelector((state: any) => state?.hotels.hotels);
  console.log(booking);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = (room: any) => {
    dispatch(addBooking(room));
  };
  return (
    <div className="px-12 my-10">
      <h2 className="text-center my-3 text-2xl font-bold">All Room</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
        {bookingRoom?.map((room: any) => {
          // Check if room is already in cart
          const isInCart = booking.find((item: any) => item.id === room.id);

          return (
            <div
              key={room.id}
              className="border-2 p-4 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                className="w-60 h-48 mx-auto cursor-pointer hover:scale-105 duration-300 ease-in-out"
                src={`${room.thumbnail}`}
                alt={`${room.name}`}
                height={200}
                width={200}
              />
              <h2 className="lg:text-xl md:text-md text-sm mt-2 font-bold text-center">
                {room.name}
              </h2>
              <p className="lg:text-md md:text-sm text-xs text-center">
                {room?.size}
              </p>
              <div className="flex justify-center items-center gap-1">
                <span className="text-sm font-bold ">
                  <FaMapMarkerAlt />
                </span>
                <p className="lg:text-md md:text-sm text-xs text-center">
                  {room.location}
                </p>
              </div>
              <div className="flex justify-between items-center lg:gap-3 md:gap-2 gap-1 lg:mx-3 md:mx-2 mx-1 mt-2">
                <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] lg:py-1 md:py-1 py-0.5 lg:px-2 md:px-1 px-0.5 transition-all ease-in-out delay-500 duration-700">
                  <Link href={`/hotels/${room.id}`}>View Room</Link>
                </button>
                <button
                    onClick={() => handleButtonClick(room)}
                    disabled={isInCart}
                    className={`text-sm font-semibold  hover:text-white border  rounded-lg lg:py-1 md:py-1 py-0.5 lg:px-2 md:px-1 px-0.5 transition-all ease-in-out delay-500 duration-700 ${
                      isInCart ? "bg-gray-300 text-black border-black" : "hover:bg-[#fd3d57] border-[#fd3d57] text-[#fd3d57]"
                    }`}
                  >
                   Booking
                  </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelPage;
