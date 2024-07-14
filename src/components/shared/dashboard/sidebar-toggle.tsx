"use client"

import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { setIsOpen } from "@/store/feature/Sidebar.Slice";

export function SidebarToggle() {
  const dispatch = useDispatch();
  const {isOpen} = useSelector((state:any)=>state.sidebar)

  const handleToggle = () => {
    dispatch(setIsOpen());
  };

  return (
    <div className="invisible lg:visible absolute top-[12px] -right-[16px] z-20">
      <Button
        onClick={handleToggle}
        className="rounded-md w-8 h-8"
        variant="outline"
        size="icon"
      >
        <ChevronLeft
          className={cn(
            "h-4 w-4 transition-transform ease-in-out duration-700",
            isOpen === false ? "rotate-180" : "rotate-0"
          )}
        />
      </Button>
    </div>
  );
}
