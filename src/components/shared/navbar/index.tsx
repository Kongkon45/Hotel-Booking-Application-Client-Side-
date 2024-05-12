"use client"
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const booking = useSelector((state:any)=>state?.hotels.hotels)
  return (
    <nav className="bg-gray-800 py-3 px-10 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Logo */}
        <Link href="/" className="flex items-center text-white text-2xl font-bold">
          Hotel Management
        </Link>

        {/* Centered Menu Items */}
        <ul className="flex items-center">
          <li className="mr-6">
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li className="mr-6">
            <Link href="/hotels" className="text-white hover:text-gray-300">Hotels</Link>
          </li>
          <li>
            <Link href="/booking" className="text-white hover:text-gray-300">Booking <sup className="text-green-500 text-lg font-bold">{booking?.length}</sup></Link>
          </li>
        </ul>

        {/* Right Login and Registration Buttons */}
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"><Link href="/login">Login</Link></button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"><Link href="/register">Register</Link></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
