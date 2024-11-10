import React from 'react';

const ProgramsSection: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 relative overflow-hidden">
      {/* Background Image with Custom Metrics */}
      <div
        className="absolute z-0"
        style={{
          width: '554px',
          height: '1092px',
          top: '2095px',
          left: '-51px',
          opacity: '0.3', // Adjust opacity for visibility
        }}
      >
        <img
          src="/numbers.png" // Replace with the correct image URL
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-3xl font-bold text-gray-800">
          Check Out Our <span className="text-blue-500">Holistic Programs</span> Designed
        </h2>
        <h2 className="text-3xl font-bold text-gray-800">
          To Help You Reach Your <span className="text-green-500">Goals</span>
        </h2>
      </div>

      {/* Program Cards */}
      <div className="flex flex-col gap-8 max-w-4xl mx-auto relative z-10">
        {/* Campus Training Card */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/campus-img.png"
            alt="Campus Training"
            className="w-full md:w-1/3 h-48 object-cover"
          />
          <div className="p-6 md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-800">Campus Training</h3>
            <p className="text-sm text-gray-500">For students | 24+ Modules | 10 instructors</p>
            <p className="text-gray-600 mt-2">
              The app features in-app coding, eliminating the need for laptops. With cloud-based
              virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.
            </p>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
              Explore
            </button>
          </div>
        </div>

        {/* Professional Training Card */}
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src="/image-112.png"
            alt="Professional Training"
            className="w-full md:w-1/3 h-48 object-cover"
          />
          <div className="p-6 md:w-2/3">
            <h3 className="text-xl font-semibold text-gray-800">Professional Training</h3>
            <p className="text-sm text-gray-500">For Professionals | 24+ Modules | 10 instructors</p>
            <p className="text-gray-600 mt-2">
              The app features in-app coding, eliminating the need for laptops. With cloud-based
              virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.
            </p>
            <button className="bg-blue-500 text-white mt-4 py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="text-center mt-12 relative z-10">
        <h3 className="text-xl font-semibold text-gray-800">
          Our Efforts To <span className="text-blue-500">Innovate</span> Have Been
        </h3>
        <h3 className="text-xl font-semibold text-gray-800">
          <span className="text-green-500">Recognized</span> And <span className="text-blue-500">Appreciated</span>
        </h3>
        <div className="mt-6 flex justify-center gap-6">
          <div className="max-w-xs">
            <img src="/times.png" alt="Award" className="rounded-lg shadow-lg"/>
            <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum</p>
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-6">
          <div className="max-w-xs">
            <img src="/NSDC_Partner.png" alt="Award" className="rounded-lg shadow-lg"/>
            <p className="text-sm text-gray-500 mt-2">Honored by Shri Dharmendra Pradhan ji, Union Minister for Education, Govt. of India - 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
