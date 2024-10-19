"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import 'antd/dist/reset.css'; // Ensure you import Ant Design styles
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-[20px] px-[15px] lg:px-[100px]">
          {children}
        </div>
      </body>
    </html>
  );
}
