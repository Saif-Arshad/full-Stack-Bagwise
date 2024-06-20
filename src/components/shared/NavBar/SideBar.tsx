'use client'
// eslint-disable-next-line react-hooks/rules-of-hooks
import React, { useState } from 'react';
import { ASSETS } from '../../../../public/IMAGES';
import { FaCartPlus } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { FaHome } from "react-icons/fa";
import './hamburgerIcon.css';
import { usePathname } from 'next/navigation';
import { FaShop } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
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
    {
      title:"Cart Items",
      icon:<FaCartPlus size={25} />,
      link:"/cart-items"
          },
    
   
  ]
  const navLinks2=[
  
          {
            title:"Login Account",
            icon: <IoLogIn size={25} />,
            link:"/login"
                },
    {
      title:"Create Account",
      icon: <MdAccountCircle size={25} />,
      link:"/register"
          },
   
  ]




const [sidebarOpen, setSidebarOpen] = useState(false);
const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
};

return (
  <>
<label className="hamburger">
  <input type="checkbox" onClick={toggleSidebar}/>
  <svg viewBox="0 0 32 32">
    <path className="line line-top-bottom stroke-black dark:stroke-white " d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22" />
    <path className="line stroke-black dark:stroke-white" d="M7 16 27 16" />
  </svg>
</label>


    {/* <Tooltip title="Menu"  onClick={toggleSidebar}>
            <IconButton>
              <GiHamburgerMenu size={25} className="dark:text-gray-300 " />
            </IconButton>
          </Tooltip> */}

    <aside id="default-sidebar" className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${sidebarOpen ? 'translate-x-0 block' : '-translate-x-full hidden'} `} aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-black ">
      {/* <button onClick={toggleSidebar} className="absolute top-0 right-0 p-2 mt-2 mr-3 text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 dark:focus::ring-slate-800 focus:ring-gray-200">
        <span className="sr-only">Close sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 0 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
        </svg>
      </button> */}
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
          <ul className="space-y-3 font-medium mt-7">
            {


navLinks.map((item:any,index:number)=>(

<li key={index}>
<Link href={`${item.link}`} className={`flex gap-1 items-center p-2 text-gray-900 dark:text-white rounded-lg ${pathname== item.link ? "bg-gray-200 dark:bg-[#101011]": "even: hover:bg-gray-100 dark:hover:bg-[#101011]"}     group`}>
<span className={`w-5 h-6 text-gray-500 transition duration-75 ${pathname== item.link ? "text-gray-900 dark:text-white": "group-hover:text-gray-900 dark:group-hover:text-white"}   `}>
{item.icon}
</span>
  <span className="ms-3">{item.title}</span>
</Link>
</li>

))


            }
      
          </ul>
            <div  className="w-full h-3 border-b-2 border-slate-200 dark:border-[#101011] my-7  ">

            </div>

            <ul className="space-y-3 font-medium">
            {


navLinks2.map((item:any,index:number)=>(

<li key={index}>
<Link href={`${item.link}`} className={`flex gap-1 items-center p-2 text-gray-900 dark:text-white rounded-lg ${pathname== item.link ? "bg-gray-200 dark:bg-[#101011]": "even: hover:bg-gray-100 dark:hover:bg-[#101011]"}     group`}>
<span className={`w-5 h-6 text-gray-500 transition duration-75 ${pathname== item.link ? "text-gray-900 dark:text-white": "group-hover:text-gray-900 dark:group-hover:text-white"}   `}>
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