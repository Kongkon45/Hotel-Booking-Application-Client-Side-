import React from 'react';
import Image from 'next/image';
import bookingRoom from "../../../../bookingRoom.json";

const HotelDetails = ({params}:any) => {
    // console.log(params.id)
    // console.log(bookingRoom)
    const filterHotel = bookingRoom?.find((room:any)=>room.id == params.id)
    // console.log(filterHotel)
    return (
        <div className="flex gap-10 py-10 px-12 items-center ">
            <div className="w-1/2 overflow-hidden">
            <Image className='w-full h-96 mx-auto cursor-pointer hover:scale-110 duration-300 ease-in-out' src={filterHotel?.image} alt={filterHotel?.name} height={200} width={200}/>
            </div>
            <div className="w-1/2">
                <h2 className='text-xl'><span className="text-2xl font-bold ">Name :</span> {filterHotel?.name}</h2>
                <p className='text-sm text-justify'><span className="text-2xl font-bold ">Description :</span> {filterHotel?.description}</p>
                <p className="text-xl "><span className="text-2xl font-bold ">Location :</span> {filterHotel?.location}</p>
                <p className="text-xl "><span className="text-2xl font-bold ">Price Range :</span> ${filterHotel?.price_range}</p>
                <p className="text-xl "><span className="text-2xl font-bold ">Rating :</span> {filterHotel?.rating}</p>
                <p className="text-xl "><span className="text-2xl font-bold ">Reviews :</span> {filterHotel?.reviews}</p>
            </div>
        </div>
    );
};

export default HotelDetails;