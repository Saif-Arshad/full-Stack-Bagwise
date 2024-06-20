"use client"

import React,{useState} from "react";
import Image from "next/image";
import { ASSETS } from "../../../../public/IMAGES";
import SearchInput from "./SearchInput";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import ToggleTheme from "./ToggleTheme";
import { IoSearch } from "react-icons/io5";
import SideBar from "./SideBar";
function ClientSideNavBar() {
    const [open, setOpen] = useState(false)
  return (
    <nav className="w-full fixed backdrop-blur-lg shadow-sm  dark:bg-black bg-white   ">
      <div className="flex gap-y-2 sm:gap-y-0 flex-col sm:flex-row items-center justify-center sm:justify-between  w-full px-4 md:px-8 py-2">
        <div className="">
          <Image
            src={ASSETS.lightLogo}
            width={150}
            height={150}
            alt="Bagwise Logo"
            className="object-contain dark:hidden"
          />
          <Image
            src={ASSETS.darkLogo}
            width={150}
            height={150}
            alt="Bagwise Logo"
            className="object-contain dark:block hidden"
          />
        </div>
        <div className="min-w-[30vw] hidden sm:flex">

        <SearchInput />
        </div>

        <div className="flex flex-row justify-between items-center  ">
          <Tooltip title="Your Cart">
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <MdOutlineAddShoppingCart size={25} className="dark:text-gray-300 " />
              </Badge>
            </IconButton>
          </Tooltip>
       
          <Tooltip title="Search" className="sm:hidden" onClick={() => setOpen(true)} >
            <IconButton>
              <IoSearch size={25} className="dark:text-gray-300 " />
            </IconButton>
          </Tooltip>
          {/* <Tooltip title="Register">
            <IconButton>
              <FaRegUserCircle size={25} className="dark:text-gray-300 " />
            </IconButton>
          </Tooltip> */}
            <span className="px-2">

          <ToggleTheme />
            </span>
    <SideBar/>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default ClientSideNavBar;
