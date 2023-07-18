import { IoIosMailUnread } from 'react-icons/Io';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLinkedin, BsFillKeyboardFill } from 'react-icons/Bs';

export default function Footer()  {

  return (
    <div class="grid gap-x-4 gap-y-2 grid-cols-5 mt-10 p-10 bg-slate-900/70 rounded-lg" id='footer'>
      <div>
        <ul className='ml-10'>
          <span className='text-white text-4xl'><IoIosMailUnread /></span>
          <li className='text-white text-xs'>jsoto7087@gmail.com</li>  
        </ul>
      </div>
      <div>
        <ul>
          <span className='text-white text-3xl '><BsLinkedin /></span>
          <li className='text-white text-xs mt-2'>LinkedIn</li>  
        </ul>
      </div>
      <div>
        <ul>
          <span className='text-white text-4xl '><BsFillKeyboardFill /></span>
          <li className='text-white text-xs mt-1'>Blog</li>  
        </ul>
      </div>
      <div>
        <ul>
          <span className='text-white text-4xl '><AiFillInstagram /></span>
          <li className='text-white text-xs mt-1'>Instagram</li>  
        </ul>
      </div>
    </div>
  )
}