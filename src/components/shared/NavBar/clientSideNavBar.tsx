import React from "react";
import Image from "next/image";
import { ASSETS } from "../../../../public/IMAGES";
import SearchInput from "./SearchInput";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUserCircle } from "react-icons/fa";
import ToggleTheme from "./ToggleTheme";
function ClientSideNavBar() {
  return (
    <nav className="w-full fixed backdrop-blur-lg shadow-sm  dark:bg-[#22222] bg-white   ">
      <div className="flex items-center justify-between  w-full px-4 md:px-8 py-2">
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
            width={150}
            height={150}
            alt="Bagwise Logo"
            className="object-cover dark:block hidden"
          />
        </div>

        <SearchInput />

        <div className="flex flex-row justify-between items-center text-black">
          <Tooltip title="Your Cart">
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <MdOutlineAddShoppingCart size={25} />
              </Badge>
            </IconButton>
          </Tooltip>
          <Tooltip title="Register">
            <IconButton>
              <FaRegUserCircle size={25} />
            </IconButton>
          </Tooltip>
          <ToggleTheme />
          <Tooltip title="Menu">
            <IconButton>
              <GiHamburgerMenu size={25} />
            </IconButton>
          </Tooltip>

          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default ClientSideNavBar;
