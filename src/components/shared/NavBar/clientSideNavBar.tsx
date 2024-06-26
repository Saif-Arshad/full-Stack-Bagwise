"use client"

import React from "react";
import Image from "next/image";
import { ASSETS } from "../../../../public/IMAGES";
import SearchInput from "./SearchInput";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import Link from "next/link";
import SideBar from "./SideBar";
function ClientSideNavBar() {
  return (
    <nav className="w-full fixed backdrop-blur-lg shadow-sm  dark:bg-black bg-white z-50   ">
      <div className="flex gap-y-2 sm:gap-y-0 flex-col sm:flex-row items-center justify-center sm:justify-between  w-full px-4 md:px-8 py-2">
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
        <div className="min-w-[30vw] hidden sm:flex">

        <SearchInput />
        </div>

        <div className="flex flex-row justify-between items-center  ">
          <Tooltip title="Your Cart">
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <MdOutlineAddShoppingCart size={25}  className=" dark:text-gray-300 " />
              </Badge>
            </IconButton>
          </Tooltip>

       
    <SideBar/>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default ClientSideNavBar;
