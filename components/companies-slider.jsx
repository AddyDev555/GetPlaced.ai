"use client";

import React from 'react'
import LogoGrid from "../components/logo";

export default function CompaniesSlider() {
    const companiesList = [
        { compId: "com1", compName: "Aptitude Questions", icon:"fi-rs-brain"},
        { compId: "com2", compName: "Technical Questions", icon:"fi-rr-microchip"},
        { compId: "com3", compName: "Ai Based GD", icon:"fi-rr-users-alt"},
        { compId: "com4", compName: "Ai Based Interviews", icon:"fi-rr-meeting-alt"},
        { compId: "com5", compName: "Company Questions", icon:"fi-rs-corporate-alt"},
    ]
    return (
        <div className='mt-10'>
            <h2 className='text-gray-500 mb-2 font-semibold'>What You’ll Learn</h2>
            <div className='flex items-center space-x-3'>
                {companiesList.map((company) => (
                    <div key={company.compId} className='border-2 border-yellow-300 cursor-pointer hover:scale-[1.03] flex items-center text-sm space-x-2 w-[100%] p-2 rounded'>
                        <i className={`fi ${company.icon} relative top-0.5`}></i>
                        <p>{company.compName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
