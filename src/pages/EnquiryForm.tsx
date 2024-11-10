import React from 'react';

const EnquiryForm: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-100">
      {/* Top-left Ornament */}
      <img
        src="Ornament 110.jpg"
        alt=""
        className="absolute top-0 left-0 mt-6 ml-6 w-16 h-auto z-10"
      />

      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row max-w-4xl w-full p-8 md:p-12 relative z-20">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="Fascinating Facts Programmer.png"
            alt="Developer"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Form Section */}
        <div className="p-6 md:p-10 md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
            Find Out More Reasons To Stay
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <input
              type="text"
              placeholder="Mobile no."
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <input
              type="text"
              placeholder="City"
              className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
              />
              <label className="text-sm text-gray-600">
                Creating an account means you’re okay with our Terms of Service, Privacy Policy, and default Notification Settings
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-base"
            >
              Enquire Now
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already Have An Account? <a href="#" className="text-blue-600 font-semibold hover:underline">Sign In</a>
          </p>
        </div>
      </div>

      {/* Bottom-right Ornament */}
      <img
        src="Ornament 108.jpg"
        alt=""
        className="absolute bottom-0 right-0 mb-6 mr-6 w-16 h-auto z-10"
      />
    </div>
  );
};

export default EnquiryForm;
