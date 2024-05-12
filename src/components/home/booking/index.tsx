"use client"
import { removeBooking } from '@/redux/features/hotelSlice';
import Link from 'next/link';
import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const BookingPage = () => {
    const bookingRooms = useSelector((state:any)=>state.hotels.hotels)
    // console.log(booking)
    const dispatch = useDispatch()
    const totalPrice = bookingRooms.reduce((total: any, room: any) => total + (room.quantity * room.price_range), 0)
    return (
        <div className="flex justify-center gap-10 my-10">
            <div className="w-2/4">
            <h2 className='w-full flex justify-around text-xl font-semibold rounded-lg bg-[#e9e4e4] text-black py-1 '>
                    <span>Rooms</span> 
                    <span>Price</span>
                </h2>
            <ul>
                {
                    bookingRooms?.length === 0 ? (
                        <li className='text-center my-4 text-2xl font-bold'>Booking Not Found</li>
                    ) : (
                        bookingRooms?.map((room:any)=>{
                            return <li key={room.id} className="flex justify-between items-center gap-6 border-2 rounded-lg p-2 my-6">
                                <img className="w-16 h-12" src={room.image} alt={room.name}/>
                                <h2 className="text-xl font-bold">{room.name}</h2>
                                <div className="flex justify-center items-center gap-1">
                            <span><FaMapMarkerAlt/></span>
                            <p className="text-md">{room.location}</p>
                            </div>
                                <p className="text-md font-bold">${room.price_range}</p>
                                <button onClick={()=>dispatch(removeBooking(room))} className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out delay-500 duration-700">Remove</button>
                            </li>
                        })
                    )
                }
            </ul>
        </div>
        <div className='w-1/4 h-fit border-2 rounded-lg shadow-lg p-4'>
                <h3 className='text-xl font-bold my-4 text-center'>BOOKING SUMMARY</h3>
                <h5 className='text-md font-bold flex justify-between items-center'>Subtotal <span>${totalPrice}</span></h5>
                <h5 className='text-md font-bold flex justify-between items-center'>Services charge <span>Free</span></h5>
                <h5 className='text-md font-bold flex justify-between items-center'>Tax <span>Free</span></h5>
                <hr className='border my-2' />
                <h5 className='text-md font-bold flex justify-between items-center'>Total <span>${totalPrice}</span></h5>
                <div className="flex items-center">
                    <input className='my-4 border-2 rounded-l-lg py-1 px-4 w-full focus:outline-none' type="text" placeholder='Enter coupon' />
                    <button className='bg-[#fd3d57] text-white py-1 px-4 rounded-r-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-300 ease-in-out ' type="submit">Apply</button>
                </div>
                <button className='w-full my-6 bg-[#fd3d57] text-white py-2 px-4 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-200 ease-in-out ' type="submit"><Link href='/booking/checkout'>PROCESS TO CHECKOUT</Link></button>
            </div>
        </div>
    );
};

export default BookingPage;