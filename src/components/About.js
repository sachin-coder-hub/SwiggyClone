import React from "react";

const About = () => {
  return (
    <div className="main-container">
      <div className="relative primary-section">
        <div className="bg-orange-600 w-full h-[520px] flex justify-center items-center relative">
          {/* Left Image */}
          <div className="absolute left-0 bottom-0">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/04/DE-on-bike-2-2.png"
              className="h-full object-contain"
              alt="Swiggy delivery person"
            />
          </div>

          {/* Center Text */}
          <div className="z-10 text-center w-2/4">
            <h1 className="text-6xl text-white font-bold p-2 m-2">
              About FastFood
            </h1>
            <h3 className="text-xl text-white">
              FastFood is a new-age consumer-first organization offering an
              easy-to-use <br /> convenience platform, accessible through a
              unified app.
            </h3>
          </div>

          {/* Right Image */}
          <div className="absolute right-0 bottom-0">
            <img
              src="https://www.swiggy.com/corporate/wp-content/uploads/2024/04/03-Instamart_3_front_view_2_skycolour.png"
              className="h-full object-contain"
              alt="Swiggy Instamart"
            />
          </div>
        </div>
      </div>
      <div className="secondary-section">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://www.swiggy.com/corporate/wp-content/uploads/2024/04/about-img1-new.png"
            className="h-96 w-[480px]"
          />
        </div>
        <div className="flex justify-between p-4 mx-20">
          <div className="w-64">
            <h1 className="text-3xl font-bold mb-2">Mission</h1>
            <h3 className="text-xl font-light">
              Our mission is to elevate the quality of life of the urban
              consumer by offering unparalleled convenience. Convenience is what
              makes us tick. It's what makes us get out of bed and say, “Let's
              do this.”
            </h3>
          </div>
          <div className="w-80">
            <h1 className="text-3xl font-bold mb-2">Industry pioneer</h1>
            <h3 className="text-xl font-light">
              Being among the first few entrants, FastFood has successfully
              pioneered the hyperlocal commerce industry in India, launching
              Food Delivery in 2014 and Quick Commerce in 2020. Due to the
              pioneering status of FastFood, it is well-recognised as a leader
              in innovation in hyperlocal commerce and as a brand synonymous
              with the categories it is present in.
            </h3>
          </div>
          <div className="w-64">
            <h1 className="text-3xl font-bold mb-2">Values</h1>
            <h3 className="text-xl font-light">
              Our actions are strongly defined by the FastFood values. Through
              ups, downs, and everything in between; Our captain's put these
              values into practice in their everyday ways of working. Read on to
              get a taste of how Swiggsters live and breathe these values and
              how it forms the backbone of our culture.
            </h3>
          </div>
        </div>
      </div>
      <div className="footer-section bg-orange-600 w-full h-36 mt-2 flex flex-col justify-center items-center gap-8">
        <p className=" text-white font-bold">© 2024 FastFood Limited</p>
        <div className="flex items-center gap-4">
          <p className=" text-white font-serif">
            For better experience, download the FastFood app now
          </p>
          <img
            src="https://www.swiggy.com/corporate/wp-content/uploads/2024/03/Group-48098150.png"
            className="w-48 h-14"
          />
          <img
            src="https://www.swiggy.com/corporate/wp-content/uploads/2024/03/appstore-logo.png"
            className="w-48 h-14"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
