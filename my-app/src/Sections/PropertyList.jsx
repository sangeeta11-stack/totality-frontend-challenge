import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkMode';
import properties from '../components/propertyData';
import { FaBath, FaShareAlt, FaBed, FaUserCircle, FaPlus, FaMapMarkerAlt, FaVideo, FaCamera, FaHeart } from 'react-icons/fa';
import { MdSpaceDashboard } from 'react-icons/md';
import Aos from 'aos';
import 'aos/dist/aos.css';

function PropertyList() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 800,
      easing: 'ease-in-out-sine',
      delay: 100,
    });
  }, []);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'}`}>
        <section id='properties' className='lg:w-[90%] m-auto lg:px-20 px-6 py-20 w-full flex flex-col justify-center items-start gap-10'>
          <div className='flex flex-col justify-center items-start gap-4'>
            <h1 data-aos='zoom-in' className='text-red-500 dark:text-white'>PROPERTIES</h1>
            <h1 data-aos='zoom-in' className='text-black text-4xl font-semibold dark:text-white'>Explore the latest Properties</h1>
          </div>

          {/* Properties grid */}
          <div id='grid-box' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-10'>
            {properties.map((item, index) => (
              <div
                data-aos='zoom-in'
                data-aos-delay='200'
                key={index}
                className='bg-white dark:bg-grey-800 rounded-xl w-full'
              >
                <div
                  id='image-box'
                  className='bg-cover bg-center h-[250px] rounded-xl p-4 flex flex-col justify-between items-end'
                  style={{ backgroundImage: `url(${item.images})` }}
                >
                  <div id='top' className='flex justify-between items-end w-full'>
                    <div>
                      <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Featured</button>
                    </div>
                    <div className='flex justify-between items-center gap-3'>
                      <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Sell</button>
                      <button className='px-3 py-1 bg-red-600 hover:bg-white hover:text-black text-white rounded-full text-[13px]'>Active</button>
                    </div>
                  </div>

                  <div id='botton' className='flex justify-between items-end w-full'>
                    <div className='flex justify-start items-center gap-2'>
                      <FaMapMarkerAlt className='size-4 text-white' />
                      <h1 className='text-white'>{item.address}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                      <FaVideo className='size-4 text-white' />
                      <FaCamera className='size-4 text-white' />
                    </div>
                  </div>
                </div>

                <div className='px-6 py-3 flex flex-col justify-center items-start gap-3 w-full'>
                  <h1 className='text-xl text-black font-semibold dark:text-white'>{item.title}</h1>
                  <h1 className='text-2xl text-red-600 font-bold dark:text-white'>$ {item.price}</h1>
                  <p className='dark:text-white'>{item.description}</p>

                  <div id='icons' className='flex justify-center items-start gap-5 mt-2'>
                    <div className='flex justify-center items-center gap-2'>
                      <FaBath className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.bathrooms}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                      <FaBed className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.bedrooms}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                      <MdSpaceDashboard className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.squareFeet} sq ft</h1>
                    </div>
                  </div>

                  <div className='w-full h-[1px] bg-grey-200 mt-8' />

                  <div id='ownerInfo' className='flex justify-between items-center w-full mt-4'>
                    <div className='flex justify-center items-center gap-2'>
                      <FaUserCircle className='size-5 text-red-400' />
                      <h1 className='dark:text-white'>{item.client.name}</h1>
                    </div>
                    <div className='flex justify-center items-center gap-4'>
                      <div className='p-2 border-2 border-grey-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaShareAlt className='size-4 text-red-400' />
                      </div>
                      <div className='p-2 border-2 border-grey-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaHeart className='size-4 text-red-400' />
                      </div>
                      <div className='p-2 border-2 border-grey-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300'>
                        <FaPlus className='size-4 text-red-400' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default PropertyList;
