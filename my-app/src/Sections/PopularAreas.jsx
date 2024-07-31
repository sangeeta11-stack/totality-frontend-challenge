import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkMode';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Area1 from '../Assets/area1.jpg';
import Area2 from '../Assets/area2.jpg';
import Area3 from '../Assets/area3.jpg';

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

                <section className={`${darkMode ? 'dark bg-grey-800' : 'light bg-red-100'} lg-w-[90%] w-full h-fit m-auto bg-cover rounded-xl flex justify-center flex-col items-center lg:px-20 px-6 py-20 gap-20`} >
                    <div id='top' className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8'>

                        <h3 data-aos="zomm-in" className='text-red-500 dark:text-white'>POPULAR AREAS</h3>
                        <h1 data-aos="zomm-in" className='text-black text-[40px] font-semibold leading-10 mt-4 dark:text-white'>Explore most<br /><br /> popular areas</h1>
                    </div>

                    <div className='grid lg:grid-cols-3 col-span-2 grid-cols-1 justify-center items-center gap-6'>
                        <div data-aos="zomm-in" data-aos-delay="400" style={{backgroundImage: `url(${Area1})`}} className='h-[400px] bg-cover bg-center rounded-xl' >


                        </div>

                    </div>

                </section>

            </div>

        </>)
}

export default PopularAreas