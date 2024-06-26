import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
function JoinRegisteration() {
  return (
    <div className='w-full lg:w-6/12 z-0 my-7 lg:my-0'>
        <div className='w-full flex lg:sticky lg:top-28 flex-col '>
        <h1 className='text-xl md:text-3xl font-bold'>
        Join the Bagwise & Unlock
        <br/>
         Special Offers
    </h1>
    <h3 className="text-sm my-0.5">
    Be the first to know about sales, new arrivals, and get exclusive discounts!
    </h3>

    <ul className='list-disc text-lg my-5'>
    <li>Exclusive discounts and coupons</li>
  <li>Early access to new arrivals and sales</li>
  <li>Free shipping on orders over 5000</li>
  <li>Rewards points program</li>
  <li>Personalized recommendations based on your style</li>
  <li>Member-only events and experiences</li>
  <li>Stay informed about the latest trends</li>
    </ul>
    <p>
        Create your account and unlock all these offers and get exclusive discounts
        <br />
        Already have a account ? Then login now

    </p>
    <Link href={"/login-account"} className='w-5/6'>
    <button 
    className=' bg-black mr-4 dark:bg-[#424245] text-white font-semibold flex gap-x-1 items-center p-2 text-lg rounded-md mt-5'
    >
                  Login
                  <IoIosArrowForward size={22} />
    </button>
      </Link>
        </div>  
    </div>
  )
}

export default JoinRegisteration
