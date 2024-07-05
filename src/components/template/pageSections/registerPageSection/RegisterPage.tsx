import GoogleSignUp from '../googleOneTab/GoogleSignUp';
import React from 'react';
import JoinRegisteration from './JoinRegisteration';
import MultiStepSignUpForm from './StepsForRegistration';

function RegisterPage() {

  return (
    <>
    <GoogleSignUp/>
    <div className='w-full flex items-center justify-center'>
      <div className='w-11/12 flex flex-col-reverse lg:flex-row flex-wrap h-full'>
        <JoinRegisteration />
        <div className="w-full lg:w-1/2 flex flex-col">
          <MultiStepSignUpForm />
        </div>
      </div>
    </div>
    </>
  );
}

export default RegisterPage;
