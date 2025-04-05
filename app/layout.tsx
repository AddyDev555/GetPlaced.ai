"use client";

import { useState } from "react";
import Navbar from "../components/navbar";
import "./globals.css";

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <html lang="en">
      <body className={darkMode ? "dark" : ""}>
        <div className="shadow-[0_4px_4px_-2px_rgba(0,0,0,0.1)]">
          <Navbar onToggle={setDarkMode} />
        </div>
        {children}
      </body>
    </html>
  );
}
