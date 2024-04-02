import React from 'react';
import CodeTab from './CodeTab';;
import { useSelector } from 'react-redux';
import { useState } from 'react';
import ButtonTab from './ButtonTab';
import Preview from './Preview';


export default function Tabs() {

    const tabsState= useSelector(state => state.tabs);
    const previewData= useSelector(state => state.preview);

    const[tabIndex,setTabIndex]=useState(tabsState[0].id);
    console.log(tabsState);

    return (
        <div className='flex grow'>
            <div className='grow flex flex-col w-[175px] shrink-0 text-slate-300 border-r border-slate-200'>
              {tabsState.map(tab=>(
                <ButtonTab 
                key={tab.id}
                id={tab.id}
                toggleTab={id=>setTabIndex(id)}
                imgURL={tab.imgURL}
                buttonContent={tab.buttonContent}/>
              ))}
            </div>
            <div className="w-full grow relative">
                <CodeTab id={tabIndex} code={tabsState.find(obj=>obj.id===tabIndex).code}/>
                {previewData.preview && <Preview/>}
                
            </div>

        </div>
    )
}
