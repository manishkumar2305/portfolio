import React from 'react';
import { SlDiamond } from "react-icons/sl";
import { FaHeart, FaAward, FaCode } from "react-icons/fa";

const FAQ = () => {
    return (
        <>
            <div className='bg-gray-800 py-20' id='faq'>
                <div className="container">
                    <h3 className='text-white text-center tracking-wide font-semibold font-primaryFont text-2xl md:text-4xl mb-3'>Frequently Asked Questions</h3>
                    <p className='text-white text-center tracking-wider font-light font-secondaryFont md:text-lg mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div className="questions md:flex flex-wrap">
                        <div className="card text-white tracking-wider md:w-1/2 my-4">
                            <h5 className='text-lg md:text-xl font-semibold font-primaryFont'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h5>
                            <p className='font-secondaryFont font-light mt-2 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptates, suscipit facilis eveniet eum doloremque consequuntur ipsum id in ex ipsa. Enim ex omnis odit laboriosam atque. Exercitationem, alias optio?</p>
                        </div>
                        <div className="card text-white tracking-wider md:w-1/2 my-4">
                            <h5 className='text-lg md:text-xl font-semibold font-primaryFont'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h5>
                            <p className='font-secondaryFont font-light mt-2 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptates, suscipit facilis eveniet eum doloremque consequuntur ipsum id in ex ipsa. Enim ex omnis odit laboriosam atque. Exercitationem, alias optio?</p>
                        </div>
                        <div className="card text-white tracking-wider md:w-1/2 my-4">
                            <h5 className='text-lg md:text-xl font-semibold font-primaryFont'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h5>
                            <p className='font-secondaryFont font-light mt-2 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptates, suscipit facilis eveniet eum doloremque consequuntur ipsum id in ex ipsa. Enim ex omnis odit laboriosam atque. Exercitationem, alias optio?</p>
                        </div>
                        <div className="card text-white tracking-wider md:w-1/2 mt-4">
                            <h5 className='text-lg md:text-xl font-semibold font-primaryFont'>Lorem ipsum dolor sit amet consectetur adipisicing elit?</h5>
                            <p className='font-secondaryFont font-light mt-2 md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptates, suscipit facilis eveniet eum doloremque consequuntur ipsum id in ex ipsa. Enim ex omnis odit laboriosam atque. Exercitationem, alias optio?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* //? About my work like projetcs, clients.... */}

            <div className="bg-primaryColor py-12">
                <div className="container">
                    <h3 className='text-white text-2xl md:text-3xl text-center font-primaryFont tracking-wide mb-8 font-semibold capitalize'>Fun facts about my work</h3>
                    <div className="work md:flex items-center justify-between">
                        <div className='text-center mb-6 md:mb-0'>
                            <SlDiamond className='text-white text-3xl md:text-3xl mx-auto' />
                            <p className='font-primaryFont text-white text-2xl md:text-3xl font-semibold my-2'>1050+</p>
                            <p className='text-white font-secondaryFont md:text-lg tracking-wide capitalize'>Projects compeleted</p>
                        </div>
                        <div className='text-center md:mb-0 mb-6'>
                            <FaHeart className='text-white text-3xl md:text-4xl mx-auto' />
                            <p className='font-primaryFont text-white text-2xl md:text-3xl font-semibold my-2'>426K</p>
                            <p className='text-white font-secondaryFont md:text-lg tracking-wide capitalize'>Happy clients</p>
                        </div>
                        <div className='text-center mb-6 md:mb-0'>
                            <FaAward className='text-white text-3xl md:text-4xl mx-auto' />
                            <p className='font-primaryFont text-white text-2xl md:text-3xl font-semibold my-2'>1506</p>
                            <p className='text-white font-secondaryFont md:text-lg tracking-wide capitalize'>Design awards</p>
                        </div>
                        <div className='text-center'>
                            <FaCode className='text-white text-3xl md:text-4xl mx-auto' />
                            <p className='font-primaryFont text-white text-2xl md:text-3xl font-semibold my-2'>2420</p>
                            <p className='text-white font-secondaryFont md:text-lg tracking-wide capitalize'>Line of codes</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ
