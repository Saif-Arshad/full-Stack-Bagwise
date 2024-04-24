import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Components/Header/Nav";



export const metadata: Metadata = {
  title: "BagWise - Best placce to buy bags",
  description: "Bagwise ia a company that made and sale bags for customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
