'use client';

import React, { useRef, useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("hello");
    };

    const togglePasswordVisibility = () => {
        if (passwordInputRef.current) {
            setShowPassword(prevState => !prevState);
            passwordInputRef.current.type = passwordInputRef.current.type === 'password' ? 'text' : 'password';
        }
    };

    return (
        <div className='w-full lg:w-6/12 flex flex-col'>
            <h1 className='text-xl md:text-3xl font-bold my-5 capitalize'>
                Sign up with
            </h1>
            <div>
                there will be icon shown of google facebook
            </div>
            <h1 className='text-xl md:text-3xl font-bold my-5'>
                OR
            </h1>
            <form onSubmit={submitHandler}>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='text-xl md:text-2xl font-semibold'>Enter Your Name</label>
                    <input type='text' id='name' placeholder='First Name' className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-4 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]' />
                    <input type='text' placeholder='Last Name' className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]' />
                </div>
                <div className='flex flex-col'>
                    <h2 className='text-xl md:text-2xl font-semibold my-3'>Enter Your Gender</h2>
                    <div className='flex flex-col'>
                        <div className='flex flex-row text-lg gap-1'>
                            <input type="radio" name="gender" id='male' />
                            <label htmlFor="male">Male</label>
                        </div>
                        <div className='flex flex-row text-lg gap-1'>
                            <input type="radio" name="gender" id='female' />
                            <label htmlFor="female">Female</label>
                        </div>
                        <div className='flex flex-row text-lg gap-1'>
                            <input type="radio" name="gender" id='other' />
                            <label htmlFor="other">Others</label>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl md:text-3xl font-bold my-6'>
                        Registration credentials
                    </h1>
                    <div className='flex flex-col'>
                        <input type='email' placeholder='Email' className='w-full md:w-10/12 xl:w-9/12 p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]' />
                    </div>
                    <div className='flex flex-col'>
                        <div className='relative flex items-center w-full md:w-10/12 xl:w-9/12'>
                            <input type={showPassword ? 'text' : 'password'} ref={passwordInputRef} placeholder='Password' className='w-full p-2 rounded-lg mb-2 mt-1 focus:ring-2 focus:ring-slate-200 dark:focus:ring-[#101011] outline-none border border-slate-200 dark:border-[#101011]' />
                            <span className="absolute right-3 flex cursor-pointer top-3.5" onClick={togglePasswordVisibility}>
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
                <button className="flex flex-row items-center justify-between w-full md:w-10/12 xl:w-9/12 capitalize bg-slate-950 text-white px-4 text-xl py-2 rounded-xl hover:bg-slate-900 transition-all dark:hover:bg-slate-950 my-8 dark:bg-slate-900 dark:text-white">
                    register
                    <IoIosArrowForward size={23} />
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
