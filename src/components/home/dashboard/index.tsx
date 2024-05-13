"use client";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

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

const DashboardPage = () => {
  const [formData, setFormData] = useState<IFormInput | null>(null);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const handleDelete = (index: number) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
    setFormData(updatedFormData);
  };

  return (
    <div className="lg:px-12 md:px-6 px-1 my-10">
        <h2 className="text-center my-4 lg:text-xl md:text-md text-sm font-bold">Saved Form Data</h2>
      <table className="w-full mx-auto">
        <thead>
          <tr>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">ID</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">First Name</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">Last Name</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">Phone Number</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">Email Address</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">Street Address</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">City</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">Zip Code</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">Total Cost</th>
            <th className="border-2 border-black lg:text-md md:text-sm text-xs">Action</th>
          </tr>
        </thead>
        
        <tbody>
          {formData && formData?.map((formData:any, index:any)=>{
            return <tr key={index}>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">{index+1}</td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.firstName}
            </td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.lastName}
            </td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.phoneNumber}
            </td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.email}
            </td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.address}
            </td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.city}
            </td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.zipCode}
            </td>
            <td className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              {formData.subTotal}
            </td>
            <td  className="border-2 border-gray-300 text-center lg:text-sm md:text-xs text-[8px]">
              <span className="flex justify-center items-center text-red-500 p-1 font-bold cursor-pointer" onClick={() => handleDelete(index)}><RiDeleteBin6Line/></span>
            </td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
