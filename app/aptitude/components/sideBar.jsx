"use client";
import React, { useEffect, useState } from 'react'
import backendApi from "@/config/Axios";
import { toast } from 'react-hot-toast';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function SideBar({ topic, setTopic, toggleTitle, setToggleTitle }) {
    const card_data = [
        { title: "Arithmetic", subtitle: "Strong grasp of numbers and formulas", logoClass: "fi-rs-integral" },
        { title: "Vocabulary", subtitle: "Excellent word usage and meaning", logoClass: "fi-rs-book-bookmark" },
        { title: "Logical Reasoning", subtitle: "Sharp analytical and deduction skills", logoClass: "fi-rr-lightbulb-on" },
        { title: "Current Affairs", subtitle: "Up-to-date with global events", logoClass: "fi-rr-hand-holding-usd" },
        { title: "General Knowledge", subtitle: "Broad awareness of various topics", logoClass: "fi-rs-brain-circuit" },
    ];

    return (
        <div className={`${roboto.className}`}>
            <div className='shadow-sm pt-[2.5px] pb-4'>
                <h1 className='mt-3.5 text-center font-semibold text-lg'>Aptitude Topics</h1>
            </div>
            <div className='p-6 pt-3'>
                {card_data.map((card, index) => (
                    <div onClick={() => {
                        setToggleTitle(card.title);
                        setTopic(null);
                    }}
                        key={index} className='flex space-x-2 rounded p-3'>
                        <i className={`fi ${card.logoClass} text-yellow-400 relative top-0.5`}></i>
                        <h2 className={`cursor-pointer ${toggleTitle === card.title ? 'underline underline-offset-4 decoration-yellow-400 decoration-2 font-semibold' : ''}`}>
                            {card.title}
                        </h2>
                    </div >
                ))}
                {/* {aptitudeData.map((item, index) => (
                    <div key={index}>
                        <p>{item.Topic}</p>
                    </div>
                ))} */}
            </div>
        </div>
    )
}
