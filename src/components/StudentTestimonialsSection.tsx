import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const StudentTestimonialsSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-400 to-teal-300 py-12 px-4 md:px-8">
      {/* Top Section: Wave background and Student Images */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-teal-100 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-8">
          {['QA Tester', 'Software Engineer', 'Data Scientist', 'AI Engineer'].map((role, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={`/p${index + 1}.png`}
                alt={role}
                className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full border-4 border-white"
              />
              <p className="text-white font-semibold mt-2">{role}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-2xl md:text-4xl font-bold text-white">And Our Students Agree...</h2>
      </div>

      <div className="relative mt-12 max-w-6xl mx-auto px-4">
        {/* Left Button */}
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-1 md:p-2 lg:p-3 rounded-full shadow-lg hover:bg-blue-700">
          <HiChevronLeft className="text-xl md:text-3xl lg:text-4xl" />
        </button>
        {/* Right Button */}
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 p-1 md:p-2 lg:p-3 rounded-full shadow-lg hover:bg-blue-700">
          <HiChevronRight className="text-xl md:text-3xl lg:text-4xl" />
        </button>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-start mt-8">
          {[1, 2, 3].map((testimonial) => (
            <div key={testimonial} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xs mx-auto md:mx-0 text-center">
              <div className="relative mb-4">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-500 border-4 border-white">
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
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {['Java Icon', 'Angular Icon', 'NodeJS Icon', 'React Icon'].map((icon, index) => (
          <img
            key={index}
            src={`/j${index + 1}.png`}
            alt={icon}
            className="w-12 h-12 md:w-16 md:h-16 object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default StudentTestimonialsSection;
