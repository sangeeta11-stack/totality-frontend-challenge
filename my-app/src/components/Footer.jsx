import React from 'react';
import { useDarkMode } from '../components/DarkMode';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBuilding, FaMobile, FaFax, FaArrowUp, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { IoMdMail } from 'react-icons/io';
import props1 from '../Assets/props2.jpg'

import props2 from '../Assets/props1.jpg'


function Footer() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <footer className={`${darkMode ? 'dark bg-black text-white' : 'light bg-gray-800'} w-full m-auto lg:px-20 px-10 py-20 grid lg:grid-cols-3 grid-cols-1 justify-center `}>

        <div className='flex flex-col justify-center items-start gap-5'>
          <h1 className='text-white text-2xl font-semibold'>
            About Us</h1>

          <p className='text-slate-200 text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea, sapiente dicta deleniti tenetur nesciunt aspernatur nobis iure praesentium a!</p>
          <div id='social-icons' className='flex justify-start items-center gap-4 mt-4'>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaFacebook className='size-5'></FaFacebook>

            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaTwitter className='size-5'></FaTwitter>

            </div>

            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaInstagram className='size-5'></FaInstagram>
            </div>
            <div className='p-3 rounded-xl bg-white hover:bg-red-600 hover:text-white cursor-pointer transform hover:scale-110 transition-transform duration-300'>
              <FaYoutube className='size-5'></FaYoutube>



            </div>
          </div>

          <h1 className='text-white mt-8'>copyright Real Estate, All Right Reserved </h1>
        </div>

        <div className='flex flex-col justify-center items-start gap-5'>

          <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
          <div className='flex justify-center items-center gap-3'>
            <FaBuilding className='text-white size-5'></FaBuilding>
            <p className='text-slate-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, est!</p>

          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaMobile className='text-white size-5'></FaMobile>
            <p className='text-slate-200'>91547-86365</p>

          </div>
          <div className='flex justify-center items-center gap-3'>
            <FaFax className='text-white size-5'></FaFax>
            <p className='text-slate-200'>1800-5215-9578</p>

          </div>
          <div className='flex justify-center items-center gap-3'>
            <IoMdMail className='text-white size-5'></IoMdMail>
            <p className='text-slate-200'>RealEstate@email.com</p>

          </div>
        </div>

<div className='flex flex-col justify-center items-start gap-5'>
<h1 className='text-white text-2xl font-semibold'>Latest Properties</h1>
          <div className='flex justify-center items-center gap-4'>
            <img src={props1} alt="" className=' w-[120px] rounded-1g transform hover:scale-110 cursor-pointer transition-transform duration-300' />

            <div>
              <h1 className='text-lg text-white'>Villa with amazing views</h1>
              <p className='text-slate-400'>$ 509.87</p>
            </div>
          </div>

          <div className='flex justify-center items-center gap-4'>
            <img src={props2} alt="" className=' w-[120px] rounded-1g transform hover:scale-110 cursor-pointer transition-transform duration-300' />

            <div>
              <h1 className='text-lg text-white'>Villa with amazing views</h1>
              <p className='text-slate-400'>$ 809.87</p>
            </div>
          </div>
</div>
      </footer>

{/* slide-to-top button */}

<div id='icon-box' className='bg-red-600 p-4 rounded-full hover:bg-black cursor-pointer fixed lg-bottom-12 bottom-6 right-6'>

<Link to='home' spy={true} offset={-100} smooth={true}><FaArrowUp className='size-6 text-white'></FaArrowUp></Link>
</div>

{/* dark mode toggle button section  */}

<div>
<button onClick={toggleDarkMode} className='flex items-center p-4 rounded-full bg-orange-500 fixed lg:top-52 right-6 top-6'>{darkMode ? <FaMoon size={25} className='text-black'></FaMoon> : <FaSun size={25} className='text-black'></FaSun> }

</button>

</div>
    </>
  )
}

export default Footer