import React from 'react';


export default function CodeTab({code,id}) {


  return (
    <div>
      <textarea value={code} spellCheck="false" className='bg-zinc-900 text-slate-200 text-xl p-8 block h-full w-full focus:outline-none resize-none'>

      </textarea>
    </div>
  )
}
