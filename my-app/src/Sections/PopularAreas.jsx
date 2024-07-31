import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkMode';
import Aos from 'aos';
import 'aos/dist/aos.css';
import House1 from '../Assets/House1.jpg';
import House2 from '../Assets/House2.jpg';
import House3 from '../Assets/House3.jpg';
function PopularAreas() {

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

                <section className={`${darkMode ? 'dark bg-grey-800' : 'light bg-red-100'} lg:w-[90%] w-full h-fit m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`} >

                    <div id='top' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>
                        <div>
                            <h3 data-aos="zoom-in" className='text-red-500 dark:text-white'>POPULAR AREAS</h3>
                            <h1 data-aos="zoom-in" className='text-black text-[20px] font-semibold leading-10 mt-4 dark:text-white'>Explore most<br /><br /> popular areas</h1>

                        </div>
                        <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
                            <div data-aos="zoom-in" data-aos-delay="400" style={{ backgroundImage: `url(${House1})` }} className='h-[400px] bg-cover bg-center rounded-xl' >  </div>
                            <div data-aos="zoom-in" data-aos-delay="400" style={{ backgroundImage: `url(${House2})` }} className='h-[400px] bg-cover bg-center rounded-xl' >  </div>
                            <div data-aos="zoom-in" data-aos-delay="400" style={{ backgroundImage: `url(${House3})` }} className='h-[400px] bg-cover bg-center rounded-xl' >  </div>

                        </div>



                    </div>
                    <div id='bottom' className='w-full grid lg:grid-cols-3 grid-cols-1 lg:justify-center justify-start items-center gap-6'>
                        <div data-aos="slide-up" data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>

                            <h1 className='text-black text-7xl font-semibold dark:text-white'>5k</h1>

                            <h1 className='dark:text-white'>ACTIVE <br />LISTING </h1>
                        </div>

                        <div data-aos="slide-up" data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>

                            <h1 className='text-black text-7xl font-semibold dark:text-white'>5k</h1>

                            <h1 className='dark:text-white'>ACTIVE <br />LISTING </h1>
                        </div>

                        <div data-aos="slide-up" data-aos-delay='200' className='flex justify-center lg:items-center gap-8 w-full'>

                            <h1 className='text-black text-7xl font-semibold dark:text-white'>5k</h1>

                            <h1 className='dark:text-white'>ACTIVE <br />LISTING </h1>
                        </div>

                    </div>
                </section>

            </div>

        </>)
}

export default PopularAreas