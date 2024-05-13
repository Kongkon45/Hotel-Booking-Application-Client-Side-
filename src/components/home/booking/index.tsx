"use client";
import { removeBooking } from "@/redux/features/hotelSlice";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const BookingPage = () => {
  const bookingRooms = useSelector((state: any) => state.hotels.hotels);
  // console.log(booking)
  const dispatch = useDispatch();
  const totalPrice = bookingRooms.reduce(
    (total: any, room: any) => total + room.quantity * room.price_range,
    0
  );
  return (
    <div className="lg:flex w-full justify-center gap-10 my-10 lg:px-20 md:px-40 px-24">
      <div className="lg:w-2/4 w-full mx-auto">
        <h2 className="w-full flex justify-around lg:text-xl text-md  font-semibold rounded-lg bg-[#e9e4e4] text-black py-1 ">
          <span>Rooms</span>
          <span>Price</span>
        </h2>
        <ul>
          {bookingRooms?.length === 0 ? (
            <li className="text-center my-4 lg:text-2xl text-xl font-bold">
              Booking Not Found
            </li>
          ) : (
            bookingRooms?.map((room: any) => {
              return (
                <li
                  key={room.id}
                  className="flex justify-between items-center lg:gap-6 md:gap-4 gap-2 border-2 rounded-lg ;lg:p-2 md:p-1 p-0.5 my-6"
                >
                  <img
                    className="lg:w-16 md:w-12 w-10 lg:h-12 md:h-10 h-8"
                    src={room.thumbnail}
                    alt={room.name}
                  />
                  <h2 className="lg:text-md md:text-sm text-xs font-bold">{room.name}</h2>
                  <div className="flex justify-center items-center gap-1">
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    <p className="lg:text-md md:text-sm text-xs">{room.location}</p>
                  </div>
                  <p className="lg:text-md md:text-sm text-xs font-bold">${room.price_range}</p>
                  <button
                    onClick={() => dispatch(removeBooking(room))}
                    className="lg:text-sm md:text-xs text-[10px] font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 lg:px-2 px-1 transition-all ease-in-out delay-500 duration-700"
                  >
                    Remove
                  </button>
                </li>
              );
            })
          )}
        </ul>
      </div>
      <div className="lg:w-1/4 w-full mx-auto h-fit border-2 rounded-lg shadow-lg p-4">
        <h3 className="lg:text-xl md:text-md text-sm font-bold my-4 text-center">BOOKING SUMMARY</h3>
        <h5 className="lg:text-md md:text-sm text-xm font-bold flex justify-between items-center">
          Subtotal <span>${totalPrice}</span>
        </h5>
        <h5 className="lg:text-md md:text-sm text-xm font-bold flex justify-between items-center">
          Services charge <span>Free</span>
        </h5>
        <h5 className="lg:text-md md:text-sm text-xm font-bold flex justify-between items-center">
          Tax <span>Free</span>
        </h5>
        <hr className="border my-2" />
        <h5 className="lg:text-md md:text-sm text-xm font-bold flex justify-between items-center">
          Total <span>${totalPrice}</span>
        </h5>
        <div className="flex items-center text-sm">
          <input
            className="my-4 lg:border-2 border rounded-l-lg lg:py-1 py-0.5 lg:px-4 px-2 w-full focus:outline-none"
            type="text"
            placeholder="Enter coupon"
          />
          <button
            className="bg-[#fd3d57] lg:text-md md:text-sm text-xs text-white lg:py-1 py-0.5 lg:px-4 px-2 rounded-r-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-300 ease-in-out "
            type="submit"
          >
            Apply
          </button>
        </div>
        <button
          className="w-full my-6 bg-[#fd3d57] text-white lg:py-2 py-1 lg:px-4 px-2 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-200 ease-in-out "
          type="submit"
        >
          <Link href="/booking/checkout" className="lg:text-md md:text-sm text-xs">PROCESS TO CHECKOUT</Link>
        </button>
      </div>
    </div>
  );
};

export default BookingPage;
