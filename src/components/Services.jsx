import React from 'react';
import { MdDeveloperMode } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { RiBaseStationLine } from "react-icons/ri";

const Services = () => {
    return (
        <div className='bg-gray-800 py-20' id='services'>
            <div className='container relative'>
                <h3 className='text-center text-white lg:text-4xl text-3xl mb-4 font-bold tracking-wider font-primaryFont'>What i do the best</h3>
                <p className='text-center text-white lg:text-xl tracking-wider font-secondaryFont mb-12 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="services lg:flex justify-between items-center gap-12 text-white tracking-wide">
                    <div className="design mb-8 lg:mb-0 text-center">
                        <FaPaintBrush className='mx-auto text-4xl text-primaryColor mb-4' />
                        <h5 className='lg:text-xl text-lg font-semibold mb-2 font-primaryFont'>Website Design</h5>
                        <p className='lg:text-lg font-secondaryFont tracking-wider font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi officia pariatur.</p>
                    </div>
                    <div className="development mb-8 lg:mb-0 text-center">
                        <MdDeveloperMode className='mx-auto text-5xl text-primaryColor mb-4' />
                        <h5 className='lg:text-xl text-lg font-semibold mb-2 font-primaryFont'>Web Development</h5>
                        <p className='lg:text-lg font-secondaryFont tracking-wider font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi officia pariatur.</p>
                    </div>
                    <div className="marketing mb-8 lg:mb-0 text-center">
                        <RiBaseStationLine className='mx-auto text-5xl text-primaryColor mb-4' />
                        <h5 className='lg:text-xl text-lg mb-2 font-semibold font-primaryFont'>Online Marketing</h5>
                        <p className='lg:text-lg font-secondaryFont tracking-wider font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere sequi officia pariatur.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
