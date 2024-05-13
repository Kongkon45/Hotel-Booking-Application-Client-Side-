"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "@/firebase/firebase.config";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginUser, setLoginUser]:any = useState(null);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { email, password } = data;
    console.log(data);

    try {
      setLoginError("");
      setSuccess("");
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user:any = result.user;
      console.log(user);
      setLoginUser(user);
      if (result.user.emailVerified) {
        setSuccess("User Login successfully");
        router.push("/");
        reset();
      } else {
        alert("Please verify your email address");
      }
    } catch (error: any) {
      console.log(error);
      setLoginError(error.message);
    }
  };

  return (
    <div className="mb-10 px-10">
      <h2 className="text-center lg:text-2xl md:text-xl text-md  font-bold my-4">
        User Login Form
      </h2>
      <form
        className="lg:w-1/3 md:w-2/3 w-full mx-auto border rounded-lg p-10 shadow-lg "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label
            className="lg:text-md md:text-sm text-xs font-bold"
            htmlFor="email"
          >
            Email : <span className="text-md text-[#fd3d57]">*</span>
          </label>{" "}
          <br />
          <input
            type="email"
            className="border-2 lg:py-1 py-0.5 px-2 rounded-md w-full my-2"
            placeholder="Enter your Email..."
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-[#fd3d57] text-sm">
              This field is required
            </span>
          )}
        </div>

        <div className="relative">
          <label
            className="lg:text-md md:text-sm text-xs font-bold"
            htmlFor="lastName"
          >
            Password : <span className="text-md text-[#fd3d57]">*</span>
          </label>{" "}
          <br />
          <input
            type={showPassword ? "text" : "password"}
            className="border-2 lg:py-1 py-0.5 px-2 rounded-md w-full my-2"
            placeholder="Enter your Password..."
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-[#fd3d57] text-sm">
              This field is required
            </span>
          )}
          <span
            className="absolute right-3 top-10 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}{" "}
          </span>
        </div>

        <div className="flex justify-center items-center mt-4">
          <input
            className="text-sm font-semibold cursor-pointer hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"
            type="submit"
            value="Login"
          />
        </div>
        {loginError && (
          <p className="text-red-400 text-center lg:text-md md:text-sm text-xs">
            {loginError}
          </p>
        )}
        {success && (
          <h1 className="text-green-500 text-center lg:text-md md:text-sm text-xs">
            {success}
          </h1>
        )}
        <p className="mt-4 lg:text-md md:text-sm text-xs">
          Don&apos;t have an account.?{" "}
          <Link href="/register" className="underline text-purple-700">
            Register
          </Link>
        </p>
      </form>
      {loginUser && (
        <div className="border-2 p-4 rounded-lg lg:w-1/3 md:w-2/3 w-full px-10 mx-auto my-6">
          <img
            className="w-20 h-20 mx-auto rounded-full"
            src={loginUser.photoURL}
            alt="photo"
          />
          <h1 className="text-center lg:text-xl md:text-md text-sm font-bold">
            {loginUser.displayName}
          </h1>
          <p className="text-center lg:text-sm text-xs font-bold">
            {loginUser.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
