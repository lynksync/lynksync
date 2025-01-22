import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import Navbar from "./_components/Navbar";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"LynkSync",
    template: " %s | LynkSync",

  },
  description: "Onestop bookmark utility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
  Navbar: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={` ${dmSans.className} antialiased bg-[#EAEEFE]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
