import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const StudentTestimonialsSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-400 to-teal-300 py-12 px-4">
      {/* Top Section: Wave background and Student Images */}
      <div className="relative overflow-hidden">
        {/* Wave background */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-teal-100 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex justify-center items-center gap-8">
          {/* Student Image Avatars */}
          <div className="flex flex-col items-center">
            <img
              src="/p1.png"
              alt="QA Tester"
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
            <p className="text-white font-semibold mt-2">QA Tester</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/p2.png"
              alt="Software Engineer"
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
            <p className="text-white font-semibold mt-2">Software Engineer</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/p3.png"
              alt="Data Scientist"
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
            <p className="text-white font-semibold mt-2">Data Scientist</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/p4.png"
              alt="AI Engineer"
              className="w-24 h-24 object-cover rounded-full border-4 border-white"
            />
            <p className="text-white font-semibold mt-2">AI Engineer</p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-8">
        <h2 className="text-4xl font-bold text-white">And Our Students Agree...</h2>
      </div>

      {/* Testimonial Cards with Chevron Buttons */}
      <div className="relative mt-12 max-w-6xl mx-auto">
        {/* Left Button */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-2 rounded-full shadow-lg">
          <HiChevronLeft size={40} />
        </button>
        {/* Right Button */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-2 rounded-full shadow-lg">
          <HiChevronRight size={40} />
        </button>

        {/* Testimonial Cards */}
        <div className="flex gap-8 justify-center items-start">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
            <div className="relative mb-4">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-500 border-4 border-white">
                <img
                  src="/i6.png"
                  alt="Student Avatar"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-700 mt-6 mb-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            </p>
            <p className="font-semibold text-blue-500">Saanvi Patel</p>
            <p className="text-sm text-gray-500">Executive Engineer</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
            <div className="relative mb-4">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-500 border-4 border-white">
                <img
                  src="/i6.png"
                  alt="Student Avatar"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-700 mt-6 mb-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            </p>
            <p className="font-semibold text-blue-500">Saanvi Patel</p>
            <p className="text-sm text-gray-500">Executive Engineer</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
            <div className="relative mb-4">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-blue-500 border-4 border-white">
                <img
                  src="/i6.png"
                  alt="Student Avatar"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <p className="text-gray-700 mt-6 mb-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum."
            </p>
            <p className="font-semibold text-blue-500">Saanvi Patel</p>
            <p className="text-sm text-gray-500">Executive Engineer</p>
          </div>
        </div>
      </div>

      {/* Technology Icons */}
      <div className="flex justify-center gap-8 mt-12">
        <img
          src="/j1.png"
          alt="Java Icon"
          className="w-16 h-16 object-cover"
        />
        <img
          src="/j2.png"
          alt="Angular Icon"
          className="w-16 h-16 object-cover"
        />
        <img
          src="/j3.png"
          alt="NodeJS Icon"
          className="w-16 h-16 object-cover"
        />
        <img
          src="/j4.png"
          alt="React Icon"
          className="w-16 h-16 object-cover"
        />
      </div>
    </section>
  );
};

export default StudentTestimonialsSection;
