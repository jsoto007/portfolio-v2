'use client'
import { FaReact, FaHtml5, FaCss3Alt  } from 'react-icons/fa';
import { RiJavascriptFill  } from 'react-icons/ri';
import { DiRuby} from 'react-icons/di';
import { BiLogoPostgresql  } from 'react-icons/bi';
import { SiRubyonrails, SiTailwindcss  } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

export default function About() {

  return (
    <div 
      className="backdrop-blur-xl bg-white/60 font-sans py-1 rounded-xl animate-fade-left animate-once animate-delay-[1000ms] animate-ease-in flex flex-row"
      id="about"
    >
      <div 
        className="px-10 ml-40"
      >
  
      <h3 className="text-xl font-bold tracking-tight text-black sm:text-xl mt-6">
        About
      </h3>
        <p className="mt-3 text-lg leading-8 text-black whitespace-normal">
        Jose Soto is a skilled software engineer from Bronx, NY, specializing in <br />
        Ruby on Rails, JavaScript, and React. He enjoys creating user-centric <br />
        experiences and has completed impressive projects, including <br />
        “Supervise Hub” and “Expense Tracker.” Jose is dedicated <br />
        to delivering exceptional software solutions and <br />
        enjoys coffee in his spare time.<br />
        </p>
      </div>
{/* Skills  */}
      <div>
        <h3 className="text-xl font-bold tracking-tight text-black sm:text-xl mt-6">
          My Skills
        </h3>
        <div className="mt-3 text-lg leading-8 text-black whitespace-normal">
          Frontend
          <ul className='ml-10 mt-2 flex flex-row'>
            <li className='mr-5 ml-2 text-md'>
              <span className='text-4xl text-yellow-400'><RiJavascriptFill /></span>
              JavaScript
            </li>
            <li className='mr-5 text-md'>
              <span className='text-4xl text-[#00CFF4]'><FaReact /></span>
              React.js
            </li>
            <li className='mr-5 text-md'>
              <span className='text-4xl text-black'><TbBrandNextjs /></span>
              Next.js
            </li>
            <li className='mr-5 ml-2 text-md'>
              <span className='text-4xl text-[#D94A24]'><FaHtml5 /></span>
              HTML
            </li>
            <li className='mr-5 ml-2 text-md'>
              <span className='text-4xl text-[#1C74BA]'><FaCss3Alt /></span>
              CSS
            </li>
            <li className='mr-5 ml-2 text-md'>
              <span className='text-4xl text-[#34B5ED]'><SiTailwindcss /></span>
              Tailwindcss
            </li>
            
          </ul>
        </div>
        <div className="mt-5 text-lg leading-8 text-black whitespace-normal">
          Backtend
          <ul className='ml-10 mt-2 flex flex-row'>
            <li className='mr-5 ml-2 text-md'>
              <span className='text-4xl text-[#D01204]'><DiRuby /></span>
              CSS
            </li>
            <li className='mr-5 ml-2 text-md'>
              <span className='text-4xl text-[#D01204]'><SiRubyonrails /></span>
              CSS
            </li>
            <li className='mr-3 ml-2 text-md'>
              <span className='text-4xl text-[#026DBD]'><BiLogoPostgresql /></span>
              SQL
            </li>
          </ul>
        </div>
      </div>
 
    </div>
  )
}