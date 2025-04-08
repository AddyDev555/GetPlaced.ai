import React from "react";
import Image from 'next/image';
import { Roboto } from 'next/font/google';
// import AvatarViewer from "../components/avatar";
import Tooltip from "../components/social-media";
import CompaniesSlider from "../components/companies-slider";

export const metadata = {
  title: "Welcome to GetPlaced",
  description: "Welcome to the Landing Page",
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  return (
    <div className={`${roboto.className} w-[70%] m-auto`}>
      <div className="flex pt-5 pb-5 justify-center ">
        <div className="mt-7 flex-col">
          <h1 className="text-[3rem] text-center font-semibold">Welcome to Get<span className="text-yellow-300">Placed</span><span className="text-[1.5rem] font-semibold">.ai</span></h1>
          <p className="text-justify pt-3 pb-5 text-[1rem] text-gray-500 w-[100%]">Ace your B.Tech placements with GetPlaced.ai. This GenAI-driven platform offers smart, adaptive learning. Master key skills (aptitude, technical, interviews) with our AI-powered resources. Get ready to secure your dream engineering job.</p>
          <div className="flex justify-center">
            <div className="relative group">
              <button className="transition-all duration-200 ease-in-out cursor-pointer  rounded pl-5 pr-5 pt-1 pb-1 hover:bg-yellow-100 border-2 border-yellow-300">Get Placement Ready <i className="fi fi-rr-arrow-small-right relative top-0.5"></i></button>
            </div>
          </div>
          <div className="flex justify-center mt-3">
            <Tooltip />
          </div>
          <div>
            <CompaniesSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
