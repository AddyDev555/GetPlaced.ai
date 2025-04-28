import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Avatar({ sessionData }) {
    const router = useRouter();
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    function getInitials(name) {
        const nameParts = name.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts[1] || '';
        const initials = firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase();
        return initials;
    }

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("user");
        router.push("/user/login");
    };

    return (
        <div className="relative">
            {/* Display the user's initials */}
            <div
                className='rounded-full px-3 py-2.5 ml-4 bg-gray-200 cursor-pointer font-bold'
                onClick={toggleDropdown}
            >
                {sessionData && getInitials(sessionData.name)}
            </div>

            {/* Dropdown menu for logout */}
            {isDropdownVisible && (
                <div className='absolute top-[130%] right-0 bg-gray-100 py-2.5 px-4 rounded-md shadow-lg'>
                    <div onClick={handleLogout} className='hover:bg-white py-1.5 px-4 flex items-center cursor-pointer gap-1 text-red-500 text-sm rounded-md'>
                        <LogOut className='w-4' />
                        <p>Logout</p>
                    </div>
                </div>
            )}
        </div>
    );
}
