"use client";
import { clearBookings } from "@/redux/features/hotelSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  city: string;
  address: string;
  zipCode: number;
  checkbox: boolean;
  subTotal: number;
}

const districts = [
  "Bagerhat",
  "Bandarban",
  "Barguna",
  "Barishal",
  "Bhola",
  "Bogura",
  "Brahmanbaria",
  "Chandpur",
  "Chattogram",
  "Chuadanga",
  "Cumilla",
  "Cox's Bazar",
  "Dhaka",
  "Dinajpur",
  "Faridpur",
  "Feni",
  "Gaibandha",
  "Gazipur",
  "Gopalganj",
  "Habiganj",
  "Jamalpur",
  "Jashore (Jessore)",
  "Jhalokati",
  "Jhenaidah",
  "Joypurhat",
  "Khagrachhari",
  "Khulna",
  "Kishoreganj",
  "Kurigram",
  "Kushtia",
  "Lakshmipur",
  "Lalmonirhat",
  "Madaripur",
  "Magura",
  "Manikganj",
  "Meherpur",
  "Moulvibazar",
  "Munshiganj",
  "Mymensingh",
  "Naogaon",
  "Narail",
  "Narayanganj",
  "Narsingdi",
  "Natore",
  "Netrokona",
  "Nilphamari",
  "Noakhali",
  "Pabna",
  "Panchagarh",
  "Patuakhali",
  "Pirojpur",
  "Rajbari",
  "Rajshahi",
  "Rangamati",
  "Rangpur",
  "Satkhira",
  "Shariatpur",
  "Sherpur",
  "Sirajganj",
  "Sunamganj",
  "Sylhet",
  "Tangail",
  "Thakurgaon",
  "Habiganj",
];

const CheckoutPage = () => {
  const [formData, setFormData] = useState<IFormInput | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const bookingRoom = useSelector((state: any) => state.hotels.hotels);
  const totalPrice = bookingRoom?.reduce(
    (total: any, room: any) => total + room.quantity * room.price_range,
    0
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    data.subTotal = totalPrice;
    const existingBookingString: any = localStorage?.getItem("formData");
    const existingBooking = existingBookingString
      ? JSON.parse(existingBookingString)
      : [];

    const mergedData = [...existingBooking, data];

    if (typeof window !== "undefined") {
      localStorage?.setItem("formData", JSON.stringify(mergedData));
    }
    dispatch(clearBookings());
    router.push("/dashboard");
    reset();
  };
  return (
    <div className="px-12 my-10">
      <div className="flex justify-end mr-10 mt-4">
        <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700">
          <Link href={`/booking`}>Back</Link>
          <FaAngleDoubleRight />
        </button>
      </div>

      <div className="w-full mx-auto">
        <form
          className="lg:flex w-full justify-center gap-20"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="lg:w-3/6 w-full my-6 border-2 p-10 rounded-lg shadow-lg">
            <div className="flex gap-10 items-center">
              <div className="w-1/2">
                <label className="text-md font-bold" htmlFor="firstName">
                  First Name : <span className="text-md text-[#fd3d57]">*</span>
                </label>{" "}
                <br />
                <input
                  className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                  placeholder="Enter your name..."
                  type="text"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <label className="text-md font-bold" htmlFor="lastName">
                  Last Name : <span className="text-md text-[#fd3d57]">*</span>
                </label>{" "}
                <br />
                <input
                  className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                  placeholder="Enter your lastName..."
                  type="text"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            <div className="my-4">
              <label className="text-md font-bold" htmlFor="email">
                Email Address :{" "}
                <span className="text-md text-[#fd3d57]">*</span>
              </label>{" "}
              <br />
              <input
                className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                placeholder="Enter your email..."
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-[#fd3d57] text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="my-4">
              <label className="text-md font-bold" htmlFor="phoneNumber">
                Phone Number : <span className="text-md text-[#fd3d57]">*</span>
              </label>{" "}
              <br />
              <input
                className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                placeholder="Enter your phone number..."
                type="text"
                {...register("phoneNumber", { required: true })}
              />
              {errors.phoneNumber && (
                <span className="text-[#fd3d57] text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="my-4">
              <label className="text-md font-bold" htmlFor="address">
                Street Address :{" "}
                <span className="text-md text-[#fd3d57]">*</span>
              </label>{" "}
              <br />
              <input
                className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                placeholder="Enter your Address..."
                type="text"
                {...register("address", { required: true })}
              />
              {errors.address && (
                <span className="text-[#fd3d57] text-sm">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex gap-10 my-4">
              <div className="w-1/2">
                <label className="text-md font-bold" htmlFor="town/city">
                  Town/City : <span className="text-md text-[#fd3d57]">*</span>
                </label>{" "}
                <br />
                <select
                  className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2"
                  {...register("city", { required: true })}
                >
                  <option value="">Select Town/City</option>
                  {districts.map((district, index) => (
                    <option key={index} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
                {errors.city && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
              </div>
              <div className="w-1/2">
                <label className="text-md font-bold" htmlFor="zipCode">
                  Zip Code : <span className="text-md text-[#fd3d57]">*</span>
                </label>{" "}
                <br />
                <input
                  className="w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 "
                  placeholder="Enter zip code..."
                  type="text"
                  {...register("zipCode", { required: true })}
                />
                {errors.zipCode && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="lg:w-2/6 w-full">
            <div className="mt-6 border-2 rounded-lg p-4">
              <h2 className="text-center text-2xl font-bold my-3">Booking</h2>
              <hr className="border mb-4" />
              <ul>
                {bookingRoom.length === 0 ? (
                  <li className="text-2xl font-bold text-center">
                    Booking Not Found
                  </li>
                ) : (
                  bookingRoom?.map((room: any) => {
                    return (
                      <li
                        key={room.id}
                        className="flex justify-between items-center my-2"
                      >
                        <img
                          className="w-12 h-12"
                          src={`${room.thumbnail}`}
                          alt={`${room.name}`}
                        />
                        <h5>{room.name}</h5>
                        <p>{room.price_range}</p>
                        <p>X{room.quantity}</p>
                        <p className="text-md font-bold">
                          {room.quantity * room.price_range}
                        </p>
                      </li>
                    );
                  })
                )}
              </ul>
              <div className="my-6">
                <hr className="border my-2" />
                <h5 className="text-md font-bold flex justify-between items-center">
                  Subtotal <span>${totalPrice}</span>
                </h5>
                <hr className="border my-2" />
                <h5 className="text-md font-bold flex justify-between items-center">
                  Services Charge <span>Free</span>
                </h5>
                <hr className="border my-2" />
                <div className="text-md font-bold flex justify-between items-center">
                  Total <span>${totalPrice}</span>
                </div>

                <hr className="border my-2" />
                <div className="flex items-center gap-2 mt-6">
                  <input
                    className="w-5 h-5"
                    type="checkbox"
                    {...register("checkbox", { required: true })}
                  />
                  <label className="text-sm" htmlFor="checkbox">
                    Agree to our Terms & Conditons
                  </label>
                </div>
                {errors?.checkbox && (
                  <span className="text-[#fd3d57] text-sm">
                    This field is required
                  </span>
                )}

                <button
                  className="w-full mt-6 bg-[#fd3d57] text-white py-2 px-4 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-200 ease-in-out "
                  type="submit"
                >
                  PLACE BOOKING
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
