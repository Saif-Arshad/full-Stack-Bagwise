"use client";
import React, { useState } from "react";
import { ASSETS } from "../../../../public/IMAGES";
import Link from "next/link";
import Image from "next/image";
import { TbLayoutDashboard } from "react-icons/tb";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { MdDiscount } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { RiInbox2Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";

const DropdownMenu = ({ title, icon, links }:any) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        onClick={toggleDropdown}
      >
        {icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{title}</span>
        <svg
          className={`w-6 h-6 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="py-2 space-y-2">
          {links.map((link:any, index:number) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`flex items-center w-full font-normal transition duration-75 p-2 text-gray-900 rounded-lg ${
                  pathname == link.href
                    ? "bg-gray-200"
                    : "even: hover:bg-gray-100"
                } group`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

function AdminSideBar() {
  const pathname = usePathname();
  const navLinks = [
    {
      title: "Dashboard",
      icon: <TbLayoutDashboard size={25} />,
      link: "/dashboard",
    },
    {
      title: "Inbox",
      icon: <RiInbox2Fill size={25} />,
      link: "/dashboard/inbox",
    },
    {
      title: "Orders",
      icon: <PiShoppingCartSimpleFill size={25} />,
      link: "/dashboard/order",
    },
  ];

  const productDropdownLinks = [
    { title: "Category", href: "/dashboard/category" },
    { title: "Product", href: "/dashboard/products" },
    { title: "Coupon Discount", href: "/dashboard/coupon" },
  ];

  const managementDropdownLinks = [
    { title: "User Management", href: "/dashboard/users" },
    { title: "Admin Management", href: "/dashboard/admins" },
    { title: "Admin Permissions", href: "/dashboard/roles" },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="fixed z-30 inline-flex items-start p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden h-9 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className={`fixed overflow-x-scroll scrollbar top-0 left-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? "" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-x-scroll scrollbar bg-gray-50">
          {sidebarOpen && window.innerWidth <= 640 && (
            <button
              onClick={toggleSidebar}
              className="absolute top-0 right-0 p-2 mt-2 mr-3 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.293 3.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 0 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <span className="self-center py-4 flex items-center justify-center">
            <Link href={"/"}>
              <Image
                src={ASSETS.lightLogo}
                width={110}
                height={100}
                className="w-auto h-auto object-cover dark:hidden"
                alt="Bagwise Logo"
              />
              <Image
                src={ASSETS.darkLogo}
                width={110}
                height={100}
                alt="Bagwise Logo"
                className="w-auto h-auto object-cover dark:block hidden"
              />
            </Link>
          </span>
          <ul className="space-y-3 mt-3 md:mt-6 font-medium">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={`${item.link}`}
                  className={`flex gap-1 items-center p-2 text-gray-900 rounded-lg ${
                    pathname == item.link
                      ? "bg-gray-200"
                      : "even: hover:bg-gray-100"
                  } group`}
                >
                  <span
                    className={`w-5 h-6 text-gray-500 transition duration-75 ${
                      pathname == item.link
                        ? "text-gray-900"
                        : "group-hover:text-gray-900"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="ms-3">{item.title}</span>
                </Link>
              </li>
            ))}
            <DropdownMenu
              title="Inventory"
              icon={<FaBagShopping size={25} />}
              links={productDropdownLinks}
            />
            <DropdownMenu
              title="Management"
              icon={<RiAdminFill size={25} />}
              links={managementDropdownLinks}
            />
          </ul>
        </div>
      </aside>
    </>
  );
}

export default AdminSideBar;
