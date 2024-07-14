import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container py-4">
        <p className="text-center md:text-xl font-secondaryFont tracking-wide">
          Copyright &#169; {new Date().getFullYear()} | Designed by{" "}
          <span className="underline text-primaryColor">ManishSirawta</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
