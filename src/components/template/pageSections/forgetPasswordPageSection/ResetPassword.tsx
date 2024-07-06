"use client"

import React from 'react'
import ButtonLoading from '@/components/loader/ButtonLoading'
import { useFormik } from "formik";
import { resetPasswordSchema } from '@/validations/YUP';
import { useForgetPassword } from '@/customHooks/useForgetPassword';
function ResetPassword() {

    const {loading,forgetPassword}:any = useForgetPassword()

    const formik = useFormik({
        initialValues: {
          email: "",
        },
        validationSchema: resetPasswordSchema,
        onSubmit: forgetPassword,
      });


  return (
    <div className='w-full flex item-center justify-center'>
      <div className='w-11/12 flex item-center justify-center'>

      <div className="px-8 py-10 bg-white  rounded-lg dark:bg-[#101011] dark:text-gray-200 w-full sm:w-96">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-center mb-6">Reset Password</h1>
        <p className='text-sm text-center'>
        Enter your email address and we will send you a code to reset your password.
       </p>
        <form onSubmit={formik.handleSubmit}>
          <input 
            type="email" 
            onBlur={formik.handleBlur}
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder='example@gmail.com'
            className='p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 outline-none w-full sm:w-80 border border-slate-200 dark:border-black'
            name="email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-600 text-sm">{formik.errors.email}</div>
          ) : null}
          <button 
            type="submit" 
            disabled={loading}
          className="bg-black mr-4 w-full flex items-center justify-center dark:bg-[#424245] text-white font-semibold gap-x-1 p-2 rounded-md mt-5">
          {
            loading ?
            <ButtonLoading/>
            :
            "Reset Password"
          }
          </button>
      
        </form>
      </div>
      </div>
      </div>
  )
}

export default ResetPassword
