import React from 'react'

const Pricing = () => {
    return (
        <div className='bg-gray-600 py-16 lg:py-20' id='pricing'>
            <div className="container md:flex items-center gap-16">
                <div className='text-white md:w-1/3'>
                    <h3 className='md:text-3xl text-2xl font-primaryFont tracking-wide'>Great pricing plans tailored to your needs.</h3>
                    <p className='font-secondaryFont md:text-xl tracking-wider mt-4 font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt id architecto ullam aut voluptatem officia.</p>
                </div>
                <div className="card md:w-1/4 w-[85%] mx-auto shadow-xl bg-gray-800 text-white text-center py-14 rounded-lg transition-transform duration-500 hover:scale-110 my-10 md:my-0">
                    <h4 className='md:text-xl text-lg font-primaryFont tracking-wide mb-4 uppercase'>Graphic Design</h4>
                    <p className='md:text-6xl text-5xl font-primaryFont mb-2'>$19</p>
                    <p className='font-secondaryFont tracking-wider text-md font-light'>Per Hour</p>
                    <button className="primary-btn rounded-3xl my-8">Get Started</button>
                    <ul className='md:text-lg font-light font-secondaryFont tracking-wider'>
                        <li className='mb-2'>First two weeks free.</li>
                        <li>Amazing freatures.</li>
                    </ul>
                </div>
                <div className="card md:w-1/4 w-[85%] mx-auto shadow-xl bg-primaryColor text-white text-center py-14 rounded-lg transition-transform duration-500 hover:scale-110">
                    <h4 className='md:text-xl text-lg font-primaryFont tracking-wide mb-4 uppercase'>Web Development</h4>
                    <p className='md:text-6xl text-5xl font-primaryFont mb-2'>$29</p>
                    <p className='font-secondaryFont tracking-wider text-md font-light'>Per Hour</p>
                    <button className="primary-btn rounded-3xl my-8 hover:outline">Get Started</button>
                    <ul className='md:text-lg font-light font-secondaryFont tracking-wider'>
                        <li className='mb-2'>First two weeks free.</li>
                        <li className='mb-2'>Save 45% with this plan</li>
                        <li>Amazing freatures.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Pricing
