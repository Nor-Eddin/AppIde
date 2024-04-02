import React from 'react';
import { useDispatch } from 'react-redux';
import { updateCode } from '../features/tabs';


export default function CodeTab({code,id}) {
const dispath = useDispatch();

  return (
    <div>
      <textarea onChange={e=>dispath(updateCode({id,value:e.target}))} value={code} spellCheck="false" 
      className='bg-zinc-900 text-slate-200 text-xl 
      p-8 block h-full w-full focus:outline-none resize-none'>

      </textarea>
    </div>
  )
}
