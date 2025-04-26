"use client";

import React, {useState} from 'react'
import SideBar from "./sideBar";
import Topics from "./topics";

export default function AptitudesCombiner() {
    const [toggleTitle, setToggleTitle] = useState("Arithmetic");
    const [topic, setTopic] = useState(null);

    return (
        <div className="flex overflow-y-hidden">
            <div className='w-[18.7%] h-screen overflow-y-hidden border-r-2 border-r-yellow-200'>
                <SideBar topic={topic} setTopic={setTopic} toggleTitle={toggleTitle} setToggleTitle={setToggleTitle}/>
            </div>
            <div className='py-0 px-6 mt-1 w-[80%] m-auto overflow-y-hidden'>
                <Topics topic={topic} setTopic={setTopic} toggleTitle={toggleTitle} setToggleTitle={setToggleTitle}/>
            </div>
        </div>
    )
}
