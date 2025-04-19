"use client";

import React from 'react'
import { useState, useEffect } from 'react';
import backendApi from '@/config/Axios';
import toast from 'react-hot-toast';
import { Roboto } from 'next/font/google';
import MainQuestion from "./main_question";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function Topics() {
    const [aptitudeData, setAptitudeData] = useState([]);
    const [topic, setTopic] = useState(null);
    const uniqueTopics = aptitudeData.filter(
        (item, index, self) =>
            index === self.findIndex((t) => t.Topic === item.Topic)
    );
    const [topicCounts, setTopicCounts] = useState({});

    const fetchAptitude = () => {
        backendApi.get('/aptitude')
            .then((response) => {
                if (response) {
                    setAptitudeData(response);
                    console.log(response);
                    const uniqueTopicsResponse = [...new Set(response.map(item => item.Topic))];

                    const counts = {};
                    uniqueTopicsResponse.forEach(topic => {
                        counts[topic] = response.filter(q => q.Topic === topic).length;
                    });
                    setTopicCounts(counts);
                } else {
                    console.log("No data returned or error occurred.");
                    toast.error("No data returned server error.");
                }
            })
            .catch((error) => {
                toast.error("Error while Fetching.");
                console.error("Error while fetching:", error);
            });
    }

    useEffect(() => {
        fetchAptitude();
    }, []);

    return (
        <div className='h-[75vh] p-2 overflow-y-scroll grid grid-cols-3 gap-2 custom-scrollbar'>
            {topic === null ? (
                uniqueTopics.map((item, index) => (
                    <div onClick={() => setTopic(item.Topic)} key={index} className="border p-2 rounded shadow cursor-pointer hover:scale-101">
                        <div className='pl-2 flex space-x-2'>
                            <i className={`fi ${item.Logo} relative top-0.5 text-[#ffdf20]`}></i>
                            <h2>{item.Topic}</h2>
                        </div>
                        <p className={`${roboto.className} pl-2 pt-2 text-[0.7rem] text-gray-400`}>{item.Subtitle}</p>
                        <p className={`${roboto.className} pl-2 pt-2 text-[0.7rem]`}>Total Questions: <strong>{topicCounts[item.Topic] || 0}</strong></p>
                    </div>
                ))
            ) : (
                <div className="col-span-3 h-full">
                    <MainQuestion aptData={aptitudeData} topic={topic} setTopic={setTopic}/>
                </div>
            )}
        </div>

    )
}
