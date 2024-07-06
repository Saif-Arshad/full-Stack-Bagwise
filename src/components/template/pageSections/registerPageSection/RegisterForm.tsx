"use client"


import React, { useState } from 'react';
import { useFormikContext, Field } from 'formik';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { FormData } from '@/validations/YUP';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface RegisterFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formData, setFormData }) => {
  const { values, errors, touched, handleChange, handleBlur } = useFormikContext<FormData>();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  // const googleLogin =  async ()=>{
  //   const googleAuth = await signIn('google', { prompt: 'select_account' });
  // if(googleAuth?.error){
  //   toast.error("SomeThing wrong please try again later")
  //   return
  // }
  //   toast.success("Login successful");
  // }

  return (
    <div className='w-full'>
<h1 className='text-xl md:text-3xl font-bold my-5'>Create Account</h1>

      {/* <div className="flex items-center mt-9 justify-start">
<button
type="button"
      onClick={googleLogin}
      className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg  px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
    >
      <svg
        className="h-6 w-6 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="800px"
        height="800px"
        viewBox="-0.5 0 48 48"
        version="1.1"
      >
        <title>Google-color</title>
        <desc>Created with Sketch.</desc>
        <defs> </defs>
        <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
          <g id="Color-" transform="translate(-401.000000, -860.000000)">
            <g id="Google" transform="translate(401.000000, 860.000000)">
              <path
                d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                id="Fill-1"
                fill="#FBBC05"
              ></path>
              <path
                d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                id="Fill-2"
                fill="#EB4335"
              ></path>
              <path
                d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                id="Fill-3"
                fill="#34A853"
              ></path>
              <path
                d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                id="Fill-4"
                fill="#4285F4"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <span>Continue with Google</span>
    </button>
</div>

<h1 className='text-xl md:text-3xl font-bold my-5'>OR</h1> */}


      <div className='flex flex-col'>
        <label htmlFor='firstName' className='text-xl md:text-2xl font-semibold'>
          Enter Your Name
        </label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='First Name'
          className='w-full p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200 dark:border-black '
        />
        {touched.firstName && errors.firstName ? (
          <div className='text-red-600 dark:text-red-500'>{errors.firstName}</div>
        ) : null}
      </div>
      <div className='flex flex-col'>
        <input
          type='text'
          id='lastName'
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Last Name'
          className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200 dark:border-black'
        />
        {touched.lastName && errors.lastName ? (
          <div className='text-red-600 dark:text-red-500'>{errors.lastName}</div>
        ) : null}
      </div>
      <div className='flex flex-col'>
        <h2 className='text-xl md:text-2xl font-semibold my-3'>Enter Your Gender</h2>
        <div className='flex flex-row text-lg gap-1'>
          <Field type='radio' name='gender' id='male' value='male' />
          <label htmlFor='male'>Male</label>
        </div>
        <div className='flex flex-row text-lg gap-1'>
          <Field type='radio' name='gender' id='female' value='female' />
          <label htmlFor='female'>Female</label>
        </div>
        <div className='flex flex-row text-lg gap-1'>
          <Field type='radio' name='gender' id='other' value='other' />
          <label htmlFor='other'>Other</label>
        </div>
      </div>
      <div className='flex flex-col'>
        <h1 className='text-xl md:text-3xl font-bold my-6'>Registration credentials</h1>
        <div className='flex flex-col'>
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Email'
            className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200 dark:border-black'
          />
          {touched.email && errors.email ? (
            <div className='text-red-600 dark:text-red-500'>{errors.email}</div>
          ) : null}
        </div>
        <div className='flex flex-col'>
          <div className='relative flex items-center w-full'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Password'
              className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200 dark:border-black'
            />
            <span className='absolute right-3 flex cursor-pointer top-3.5' onClick={togglePasswordVisibility}>
              {showPassword ? <FaRegEyeSlash size={23} /> : <FaRegEye size={23} />}
            </span>
          </div>
          {touched.password && errors.password ? (
            <div className='text-red-600 dark:text-red-500'>{errors.password}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
