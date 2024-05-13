"use client"
import React, { useState } from 'react'
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import auth from '@/firebase/firebase.config';
import {createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: any) => {
    const {name, email, password, checkbox} = data;
    console.log(data);
    

    try {
      setRegisterError("");
      setSuccess("");
      if (password.length < 6) {
        setRegisterError("Password must be 6 characters long");
        return;
      }

      if (!/[A-Z]/.test(password)) {
        setRegisterError("Password must be one uppercase character");
        return;
      }

      if (!checkbox) {
        setRegisterError("Please accept our terms and conditions");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setSuccess("User is Createed")
      console.log(user)

      await updateProfile(user, {
        displayName: name,
        photoURL: "https://i.ibb.co/DgxQRZD/Kongkon.jpg"
      });
      // setSuccess("User profile is updated")

      await sendEmailVerification(user);

      setSuccess("User registered successfully.");
      alert("Please check your email to verify your account.")
      reset();
    } catch (error:any) {
      console.error(error.message);
    }

  }
  return (
    <div className='mb-8'>
      <h2 className="text-center lg:text-2xl md:text-xl text-md font-bold my-4">User Registration Form</h2>
      <form className='lg:w-1/3 w-2/3 mx-auto border rounded-lg p-10 shadow-lg ' onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label className='lg:text-md md:text-sm text-xs font-bold' htmlFor="name">Name : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
          <input type="text" className="border-2  lg:py-1 py-0.5 px-2 rounded-md w-full my-2" placeholder="Enter your Name..." {...register("name", { required: true })} />
          {errors.name && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
        </div>

        <div>
          <label className='lg:text-md md:text-sm text-xs font-bold' htmlFor="email">Email : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
          <input type="email" className="border-2 lg:py-1 py-0.5 px-2 rounded-md w-full my-2" placeholder="Enter your Email..." {...register("email", { required: true })} />
          {errors.email && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
        </div>

        <div className="relative">
          <label className='lg:text-md md:text-sm text-xs font-bold' htmlFor="lastName">Password : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
          <input type={showPassword ? "text" : "password"} className="border-2  lg:py-1 py-0.5 px-2 rounded-md w-full my-2" placeholder="Enter your Password..." {...register("password", { required: true })} />
          {errors.password && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
          <span className='absolute right-3 top-10 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />} </span>
        </div>

        <div className="flex gap-2">
          <input
            className="lg:text-md md:text-sm text-xs"
            type="checkbox"
            {...register("checkbox", { required: true })}
          />
          <label className="lg:text-md md:text-sm text-xs" htmlFor="checkbox">Accepts our terms and condition.</label>
        </div>
        {errors.checkbox && <span className='text-[#fd3d57] text-sm'>This checkbox is required</span>}

        <div className="flex justify-center items-center mt-4">
          <input className="lg:text-md md:text-sm text-xs font-semibold hover:bg-[#fd3d57] cursor-pointer hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700" type="submit" value="Register" />
        </div>
        {success && <p className="text-green-500 text-center">{success}</p>}
        {registerError && <p className="text-red-400 text-center">{registerError}</p>}
        <p className='mt-4 lg:text-md md:text-sm text-xs'>Already have an account.? <Link href='/login' className="underline text-purple-700"> Login </Link></p>
      </form>
    </div>
  )
}

export default RegisterPage
