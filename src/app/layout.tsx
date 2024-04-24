import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/Components/Header/Nav";
import { Providers } from "@/Redux/Provider"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


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
      <body className="min-w-screen overflow-x-hidden relative">

        <Providers>
        <Nav/>
        {children}
      </Providers>
        </body>
    </html>
  );
}
