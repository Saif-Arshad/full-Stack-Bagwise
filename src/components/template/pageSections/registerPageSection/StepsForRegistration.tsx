"use client"

import React, { useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormData } from '@/validations/YUP';
import { signUpSchema, profileSchema } from '@/validations/YUP';
import RegisterForm from './RegisterForm';
import UserProfileSetUp from './UserProfileSetUp';
import VarifyUserOTP from './VarifyUserOTP';

const MultiStepSignUpForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    gender: '',
    email: '',
    password: '',
    //@ts-ignore
    avatar: "https://res.cloudinary.com/di6r722sv/image/upload/v1719230475/kj3qiomxuis6sjiu3dwl.png",
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
                  onClick={() => setActiveStep(activeStep - 1)}
                  className='mr-4'
                >
                  Back
                </button>
              )}
              {!isProfileSubmitted && (
                <button type='submit' disabled={isSubmitting}>
                  {isLastStep ? 'Submit' : 'Next'}
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
