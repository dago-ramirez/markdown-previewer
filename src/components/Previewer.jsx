import React from 'react';
let marked = require("marked");

export default function Previewer(props) {
    return (
        <div className="w-192 h-64 mt-10 shadow-2xl">
            <div className="flex justify-between items-center px-2 w-full h-8 bg-green-600 border border-green-900">
                <h1 className="font-black">Previewer</h1>
                <button className="hover:bg-green-400 px-1">{props.EXPAND_ICON}</button>
            </div>
            <div dangerouslySetInnerHTML={{
                    __html: marked(props.markdown),
                }} 
                className="w-full h-56 bg-green-200 border border-green-900">                
            </div>
        </div>
    )
}
