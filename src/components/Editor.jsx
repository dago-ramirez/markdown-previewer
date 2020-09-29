import React from 'react';

export default function Editor(props) {

    return (
        <>
            <div id="editor-box" className="w-11/12 md:w-128 h-64 mt-10 shadow-2xl">
                <div className="flex justify-between items-center px-2 w-full h-8 bg-green-600 border border-green-900">
                    <h1 className="font-black">Editor</h1>
                    <div>
                        <button id="expand-icon-editor" onClick={resizeBox} className="hover:bg-green-400 px-1">{props.EXPAND_ICON}</button>
                        <button id="compress-icon-editor" onClick={resizeBox} className="hover:bg-green-400 px-1 hidden">{props.COMPRESS_ICON}</button>
                    </div>
                </div>
                <textarea id="editor" value={props.markdown} onChange={props.handleOnChange} className="text-area w-full min-h-56 px-2 bg-green-200 border border-green-900" name="" cols="5" rows="5"></textarea>
            </div>
        </>
    )
}

const resizeBox = () => {
    const MAX_BOX = document.getElementById('editor-box');
    const HIDDEN_BOX = document.getElementById('previewer-box');
    const TEXT_AREA = document.querySelector('.text-area');
    const EXP_ICON = document.getElementById('expand-icon-editor');
    const CMPRESS_ICON = document.getElementById('compress-icon-editor');
    MAX_BOX.classList.toggle("md:w-full");
    MAX_BOX.classList.toggle("w-full");
    MAX_BOX.classList.toggle("mt-10");
    HIDDEN_BOX.classList.toggle("hidden");
    TEXT_AREA.classList.toggle('h-screen');
    EXP_ICON.classList.toggle('hidden');
    CMPRESS_ICON.classList.toggle('hidden');
}