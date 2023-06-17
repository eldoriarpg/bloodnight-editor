import clsx from "clsx";
import "../../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function EmptyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "flex flex-col")}>{children}</body>
    </html>
  );
}

export const runtime = "edge"
