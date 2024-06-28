"use client"

import React from 'react';
import { otpSchema } from '@/validations/YUP';
import { useFormik } from "formik";

function VerifyUserOTP() {
  const getToken = () => {
    return localStorage.getItem("bagwise_token");
  };

  const otpSubmitHandler = async (values: any) => {
    const token = getToken();
    try {
      const verifyRequest = await fetch("/api/user/verify_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          otp: values,
        }),
      })
    } catch (error) {
        console.log(error)
    }
// const response = verifyRequest.json()
  };

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpSchema,
    onSubmit: otpSubmitHandler,
  });


  return (
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-lg dark:bg-black dark:text-gray-200">
        <h1 className="text-2xl font-semibold text-center mb-6">Verify OTP Code</h1>
        <form onSubmit={formik.handleSubmit}>
          <input 
            type="text" 
            onBlur={formik.handleBlur}
            value={formik.values.otp}
            onChange={formik.handleChange}
            placeholder='30381'
            className='p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 outline-none w-72 border border-slate-200'
            name="otp"
          />
          {formik.touched.otp && formik.errors.otp ? (
            <div className="text-red-600 text-sm">{formik.errors.otp}</div>
          ) : null}
          <div className="flex items-center flex-col justify-between mb-6">
            <p className="text-gray-600 text-sm">Didn&rsquo;t receive code?</p>
            <button type="button" className="px-3 py-2 text-sm font-medium text-center rounded text-gray-500 hover:text-black">Request Again (00:00:36)</button>
          </div>
          <button 
            type="submit" 
            className="bg-black mr-4 w-full flex items-center justify-center dark:bg-[#424245] text-white font-semibold gap-x-1 p-2 rounded-md mt-5">
            Verify Account
          </button>
        </form>
      </div>
    
  );
}

export default VerifyUserOTP;
