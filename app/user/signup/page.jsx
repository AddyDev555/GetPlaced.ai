import React from 'react'
import Illustration from "./components/illustration";
import SignupForm from "./components/signup-form";

export const metadata = {
    title: "GetPlaced - User Signup",
    description: "Welcome to the Aptitude Page",
    icons: {
        icon: "/mainLogo.png",
    },
};

export default function SignupPage() {
    return (
        <div className="grid grid-cols-2">
            <Illustration />
            <SignupForm />
        </div>
    )
}
