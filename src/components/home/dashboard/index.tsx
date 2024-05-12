"use client";
import { useEffect, useState } from "react";

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

  return (
    <div className="px-12 my-10">
        <h2 className="text-center my-4 text-2xl font-bold">Saved Form Data</h2>
      <table className="w-full ">
        <thead>
          <tr>
            <th className="border-2 border-black">ID</th>
            <th className="border-2 border-black">First Name</th>
            <th className="border-2 border-black">Last Name</th>
            <th className="border-2 border-black">Phone Number</th>
            <th className="border-2 border-black">Email Address</th>
            <th className="border-2 border-black">Street Address</th>
            <th className="border-2 border-black">City</th>
            <th className="border-2 border-black">Zip Code</th>
            <th className="border-2 border-black">SubTotal Cost</th>
          </tr>
        </thead>
        
        <tbody>
          {formData && formData?.map((formData:any, index:any)=>{
            return <tr key={index}>
            <td className="border-2 border-gray-300 text-center">{index+1}</td>
            <td className="border-2 border-gray-300 text-center">
              {formData.firstName}
            </td>
            <td className="border-2 border-gray-300 text-center">
              {formData.lastName}
            </td>
            <td className="border-2 border-gray-300 text-center">
              {formData.phoneNumber}
            </td>
            <td className="border-2 border-gray-300 text-center">
              {formData.email}
            </td>
            <td className="border-2 border-gray-300 text-center">
              {formData.address}
            </td>
            <td className="border-2 border-gray-300 text-center">
              {formData.city}
            </td>
            <td className="border-2 border-gray-300 text-center">
              {formData.zipCode}
            </td>
            <td className="border-2 border-gray-300 text-center">
              {formData.subTotal}
            </td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
