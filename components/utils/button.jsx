import React from 'react'

export default function Button({BtnName}) {
    return (
        <div>
            <button className='w-full text-sm px-3 py-1.5 hover:text-white cursor-pointer border-2 border-yellow-400 hover:bg-yellow-400 rounded font-bold transition duration-300 ease-in-out'>{BtnName}</button>
        </div>
    )
}
