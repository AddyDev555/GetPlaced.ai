import React from 'react'
import LoginForm from './components/login-form';
import Illustration from "./components/illustration";

export const metadata = {
    title: "GetPlaced - User Login",
    description: "Welcome to the Aptitude Page",
    icons: {
        icon: "/mainLogo.png",
    },
};

export default function LoginPage() {
    return (
        <div className="grid grid-cols-2">
            <Illustration />
            <LoginForm />
        </div>
    )
}
