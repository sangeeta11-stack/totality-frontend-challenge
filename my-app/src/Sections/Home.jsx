import React, { useEffect } from 'react';
import { useDarkMode } from '../components/DarkMode';
import Aos from 'aos';
import Housing from '../Assets/Home.jpg';
import 'aos/dist/aos.css';

function Home() {
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
            <div className={`${darkMode ? 'dark bg-black text-white' : 'light bg-white text-black'} `}>
                <section
                    id='home'
                    className='w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex justify-center flex-col items-start lg:px-28 px-9 gap-7 z-20'
                    style={{ backgroundImage: `url(${Housing})` }}>
                    <h1 data-aos="zoom-in" className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] ">Find Your Home In India</h1>

                    <p data-aos="zoom-in" className='text-white text -xl lg:pr-[500px] pr-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ab maiores repellat expedita vel? Sapiente dolorem dolore animi ratione quod.</p>

                </section>
            </div>

            {/* form start  */}

            <div className={`${darkMode ? 'dark bg-black' : 'light bg-transparent'} z-10`}>

                <div data-aos="zoom-in" className={`${darkMode ? 'dark bg-gray-800' : 'light bg-white'} lg:w-[70%] w-full m-auto grid lg:grid-col-4 grid-cols-1 justify-center items-center gap-6 p-8 rounded-x1 -mt-14`}>



                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>LOCATION </h1>
                        <input type="text" placeholder='Enter an address,state,city or place' className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1]' />


                    </div>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>TYPE </h1>
                        <select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-grey-500 text-md'>
                            <option value="disabled" disabled selected>Select Property</option>
                            <option value="option1">Rentals</option>
                            <option value="option1">Sells</option>
                            <option value="option1">Commercial</option>


                        </select>

                    </div>

                    <div className='w-full'>
                        <h1 className='text-black font-semibold dark:text-white'>CATEGORIES</h1>
                        <select name="selectOption" id="selectOption" className='bg-white p-2 w-full mt-2 border-b-[1px] border-[#c9c7c1] text-grey-500 text-md'>
                            <option value="disabled" disabled selected>Property Categories</option>
                            <option value="option1">Apartments</option>
                            <option value="option1">Duplex</option>
                            <option value="option1">Condos</option>


                        </select>

                    </div>


                    <div className='w-full' >
                        <button className='bg-red-600 dark:bg-red-700 hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-4 w-full text-white font-semibold rounded-xl cursor-pointer transform hover:scale=110 transition-transform duration-300' > Submit </button>
                    </div>


                </div>


            </div>



        </>
    );
}

export default Home;
