"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import "./globals.css";
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/mainLogo.png" type="image/png"/>
      </Head>
      <body className={darkMode ? "dark overflow-y-hidden" : "overflow-y-hidden"}>
        <div className="shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)]">
          <Navbar onToggle={setDarkMode} />
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
        {children}
      </body>
    </html>
  );
}
