import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import avtar1 from '../assets/img/avtar-1.svg';
import avtar2 from '../assets/img/avtar-2.svg';
import avtar3 from '../assets/img/avtar-3.svg';

const Testimonials = () => {
    return (
        <div className='testimonials bg-gray-600 py-20' id='testimonials'>
            <div className="container md:flex justify-between items-start md:space-x-10">
                <div className="contenty-left w-full text-white">
                    <h3 className='md:text-4xl text-2xl tracking-wide mb-4 font-primaryFont'>What People Are Saying.</h3>
                    <p className='md:text-xl tracking-wider font-light font-secondaryFont md:w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, rem, unde odio doloremque fugiat tempora illo natus, facere ipsum animi aut! Nam sint architecto sequi dignissimos ducimus totam vero. Officia quis quia quod cum.</p>
                    <div className="feedback md:flex gap-6 mt-6">
                        <div>
                            <p className='text-xl text-white tracking-wide font-primaryFont mb-1'>Linkedin</p>
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl' />
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl' />
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl' />
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl' />
                            <FaStarHalfAlt className='inline-block text-yellow-500 text-xl' />
                        </div>
                        <div className='md:border-l-2 mt-6 md:mt-0'>
                            <p className='text-xl text-white tracking-wide font-primaryFont mb-1 md:ml-6'>Upwork</p>
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl md:ml-6' />
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl' />
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl' />
                            <FaStar className='inline-block mr-1 text-yellow-500 text-xl' />
                            <FaRegStar className='inline-block text-yellow-500 text-xl' />
                        </div>
                    </div>
                </div>
                <div className="contenty-right w-full">
                    <div className="content text-white tracking-wider font-medium font-secondaryFont mt-10 md:mt-0">
                        <div className="card mb-6 border-l-8 md:p-8 p-6 border-primaryColor bg-slate-900 shadow-lg">
                            <p className='md:text-xl text-lg italic mb-4 font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos libero nulla unde praesentium. Adipisci, velit laboriosam praesentium eum tempora illo.</p>
                            <div className="user flex items-center">
                                <img className='inline-block md:w-16 w-14' src={avtar1} alt="avtar1" />
                                <p className='inline-block ml-4 text-sm md:text-lg'>Alexandra Smith | Manager - SmartCoders</p>
                            </div>
                        </div>
                        <div className="card mb-6 border-l-8 md:p-8 p-6 border-primaryColor bg-slate-900 shadow-lg">
                            <div className="user flex items-center">
                                <img className='inline-block md:w-16 w-14' src={avtar2} alt="avtar2" />
                                <p className='inline-block ml-4 text-sm md:text-lg'>Christina Pages | Designer - New Fashion</p>
                            </div>
                        </div>
                        <div className="card border-l-8 md:p-8 p-6 border-primaryColor bg-slate-900 shadow-lg">
                            <div className="user flex items-center">
                                <img className='inline-block md:w-16 w-14' src={avtar3} alt="avtar3" />
                                <p className='inline-block ml-4 text-sm md:text-lg'>John Deo | CEO - Epic Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
