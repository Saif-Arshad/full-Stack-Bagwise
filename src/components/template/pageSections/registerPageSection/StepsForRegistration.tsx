"use client"

import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormData } from '@/validations/YUP';
import { signUpSchema, profileSchema } from '@/validations/YUP';
import RegisterForm from './RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import UserProfileSetUp from './UserProfileSetUp';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { createUser } from '@/store/feature/SignUpSlice';
import ButtonLoading from '@/components/loader/ButtonLoading';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const MultiStepSignUpForm: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const router = useRouter();
  const { isLoading, isError, error, res } = useSelector((state: any) => state.createUser); 
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
    }
  ];

  const isLastStep = activeStep === steps.length - 1;

  const handleSubmit = async (values: FormData, actions: FormikHelpers<FormData>) => {
    if (isLastStep) {
      setIsProfileSubmitted(true);
      const createNewUser = await dispatch(createUser(values));
      if(res?.success){
        toast.success(res.message)
        router.push('/verify-account');
        return
      }
      if (isError) {
        toast.error("Sign Up failed Please try again");
        setIsProfileSubmitted(false);
        setActiveStep(0);
        return
      }
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
            {CurrentStepComponent && 
              <CurrentStepComponent 
                formData={formData} 
                setFormData={setFormData} 
              />
            }
            <div className='flex justify-between mt-4'>
              {activeStep > 0 && (
                <button
                  type='button'
                  className=' bg-black mr-4 dark:bg-[#424245] text-white font-semibold flex gap-x-1 items-center p-2 rounded-md mt-5'
                  onClick={() => setActiveStep(activeStep - 1)}
                >
                  <IoIosArrowBack size={20} />
                  Back
                </button>
              )}
              <button 
                type='submit' 
                disabled={isSubmitting || isLoading} 
                className=' bg-black dark:bg-[#424245] text-white font-semibold flex gap-x-1 items-center p-2 rounded-md mt-5'
              >
                {isLoading ? <ButtonLoading /> : (isLastStep ? 'Submit' : 'Next')}
                <IoIosArrowForward size={20} />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MultiStepSignUpForm;
