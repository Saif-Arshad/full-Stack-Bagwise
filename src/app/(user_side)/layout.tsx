import type { Metadata } from "next";
import ClientSideNavBar from "@/components/shared/navBar/clientSideNavBar";
import "@/app/globals.css";
import Footer from "@/components/shared/footer/Footer";
import Auth from "@/context/Auth";

export const metadata: Metadata = {
  title: "Bagwise",
  description: "Hey bagwisee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Auth>
        <ClientSideNavBar/>
        <div className="pt-24 bg-white dark:bg-black">
        {children}
        </div>
        <Footer/>
          </Auth>
        </body>
    </html>
  );
}
