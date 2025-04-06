import React from 'react'
import Link from 'next/link'

export default function RegisterCard() {
    return (
        <div className='space-x-2 mr-4'>
            <Link className="border-blue-900 border-2 rounded pt-1 pb-1 pl-5 pr-5 text-[0.9rem]" href="/">Signup</Link>
            <Link className="border-blue-900 border-2 rounded pt-1 pb-1 pl-5 pr-5 text-[0.9rem]" href="/">Login</Link>
        </div>
    )
}
