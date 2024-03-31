import React from 'react';
import CodeTab from './CodeTab';;

export default function Tabs() {
    return (
        <div className='flex grow'>
            <div className='grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200'>
                <button>Html</button>
                <button>Css</button>
                <button>Js</button>
            </div>
            <div className="w-full grow relative">
                <CodeTab/>
            </div>

        </div>
    )
}