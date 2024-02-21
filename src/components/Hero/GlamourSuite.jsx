import React from "react";
import Bridal from "../../assets/Bridal.png";
import Haircut from "../../assets/Haircut.png";
import Treatment from "../../assets/Treatment.png";
import Art from "../../assets/Art.png";

const GlamourSuite = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="bg-orange-100 p-8 text-center">
        <h1 className="font-bold text-7xl mb-4 font-caveat">Signature Glamour Suite</h1>
        <div className="border-b-4 border-red-900 w-20 mx-auto"></div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center gap-8 mt-8">
        <div className="lg:w-1/3 overflow-hidden rounded-lg shadow-2xl transition-transform transform hover:scale-105">
          <img
            src={Bridal}
            alt="Bridal image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-2/3 flex flex-col gap-8">
          <p className="text-5xl font-caveat font-bold text-center ">Bridal Radiance</p>
          <p className="text-lg  max-h-[200px] overflow-y-auto">
            Discover the epitome of bridal beauty at{" "}
            <span className="font-bold text-red-900">Sonam Makeovers</span>. Our
            expert makeup artists specialize in creating flawless looks tailored
            to your unique style, be it timeless elegance or modern chic. With
            premium products and personalized techniques, we promise a radiant
            look that withstands the tears and smiles of your special day. Book
            your unforgettable bridal experience with us, where every glance is
            captivating, every gaze is held, and your beauty shines as brightly
            as your love story.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:flex-row-reverse bg-orange-100 mt-16 p-8">
        <div className="lg:w-1/3 overflow-hidden rounded-lg shadow-2xl transition-transform transform hover:scale-105">
          <img
            src={Haircut}
            alt="Haircut image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-2/3 flex flex-col gap-8">
          <p className="pt-5 text-5xl font-caveat text-center">
            Bespoke Hair Artistry
          </p>
          <p className="text-lg pl-5 max-h-[200px] overflow-y-auto">
            Immerse yourself in a world of style and sophistication with our
            exceptional haircut experiences. At our salon, skilled stylists are
            dedicated to creating hairstyles that go beyond mere cuts – they're
            personalized expressions of your unique identity. Whether you're
            envisioning a timeless classic, a trendy and chic transformation, or
            a bold, statement-making look, our bespoke haircut services cater to
            your every whim. With precision techniques and a keen eye for the
            latest trends, we promise a haircut experience that not only leaves
            you looking effortlessly stylish but also boosts your confidence
            with every trim. Elevate your personal style and indulge in the
            artistry of hair design with us.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center mt-16">
        <div className="lg:w-1/3 overflow-hidden rounded-lg shadow-2xl transition-transform transform hover:scale-105">
          <img
            src={Art}
            alt="Artistry image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:w-2/3 flex flex-col gap-8 pl-5">
          <p className="pt-5 text-5xl font-caveat text-center ">
            Skin Care Consultations
          </p>
          <p className="text-lg  max-h-[200px] overflow-y-auto">
            Indulge in the ultimate luxury of personalized skincare with our
            exclusive Skin Care Consultations. Our expert skincare specialists
            are dedicated to understanding your unique skin needs and concerns,
            crafting a tailored regimen that promotes radiance and vitality.
            Whether you seek rejuvenation, hydration, or solutions for specific
            skin challenges, our consultations offer a holistic approach. From
            in-depth analyses to curated product recommendations, we guide you
            on a transformative journey to healthier, more radiant skin. Elevate
            your skincare routine and unveil the best version of your skin with
            our bespoke consultations – where beauty meets expertise.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlamourSuite;
