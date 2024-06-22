import React from 'react'
import {ASSETS} from '../../../../public/IMAGES'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  const footerLinks=[
    {
      title:"Home",
      link:"/"
    },
  ]
  return (
   <footer className="bg-white shadow-md dark:bg-black">
  <div className="container mx-auto p-0 md:p-8 xl:px-0">
    <div className="mx-auto max-w-7xl px-6  pt-16">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-4">
          <div>
            <Link href="/"> 
             <div className="">
          <Image
            src={ASSETS.lightLogo}
            width={150}
            height={150}
            alt="Bagwise Logo"
            className="object-cover dark:hidden"
          />
          <Image
            src={ASSETS.darkLogo}
            width={120}
            height={150}
            alt="Bagwise Logo"
            className="object-cover dark:block hidden"
          />
        </div>
            </Link>
          </div>
          <div className="max-w-md pr-16 text-md text-black dark:text-white ">Discover the perfect bag for every occasion at BagWise. From chic handbags to versatile shoulder bags, we have it all.
          </div>
          <div className="flex space-x-2">
            <Link href="https://www.linkedin.com/in/saif-rehman-professional" target="_blank" className="text-black dark:text-white hover:scale-105 transition-all ">
            <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/Saif-Arshad"  target="_blank" className="text-black dark:text-white hover:scale-105 transition-all">
            <FaGithub  size={24} />

            </Link>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-md font-semibold leading-6 text-black dark:text-white">Our Solutions</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="/aiplatform" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">AI Platform
                  </a>
                </li>
                <li>
                  <a href="/aialgorithms" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">AI Algorithms
                  </a>
                </li>
                <li>
                  <a href="/industryapplications" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Industry
                    Applications
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-md font-semibold leading-6  text-black dark:text-white">Use Cases</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="/predictiveanalysis" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Predictive
                    Analysis
                  </a>
                </li>
                <li>
                  <a href="/customerexperience" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Customer
                    Experience
                  </a>
                </li>
                <li>
                  <a href="/automation" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Automation
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-md font-semibold leading-6  text-black dark:text-white">Resources</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="/pricing" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Pricing
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Blog
                  </a>
                </li>
                <li>
                  <a href="/casestudies" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Case Studies
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Terms
                    of Service
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-md font-semibold leading-6  text-black dark:text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a href="/aboutus" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">About Us
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Careers
                  </a>
                </li>
                <li>
                  <a href="/contactus" className="text-md leading-6 text-black hover:text-[#22222] dark:text-white dark:hover:text-slate-200">Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t border-gray-400/30  pt-8 sm:mt-20 lg:mt-24 ">
        <div className="text-md text-center  text-black dark:text-white">
          Copyright © 2024 . Crafted with
          <span className=" text-black dark:text-white  mx-1 ml-2">♥</span> by 
          <Link rel="noopener" className='mx-2 hover:text-blue-800' href="https://saifwebdev.netlify.app/" target="_blank">Saif Ur Rehman.
          </Link>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
