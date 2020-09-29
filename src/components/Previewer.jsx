import React from 'react';
let marked = require("marked");

export default function Previewer(props) {
    return (
        <div style={props.style} id="previewer-box" className="w-11/12 lg:w-192 mt-10 shadow-2xl">
            <div className="flex justify-between items-center px-2 w-full h-8 bg-green-600 border border-green-900">
                <h1 className="font-black">Previewer</h1>
                <div>
                    <button id="expand-icon-preview" onClick={resizeBox} className="hover:bg-green-400 px-1">{props.EXPAND_ICON}</button>
                    <button id="compress-icon-preview" onClick={resizeBox} className="hover:bg-green-400 px-1 hidden">{props.COMPRESS_ICON}</button>
                </div>
            </div>
            <div dangerouslySetInnerHTML={{
                    __html: marked(props.markdown),
                }} 
                id="preview" className="text-xl w-full min-h-56 px-2 bg-green-200 border border-green-900">                
            </div>
        </div>
    )
}

const resizeBox = () => {
    const MAX_BOX = document.getElementById('previewer-box');
    const HIDDEN_BOX = document.getElementById('editor-box');
    const PREVIEW_AREA = document.getElementById('preview');
    const EXP_ICON = document.getElementById('expand-icon-preview');
    const CMPRESS_ICON = document.getElementById('compress-icon-preview');
    MAX_BOX.classList.toggle("lg:w-full");
    MAX_BOX.classList.toggle("w-full");
    MAX_BOX.classList.toggle("mt-10");
    HIDDEN_BOX.classList.toggle("hidden");
    PREVIEW_AREA.classList.toggle('h-AUTO');
    EXP_ICON.classList.toggle('hidden');
    CMPRESS_ICON.classList.toggle('hidden');
}