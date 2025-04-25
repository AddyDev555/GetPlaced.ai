import React from 'react'

export default function Button({BtnName, onClick}) {
    return (
        <div>
            <button onClick={onClick} className='w-full text-sm px-3 py-1.5 hover:text-white cursor-pointer border-2 border-yellow-400 hover:bg-yellow-400 rounded font-bold transition duration-300 ease-in-out'>{BtnName}</button>
        </div>
    )
}
