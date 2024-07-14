import React from "react";
import contact from "../assets/img/contact.jpg";
import { BsDot } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
    try {
      const data = emailjs.sendForm(
        "service_szun7tb",
        "template_yo9s26p",
        e.target,
        "9dgyRP8fgp1T9uYca"
      );
      if (data) {
        toast.success("Your message send successfully!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("Server Occured!");
    }
    e.target.reset();
  };

  return (
    <>
      <ToastContainer />
      <div
        className="bg-gray-800 md:flex items-center gap-30 py-14 md:py-0"
        id="contact"
      >
        <div className="left-content">
          <img className="w-[550px]" src={contact} alt="contact" />
        </div>
        <div className="right-content container mt-8 md:mt-0 md:w-1/3">
          <h3 className="text-white text-2xl md:text-3xl tracking-wide font-primaryFont capitalize font-semibold">
            Get in touch
          </h3>
          <p className="text-white md:text-xl text-lg font-secondaryFont font-light tracking-wider mt-2">
            Please contacte me using the form bellow.
          </p>
          <form className="form mt-8 mb-4" onSubmit={handleSubmitForm}>
            <input
              type="text"
              placeholder="Full Name*"
              name="name"
              required
              className="block text-sm md:text-base h-12 py-3 px-4 w-full rounded-md placeholder:text-gray-600 placeholder:font-primaryFont placeholder:tracking-wide outline-0 mb-6"
            />
            <input
              type="email"
              placeholder="Email Address*"
              name="user_email"
              required
              className="block text-sm md:text-base h-12 py-3 px-4 w-full rounded-md placeholder:text-gray-600 placeholder:font-primaryFont placeholder:tracking-wide outline-0 mb-6"
            />
            <input
              type="number"
              placeholder="Phone Number*"
              name="number"
              required
              className="block text-sm md:text-base h-12 py-3 px-4 w-full rounded-md placeholder:text-gray-600 placeholder:font-primaryFont placeholder:tracking-wide outline-0 mb-6"
            />
            <textarea
              type="text"
              placeholder="Your Message"
              name="message"
              className="block text-sm md:text-base py-3 h-24 px-4 w-full rounded-md placeholder:text-gray-600 placeholder:font-primaryFont placeholder:tracking-wide outline-0 mb-6"
            />
            <button className="primary-btn bg-primaryColor text-white hover:bg-white hover:text-primaryColor">
              Send Message
            </button>
          </form>
          <p className="text-white md:text-lg font-light font-secondaryFont tracking-wider">
            Free Quotes <BsDot className="inline-block text-lg -mx-[6px]" />{" "}
            TrustMark Accredited
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
