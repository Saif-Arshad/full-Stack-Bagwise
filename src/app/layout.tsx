import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/Redux/Provider"
import Header from '@/Components/shared/header/Header'

export const metadata: Metadata = {
  title: "Bagwise - Best place to buy bags",
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

        <Providers>
          <Header/>
        {children}
      </Providers>
        </body>
    </html>
  );
}
