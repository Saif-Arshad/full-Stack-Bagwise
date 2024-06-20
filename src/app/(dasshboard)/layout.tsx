import type { Metadata } from "next";
import "@/app/globals.css";
import {ThemeProviders} from '@/providers/ThemeProvider'
import {ReduxProviders} from '@/providers/ReduxProvider'

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
    <html lang="en">
      <body>
      <ThemeProviders>
  <ReduxProviders>
        {children}
  </ReduxProviders>
</ThemeProviders>

        </body>
    </html>
  );
}
