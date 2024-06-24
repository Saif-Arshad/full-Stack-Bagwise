"use client"

import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormData } from '@/validations/YUP';
import { signUpSchema, profileSchema } from '@/validations/YUP';
import RegisterForm from './RegisterForm';
import { IoIosArrowBack } from "react-icons/io";
import UserProfileSetUp from './UserProfileSetUp';
import VarifyUserOTP from './VarifyUserOTP';
import { IoIosArrowForward } from "react-icons/io";

const MultiStepSignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    avatar: "",
    address: '',
  });
  const [activeStep, setActiveStep] = useState(0);
  const [isProfileSubmitted, setIsProfileSubmitted] = useState(false);

  const steps = [
    {
      label: 'Sign Up',
      validationSchema: signUpSchema,
      component: RegisterForm,
    },
    {
      label: 'User Profile',
      validationSchema: profileSchema,
      component: UserProfileSetUp,
    },
    {
      label: 'Verify OTP',
      component: VarifyUserOTP,
    },
  ];

  const isLastStep = activeStep === steps.length - 2;

  const handleSubmit = (values: FormData, actions: FormikHelpers<FormData>) => {
    if (activeStep === 1) {
      setIsProfileSubmitted(true);
      setActiveStep(activeStep + 1);
      console.log('Form Data:', values);
    } else {
      setFormData(values);
      setActiveStep(activeStep + 1);
    }
    actions.setSubmitting(false);
  };

  const currentValidationSchema = steps[activeStep]?.validationSchema;

  const CurrentStepComponent = steps[activeStep]?.component;

  return (
    <div className='flex flex-col items-center justify-center'>
      <Formik
        initialValues={formData}
        validationSchema={currentValidationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <CurrentStepComponent formData={formData} setFormData={setFormData} />
            <div className='flex justify-between mt-4'>
              {activeStep > 0 && !isProfileSubmitted && (
                <button
                  type='button'
                  className=' bg-black mr-4 dark:bg-[#959598] text-white font-semibold flex gap-x-1 items-center p-2 rounded-md mt-5'
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  <IoIosArrowBack size={20} />
                  Back
                </button>
              )}
              {!isProfileSubmitted && (
                <button type='submit' disabled={isSubmitting} className=' bg-black dark:bg-[#959598] text-white font-semibold flex gap-x-1 items-center p-2 rounded-md mt-5'>
                  {isLastStep ? 'Submit' : 'Next'}
                  <IoIosArrowForward size={20} />
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepSignUpForm;
