"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google';
import Input from "@/components/utils/input";
import Button from "@/components/utils/button";
import Link from 'next/link';
import toast from 'react-hot-toast';
import backendApi from '@/config/Axios';
import { useRouter } from 'next/navigation';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function LoginForm() {
    const router = useRouter();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    async function handleLogin() {
        if (!loginData.email) {
            toast.error("Please Enter the Email");
            return;
        }
        if (!loginData.password) {
            toast.error("Please Enter the Password");
            return;
        }

        try {
            const res = await backendApi.post('/login', loginData);

            if (res && res.success) {
                toast.success(res.message || "Login successful!");
                setLoginData({
                    email: "",
                    password: ""
                })
                setTimeout(() => router.push('/'), 2000)
                sessionStorage.setItem('user', JSON.stringify(res.data));
                console.log('Login successful:', res);
            } else {
                toast.error(res ? res.error : "Login failed, try again later.");
                console.log('Login failed:', res);
            }

        } catch (error) {
            console.error("Login error:", error);
            toast.error("Something went wrong!");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin();
    };

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
                <p className='text-gray-400 text-sm mt-1.5'>Enter the information you entered while registering.</p>
            </div>

            <form onSubmit={handleSubmit} className='mt-6'>
                <div>
                    <Input 
                        Name="email" 
                        Label="Email" 
                        value={loginData.email}
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <Input 
                        Name="password" 
                        Label="Password" 
                        Password="password" 
                        value={loginData.password}
                        onChange={handleChange} 
                    />
                </div>
                <div>
                    <Link className="block text-sm text-blue-700 mb-4" href="/">
                        Forgot Password?
                    </Link>
                </div>
                <div>
                    <Button type="submit" BtnName="Login"/>
                </div>
                <div>
                    <Link className='block text-sm text-center mt-4' href="/user/signup">Don't have an Account? <span className='text-blue-700 font-semibold'>Signup</span></Link>
                </div>
            </form>
        </div>
    )
}