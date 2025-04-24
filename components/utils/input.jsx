import React from 'react'

export default function Input({ Name, Label }) {
    return (
        <div className='flex flex-col'>
            <label className='block text-sm font-medium text-gray-500 mb-1' htmlFor={Name}>{Label}</label>
            <input
                type="text"
                id={Name}
                name={Name}
                className="w-full text-gray-400 mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-opacity-10 transition duration-200"
            />
        </div>
    )
}
