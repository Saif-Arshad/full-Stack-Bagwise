import type { Metadata } from "next";
import {Toaster} from 'react-hot-toast'
import "@/app/globals.css";
import Footer from "@/components/shared/footer/Footer";
import {ThemeProviders} from '@/providers/ThemeProvider'
import {ReduxProviders} from '@/providers/ReduxProvider'
import Auth from "@/context/Auth";
import {NextUiProviders} from '@/providers/NextUiProvider'
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
      <Auth>

      <ThemeProviders>
      <NextUiProviders>
  <ReduxProviders>
  <Toaster
  position="top-right"/>
        {children}
  </ReduxProviders>
  </NextUiProviders>
</ThemeProviders>
</Auth>

        </body>
    </html>
  );
}
