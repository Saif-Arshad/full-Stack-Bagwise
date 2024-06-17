import type { Metadata } from "next";
import "./globals.css";
import {reduxProviders} from '@/providers/ReduxProvider'
import {themeProviders} from '@/providers/ThemeProvider'
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
<themeProciders>
  <reduxProviders>
        {children}
  </reduxProviders>
</themeProciders>
        </body>
    </html>
  );
}
