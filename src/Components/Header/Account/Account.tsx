'use client'

import React, {useState} from 'react'
import { MdOutlineAccountCircle } from "react-icons/md";
import { PiSignIn } from "react-icons/pi";
import { CgLogIn } from "react-icons/cg";
import Link from 'next/link';
function Account() {
  const [accountList,setAccountList] = useState(false)
  const accountHandler=()=>{
    if(accountList){
      setAccountList(false)
    }
    else{
      setAccountList(true)
    }
    console.log(accountList);
   
  }
  return (
    <div className='text-black cursor-pointer relative '>
      <MdOutlineAccountCircle onClick={accountHandler}  color='purple' size={28}/>
        <div className={`absolute ${accountList ? "visible":"hidden"}   right-8 w-32 bg-slate-50 flex flex-col overflow-hidden rounded-md`}>
            <Link className='cursor-pointer md:text-lg  font-semibold flex flex-row py-1 px-5 hover:bg-slate-200 gap-x-1 items-center' href="/signin"><PiSignIn size={20}/>Sign In</Link>
            <Link className='cursor-pointer md:text-lg  font-semibold flex flex-row py-1 px-5 hover:bg-slate-200 gap-x-1 items-center' href="/signin"><CgLogIn size={20} />Log In</Link>
        </div>

    </div>
  )
}

export default Account
