import React from 'react';
import bookingRoom from "../../../bookingRoom.json";
import Image from 'next/image';
import Link from 'next/link'
import { FaMapMarkerAlt } from "react-icons/fa";

const BookingRoom = () => {
    // console.log(bookingRoom)
    return (
        <div className='px-12 my-10'>
            <h2 className="text-center my-3 text-2xl font-bold">All Room</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>
                {
                    bookingRoom?.map((room:any)=>{
                        return <div key={room.id} className='border-2 p-4 rounded-lg shadow-lg overflow-hidden'>
                            <Image className='w-60 h-48 cursor-pointer hover:scale-105 duration-300 ease-in-out' src={`${room.image}`} alt={`${room.name}`} height={200} width={200}/>
                            <h2 className='text-xl mt-2 font-bold text-center'>{room.name}</h2>
                            <div className="flex justify-center items-center gap-1">
                            <span><FaMapMarkerAlt/></span>
                            <p className="text-md">{room.location}</p>
                            </div>
                            <div className="flex justify-between items-center mx-6 mt-2">
                                    <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out delay-500 duration-700"><Link href={`/hotels/${room.id}`}>View Room</Link></button>
                                    <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out delay-500 duration-700">Booking</button>
                                </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default BookingRoom;