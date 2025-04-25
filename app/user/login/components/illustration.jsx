import { cn } from "@/lib/utils";
import React from 'react'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function Illustration() {
    return (
        <div
            className="relative w-[100%] py-28 pl-20 flex h-[50rem] bg-white dark:bg-yellow-400">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:70px_70px]",
                    "[background-image:linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_1px,transparent_1px)]"
                )}
            />
            <div className="bg-[rgba(255,255,255,0.5)] p-10 rounded-xl backdrop-blur-[2px] relative w-[84%] h-[65vh]">
                <i className="text-[4rem] font-bold text-white fi fi-rr-unlock"></i>
                <h1 className="text-[2.5rem] font-bold">Unlock Your Potential</h1>
                <p className={`${roboto.className} mt-4 text-gray-600`}>Sharpen Your Skills, Secure Your Future - Interview Ready, Aptitude Strong.</p>
            </div>
        </div>
    )
}