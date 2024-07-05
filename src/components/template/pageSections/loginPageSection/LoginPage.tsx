import React from 'react'
import LoginForm from './LoginForm'
import WelcomeBack from './WelcomeBack'
import GoogleLogIn from '@/components/template/pageSections/googleOneTab/GoogleLogIn'
function LoginPage() {
  return (
   <>
   <GoogleLogIn/>
   <div className='w-full flex items-center justify-center'>
    <div className='w-11/12 flex flex-col lg:flex-row flex-wrap h-full'>
    <div className="w-full lg:w-1/2 flex flex-col">
          <LoginForm />
        </div>
        <WelcomeBack/>
    </div>
    </div>
   </>
  )
}

export default LoginPage
