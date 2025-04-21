"use client";

import React, {useState} from 'react'
import SideBar from "./sideBar";
import Topics from "./topics";

export default function AptitudesCombiner() {
    const [toggleTitle, setToggleTitle] = useState("Arithmetic");

    return (
        <div className="flex overflow-y-hidden">
            <div className='w-[18.7%] h-screen overflow-y-hidden border-r-2 border-r-yellow-200'>
                <SideBar toggleTitle={toggleTitle} setToggleTitle={setToggleTitle}/>
            </div>
            <div className='p-6 mt-1 w-[80%] m-auto overflow-y-hidden'>
                <Topics toggleTitle={toggleTitle} setToggleTitle={setToggleTitle}/>
            </div>
        </div>
    )
}
