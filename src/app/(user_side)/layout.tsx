import type { Metadata } from "next";
import ClientSideNavBar from "@/components/shared/navBar/clientSideNavBar";
import "@/app/globals.css";
import Footer from "@/components/shared/footer/Footer";
import {ThemeProviders} from '@/providers/ThemeProvider'
import {ReduxProviders} from '@/providers/ReduxProvider'

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
        <ClientSideNavBar/>
        <div className="pt-24">
        {children}
        </div>
        {/* <Footer/> */}
        </body>
    </html>
  );
}
