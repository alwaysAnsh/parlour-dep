import landingImage from "../../public/landingImage.png";
import cropped from "../../public/cropped.png";
import GlamourSuite from "./Hero/GlamourSuite";
import GallerySection from "./Hero/GallerySection";
import PhoneCallButton from "./Hero/PhoneCallButton";

const hero = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="  flex  flex-col  justify-center items-center bg-primary  ">
        <div className="lg:flex lg:justify-center lg:items-center">
          <img
            className="hidden lg:block lg:pr-10 lg:pb-5 transition-transform transform hover:scale-105"
            src={cropped}
            alt=""
          />

          <div className="">
            <img
              className="pb-5 rounded-full transition-transform transform hover:scale-105 hover:shadow-lg"
              src={landingImage}
              alt=""
            />
            {/* Add your PhoneCallButton component here */}
          </div>
        </div>

        <PhoneCallButton phoneNumber="7617231365" />
      </div>
      {/* Section-2-> Glamour Suite */}
      <div className="">
        <GlamourSuite />
      </div>

      <div>
        <GallerySection />
      </div>
    </div>
  );
};
export default hero;
