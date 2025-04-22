"use client";
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function SideBar() {
    const subjects = ["Programming", "DataBase", "OS", "CN", "DSA"];
    const languages = {
        "Programming": "C, Java, Python"
    };

    return (
        <div className={`${roboto.className}`}>
            <div className='p-6 space-y-4'>
                {subjects.map((subject, index) => (
                    <div key={index} className='flex flex-col space-y-1 cursor-pointer'>
                        <h2 className='font-semibold'>{subject}</h2>
                        {languages[subject] && <p className='text-sm text-gray-500'>{languages[subject]}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
