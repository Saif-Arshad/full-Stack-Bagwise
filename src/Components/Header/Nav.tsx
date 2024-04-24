'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Logo from '../../../public/Images/Logo/icon.png'
import Account from '@/Components/Header/Account/Account';
import Login from '../Buttons/LoginandSignUp/Login';
import Navigation from '@/Components/Header/Navigation';
import Cart from '@/Components/Header/Cart/Cart';
import Logo from "@/Components/Header/Logo/Logo"

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=''>
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 ">
        <div className="flex flex-wrap items-center sm:justify-between justify-center max-w-screen-xl px-4 mx-auto">
          <Link href="/" >
          
                <Logo/>
             
          </Link>
          <div className="flex items-center gap-x-12 mt-5 ml-2  sm:gap-x-0 sm:mt-0 sm:ml-0 lg:order-2">
           {/* <Account/> */}
           <Cart/>
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span></span>
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className={`w-6 h-6 ${isMenuOpen ? '' : 'hidden'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
          <Navigation/>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;