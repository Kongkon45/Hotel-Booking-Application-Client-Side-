"use client";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import bookingRoom from "../../../../bookingRoom.json";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/hotelSlice";
import ImageViewer from "react-simple-image-viewer";

const HotelDetails = ({ params }: any) => {
  const dispatch = useDispatch();
  // console.log(params.id)
  // console.log(bookingRoom)
  const filterHotel = bookingRoom?.find((room: any) => room.id == params.id);
  // console.log(filterHotel)

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="flex gap-10 py-10 px-12 items-center ">
      <div className="w-1/2">
        <div className="overflow-hidden">
          <Image
            className="w-full h-80 mx-auto cursor-pointer hover:scale-110 duration-300 ease-in-out"
            src={filterHotel?.thumbnail}
            alt={filterHotel?.name}
            height={200}
            width={200}
          />
        </div>
        <div className="flex gap-3 my-2">
          {filterHotel?.images.map((src: any, index: any) => (
            <img
              src={src}
              onClick={() => openImageViewer(index)}
              width="100"
              height="100"
              key={index}
              style={{ margin: "2px" }}
              alt="image"
            />
          ))}

          {isViewerOpen && (
            <ImageViewer
              src={filterHotel?.images}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
      <div className="w-1/2">
        <h2 className="text-xl">
          <span className="text-2xl font-bold ">Name :</span>{" "}
          {filterHotel?.name}
        </h2>
        <p className="text-xl ">
          <span className="text-2xl font-bold ">Location :</span>{" "}
          {filterHotel?.location}
        </p>
        <p className="text-xl">
          <span className="text-2xl font-bold ">Size : </span>
          {filterHotel?.size}
        </p>
        <p className="text-xl">
          <span className="text-2xl font-bold ">Bathroom : </span>
          {filterHotel?.bathroom}
        </p>
        <p className="text-xl ">
          <span className="text-2xl font-bold ">Price Range :</span> $
          {filterHotel?.price_range}
        </p>
        <p className="text-xl ">
          <span className="text-2xl font-bold ">Rating :</span>{" "}
          {filterHotel?.rating}
        </p>
        <p className="text-xl ">
          <span className="text-2xl font-bold ">Reviews :</span>{" "}
          {filterHotel?.reviews}
        </p>
        <p className="text-sm text-justify">
          <span className="text-2xl font-bold ">Description :</span>{" "}
          {filterHotel?.description}
        </p>
        <button
          onClick={() => dispatch(addBooking(filterHotel))}
          className="text-sm mt-4 font-semibold bg-blue-500 hover:bg-blue-70 border border-blue-500 rounded-lg text-white py-1 px-2 transition-all ease-in-out delay-500 duration-700"
        >
          Booking Room
        </button>
      </div>
    </div>
  );
};

export default HotelDetails;
