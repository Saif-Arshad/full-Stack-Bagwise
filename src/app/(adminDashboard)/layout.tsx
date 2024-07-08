import type { Metadata } from "next";
import "@/app/globals.css";
import AdminSideBar from "@/components/shared/dashboardNavbar/DashboardSideBar";
import DashboardNavBar from "@/components/shared/dashboardNavbar/DashboardNavBar";

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
   <AdminSideBar/>
   <div className="sm:ml-64">
    <DashboardNavBar/>
    <div className="pt-10">
        {children}
    </div>
   </div>
   </>

  );
}
