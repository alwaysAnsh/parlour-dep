// Footer.jsx
import React from "react";
import logo from "/Logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import footerImage from "../assets/footerImage.png";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${"7617231365"}`,
      "_blank"
    );
  };

  const handleMakePhoneCall = () => {
    window.open(`tel:+91${"7617231365"}`);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center px-5 lg:px-20 bg-orange-200 pb-5 md:pb-0">
      <div className="flex flex-col gap-2 lg:flex-row ">
        <div className="flex flex-col gap-2 text-center lg:text-left">
        <div className="flex justify-center md:justify-start items-end gap-2">
          <h2 className="text-3xl pt-2 text-red-900">Address</h2>
          <a
            href="https://www.google.com/maps/d/u/0/viewer?mid=10Dg861xJNy18dTvB6dHk9fp8dRQ&hl=en_US&ll=26.399822500000035%2C-98.158046&z=22"
            target="_blank"
            className="text-red-900 hover:underline pb-2 transition-transform transform hover:scale-150"
          >
            <IoLocationSharp size={28} />
          </a>
          </div>
          <p className="w-full lg:w-[70%] text-lg">
            Sonam Makeovers, Sadhguru Kirana Store ke paas, Patri road
          </p>
          <p className="text-lg">Gwalior, Madhya Pradesh 474005</p>
          <>
            <h1 className="text-2xl pt-2 text-red-900">Telephone Enquiry</h1>
            <div className="flex justify-center items-center lg:justify-start">
              <IoIosCall size={28} />
              <span className="ml-2 font-extrabold">+91 7617231365</span>
            </div>
          </>
        </div>

        <div className="flex flex-col gap-2 text-center md:pr-14 lg:text-left lg:pl-10">
          <p className="text-3xl pt-2 text-red-900">Follow Us</p>
          <div className="flex gap-3 justify-center items-end">
            <a
              href=""
              className="transition-transform transform hover:scale-150 "
            >
              {<FaWhatsapp size={28} onClick={handleWhatsAppClick} />}
            </a>
            <a
              href="https://www.instagram.com/sonam_makeovers.academy/"
              target="_blank"
              className="transition-transform transform hover:scale-150 "
            >
              {<FaInstagram size={28} />}
            </a>
            <a
              href=""
              className="transition-transform transform hover:scale-150 "
            >
              {<RiFacebookCircleLine size={30} />}
            </a>
            <a
              href=""
              className="transition-transform transform hover:scale-150 "
            >
              {<MdOutlineEmail size={28} />}
            </a>
            <a
              href=""
              className="transition-transform transform hover:scale-150 "
            >
              {<IoIosCall size={28} onClick={handleMakePhoneCall} />}
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5 lg:mt-0">
        <img src={footerImage} alt="footer Image" width={350} className="" />
      </div>
    </div>
  );
};

export default Footer;
