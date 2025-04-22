"use client";

import React, { useState, useEffect } from 'react';
import backendApi from '@/config/Axios';
import toast from 'react-hot-toast';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function TechnicalTopics() {
    const [technicalData, setTechnicalData] = useState([]);
    const [topicCounts, setTopicCounts] = useState({});

    const uniqueTopics = technicalData.filter(
        (item, index, self) =>
            index === self.findIndex((t) => t.Topic === item.Topic)
    );

    useEffect(() => {
        backendApi.get('/technical')
            .then((response) => {
                if (response) {
                    setTechnicalData(response);

                    const uniqueTopicsList = [...new Set(response.map(item => item.Topic))];

                    const counts = {};
                    uniqueTopicsList.forEach(topic => {
                        counts[topic] = response.filter(q => q.Topic === topic).length;
                    });

                    setTopicCounts(counts);
                } else {
                    toast.error("Server error: No technical data returned.");
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch technical topics.");
            });
    }, []);

    return (
        <div className='h-[75vh] p-2 overflow-y-scroll grid grid-cols-3 gap-2 custom-scrollbar'>
            {uniqueTopics.map((item, index) => (
                <div key={index} className="border p-2 rounded shadow cursor-pointer hover:scale-101">
                    <div className='pl-2 flex space-x-2'>
                        <i className={`fi ${item.Logo} relative top-0.5 text-blue-500`}></i>
                        <h2>{item.Topic}</h2>
                    </div>
                    <p className={`${roboto.className} pl-2 pt-2 text-[0.7rem] text-gray-400`}>{item.Subtitle}</p>
                    <p className={`${roboto.className} pl-2 pt-2 text-[0.7rem]`}>Total Questions: <strong>{topicCounts[item.Topic] || 0}</strong></p>
                </div>
            ))}
        </div>
    );
}
