"use client"

import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import UserProfileSetUp from './UserProfileSetUp';
import VarifyUserOTP from './VarifyUserOTP';
import { IoIosArrowForward } from 'react-icons/io';

const MultiStepSignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    avatar: '',
    address: '',
  });
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Perform form submission logic here
    alert('Form submitted!');
  };

  const getStepContent = (step:number) => {
    switch (step) {
      case 0:
        return <RegisterForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <UserProfileSetUp formData={formData} setFormData={setFormData} />;
      case 2:
        return <VarifyUserOTP />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <div className='w-full'>
      <h1 className='text-xl md:text-3xl font-bold my-5 capitalize'>Sign up</h1>
      <form onSubmit={handleSubmit}>
        {getStepContent(activeStep)}
        <div className='flex flex-row items-center justify-between w-full md:w-10/12 xl:w-9/12 capitalize bg-slate-950 text-white px-4 text-xl py-2 rounded-xl hover:bg-slate-900 transition-all dark:hover:bg-slate-950 my-8 dark:bg-slate-900 dark:text-white'>
          {activeStep > 0 && (
            <button type='button' className='flex flex-row items-center' onClick={handleBack}>
              Back
            </button>
          )}
          <button type='button' onClick={handleNext}>
            {activeStep === 2 ? 'Register' : 'Next'}
            <IoIosArrowForward size={23} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepSignUpForm;
