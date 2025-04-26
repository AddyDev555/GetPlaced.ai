import React from 'react'
import Link from 'next/link'

export default function RegisterCard() {
    return (
        <div className='space-x-2 mr-4'>
            <Link  className="bg-yellow-300 hover:bg-yellow-200 hover:shadow-md transition-all duration-200 rounded-full px-6 py-2 text-sm font-semibold text-gray-800" href="/user/login">SignIn</Link>
        </div>
    )
}
