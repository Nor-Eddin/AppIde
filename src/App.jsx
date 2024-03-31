import Tabs from "./components/Tabs";


function App() {
  return (
    <div className="bg-zinc-900 min-h-screen flex flex-col">
      <div className="px-4 py-4 boder-b flex items-center border-b border-slate-200">
        <h1 className="w-full text-slate-50 text-2xl">
          <span className="text-base">The</span>SmartIDE
        </h1>
        <div className="w-full">
          <button className="text-white bg-blue-800 p-2 rounded">Show preview</button>
        </div>
        <div className="w-full flex">
          <div className="ml-auto mr-2">
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full my-1"></div>
            <div className="w-[6px] h-[6px] bg-slate-200 rounded-full"></div>

          </div>
        </div>
      </div>
      <Tabs/>
    </div>
  )
}

export default App
