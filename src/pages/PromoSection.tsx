import React from 'react';


const PromoSection: React.FC = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 p-10">
      <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
        {/* Phone Mockup */}
        <div className="relative">
          <img src="./logoIn.png" alt="Coding Pro Logo" className="w-72 h-auto object-cover" />
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-75" />
          <div className="absolute top-5 -right-5 w-12 h-12 bg-blue-200 rounded-full opacity-50" />
        </div>

        {/* Features and Buttons */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Wanna See More?<br />Join Us!</h2>
          <div className="grid grid-cols-2 gap-4 mb-8 text-gray-600">
            <div>📚 Recorded Lectures</div>
            <div>⌨️ Language-specific Keyboard</div>
            <div>📝 Online Quizzes</div>
            <div>∞ Infinite Project Size</div>
            <div>💻 In-app Coding</div>
            <div>☁️ Cloud Computation</div>
            <div>📊 Evaluation Reports</div>
            <div>📰 Coding Magazine</div>
          </div>

          {/* App Store Buttons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2">
              <span>Get it on</span>
              <span className="font-bold">Google Play</span>
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md flex items-center space-x-2">
              <span>Download on the</span>
              <span className="font-bold">App Store</span>
            </button>
          </div>

          {/* User Count */}
          <p className="mt-4 text-gray-500">50k+ Active Users</p>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;
