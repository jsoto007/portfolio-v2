'use client'

export default function NavBar() {
  return (
    <navabar className="ml-4 mr w-full max-w-7xl fixed top-3 z-10 backdrop-blur-xl bg-white/90 rounded-md py-3 pr-11 font-semibold">
      <button class=" focus:outline-none  focus:bg-slate-300 mx-4 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1">
          Home
      </button>
      <button class=" focus:outline-none  focus:bg-slate-300 mx-4 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1">
          About
      </button>
      <button class=" focus:outline-none  focus:bg-slate-300 mx-4 hover:bg-slate-200 rounded-md active:bg-slate-400 px-1">
          Projects
      </button>
    </navabar>
  )
}

