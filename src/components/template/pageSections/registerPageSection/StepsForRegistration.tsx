"use client"

import React, { useState } from 'react';
import RegisterForm from './RegisterForm';
import UserProfileSetUp from './UserProfileSetUp';
import VarifyUserOTP from './VarifyUserOTP';

const MultiStepSignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender:"",
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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform form submission logic here
    alert('Form submitted!');
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <RegisterForm
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <UserProfileSetUp
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return <VarifyUserOTP handleBack={handleBack} handleSubmit={handleSubmit} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <form onSubmit={handleSubmit}>
        {getStepContent(activeStep)}
        {activeStep !== 0 && (
          <button type='button' onClick={handleBack} className='mr-4'>
            Back
          </button>
        )}
        {activeStep === 2 && (
          <button type='submit' className='mt-4'>
            Finish
          </button>
        )}
      </form>
    </div>
  );
};

export default MultiStepSignUpForm;
