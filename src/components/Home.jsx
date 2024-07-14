import React from "react";
import developer from "../assets/img/profile.png";
import Typed from "react-typed";
import { FaPlay } from "react-icons/fa";

const Home = () => {
  // const [video, setVideo] = useState(false);
  // const [scroll, setScroll] = useState(false);
  // const handleBtnVideo = () => {
  //     setVideo(!video);
  //     setScroll(!scroll);
  // }
  // document.body.style.overflowY = scroll ? "hidden" : "auto";

  return (
    <div
      className="hero bg-bgColor relative h-screen flex items-center"
      id="home"
    >
      <div className="container lg:grid grid-flow-col grid-cols-2 items-center">
        <div className="lg:left-content relative text-white z-10">
          <h3 className="text-4xl lg:text-5xl tracking-wide font-primaryFont lg:inline-block">
            Hi!
          </h3>
          <h3
            className="text-4xl lg:text-5xl tracking-wide font-primaryFont lg:inline-block lg:ml-2
                    "
          >
            I'm{" "}
            <span className="text-primaryColor">
              <Typed
                strings={["Manish Sirawta", "Web Developer", "App Developer"]}
                typeSpeed={100}
                backSpeed={90}
                loop
              />
            </span>
          </h3>
          <h3 className="text-4xl lg:text-5xl tracking-wide font-primaryFont mt-1 lg:mt-2 w-1/3 lg:w-full leading-9">
            I design awesome websites.
          </h3>
          <p className="mt-4 text-lg lg:text-2xl font-secondaryFont tracking-wider">
            I am a website designer based in the heart of Camden Town, London.
          </p>
          {/* //? Button animation background  */}
          <button className="bg-white lg:w-14 w-12 h-12 lg:h-14 lg:mx-0 rounded-full mt-8 animate-ping absolute opacity-75"></button>
          <button className="bg-white py-3.5 lg:py-4 px-3.5 lg:px-4 rounded-full mt-8 z-20 relative hover:bg-bgColor hover:outline">
            <FaPlay className="text-primaryColor text-xl lg:text-2xl" />
          </button>
          <p className="inline-block ml-7 lg:text-xl text-base tracking-wide font-primaryFont underline">
            Watch Pressentaion Video
          </p>
          {/* <div className={`${!video ? 'hidden' : 'block'} video bg-[#02020293] left-0 w-screen h-screen fixed top-0 flex justify-center items-center`} onClick={handleBtnVideo}>
                        <div>
                            <iframe className={`${!video ? 'hidden' : 'block lg:h-[498px] lg:w-[885px]'}`} src="https://www.youtube.com/embed/HGSR3FDVkkQ" allowFullScreen></iframe>
                        </div>
                    </div> */}
        </div>

        <div className="right-content">
          <img
            className="lg:w-[90%] mt-[6.2rem] lg:-right-28 hidden lg:block absolute top-0 z-0 lg:relative"
            src={developer}
            alt="developer"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
