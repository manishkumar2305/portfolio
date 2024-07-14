import React from "react";
import wallpaper1 from "../assets/img/wallpaper-1.jpg";
import wallpaper2 from "../assets/img/wallpaper-2.jpg";
import wallpaper3 from "../assets/img/wallpaper-3.jpg";
import wallpaper4 from "../assets/img/wallpaper-4.jpg";
import wallpaper5 from "../assets/img/wallpaper-5.jpg";
import wallpaper6 from "../assets/img/wallpaper-6.jpg";

const Gallery = () => {
  return (
    <div className="bg-gray-800 py-20" id="gallery">
      <div className="container text-white text-center">
        <h3 className="md:text-4xl text-2xl font-primaryFont tracking-wide font-semibold">
          A selection of my work
        </h3>
        <p className="md:text-lg font-secondaryFont tracking-wider mt-4">
          Discover bellow the latest projects.
        </p>
        <div
          className="gallery md:flex items-center
                gap-8 flex-wrap mt-12"
        >
          <img
            className="md:w-[30%] mb-10 md:mb-0 cursor-pointer rounded-md"
            src={wallpaper1}
            alt="wallpaper1"
          />
          <img
            className="md:w-[30%] mb-10 md:mb-0 cursor-pointer rounded-md"
            src={wallpaper2}
            alt="wallpaper2"
          />
          <img
            className="md:w-[30%] mb-10 md:mb-0 cursor-pointer rounded-md"
            src={wallpaper3}
            alt="wallpaper3"
          />
          <img
            className="md:w-[30%] mb-10 md:mb-0 cursor-pointer rounded-md"
            src={wallpaper4}
            alt="wallpaper4"
          />
          <img
            className="md:w-[30%] mb-10 md:mb-0 cursor-pointer rounded-md"
            src={wallpaper5}
            alt="wallpaper5"
          />
          <img
            className="md:w-[30%] cursor-pointer rounded-md"
            src={wallpaper6}
            alt="wallpaper6"
          />
        </div>
        <p className="md:text-xl text-sm font-secondaryFont tracking-wider mt-8">
          Like what you see? Follow me{" "}
          <a className="text-primaryColor">@manish-sirawta</a>
        </p>
      </div>
    </div>
  );
};

export default Gallery;
