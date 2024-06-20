'use client'
// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useState } from 'react';
import { ASSETS } from '../../../../public/IMAGES';
import { GiHamburgerMenu } from "react-icons/gi";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import { usePathname } from 'next/navigation';
import { FaShop } from "react-icons/fa6";
import { FaCashRegister } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
function SideBar() {

const pathname = usePathname();
  const navLinks=[
    {
      title:"Home",
      icon:<FaHome size={25} />,
      link:"/"
          },
    {
      title:"Shop Now",
      icon:<FaShop size={25} />,
      link:"/shop"
          },
    
   
  ]
  const navLinks2=[
  
          {
            title:"Login",
            icon: <CiLogin size={25} />,
            link:"/login"
                },
    {
      title:"Sign Up",
      icon: <FaCashRegister size={25} />,
      link:"/register"
          },
   
  ]




const [sidebarOpen, setSidebarOpen] = useState(false);
console.log( sidebarOpen)
const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};

return (
  <>


    <Tooltip title="Menu"  onClick={toggleSidebar}>
            <IconButton>
              <GiHamburgerMenu size={25} className="dark:text-gray-300 " />
            </IconButton>
          </Tooltip>

    <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0 block' : '-translate-x-full hidden'} `} aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black ">
      <button onClick={toggleSidebar} className="absolute top-0 right-0 p-2 mt-2 mr-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 dark:focus::ring-slate-800 focus:ring-gray-200">
        <span className="sr-only">Close sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 0 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      <Link href="/" >
        <span className="self-center ml-5 py-4 flex items-center text-2xl font-bold whitespace-nowrap ">
        <div >
          <Image src={ASSETS.lightLogo} width={150} height={150}
           alt="Bagwise Logo"
           className='object-cover dark:hidden'
           />
          <Image src={ASSETS.darkLogo} width={150} height={150}
           alt="Bagwise Logo"
           className='object-cover dark:block hidden'
           />
        </div>
          </span>
        </Link>
          <ul className="space-y-3 font-medium">
            {


navLinks.map((item:any,index:number)=>(

<li key={index}>
<Link href={`${item.link}`} className={`flex gap-1 items-center p-2 text-gray-900 dark:text-gray-300 rounded-lg ${pathname== item.link ? "bg-gray-200 dark:bg-[#101011]": "even: hover:bg-gray-100 dark:hover:bg-[#101011]"}     group`}>
<span className={`w-5 h-6 text-gray-500 transition duration-75 ${pathname== item.link ? "text-gray-900": "group-hover:text-gray-900"}   `}>
{item.icon}
</span>
  <span className="ms-3">{item.title}</span>
</Link>
</li>

))


            }
      
          </ul>
            <div  className="w-full h-3 border-b-2 border-slate-200 my-7  ">

            </div>

            <ul className="space-y-3 font-medium">
            {


navLinks2.map((item:any,index:number)=>(

<li key={index}>
<Link href={`${item.link}`} className={`flex gap-1 items-center p-2 text-gray-900 dark:text-gray-300 rounded-lg ${pathname== item.link ? "bg-gray-200 dark:bg-[#101011]": "even: hover:bg-gray-100 dark:hover:bg-[#101011]"}     group`}>
<span className={`w-5 h-6 text-gray-500 transition duration-75 ${pathname== item.link ? "text-gray-900": "group-hover:text-gray-900"}   `}>
{item.icon}
</span>
  <span className="ms-3">{item.title}</span>
</Link>
</li>

))


            }
      
          </ul>
      </div>
    </aside>
  </>
);
}

export default SideBar;