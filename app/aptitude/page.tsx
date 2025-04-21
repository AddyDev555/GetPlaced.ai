import React from 'react';
import AptitudeCombiner from "./components/aptitudes_combiner";

export const metadata = {
    title: "GetPlaced - Aptitude Questions and Answers",
    description: "Welcome to the Aptitude Page",
    icons: {
        icon: "/mainLogo.png",
    },
};

export default function AptitudePage() {
    return (
        <div>
            <AptitudeCombiner />
        </div>
    )
}
