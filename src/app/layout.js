"use client";

import Menubar from "@/components/Menubar";
import "./globals.css";
import Head from "next/head";
// import { GoogleFont } from "@next/font/google";

// const myFont = GoogleFont({
//   family: "Poppins",
//   subsets: ["latin"], // Add more subsets if needed (e.g., ['latin', 'cyrillic'])
//   display: "swap", // Controls font loading behavior
//   variable: "--font-poppins", // Customize the variable name (optional)
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
