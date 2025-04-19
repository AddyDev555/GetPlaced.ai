import React from 'react'

export default function MainQuestion({aptData, topic, setTopic}) {
    return (
        <div>
            <button
                onClick={() => setTopic(null)}
                className="pl-1 pr-2 flex items-center rounded cursor-pointer hover:bg-gray-200"
            >
                <i className="fi fi-rr-angle-small-left relative top-[2.5px]"></i> <p>back</p>
            </button>
            <h2>{topic}</h2>
        </div>
    )
}
