"use client";

import { useState, ReactNode } from "react";
import Navbar from "../components/navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Head from "next/head";
import { usePathname } from "next/navigation";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  const shouldShowNavbar = !pathname.startsWith("/user/");

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/mainLogo.png" type="image/png" />
      </Head>
      <body className={darkMode ? "dark overflow-y-hidden" : "overflow-y-hidden"}>
        {shouldShowNavbar && (
          <div className="shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)]">
            <Navbar onToggle={setDarkMode} />
            <Toaster position="bottom-right" reverseOrder={false} />
          </div>
        )}
        {children}
      </body>
    </html>
  );
}
