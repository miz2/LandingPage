import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 bg-white relative overflow-hidden">
      {/* Background Diagonal Lines */}
      <div className="absolute bottom-0 left-1/4 w-full h-24 bg-gradient-to-r from-blue-100 via-blue-200 to-transparent bg-repeat-x opacity-25" style={{ transform: 'rotate(-7deg)' }} />
      
      {/* Left Image Section */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/imac.png"
          alt="iMac Display"
          className="w-full max-w-md md:max-w-lg"
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 text-center md:text-left relative z-10">
        {/* Main Heading Section */}
        <div className="w-full mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Where The World <br />
            Learns To Code
          </h1>
          <div className="flex justify-center md:justify-start mt-4">
            <img
              src="/Polygon 4.png"
              alt="Polygon 4"
              className="w-8 h-8 md:w-10 md:h-10" // Ensure same size for both polygons
            />
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start">
          <img
            src="/Polygon 5.png"
            alt="Polygon 5"
            className="w-8 h-8 md:w-10 md:h-10 transform translate-y-4" // Ensure same size as Polygon 4
          />
        </div>

        {/* Training Cards */}
        <div className="flex flex-col md:flex-row gap-6 mt-12">
          {/* Campus Training Card */}
          <div className="border border-blue-200 rounded-lg p-6 shadow-lg transition transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="text-4xl text-blue-600 mb-2">🏛️</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Campus Training
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum dolor.
              </p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                Explore →
              </button>
            </div>
          </div>

          {/* Professional Training Card */}
          <div className="border border-blue-200 rounded-lg p-6 shadow-lg transition transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="text-4xl text-blue-600 mb-2">🏢</div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Professional Training
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum.
              </p>
              <button className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition">
                Explore →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
