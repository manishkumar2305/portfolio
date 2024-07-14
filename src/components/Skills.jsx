import React from 'react';

const Skills = () => {
  return (
    <div className='skills bg-gray-800 py-20' id='skills'>
        <div className="container md:flex justify-between items-start relative">
            <div className="left-content text-white md:w-1/2 relative">
                <h3 className='text-3xl mb-5 font-primaryFont tracking-wide'>Skills and Education</h3>
                <p className='md:text-lg tracking-wider font-secondaryFont md:w-5/6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum, temporibus iusto laudantium ex, veritatis distinctio quod asperiores rem similique, quidem animi labore reiciendis possimus blanditiis?</p>
                <p className='md:text-lg tracking-wider font-secondaryFont my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam placeat culpa sit repellendus alias molestiae distinctio consequuntur nemo officiis!</p>
                <button className="primary-btn my-4 bg-primaryColor hover:bg-white text-white hover:text-primaryColor">Discover My Work</button>
            </div>
            <div className="right-content relative mt-6 md:mt-0">
                <h4 className='text-lg text-white tracking-wide font-primaryFont'>CSS & HTML</h4>
                <div className="bar mb-4 bg-gray-400 md:w-[32rem] h-5 before:bg-primaryColor before:h-5 before:w-[95%] before:absolute before:left-0 rounded-md before:rounded-l-md text-center text-white tracking-wider font-primaryFont text-sm"><span className='text-white font-medium relative'>99%</span></div>
                <h4 className='text-lg text-white tracking-wide font-primaryFont'>JavaScript & jQuery</h4>
                <div className="bar mb-4 bg-gray-400 md:w-[32rem] h-5 before:bg-primaryColor before:h-5 before:w-[63%] before:absolute before:left-0 rounded-md before:rounded-l-md text-center text-white tracking-wider font-primaryFont text-sm"><span className='text-white font-medium relative'>75%</span></div>
                <h4 className='text-lg text-white tracking-wide font-primaryFont'>React JS</h4>
                <div className="bar mb-4 bg-gray-400 md:w-[32rem] h-5 before:bg-primaryColor before:h-5 before:w-[55%] before:absolute before:left-0 rounded-md before:rounded-l-md text-center text-white tracking-wider font-primaryFont text-sm"><span className='text-white font-medium relative'>60%</span></div>
                <h4 className='text-lg text-white tracking-wide font-primaryFont'>Tailwind CSS & WordPres</h4>
                <div className="bar mb-4 bg-gray-400 md:w-[32rem] h-5 before:bg-primaryColor before:h-5 before:w-[85%] before:absolute before:left-0 rounded-md before:rounded-l-md text-center text-white tracking-wider font-primaryFont text-sm"><span className='text-white font-medium relative'>90%</span></div>
                <h4 className='text-lg text-white tracking-wide font-primaryFont'>Node JS & PHP</h4>
                <div className="bar bg-gray-400 md:w-[32rem] h-5 before:bg-primaryColor before:h-5 before:w-[63%] before:absolute before:left-0 rounded-md before:rounded-l-md text-center text-white tracking-wider font-primaryFont text-sm"><span className='text-white font-medium relative'>75%</span></div>
            </div>
        </div>
    </div>
  )
}

export default Skills
