import type { Metadata } from "next";
import ClientSideNavBar from "@/components/shared/NavBar/clientSideNavBar";
import "@/app/globals.css";
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
    <html lang="en">
      <body>
      <ThemeProviders>
  <ReduxProviders>
        <ClientSideNavBar/>
        <div className="pt-24">
        {children}
        </div>
  </ReduxProviders>
</ThemeProviders>
        </body>
    </html>
  );
}
