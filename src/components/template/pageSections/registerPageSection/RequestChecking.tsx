import React from 'react'
import { useSelector } from 'react-redux';
import Link from 'next/link';
import Loading from '@/components/loader/Loading';
import Check from '@/components/loader/Check';
import Error from '@/components/loader/Error';
function RequestChecking() {
    const { isLoading, isError,error } = useSelector((state: any) => state.createUser);
    console.log("🚀 ~ RequestChecking ~ error:", error)
  return (
    isLoading ? (
        <div className="w-full flex items-center justify-center min-h-[40vh] flex-col">
         <Loading/>
         <p className='sm:text-lg my-7'>

          wait for a minute
         </p>
        </div>
      ) :
      isError ? (
        <div className="w-full flex items-center justify-center min-h-[40vh] flex-col">
          <Error/>
          <p className='sm:text-lg my-7'>
          {error.error.message}
         </p>
        </div>
      ) :	
      (
        <div className="w-full flex items-center justify-center min-h-[40vh] flex-col">
         <Check/>
         <p>
          Signup sucessFull and go to varify your account
         </p>
         <Link href="/verify-account">
    <button 
    className=' bg-black mr-4 dark:bg-[#424245] text-white font-semibold flex gap-x-1 items-center p-2 text-lg rounded-md mt-5'
    >
         verify Account
         </button>
         </Link>
        </div>
       )
  )
}

export default RequestChecking
