"use client"

import React, { useRef, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

interface RegisterFormProps {
  formData: {
    name: string;
    lastName: string;
    email: string;
    password: string;
    avatar: string;
    address: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      lastName: string;
      email: string;
      password: string;
      avatar: string;
      address: string;
    }>
  >;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ formData, setFormData }) => {
  const [showPassword, setShowPassword] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    if (passwordInputRef.current) {
      setShowPassword((prevState) => !prevState);
      passwordInputRef.current.type = passwordInputRef.current.type === 'password' ? 'text' : 'password';
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div className='w-full'>
      <div>
        {/* Add icons for Google and Facebook here */}
      </div>
      <h1 className='text-xl md:text-3xl font-bold my-5'>OR</h1>
      <form onSubmit={submitHandler}>
        <div className='flex flex-col'>
          <label htmlFor='name' className='text-xl md:text-2xl font-semibold'>
            Enter Your Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='First Name'
            className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
          />
          <input
            type='text'
            id='lastName'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Last Name'
            className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
          />
        </div>
        <div className='flex flex-col'>
          <h2 className='text-xl md:text-2xl font-semibold my-3'>Enter Your Gender</h2>
          <div className='flex flex-col'>
            <div className='flex flex-row text-lg gap-1'>
              <input type='radio' name='gender' id='male' />
              <label htmlFor='male'>Male</label>
            </div>
            <div className='flex flex-row text-lg gap-1'>
              <input type='radio' name='gender' id='female' />
              <label htmlFor='female'>Female</label>
            </div>
            <div className='flex flex-row text-lg gap-1'>
              <input type='radio' name='gender' id='other' />
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
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
            />
          </div>
          <div className='flex flex-col'>
            <div className='relative flex items-center w-full md:w-10/12 xl:w-9/12'>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                ref={passwordInputRef}
                onChange={handleChange}
                placeholder='Password'
                className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]'
              />
              <span className='absolute right-3 flex cursor-pointer top-3.5' onClick={togglePasswordVisibility}>
                {showPassword ? <FaRegEyeSlash size={23} /> : <FaRegEye size={23} />}
              </span>
            </div>
            <p className='w-full md:w-10/12 xl:w-9/12 text-sm'>
              <span className='mx-0.5'>Minimum 8 characters</span>with
              <span className='mx-0.5'>at least one uppercase,</span>
              <span className='mx-0.5'>one lowercase,</span>
              <span className='mx-0.5'>one special character and a number</span>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
