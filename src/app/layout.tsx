"use client";

import clsx from "clsx";
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
      <body className={clsx(inter.className, "flex flex-col")}>
        <RootNavigation />
        {children}
      </body>
    </html>
  );
}
