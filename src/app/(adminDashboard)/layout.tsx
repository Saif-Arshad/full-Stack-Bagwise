import type { Metadata } from "next";
import "@/app/globals.css";
import AdminSideBar from "@/components/shared/DashboardSideBar";

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
        {children}
   </div>
   </>

  );
}
