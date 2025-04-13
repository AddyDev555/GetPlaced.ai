"use client";

import { useState } from "react";
import { Roboto, Lobster } from 'next/font/google';
import Switch from "./switch";
import Link from "next/link";
import RegisterCard from "./register-card";
import { usePathname } from 'next/navigation'

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

const lobster = Lobster({
    subsets: ['latin'],
    weight: '400',
});

export default function Navbar({ onToggle }) {
    const pathname = usePathname();

    const menuItems = [
        { name: "Aptitude", href: "/aptitude" },
        { name: "Technical", href: "/technical" },
        { name: "Group Discussion", href: "/group-discussion" },
        { name: "HR Interview", href: "/interview" },
        { name: "Company Questions", href: "/" },
        { name: "Jobs & Internships", href: "/" },
    ];

    return (
        <div className={`${roboto.className} pt-6 pb-5 w-[94%] m-auto sticky top-0 left-0 z-50`}>
            <div className="flex">
                <div className="flex items-center">
                    <ul className="flex justify-center space-x-4 items-center">
                        <Link className={`${lobster.className} mr-6 mb-1 text-[1.4rem]`} href="/" onClick={() => setActiveIndex(100)}>Get<span className="text-yellow-300 font-semibold">Placed</span><span className={`text-[1rem] ${roboto.className} font-semibold`}>.ai</span></Link>
                        {menuItems.map((item, index) => (
                            <Link
                                href={item.href}
                                key={index}
                                className={`relative text-[0.9rem] cursor-pointer after:content-[''] after:block after:h-[2px] after:bg-yellow-300 after:transition-transform after:duration-300 after:origin-left ${pathname === item.href ? "after:scale-x-100" : "after:scale-x-0"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto flex items-center">
                    <RegisterCard />
                    <Switch onToggle={onToggle} />
                </div>
            </div>
        </div>
    );
}
