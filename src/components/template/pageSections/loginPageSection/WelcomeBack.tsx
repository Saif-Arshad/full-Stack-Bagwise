import React from 'react'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";

function WelcomeBack() {
  return (
    <div className='w-full lg:w-6/12 z-0 '>
        <div className='w-full flex lg:sticky lg:top-32 flex-col '>
        <h1 className='text-xl md:text-3xl font-bold'>
        Welcome Back to Bagwise!
    </h1>
    <h3 className="text-sm my-0.5">
    Access Your Account and Enjoy Exclusive Benefits
    </h3>

    <ul className='list-disc text-lg my-5'>
    <li>Manage your orders and track your shipments</li>
  <li>Save your favorite items to your wishlist</li>
  <li>View and update your profile and preferences</li>
  <li>Exclusive discounts and personalized offers</li>
  <li>Earn and redeem rewards points on your purchases</li>
  <li>Receive personalized style recommendations</li>
  <li>Participate in member-only events and experiences</li>
    </ul>
    <p>
    Log in now to enjoy all these exclusive benefits and more!
    <br />
    Don&rsquo;t have an account please register first
    </p>
    <Link href={"/register-account"} className='w-5/6'>
    <button 
    className=' bg-black mr-4 dark:bg-[#424245] text-white font-semibold flex gap-x-1 items-center p-2 text-lg rounded-md mt-5'
    >
                  SignUp
                  <IoIosArrowForward size={22} />
    </button>
      </Link>
        </div>  
    </div>
  )
}

export default WelcomeBack
