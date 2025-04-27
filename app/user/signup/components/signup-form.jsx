"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google';
import Input from "@/components/utils/input";
import Button from "@/components/utils/button";
import Link from 'next/link';
import backendApi from '@/config/Axios';
import toast from 'react-hot-toast';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function SignupForm() {
    const [signupData, setSignupData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    async function handleSignup() {
        if (!signupData.firstName) {
            toast.error("Please Enter the First Name");
            return;
        }
        if (!signupData.lastName) {
            toast.error("Please Enter the Last Name");
            return;
        }
        if (!signupData.email) {
            toast.error("Please Enter the Email");
            return;
        }
        if (!signupData.password) {
            toast.error("Please Enter the Password");
            return;
        }

        try {
            const res = await backendApi.post('/signup', signupData);

            if (res && res.success) {
                toast.success(res.message || "Created your account successful!");
                setSignupData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: ""
                });
                setTimeout(() => {
                    window.location.href = '/user/login';
                }, 2000);
                console.log('Signup successful:', res);
            } else {
                toast.error(res ? res.error : "Registration Failed!, try again later.");
                console.log('Signup failed:', res);
            }

        } catch (error) {
            console.error("Signup error:", error);
            toast.error("Something went wrong sorry!");
        }
    }

    return (
        <div className={`${roboto.className} px-24 py-14`}>
            <div>
                <Image
                    src="/mainLogo.png"
                    alt="Logo"
                    width={70}
                    height={70}
                />
                <h1 className="mt-4 text-[1.5rem]"><span className='font-extrabold'>Hey, 👋</span> Welcome to <Link href="/" className='font-bold'>Get<span className='text-yellow-400'>Placed</span></Link></h1>
                <p className='text-gray-400 text-sm mt-1.5'>Create account to start using GetPlaced</p>
            </div>

            <div className='mt-6'>
                <div className='grid grid-cols-2 gap-3'>
                    <Input Name="firstName" Label="First Name" value={signupData.firstName}
                        onChange={handleChange} />
                    <Input Name="lastName" Label="Last Name" value={signupData.lastName}
                        onChange={handleChange} />
                </div>
                <div>
                    <Input Name="email" Label="Email" value={signupData.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <Input Name="password" Label="Password" Password="password" value={signupData.password}
                        onChange={handleChange} />
                </div>
                <div>
                    <Button BtnName="Create an Account" onClick={handleSignup} />
                </div>
                <div>
                    <Link className='block text-sm ml-auto mt-2 text-center' href="/user/login">Already have an Account? <span className='text-blue-700 font-semibold'>Login</span></Link>
                </div>
            </div>
        </div>
    )
}