"use client"

import React from 'react'
import ButtonLoading from '@/components/loader/ButtonLoading'
import { useFormik } from "formik";
import { resetPasswordSchema } from '@/validations/YUP';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useNewPassword } from '@/customHooks/useNewPassword';
function NewPassword() {

    const {loading,newPassword,togglePasswordVisibility,showPassword}:any = useNewPassword()

    const formik = useFormik({
        initialValues: {
          password: "",
        },
        validationSchema: resetPasswordSchema,
        onSubmit: newPassword,
      });


  return (
    <div className='w-full flex item-center justify-center'>
      <div className='w-11/12 flex item-center justify-center'>

      <div className="px-8 py-10 bg-white  rounded-lg dark:bg-[#101011] dark:text-gray-200 w-full sm:w-96">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-center mb-6">Reset Password</h1>
        <p className='text-sm text-center'>
        Enter your new password, and password must be 8 character long.
       </p>
        <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col'>
          <div className='relative flex items-center w-full'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder='Password'
              className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
            />
            <span className='absolute right-3 flex cursor-pointer top-3.5' onClick={togglePasswordVisibility}>
              {showPassword ? <FaRegEyeSlash size={23} /> : <FaRegEye size={23} />}
            </span>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-600 text-sm">
              {formik.errors.password}
            </div>
          ) : null}
        </div>
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

export default NewPassword
