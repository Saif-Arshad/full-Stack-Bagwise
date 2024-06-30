"use client"

import React,{useState} from 'react';
import { logInSchema} from '@/validations/YUP';
import {  IoIosArrowForward } from "react-icons/io";
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useFormik } from "formik";
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import ButtonLoading from '@/components/loader/ButtonLoading';
function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [Loading,setLoading]=useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const LoginSubmitHandler = async(value:any)=>{
    console.log("🚀 ~ LoginSubmitHandler ~ value:", value)
    setLoading(true)
    const result = await signIn('credentials', {
      redirect: false,
      email: value.email,
      password: value.password
    });
    
    if (result?.error) {
      toast.error(result.error)
      console.error(result.error);
    } else {
      toast.success("login Sucessfull")
      console.log("Login successful!");
    }
    setLoading(false)

  }
  const Formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit: LoginSubmitHandler,
  });
  return (
    <div className="w-full lg:w-10/12 flex flex-col">
        <h1 className='text-xl md:text-3xl font-bold my-6'>Login credentials</h1>
     <form onSubmit={Formik.handleSubmit}>
        <div className='flex flex-col'>
          <input
            type='email'
            name='email'
            onBlur={Formik.handleBlur}
            value={Formik.values.email}
            onChange={Formik.handleChange}
            placeholder='Email'
            className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
          />
           {Formik.touched.email && Formik.errors.email ? (
            <div className="text-red-600 text-sm">
              {Formik.errors.email}
            </div>
          ) : null}
        </div>
        <div className='flex flex-col'>
          <div className='relative flex items-center w-full'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              onBlur={Formik.handleBlur}
              value={Formik.values.password}
              onChange={Formik.handleChange}
              placeholder='Password'
              className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
            />
            <span className='absolute right-3 flex cursor-pointer top-3.5' onClick={togglePasswordVisibility}>
              {showPassword ? <FaRegEyeSlash size={23} /> : <FaRegEye size={23} />}
            </span>
          </div>
          {Formik.touched.password && Formik.errors.password ? (
            <div className="text-red-600 text-sm">
              {Formik.errors.password}
            </div>
          ) : null}
        </div>
        <button type='submit'  className=' bg-black dark:bg-[#424245] text-white font-semibold w-40 flex gap-x-1 items-center justify-center p-2 rounded-md mt-5'>
          {
            Loading ?
            <ButtonLoading/>
            :
            <>
            Login
                <IoIosArrowForward size={20}  />
            </>
          }
              
                </button>
                </form>
      </div>
  )
}

export default LoginForm
