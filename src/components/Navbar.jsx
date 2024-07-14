import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuClick = () => {
    setMenu(!menu);
  };

  // Change navbar color change when scrolling
  const [bgcolor, setBgcolor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setBgcolor(true);
    } else {
      setBgcolor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={`${
        bgcolor
          ? "bg-[#3C4048] transition-all duration-700 ease-in-out z-50 w-full fixed top-0 lg:py-2 py-4"
          : "z-50 w-full fixed top-0 bg-[#3C4048] lg:bg-transparent lg:py-2 py-4 transition duration-700 ease-in-out"
      }`}
      id="navbar"
    >
      <div className="container lg:flex grid grid-flow-row grid-cols-2 justify-between items-center">
        <div className="brand lg:text-3xl text-2xl tracking-wider font-bold font-primaryFont lg:block">
          <Link to="home" className="text-white" spy={true}>
            Manish<span className="text-primaryColor">Sirawta</span>{" "}
          </Link>
        </div>
        <div className="hamburger" onClick={handleMenuClick}>
          {!menu ? (
            <FaBars className="lg:hidden text-white text-2xl cursor-pointer float-right overflow-hidden" />
          ) : (
            <FaTimes className="lg:hidden text-white text-3xl cursor-pointer float-right overflow-hidden" />
          )}
        </div>
        <ul
          className={`${
            menu
              ? "text-white lg:flex lg:items-center lg:space-x-7 text-lg tracking-widest font-secondaryFont font-normal"
              : "menu text-white lg:flex hidden lg:items-center lg:space-x-7 text-lg tracking-widest font-secondaryFont font-normal"
          }`}
        >
          <li className="my-5 lg:my-0 ">
            <Link
              to="home"
              activeClass="active"
              className="hover:text-primaryColor transition-colors duration-300 scroll-smooth"
              spy={true}
              offset={0}
            >
              Home
            </Link>
          </li>
          <li className="my-5 lg:my-0 ">
            <Link
              to="services"
              className="hover:text-primaryColor transition-colors duration-300 scroll-smooth"
              spy={true}
              offset={0}
            >
              Services
            </Link>
          </li>
          <li className="my-5 lg:my-0 ">
            <Link
              to="about"
              className="hover:text-primaryColor transition-colors duration-300 scroll-smooth"
              spy={true}
              offset={0}
            >
              About
            </Link>
          </li>
          <li className="my-5 lg:my-0 ">
            <Link
              to="skills"
              className="hover:text-primaryColor transition-colors duration-300 scroll-smooth"
              spy={true}
              offset={0}
            >
              Skills
            </Link>
          </li>
          <li className="my-5 lg:my-0 ">
            <Link
              to="testimonials"
              className="hover:text-primaryColor transition-colors duration-300"
              spy={true}
              offset={0}
            >
              Testimonials
            </Link>
          </li>
          <li className="my-5 lg:my-0 ">
            <Link
              to="gallery"
              className="hover:text-primaryColor transition-colors duration-300"
              spy={true}
              offset={0}
            >
              Gallery
            </Link>
          </li>
          <li className="my-5 lg:my-0 ">
            <Link
              to="pricing"
              className="hover:text-primaryColor transition-colors duration-300"
              spy={true}
              offset={0}
            >
              Pricing
            </Link>
          </li>
          {/* <li className="my-5 lg:my-0 "><Link to="faq" className="hover:text-primaryColor transition-colors duration-300" spy={true} offset={0} >FAQ</Link></li> */}
          <button className="primary-btn">
            <Link to="contact">Get In Touch</Link>
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
