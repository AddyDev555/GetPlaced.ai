"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google';
import Input from "@/components/utils/input";
import Button from "@/components/utils/button";
import Link from 'next/link';
import toast from 'react-hot-toast';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function LoginForm() {
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

    function handleLogin(){
        console.log("Button Clicked");
        console.log('Email:', loginData.email);
        console.log('Password:', loginData.password);
        if(!loginData.email){
            toast.error("Please Enter the Email");
        }
        else if(!loginData.password){
            toast.error("Please Enter the Password");
        }
        else{
            toast.success("Login Successful!");
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
                <p className='text-gray-400 text-sm mt-1.5'>Enter the information you entered while registering.</p>
            </div>

            <div className='mt-6'>
                <div>
                    <Input Name="email" Label="Email" value={loginData.email}
                        onChange={handleChange} />
                </div>
                <div>
                    <Input Name="password" Label="Password" Password="password" value={loginData.password} 
                    onChange={handleChange} />
                </div>
                <div>
                    <Link className="block text-sm text-blue-700 mb-4" href="/">
                        Forgot Password?
                    </Link>
                </div>
                <div>
                    <Button BtnName="Login" onClick={handleLogin}/>
                </div>
                <div>
                    <Link className='block text-sm text-center mt-4' href="/user/signup">Don't have an Account? <span className='text-blue-700 font-semibold'>Signup</span></Link>
                </div>
            </div>
        </div>
    )
}
