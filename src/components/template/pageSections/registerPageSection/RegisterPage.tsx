import React from 'react'
import RegisterForm from './RegisterForm'
import JoinRegisteration from './JoinRegisteration'

function RegisterPage() {
  return (
    <div className='w-full flex items-center justify-center'>
    <div className='w-11/12 flex flex-col lg:flex-row flex-wrap h-full'>
        <RegisterForm/>
        <JoinRegisteration/>
    </div>
    </div>
  )
}

export default RegisterPage
