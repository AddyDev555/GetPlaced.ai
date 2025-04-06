import React from "react";
import Image from 'next/image'

export const metadata = {
  title: "Welcome to GetPlaced",
  description: "Welcome to the Landing Page",
};

export default function Home() {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex pt-5 pb-5">
        <div className="mt-7 flex-col">
          <h1 className="text-[2rem] font-semibold">Welcome to Get<span className="text-yellow-300">Placed</span><span className="text-[1.5rem] font-semibold">.ai</span></h1>
          <p className="text-justify pt-3 pb-5 text-[1rem] text-gray-500 w-[34%]">Ace your B.Tech placements with GetPlaced.ai. This GenAI-driven platform offers smart, adaptive learning. Master key skills (aptitude, technical, interviews) with our AI-powered resources. Get ready to secure your dream engineering job.</p>
          <button className="transition-all duration-200 ease-in-out cursor-pointer bg-yellow-100 rounded pl-5 pr-5 pt-1 pb-1 hover:bg-yellow-50 border-2 border-yellow-300">Get Placement Ready <i className="fi fi-rr-arrow-small-right relative top-0.5"></i></button>
        </div>
        <div className="ml-auto">
        </div>
      </div>
    </div>
  );
}
