"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import backendApi from '@/config/Axios';

export default function Topics() {
    const [aptitudeData, setAptitudeData] = useState([]);
    const uniqueTopics = aptitudeData.filter(
        (item, index, self) =>
            index === self.findIndex((t) => t.Topic === item.Topic)
    );

    useEffect(() => {
        backendApi.get('/aptitude')
            .then((response) => {
                if (response) {
                    setAptitudeData(response);
                    console.log("Data received:", response);
                } else {
                    console.log("No data returned or error occurred.");
                }
            })
            .catch((error) => {
                console.error("Error while fetching:", error);
            });
    }, []);

    return (
        <div className='h-[75vh] p-2 overflow-y-scroll grid grid-cols-3 gap-2 custom-scrollbar'>
            {uniqueTopics.map((item, index) => (
                <div key={index} className="border p-2 rounded shadow cursor-pointer hover:scale-101">
                    <div className='pl-2 flex space-x-2'>
                        <i className={`fi ${item.Logo} relative top-0.5 text-yellow-300`}></i>
                        {/* <i className={`fi fi-rs-chart-line-up relative top-0.5 text-yellow-300`}></i> */}
                        <h2>{item.Topic}</h2>
                    </div>
                    <p className='pl-2 pt-2 text-[0.7rem] text-gray-400'>{item.Subtitle}</p>
                </div>
            ))}
        </div>

    )
}
