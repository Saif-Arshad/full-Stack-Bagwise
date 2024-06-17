import type { Metadata } from "next";
import ClientSideNavBar from "@/components/shared/clientSideNavBar";
import "@/app/globals.css";

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
    <html lang="en">
      <body>
        <ClientSideNavBar/>
        {children}
        </body>
    </html>
  );
}
