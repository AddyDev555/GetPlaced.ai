// import React from 'react'


// export const metadata = {
//     title: "GetPlaced - Technical Rounds",
//     description: "Welcome to the Technical Page",
// };

// export default function TechnicalPage() {
//     return (
//         <div>
//             <h1>Technical Page</h1>
//         </div>
//     )
// }


import React from 'react';
import SideBar from "./components/sideBar";
import Topics from "./components/topics";

export const metadata = {
    title: "GetPlaced - Technical Questions and Answers",
    description: "Welcome to the Technical Page",
};

export default function TechnicalPage() {
    return (
        <div className="flex overflow-y-hidden">
            <div className='w-[18.7%] h-screen overflow-y-hidden border-r-2 border-r-yellow-200'>
                <SideBar />
            </div>
            <div className='p-6 mt-1 w-[80%] m-auto overflow-y-hidden'>
                <Topics />
            </div>
        </div>
    );
}
