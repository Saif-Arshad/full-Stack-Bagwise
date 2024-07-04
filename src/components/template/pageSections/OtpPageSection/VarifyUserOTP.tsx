"use client"

import React,{useState} from 'react';
import { otpSchema } from '@/validations/YUP';
import { useFormik } from "formik";
import ResendOtp from './ResendOtp';
import { useRouter } from 'next/navigation';
import ButtonLoading from '../../../../components/loader/ButtonLoading'
import toast from "react-hot-toast";

function VerifyUserOTP() {
  const router = useRouter()
  const getToken = () => {
    return localStorage.getItem("bagwise_token");
  };
  const [loading,setLoading] = useState(false)
  const otpSubmitHandler = async (values: any,{ resetForm }: any) => {
    const token = getToken();
    try {
      setLoading(true)
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
      const response =await verifyRequest.json()
      resetForm()
      console.log("🚀 ~ otpSubmitHandler ~ response:", response)
      if(response.success){
        toast.success(response.message);
        router.push("/login-account")
        return
      }
      if(response.error){
        toast.error(response.message)
      }
    } catch (error:any) {
      toast.error(error.message)
    }finally{
      setLoading(false)
    }

  };

  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: otpSchema,
    onSubmit: otpSubmitHandler,
  });


  return (
    <div className='w-full flex item-center justify-center'>
      <div className='w-11/12 flex item-center justify-center'>

      <div className="px-8 py-10 bg-white  rounded-lg dark:bg-[#101011] dark:text-gray-200 w-full sm:w-96">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-center mb-6">Verify OTP</h1>
       <p className='text-sm text-center'>
       To ensure the security of your account, please enter the OTP sent to your email.
       </p>
        <form onSubmit={formik.handleSubmit}>
          <input 
            type="text" 
            onBlur={formik.handleBlur}
            value={formik.values.otp}
            onChange={formik.handleChange}
            placeholder='30381'
            className='p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 outline-none w-full sm:w-80 border border-slate-200'
            name="otp"
          />
          {formik.touched.otp && formik.errors.otp ? (
            <div className="text-red-600 text-sm">{formik.errors.otp}</div>
          ) : null}
          <button 
            type="submit" 
            disabled={loading}
          className="bg-black mr-4 w-full flex items-center justify-center dark:bg-[#424245] text-white font-semibold gap-x-1 p-2 rounded-md mt-5">
          {
            loading ?
            <ButtonLoading/>
            :
            "Verify Account"
          }
          </button>
          <div className="flex items-center flex-col justify-between my-6">
            <p className="text-gray-600 text-sm">Didn&rsquo;t receive code?</p>
          <ResendOtp/>
          </div>
        </form>
      </div>
      </div>
      </div>
    
  );
}

export default VerifyUserOTP;
