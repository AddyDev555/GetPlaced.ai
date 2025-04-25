"use client";
import React, { useState } from 'react';
import { Eye, EyeOff, Search as SearchIcon } from 'lucide-react'; // Using lucide-react for icons

export default function Input({ Name, Label, Placeholder, Search, Password, value, onChange}) {
    const [showPassword, setShowPassword] = useState(false);

    const inputType = Password ? (showPassword ? 'text' : 'password') : 'text';

    return (
        <div className="flex flex-col mb-4 relative">
            <label className="block text-sm font-medium text-gray-500" htmlFor={Name}>{Label}</label>
            
            <div className="relative">
                {Search && (
                    <div className="absolute left-3 top-8.5 transform -translate-y-1/2 text-gray-400">
                        <SearchIcon size={16} />
                    </div>
                )}

                <input
                    type={inputType}
                    id={Name}
                    name={Name}
                    placeholder={Placeholder}
                    value={value}
                    onChange={onChange}
                    className={`text-sm w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-10 transition duration-200 ${
                        Search ? 'pl-10' : ''
                    } ${Password ? 'pr-10' : ''}`}
                />

                {Password && (
                    <button
                        type="button"
                        className="absolute right-3 top-5 cursor-pointer transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>
        </div>
    );
}
