"use client";

import React from 'react'
import LogoGrid from "../components/logo";

export default function CompaniesSlider() {
    const companiesList = [
        { compId: "com1", compName: "TCS", src: "/compLogos/tcs.png" },
        { compId: "com2", compName: "Tata Motors", src: "/compLogos/tcs.png" },
        { compId: "com3", compName: "Tata Motors", src: "/compLogos/tcs.png" },
        { compId: "com4", compName: "Tata Motors", src: "/compLogos/tcs.png" },
        { compId: "com5", compName: "Tata Motors", src: "/compLogos/tcs.png" },
    ]
    return (
        <div className='mt-10'>
            <h2 className='text-gray-500 mb-2 font-semibold'>Trusted by Top Companies</h2>
            <div className='flex items-center space-x-3'>
                {companiesList.map((company) => (
                    <div key={company.compId} className='border-2 border-yellow-300 cursor-pointer hover:scale-[1.03] flex items-center space-x-2 w-[100%] p-2 rounded'>
                        <div className='w-[30%]'>
                            <LogoGrid LogoSrc={company.src} />
                        </div>
                        <p>{company.compName}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
