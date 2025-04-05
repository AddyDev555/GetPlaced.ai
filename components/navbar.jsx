"use client";

import { useState } from "react";
import { Roboto } from 'next/font/google';
import Switch from "./switch";
import Link from "next/link";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function Navbar({ onToggle }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const menuItems = [
        { name: "Aptitude", href: "/aptitude" },
        { name: "Technical", href: "/technical" },
        { name: "Group Discussion", href: "/" },
        { name: "HR Interview", href: "/" },
        { name: "Resume Builder", href: "/" },
    ];

    return (
        <div className={`${roboto.className} pt-6 pb-5 w-[90%] m-auto`}>
            <div className="flex">
                <div className="flex items-center">
                    <ul className="flex justify-center space-x-7">
                        {menuItems.map((item, index) => (
                            <Link
                                href={item.href}
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`relative text-[0.9rem] font-semibold cursor-pointer after:content-[''] after:block after:h-[2px] after:bg-yellow-300 after:transition-transform after:duration-300 after:origin-left ${activeIndex === index ? "after:scale-x-100" : "after:scale-x-0"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="ml-auto">
                    <Switch onToggle={onToggle}/>
                </div>
            </div>
        </div>
    );
}
