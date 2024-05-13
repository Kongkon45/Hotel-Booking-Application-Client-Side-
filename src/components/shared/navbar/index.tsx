"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const booking = useSelector((state:any)=>state?.hotels.hotels)
  return (
    <nav className="bg-gray-400 py-1 lg:px-10 md:px-8 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Logo */}
        <Link href="/" className=' border-2 p-1 rounded-full'>
          <Image src="https://i.ibb.co/5Rqbcz9/hba-logo.png" alt='logo' width={40} height={40}/>
        </Link>

        {/* Centered Menu Items */}
        <ul className="flex items-center">
          <li className="lg:mr-6 md:mr-4 mr-3">
            <Link href="/" className="lg:text-xl md:text-md text-sm font-bold hover:text-gray-600 text-black">Home</Link>
          </li>
          <li className="lg:mr-6 md:mr-4 mr-3">
            <Link href="/hotels" className="lg:text-xl md:text-md text-sm font-bold hover:text-gray-600 text-black">Hotels</Link>
          </li>
          <li>
            <Link href="/booking" className="flex items-center lg:text-xl md:text-md text-sm font-bold hover:text-gray-600 text-black">Booking <sup className="text-black text-lg font-bold">{booking?.length}</sup></Link>
          </li>
          <li className="lg:ml-6 md:ml-4 ml-3">
            <Link href="/dashboard" className="hover:text-gray-600 lg:text-xl md:text-md text-sm font-bold text-black">Dashboard</Link>
          </li>
        </ul>

        {/* Right Login and Registration Buttons */}
        <div className="flex items-center">
          {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"><Link href="/login">Login</Link></button> */}
          <button className="bg-green-500 hover:bg-green-600 lg:text-md md:text-md text-sm text-white font-bold lg:py-2 md:py-1 py-0.5 lg:px-4 md:px-2 px-1 rounded"><Link href="/register">Register</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


