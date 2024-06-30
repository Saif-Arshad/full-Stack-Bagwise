"use client"


import React, { useState } from 'react';
import { useFormikContext, Field } from 'formik';
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

  return (
    <div className='w-full'>
      <h1 className='text-xl md:text-3xl font-bold my-5'>Sign Up</h1>
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
          className='w-full p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
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
          className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
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
            className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
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
              className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 outline-none border border-slate-200'
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
