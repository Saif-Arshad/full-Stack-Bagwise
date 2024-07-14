"use client"
import { useSelector } from "react-redux"
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/shared/dashboard/sidebar";


export function SideBarProviders({ children }) {
    const {isOpen} = useSelector((state)=>state.sidebar)
  return(
    <>
    <Sidebar/>
    <main
    className={cn(
      "min-h-[calc(100vh_-_56px)] bg-zinc-50 dark:bg-zinc-900 transition-[margin-left] ease-in-out duration-300",
      isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
    )}
    >
    {children}
    </main>
    </>

  )
}