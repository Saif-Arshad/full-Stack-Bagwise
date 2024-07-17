import type { Metadata } from "next";
import "@/app/globals.css";
import { Sidebar } from "@/components/shared/dashboard/sidebar";
import {SideBarProviders} from '@/providers/SidebarMargin'
import { Navbar } from "@/components/shared/dashboard/Navbar";
export const metadata: Metadata = {
  title: "Dahboard | Bagwise",
  description: "Hey bagwisee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <>
   <Navbar/>
<SideBarProviders>
    
  <div className="w-full flex items-center justify-center">
  <div className="w-11/12">
        {children}
  </div>
  </div>
</SideBarProviders>
   </>

  );
}
