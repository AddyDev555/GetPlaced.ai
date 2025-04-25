import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google';
import Input from "@/components/utils/input";
import Button from "@/components/utils/button";
import Link from 'next/link';

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
});

export default function SignupForm() {
    return (
        <div className={`${roboto.className} p-24 pt-9`}>
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
                    <Input Name="firstName" Label="First Name" />
                    <Input Name="lastName" Label="Last Name" />
                </div>
                <div>
                    <Input Name="email" Label="Email" />
                </div>
                <div>
                    <Input Name="password" Label="Password" Password="password"/>
                </div>
                <div>
                    <Button BtnName="Create an Account"/>
                </div>
                <div>
                    <Link className='block text-sm ml-auto mt-2 text-center' href="/user/login">Already have an Account? <span className='text-blue-700 font-semibold'>Login</span></Link>
                </div>
            </div>
        </div>
    )
}