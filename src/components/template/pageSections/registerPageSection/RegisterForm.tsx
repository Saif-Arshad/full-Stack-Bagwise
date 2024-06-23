"use client"

import React, { useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { useFormik } from 'formik';
import { signUpSchema } from '@/validations/YUP';

// interface RegisterFormProps {
//   formData: {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     avatar: string;
//     address: string;
//     gender: string;
    
//   };
//   setFormData: React.Dispatch<
//     React.SetStateAction<{
//       firstName: string;
//       lastName: string;
//       email: string;
//       password: string;
//       avatar: string;
//       address: string;
//     gender: string;

//     }>
//   >;
//   handleNext: () => void;
// }
const submitForm = (values:any) => {
  console.log("🚀 ~ submitForm ~ values:", values)

    // setFormData({ ...formData, ...values });
    // handleNext();
  
}
// const RegisterForm: React.FC<RegisterFormProps> = ({ formData, setFormData, handleNext }) => {
const RegisterForm= () => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      
    },
    validationSchema: signUpSchema,
    onSubmit: submitForm
  });
console.log(formik)

  const togglePasswordVisibility = () => {
    if (passwordInputRef.current) {
      setShowPassword((prevState) => !prevState);
      passwordInputRef.current.type = passwordInputRef.current.type === 'password' ? 'text' : 'password';
    }
  };

  return (
    <div className='w-full'>
      <div>
        {/* Add icons for Google and Facebook here */}
      </div>
      <h1 className='text-xl md:text-3xl font-bold my-5'>OR</h1>
      <form onSubmit={formik.handleSubmit }>
        <div className='flex flex-col'>
          <label htmlFor='firstName' className='text-xl md:text-2xl font-semibold'>
            Enter Your Name
          </label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='First Name'
            className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className='text-red-600'>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className='flex flex-col'>
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder='Last Name'
            className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className='text-red-600'>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl md:text-2xl font-semibold my-3'>Enter Your Gender</h2>
          <div className='flex flex-col'>
            <div className='flex flex-row text-lg gap-1'>
              <input type='radio' name='gender' id='male' value="male" onChange={formik.handleChange} />
              <label htmlFor='male'>Male</label>
            </div>
            <div className='flex flex-row text-lg gap-1'>
              <input type='radio' name='gender' id='female' value="female" onChange={formik.handleChange} />
              <label htmlFor='female'>Female</label>
            </div>
            <div className='flex flex-row text-lg gap-1'>
              <input type='radio' name='gender' id='other' value="other" onChange={formik.handleChange} />
              <label htmlFor='other'>Others</label>
            </div>
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl md:text-3xl font-bold my-6'>Registration credentials</h1>
          <div className='flex flex-col'>
            <input
              type='email'
              name='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder='Email'
              className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
            />
            {formik.touched.email && formik.errors.email ? (
              <div className='text-red-600'>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className='flex flex-col'>
            <div className='relative flex items-center w-full md:w-10/12 xl:w-9/12'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formik.values.password}
                ref={passwordInputRef}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder='Password'
                className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
              />
              <span className='absolute right-3 flex cursor-pointer top-3.5' onClick={togglePasswordVisibility}>
                {showPassword ? <FaRegEyeSlash size={23} /> : <FaRegEye size={23} />}
              </span>
            </div>
            <p className='w-full md:w-10/12 xl:w-9/12 text-sm'>
              <span className='mx-0.5'>Minimum 8 characters</span> with
              <span className='mx-0.5'>at least one uppercase,</span>
              <span className='mx-0.5'>one lowercase,</span>
              <span className='mx-0.5'>one special character and a number</span>
            </p>
          </div>
        </div>
        <button type='submit' className='mt-4'>
          Next
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
