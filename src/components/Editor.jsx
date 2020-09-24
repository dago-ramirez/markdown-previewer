import React, { useState } from 'react';

export default function Editor({EXPAND_ICON}) {
    const [input, setInput] = useState('')

    const handleOnChange = event => {
        setInput(event.target.value)
    }

    return (
        <div className="w-128 h-64 mt-10 shadow-2xl">
            <div className="flex justify-between items-center px-2 w-full h-8 bg-green-600 border border-green-900">
                <h1 className="font-black">Editor</h1>
                <button>{EXPAND_ICON}</button>
            </div>
            <textarea value={input} onChange={handleOnChange} className="w-full h-56 bg-green-200 border border-green-900" name="" id="" cols="5" rows="5"></textarea>            
        </div>
    )
}
