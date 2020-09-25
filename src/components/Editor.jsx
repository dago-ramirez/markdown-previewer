import React, { useState } from 'react';
import Previewer from './Previewer';

export default function Editor(props) {
    const [markdown, setMarkdown] = useState('');

    const handleOnChange = event => {
        setMarkdown(event.target.value);
    }

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-128 h-64 mt-10 shadow-2xl">
                <div className="flex justify-between items-center px-2 w-full h-8 bg-green-600 border border-green-900">
                    <h1 className="font-black">Editor</h1>
                    <button className="hover:bg-green-400 px-1">{props.EXPAND_ICON}</button>
                </div>
                <textarea value={markdown} onChange={handleOnChange} className="w-full h-56 bg-green-200 border border-green-900" name="" id="" cols="5" rows="5"></textarea>
            </div>
            <Previewer EXPAND_ICON={props.EXPAND_ICON} COMPRESS_ICON={props.COMPRESS_ICON} markdown={markdown} />
        </div>
    )
}
