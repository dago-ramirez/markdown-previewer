import React from 'react'

export default function Previewer({EXPAND_ICON}) {
    return (
        <div className="w-192 h-64 mt-10 shadow-2xl">
            <div className="flex justify-between items-center px-2 w-full h-8 bg-green-600 border border-green-900">
                <h1 className="font-black">Previewer</h1>
                <button>{EXPAND_ICON}</button>
            </div>
            <textarea name="" id="" cols="5" rows="5" className="w-full h-56 bg-green-200 border border-green-900"></textarea>
        </div>
    )
}
