'use client'

export default function NavBar() {
  return (
    <navabar className="w-full max-w-[1550px] fixed z-10 backdrop-blur-md bg-slate-700/30 rounded-md py-2 pr-11 font-semibold">
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-2 py-1">
          HOME
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-2 py-1">
          ABOUT
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-2 py-1">
          PROJECTS
      </button>

    </navabar>
  )
}

