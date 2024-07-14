import React from "react";
import about from "../assets/img/about.jpg";
import { FaCheck } from "react-icons/fa";
import resume from "../assets/img/Manish Kumar Resume.pdf";

const About = () => {
  // Function will execute on click of button
  const download = (e) => {
    e.preventDefault();
    // using Java Script method to get PDF file
    fetch(resume).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Manish Kumar Resume.pdf";
        alink.click();
      });
    });
  };

  return (
    <div className="about bg-gray-700 py-20" id="about">
      <div className="container md:flex justify-between items-center gap-12">
        <div className="left-content">
          <img className="w-[900px] rounded-md" src={about} alt="about" />
        </div>
        <div className="right-content w-full text-white tracking-wide">
          <h3 className="md:text-4xl text-2xl font-primaryFont font-semibold md:mt-0 mt-4">
            A little about me
          </h3>
          <p className="my-4 md:text-lg font-light font-secondaryFont tracking-wider">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit delectus similique dolorem minus. Pariatur maxime
            culpa corrupti voluptates soluta odit nam consequuntur. Deleniti
            vitae cum voluptatum maxime, repellat consequuntur magni.
          </p>
          <div className="list">
            <p className="md:text-lg font-light my-2 tracking-wider font-secondaryFont">
              {" "}
              <FaCheck className="inline-block mr-2 text-xl text-primaryColor" />{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="md:text-lg font-light my-2 tracking-wider font-secondaryFont">
              {" "}
              <FaCheck className="inline-block mr-2 text-xl text-primaryColor" />{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="md:text-lg font-light my-2 tracking-wider font-secondaryFont">
              {" "}
              <FaCheck className="inline-block mr-2 text-xl text-primaryColor" />{" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="about md:grid grid-cols-2 md:gap-1 mt-8">
            <h3 className="text-lg mb-3 md:mb-0 font-bold tracking-wider font-primaryFont">
              Location{" "}
              <p className="inline-block font-light font-secondaryFont tracking-wider md:ml-3 ml-3">
                | Ratlam, MP
              </p>{" "}
            </h3>
            <h3 className="text-lg mb-3 md:mb-0 font-bold tracking-wider font-primaryFont">
              Phone{" "}
              <p className="inline-block font-light font-secondaryFont tracking-wider md:ml-4 ml-8">
                | +91 9893666707
              </p>{" "}
            </h3>
            <h3 className="text-lg mb-3 md:mb-0 font-bold tracking-wider font-primaryFont">
              Age{" "}
              <p className="inline-block font-light font-secondaryFont tracking-wider ml-[52px]">
                | 26 Year
              </p>{" "}
            </h3>
            <h3 className="text-lg mb-3 md:mb-0 font-bold tracking-wider font-primaryFont">
              Email{" "}
              <p className="inline-block font-light font-secondaryFont tracking-wider md:ml-6 ml-[38px]">
                | support@manishsirawta.com
              </p>{" "}
            </h3>
            <h3 className="text-lg mb-3 md:mb-0 font-bold tracking-wider font-primaryFont">
              Freelance{" "}
              <p className="inline-block font-light font-secondaryFont tracking-wider">
                | Available
              </p>{" "}
            </h3>
            <h3 className="text-lg font-bold tracking-wider font-primaryFont">
              Linkedin{" "}
              <p className="inline-block font-light font-secondaryFont tracking-wider md:mx-0 ml-3">
                | manish.sirawta
              </p>{" "}
            </h3>
          </div>
          <button
            className="primary-btn mt-6 bg-primaryColor text-white hover:bg-white hover:text-primaryColor"
            onClick={download}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
