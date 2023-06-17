"use client";

import { RootNavigation } from "../components/RootNavigation";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootNavigation />
        {children}
      </body>
    </html>
  );
}
