import React from "react";
import photo from "/cropped.png";
import { FaWhatsapp } from "react-icons/fa";
const About = () => {
  return (
    <div className="pt-5 container mx-auto my-8 p-8  bg-orange-100 rounded-lg shadow-md">
      <h2 className="text-5xl font-bold mb-8 text-center font-caveat text-gray-800">
        About Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative overflow-hidden rounded-lg">
          <img
            src={photo}
            alt="Profile"
            className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Welcome to{" "}
            <span className="font-bold text-red-900">Sonam Beauty Parlour</span>
            , where beauty meets artistry. We are a team of passionate makeup
            artists dedicated to making you look and feel your best on your
            special day.
          </p>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Our journey began with a shared love for enhancing natural beauty
            and creating stunning looks for every occasion. With years of
            experience and a keen eye for detail, we have become known for our
            personalized approach and exceptional artistry.
          </p>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            At{" "}
            <span className="font-bold text-red-900">Sonam Beauty Parlour</span>
            , we believe that makeup is a form of self-expression. Whether
            you're preparing for a wedding, photoshoot, or any other event, our
            goal is to highlight your unique features and bring out the beauty
            that is uniquely yours.
          </p>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            We use top-quality products and stay updated on the latest trends to
            ensure that you receive a look that is both timeless and on-trend.
            Your satisfaction is our priority, and we are committed to providing
            a memorable and enjoyable experience.
          </p>

          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            Thank you for considering{" "}
            <span className="font-bold text-red-900">Sonam Beauty Parlour</span>{" "}
            for your makeup needs. We look forward to being a part of your
            special moments and creating stunning looks that leave a lasting
            impression.
          </p>
          <div className="flex items-center mt-8">
            <a
              href="https://wa.me/7828970454"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:shadow-outline-green transition duration-300"
            >
              <FaWhatsapp className="mr-2" />
              Contact on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
