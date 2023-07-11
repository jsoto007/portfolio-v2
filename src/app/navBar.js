'use client'
import {Link} from "react-scroll"
import loco from "./loco.png"
import Image from "next/image"

export default function NavBar() {
  return (
    <navabar className=" flex flex-row w-full max-w-[1550px] fixed z-10 backdrop-blur-md bg-slate-700/30 rounded-md py-2 pr-11 font-semibold">
      <div>
      <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
        <Image 
          src={loco} 
          width={40} 
          height={40} 
          atl="logo" 
          className="ml-3 rounded-md opacity-90 active:opacity-100 mr-10"
          />
      </Link>
      </div>

      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
        <Link to="home" spy={true} smooth={true} offset={-50} duration={500}>
          HOME
        </Link>
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
        <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
          ABOUT
        </Link>
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
        <Link to="project" spy={true} smooth={true} offset={50} duration={500}>
          PROJECTS
        </Link>
      </button>
      <button class=" focus:outline-none  focus:bg-slate-200 mx-4 hover:bg-slate-100 rounded-md active:bg-slate-300 px-1 py-1">
        <Link to="footer" spy={true} smooth={true} offset={0} duration={500}>
          CONTACT
        </Link>
      </button>

    </navabar>
  )
}

